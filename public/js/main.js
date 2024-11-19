const submitBtn = document.getElementById("submit-data")
const form = document.getElementById("todoForm")
form.addEventListener("submit", async function() {
    event.preventDefault()
    const formUser = document.getElementById("userInput").value
    const formTodo = document.getElementById("todoInput").value
    const messageElement = document.getElementById("message")
    console.log(formUser, formTodo)
    const data = await fetch("/add", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: formUser,
            todos: formTodo
        })
    })
    const messageText = await data.text()
    messageElement.textContent = messageText
})
const searchForm = document.getElementById("searchForm")
searchForm.addEventListener("submit", async function() {
    const searchInput = document.getElementById("searchInput").value
    const searchData = await fetch("/todos/" + searchInput)
})