document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let activity = document.getElementById('activity').value.trim();

    if (activity) {
        let li = document.createElement('li');
        li.textContent = activity;

        let addfavorite = document.createElement('svg');
        addfavorite.setAttribute('doubleclick','+');

        let check = document.createElement('button');
        check.className = 'check';
        check.textContent = '✔';
        check.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'x';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(check);
        li.appendChild(deleteButton);

        document.getElementById('todo-list').appendChild(li);

        document.getElementById('activity').value = '';
    }
});