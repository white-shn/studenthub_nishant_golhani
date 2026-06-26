const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    // toggle dark-mode class 
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.setAttribute('icon', 'lucide:sun');
    } else {                                                   // swapping icons 
        themeIcon.setAttribute('icon', 'lucide:moon');
    }
});


 
                                                    // taskmanager 

let tasks = JSON.parse(localStorage.getItem('sh_tasks')) || []; // load tasks from localStorage on  or start with empty array

function saveTasks() {                                              
    localStorage.setItem('sh_tasks', JSON.stringify(tasks)); // saving array to localStorage

}

function createTask(task) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');
    li.dataset.id = task.id;

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.done ? 'checked' : ''} />
        <span class="task-label">${task.text}</span>
        <button class="task-delete-btn">
            <iconify-icon icon="lucide:x" width="14" height="14"></iconify-icon>
        </button>
    `;

    return li;
}

function displayTasks() {                              // load tasks when page opens
    const list = document.getElementById('task-list');
    const empty = document.getElementById('task-empty');

    list.innerHTML = '';
    tasks.forEach(task => list.appendChild(createTask(task)));

    // show empty message if no tasks
    empty.style.display = tasks.length === 0 ? 'block' : 'none';
}

 function addTask() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    if (!text) return;

    tasks.push({
        id: Date.now(),
        text: text,
        done: false
    });

    saveTasks();
    displayTasks();
    input.value = '';
    input.focus();
}

document.getElementById('task-list').addEventListener('click', function(e) {   // one listener  handles everything

    const li = e.target.closest('li');
    if (!li) return;

    const id = Number(li.dataset.id);

    
    if (e.target.closest('.task-delete-btn')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        displayTasks();
        return;
    }

    if (e.target.classList.contains('task-checkbox')) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.done = e.target.checked;
            saveTasks();
            li.classList.toggle('done', task.done);
        }
    }
});

document.getElementById('add-task-btn').addEventListener('click', addTask);

document.getElementById('task-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();     // add task on Enter key

});

displayTasks();





                            // habit tracker

const habits = ['Read', 'Exercise', 'Drink Water'];

let habitData = JSON.parse(localStorage.getItem('sh_habits')) || {
    done: []
};

function saveHabits() {
    localStorage.setItem('sh_habits', JSON.stringify(habitData));
}

function createHabit(habit) {
    const li = document.createElement('li');

    const completed = habitData.done.includes(habit);

    li.className = 'task-item' + (completed ? ' done' : '');

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${completed ? 'checked' : ''} data-habit="${habit}" />
        <span class="task-label">${habit}</span>
    `;

    return li;
}

function displayHabits() {
    const list = document.getElementById('habit-list');

    list.innerHTML = '';

    habits.forEach(habit => {
        list.appendChild(createHabit(habit));
    });
}

document.getElementById('habit-list').addEventListener('click', function(e) {

    if (!e.target.classList.contains('task-checkbox')) return;

    const habit = e.target.dataset.habit;

    if (e.target.checked) {
        if (!habitData.done.includes(habit)) {
            habitData.done.push(habit);
        }
    } else {
        habitData.done = habitData.done.filter(h => h !== habit);
    }

    saveHabits();
    displayHabits();
});

document.getElementById('habit-reset-btn').addEventListener('click', function() {

    habitData.done = [];

    saveHabits();
    displayHabits();

});

displayHabits();