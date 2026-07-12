// fetch("https://jsonplaceholder.typicode.com/users/1")
document.querySelector(".email")

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
  response.json().then(data => {
    console.log(data)
  })
}) 

