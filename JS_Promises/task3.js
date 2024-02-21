async function fetchTodosById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1${id}`)
    const body = await response.json()
    return body
}

fetchTodosById(2).then((body) => console.log(body))

async function fetchUsersById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1${id}`)
    const user = await response.json()
    return user
}

fetchUsersById(2).then((user) => console.log(user))

const fetchCalls = [fetchTodosById(), fetchUsersById()]

Promise.all(fetchCalls)
    .then((result) => {
        const [body, user] = result
        console.log("Results: ", {body, user})
    })

Promise.race(fetchCalls)
    .then((result) => {
        console.log("First result: ", result)
    })