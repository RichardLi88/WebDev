toDo = [];

function addAction() {
    const toDoItemHTML = document.querySelector('.js-search-bar');
    const toDoDateHTML = document.querySelector('.js-date');

    const toDoItem = toDoItemHTML.value;
    const toDoDate = toDoDateHTML.value;

    console.log(toDo);

    toDo.push({
        toDoItem,
        toDoDate
    });

    toDoItem.value = '';
    toDoDate.value = '';

    renderItems();
}

function renderItems() {
    toDoHTML = '';
    for (let i = 0; i < toDo.length; i++) {
        const { toDoItem, toDoDate } = toDo[i];
        const html = `
            <div class="to-do-item">
                <p class="item-body">${toDoItem}</p>
                <p class="date-body">${toDoDate}</p>
                <button onclick="
                    toDo.splice(${i},1);
                    renderItems();
                    "
                    class="delete-btn">Delete</button>
            </div>`
        toDoHTML += html;
    }
    document.querySelector('.js-items')
        .innerHTML = toDoHTML;
}