window.onload = function() {
    document.getElementById("current-time").innerHTML = new Date().toLocaleDateString();
   
    const tasks =  document.querySelectorAll(".task-info");
    let completedTasksCount = 0;
    const previouslyCompletedTaskCount = 14; 
    const totalTasksElement = document.getElementById("total-completed-tasks");
    totalTasksElement.textContent = previouslyCompletedTaskCount;

    const taskAssignedCountElement = document.getElementById("task-assigned-count");
    taskAssignedCountElement.textContent = tasks.length;

    document.querySelectorAll(".task-info").forEach(function(taskInfo) {
        const completeButton = taskInfo.querySelector(".task-done");
        const taskText = taskInfo.querySelector(".task-title").textContent;
        completeButton.addEventListener("click", function() {
            const tmpNode = createTaskHistoryNode(taskText);
            document.getElementById("activity-history-list").appendChild(tmpNode);
            completeButton.disabled = true;
            completeButton.classList.add("disabled-btn");
            
            alert("You have completed a task!");
            completedTasksCount++;
            if (completedTasksCount == tasks.length) {
                alert("You have completed all tasks!");
            }
            taskAssignedCountElement.textContent = tasks.length - completedTasksCount;
            totalTasksElement.innerText = previouslyCompletedTaskCount + completedTasksCount;
        });
    });


    document.getElementById("theme-btn").addEventListener("click", function() {
        changeColor();
    });

    document.getElementById("clear-activity-history-btn").addEventListener("click", function() {
        document.getElementById("activity-history-list").innerHTML = "";
    });

};

function changeColor() {
    const color = randomColor();
    document.body.style.backgroundColor = color;
}

function randomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function createTaskHistoryNode(taskText) {
    const taskHistoryNode = document.createElement("div");
    const currentTime = new Date().toLocaleTimeString();
    taskHistoryNode.textContent = `You have completed ${taskText} at ${currentTime}`;
    taskHistoryNode.classList.add("task-history-item");
    return taskHistoryNode;
}