// const heading = document.createElement('h1');
// heading.innerHTML = 'Welcome to DOM';
// document.getElementById('container').appendChild(heading);

// const addCountry = () => {
//     const countryname = document.querySelector('#countryname').value;
//     const li = document.createElement('li');
//     li.innerHTML = countryname;
//     document.getElementById('countries').appendChild(li);
// }

var items = [];

const addItem = () => {
    const itemName = document.querySelector('#itemName').value;
    items.push(itemName);
    getItems();
}

const getItems = () => {
    document.getElementById('todolist').innerHTML = '';
    items.map(x => {
        const li = document.createElement('li');
        li.className = "list-group-item";
        li.innerHTML = x + `<span class="float-end text-danger"><i onclick="removeItem('${x}')" class="far fa-trash-alt"></i></span>`;
        document.getElementById('todolist').appendChild(li);
    });
}

const removeItem = (item) => {
    items = items.filter(x => x != item);
    getItems();
}