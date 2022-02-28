// console.log(fetch('https://reqres.in/api/users'))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => {
//         if (res.ok) {
//             console.log('Success')
//         } else {
//             console.log('Not Success')
//         }
//         res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('Error'))

var dataV = (fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json)))