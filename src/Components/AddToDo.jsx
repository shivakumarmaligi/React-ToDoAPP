import React, { useState } from "react";
import DisplayToDo from "./DisplayToDo";

const AddToDo = () => {
  let a = 5;
  let [toDo, setToDo] = useState("");
  let [toDoList, setToDoList] = useState([]);

  // let _inputId = document.getElementById("task");
  // console.log(_inputId);

  let handleChange = (e) => {
    setToDo(e.target.value);
    // console.log(toDo);
  }
  

  let handleSubmit = e => {
    e.preventDefault();
    console.log(toDoList);
    setToDoList(List => {
      return [...List, toDo];
    });
    setToDo("")
  };

   let handleDelete = del => {
     del.preventDefault();
     console.log("Successfully Deleted the Task");
     console.log(del.target.parentElement.id);
     let del_id = del.target.parentElement.id;
     toDoList.splice(del_id, 1);
     setToDoList([...toDoList]);
  };
  
  let handleEdit = edit => {
    edit.preventDefault();
    // console.log(edit.target.parentElement.id);
    // console.log(edit.target.parentElement.parentElement.parentElement)
    let edit_id = edit.target.parentElement.id;
    let _inputId = document.getElementById("task").value;
    // console.log(_inputId);
    
    toDoList.splice(edit_id, 1, `${_inputId}`);
    setToDoList([...toDoList]);
    
  }

  return (
    <>
      <section className="_formSection">
        <article>
          <form id="_inputForm" onSubmit={handleSubmit}>
            <label htmlFor="task">Enter a Task</label>
            <input
              type="text"
              id="task"
              name="task"
              value={toDo}
              placeholder="Enter a task to Add"
              onChange={handleChange}
            />
            <button>Submit</button>
          </form>
        </article>
      </section>
      <DisplayToDo data1={toDoList} del={handleDelete} edit={handleEdit}  />
    </>
  );
};;

export default AddToDo;
