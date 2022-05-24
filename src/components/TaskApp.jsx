import React, { useState } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from'./TaskHeader/TaskHeader'
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import data from '../data/tasks.json'
 
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask] =useState(data)
  let  id1 = task.length+1
 
   const addTodo = (newTodo)=>{
     setTask([...task,{
   id:id1,
   text:newTodo,
   done: true,
   count:1,
 },
 ]);
   };
 

  

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader/>
      <AddTask addTodo={addTodo} />
       <Tasks info = {task}    />
  
  

 
    </div>
  );
};

export default TaskApp;
