function Todo() {
    return (
        <div className="w-[49rem] h-[61rem] mx-auto mt-12 rounded-lg shadow-lg bg-todo">
        <div className="w-full p-5">
          <p className="font-semibold text-3xl flex justify-center">TODO LISTAS</p>
          <button type="Dropdown" className="ml-12 bg-mainbg w-auto "></button>
          </div>
          <button type="submit" className="ml-12 text-white bg-mainBg font-medium rounded-lg text-lg w-auto px-10 py-2.5 text-center">Add Task</button>
        
        </div>
      )
}

export default Todo