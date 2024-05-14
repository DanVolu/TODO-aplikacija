

import Task from "./Task";

function Todo() {


  return (
    <>
    <div className="w-[100%]">
    <div className="w-[40%] min-w-[31rem] min-h-[31rem] mx-auto mt-52 rounded-lg shadow-lg bg-todo">
     <div className="p-4">
      <p className="font-semibold  text-4xl text-center">TODO LISTAS</p>
      
     </div> 
       
      <button type="addTask" className="ml-12 border-2  bg-mainBg font-medium rounded-lg text-lg w-auto px-10 py-2.5 text-center">
        Add Task
      </button>
      <Task></Task>

    </div>

    </div>
    </>
  );
}

export default Todo;
