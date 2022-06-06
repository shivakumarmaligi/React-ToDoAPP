import React, { Fragment } from "react";
import AddToDo from "./AddToDo";

const DisplayToDo = ({data1, del, edit, ip}) => {
  // console.log(props);
  // console.log(del)
  let _ip_id = ip;
  
  return (
    <div className="_displayContent">
      {data1.map((value, index) => {
        return (
          <>
            <ul>
              <li key={index} id={index}>
                {value} <i className="fas fa-eraser" onClick={del}></i>{" "}
                <i className="fas fa-pen-alt" id={index} onClick={edit}></i>
              </li>
            </ul>
          </>
        );
      },
      // props.data1.map((v, i) => {
      //   return
      // })
      )}
    </div>
  );
};

export default DisplayToDo;
