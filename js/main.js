let tasks = [];
let currentFilter = "all";
let searchQuery = "";
let editingId = null;


// Functions 1 & 2



// Functions 3 & 4



// Functions 5 & 6



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

