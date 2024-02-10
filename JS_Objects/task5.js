const users = [
    {name: 'Antony', email: 'antonyG@mail.com', age: 33},
    {name: 'Steve', email: 'steveS@mail.com', age: 22},
    {name: 'John', email: 'johnD@mail.com', age: 28},
]

for (const user of users) {
    console.log(user)
}

for (const {name, email, age} of users) {
    console.log(`${name} is ${age} years old, email ${email}`)
}