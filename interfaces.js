/*
function showTodo(todo:{title: string, text: string}) {  // param "todo" has type {title: string, text: string}
  console.log(todo.title + ": " + todo.text);
}

let myTodo = {title: "Trash", text: "Take out the trash"};

showTodo(myTodo);
*/
function showTodo(todo) {
    console.log(todo.title + ": " + todo.text);
}
var myTodo = { title: "Trash", text: "Take out the trash" };
showTodo(myTodo);
