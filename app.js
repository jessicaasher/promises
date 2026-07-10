// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

// the backend has given us a promise. to unlock what's inside, we want to use then or async/await.

//1. Then
(fetch("https://jsonplaceholder.typicode.com/users/1")).then(response => { // response is a promise, so we need to use then to get the data 
    response.json().then(data => { // response.json() is also a promise, so we need to use then again to get the data
        console.log(data) // data is the actual data we want to use
    })
})