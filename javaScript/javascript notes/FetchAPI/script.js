fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        data.map(item => {
            // const li = document.createElement('li');
            // li.innerHTML = item.address.city;
            // document.getElementById('userslist').appendChild(li);
            const x = `<h2>${item.name}</h2><p>${item.email}</p><p>${item.phone}</p><hr>`;
            const div = document.createElement('div');
            div.innerHTML = x;
            document.getElementById('userslist').appendChild(div);
        });
    });