// import React from "react";

// const Todos: React.FC<{items: string[]}> = (props) => { //FC = functional components
//     return (
//     <ul>
//         {props.items.map((item) => (
//             <li key={item}>{item}</li>
//         ))};
//     </ul>
//     )
// }

// export default Todos;



// import React from "react";
// import Todo from "../models/todo";

// const Todos: React.FC<{items: Todo[]}> = (props) => { //FC = functional components
//     return (
//     <ul>
//         {props.items.map((item) => (
//             <li key={item.id}>{item.text}</li>
//         ))}
//     </ul>
//     )
// }

// export default Todos;


// import React from "react";
// import Todo from "../models/todo";
// import TodoItem from "./TodoItem";
// import classes from './Todos.module.css';

// const Todos: React.FC<{items: Todo[]}> = (props) => { //FC = functional components
//     return (
//     <ul className={classes.todos}>
//         {props.items.map((item) => (
//             <TodoItem key={item.id} text={item.text} />
//         ))}
//     </ul>
//     )
// }

// export default Todos;




// import React from "react";
// import Todo from "../models/todo";
// import TodoItem from "./TodoItem";
// import classes from './Todos.module.css';

// const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => { //FC = functional components
//     return (
//     <ul className={classes.todos}>
//         {props.items.map((item) => (
//             <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
//         ))}
//     </ul>
//     )
// }

// export default Todos;




import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC = () => { //FC = functional components
    const todosCtx = useContext(TodosContext);

    return (
    <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
        ))}
    </ul>
    )
}

export default Todos;