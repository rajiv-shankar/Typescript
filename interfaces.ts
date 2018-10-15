/*
function showTodo(todo:{title: string, text: string}) {  // param "todo" has type {title: string, text: string}
  console.log(todo.title + ": " + todo.text);
}

let myTodo = {title: "Trash", text: "Take out the trash"};

showTodo(myTodo);
*/

// interface: syntactical contract that an entity should conform to,
// defines the syntax that an entity must adhere to - properties, methods, and events

interface Todo{
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ": " + todo.text);
}

let myTodo = {title: "Trash", text: "Take out the trash"};

showTodo(myTodo);
