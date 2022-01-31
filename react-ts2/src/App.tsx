// import './App.css';
// import Todos from './components/Todos';
// import Todo from './models/todo';

// function App() {
//   const todos = [
//     new Todo('Learn React'),
//     new Todo('Learn TypeScript')
//   ];

//   return (
//     <div>
//       {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
//       <Todos items={todos} />
//     </div>
//   );
// }

// export default App;




// import { useState } from 'react';
// import './App.css';
// import NewTodo from './components/NewTodo';
// import Todos from './components/Todos';
// import Todo from './models/todo';

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);

//     setTodos((prevTodos) => {
//       return prevTodos.concat(newTodo);
//     })
//   }

//   return (
//     <div>
//       {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos items={todos} />
//     </div>
//   );
// }

// export default App;








// import { useState } from 'react';
// import './App.css';
// import NewTodo from './components/NewTodo';
// import Todos from './components/Todos';
// import Todo from './models/todo';

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);

//     setTodos((prevTodos) => {
//       return prevTodos.concat(newTodo);
//     })
//   }

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter(todo => todo.id !== todoId);
//     })
//   };

//   return (
//     <div>
//       {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos items={todos} onRemoveTodo={removeTodoHandler} />
//     </div>
//   );
// }

// export default App;





import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <div>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
