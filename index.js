const ul = document.getElementById('todos');
        let todos = JSON.parse(localStorage.getItem('todo')) || [];

        const displayTodos = () => {
            if (todos) {
                ul.innerHTML = '';
                todos.forEach((todo, index) => {
                    const list = document.createElement('li');
                    list.classList.add('d-flex-list'); 
                    const deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('delete');
                    const listItem = document.createElement('span');
                    deleteBtn.innerText = '-';
                    deleteBtn.addEventListener('click', () => deleteItem(index)); 
                    listItem.innerText = todo;
                    list.appendChild(listItem);
                    list.appendChild(deleteBtn); 
                    ul.appendChild(list);
                });
            }
            else {
                list = document.createElement('li')
                list.innerText = "Empty Todo"
                ul.appendChild(list);
            }
        };

        displayTodos();

        const submit = () => {
            const todo = document.getElementById('text');
            if (todo.value.trim() !== '') { 
                todos.push(todo.value);
                localStorage.setItem('todo', JSON.stringify(todos));
                todo.value = '';
                displayTodos();
            }
        };

        const deleteItem = (index) => {
            todos.splice(index, 1);
            localStorage.setItem('todo', JSON.stringify(todos));
            displayTodos();
        };