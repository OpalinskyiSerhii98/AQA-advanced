function fetchTodosById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1${id}`)
}

fetchTodosById(2)
    .then((res) => res.json())
    .then((jsonBody)=>console.log(jsonBody))

function fetchUsersById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/1${id}`)
}

fetchUsersById().then((user) => console.log(user))

const promise1 = fetchTodosById();
const promise2 = fetchUsersById();

Promise.all([promise1, promise2])
    .then(([jsonBody, user]) => {
        console.log("Promise.all result")
        console.log("todos result", jsonBody)
        console.log("users result", user)
    })

Promise.race([promise1, promise2])
    .then((result) => console.log(result))