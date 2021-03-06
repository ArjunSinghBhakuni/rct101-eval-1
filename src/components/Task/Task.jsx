import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'
const Task = ({task,deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
 // console.log(task)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter count1  = {task.count} />
      <button data-cy="task-remove-button" onClick={()=>deleteTodo(task)}>del</button>
    </li>
  );
};

export default Task;
