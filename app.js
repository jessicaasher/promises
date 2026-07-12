// fetch("https://jsonplaceholder.typicode.com/users/1")


fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
  console.log(response.json())
  response.json().then(() => {})
}) 
