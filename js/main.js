let tasks = [];
let currentFilter = "all";
let searchQuery = "";
let editingId = null;


// Functions 1 & 2



// Functions 3 & 4



// Functions 5 & 6

/* By: Habiba Nashat
   Function 5: Change task status
*/

function changeStatus(id) {
    const task = tasks.find(task => task.id === id);

    if (!task) return;

    if (task.status === "todo") {
        task.status = "progress";
    } else if (task.status === "progress") {
        task.status = "completed";
    } else {
        task.status = "todo";
    }

    saveTasks();
    renderTasks();
    updateCounts();
}


/* Function 6: Update task counts */

function updateCounts() {
    const totalCount = tasks.length;

    const activeCount = tasks.filter(
        task => task.status === "todo" || task.status === "progress"
    ).length;

    const completedCount = tasks.filter(
        task => task.status === "completed"
    ).length;

    const totalElement = document.getElementById("total-nums");
    const activeElement = document.getElementById("active-nums");
    const completedElement = document.getElementById("completed-nums");

    if (totalElement) {
        totalElement.textContent = totalCount;
    }

    if (activeElement) {
        activeElement.textContent = activeCount;
    }

    if (completedElement) {
        completedElement.textContent = completedCount;
    }
}



// Functions 7 & 8



// Functions 9 & 10



// Functions 11 & 12
// By          => Ahmed Reda Abdel Razek
// Function 11 => filters the tasks
// ================================

function setFilter(filter) {
    currentFilter = filter;
    renderTasks();
}

const filterTabs = document.querySelectorAll('[data-filter]');

filterTabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
    
        const clickedTab = e.currentTarget;
        
        filterTabs.forEach(function(t){t.classList.remove('active-filter')});
        clickedTab.classList.add('active-filter');

        const clickedFilter = clickedTab.getAttribute('data-filter');
        setFilter(clickedFilter);
    });
});


  // Function 12 => Searching for a task
  // ================================

function searchTasks(query) {
    searchQuery = query.toLowerCase(); 
    renderTasks();
}

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function(e) {
    const typedText = e.target.value;
    searchTasks(typedText);
});

