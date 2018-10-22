/*
function showTodo(todo:{title: string, text: string}) {  // param "todo" has type {title: string, text: string}
  console.log(todo.title + ": " + todo.text);
}

let myTodo = {title: "Trash", text: "Take out the trash"};

showTodo(myTodo);
*/

// defines syntactical contract that an entity must adhere to - properties, methods, and events
interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {  // basically, creates own custom type "Todo"
  console.log(todo.title + ": " + todo.text);
}

let myTodo = {title: "Trash", text: "Take out the trash"};

showTodo(myTodo);
