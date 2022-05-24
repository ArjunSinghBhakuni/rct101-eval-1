import React,{useState} from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'
const Tasks = ({info}) => {
  // NOTE: do not delete `data-cy` key value pair
 // console.log(data)
 const [task,setTask] =useState(info)
 
console.log(info)
 
 const deleteTodo =(value)=>{
  setTask(task.filter((todo)=>todo !==value))
}
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {task.map((task) => (
           
            <Task key={task.id} task={task}   deleteTodo = {deleteTodo}  />
          ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
