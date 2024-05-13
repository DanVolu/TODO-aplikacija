import { useState } from 'react';

function Todo() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-[48rem] h-[61rem] mx-auto mt-12 rounded-lg shadow-lg bg-todo">
      
        <p className="font-semibold text-4xl text-center">TODO LISTAS</p>
        <div className="relative bg-mainBg flex h-[6rem] w-[6rem] items-center justify-items-end">
          {dropdownOpen && (
            <div className="absolute bg-white shadow-md p-2 top-10 right-0 w-12 z-10">
              <button className="block w-full text-left hover:bg-gray-100 px-4 py-2">
                Download task list
              </button>
              <button className="block w-full text-left hover:bg-gray-100 px-4 py-2">
                Delete account
              </button>
            </div>
          )}
          <button onClick={toggleDropdown} type="button" className="justify-items-end text-white bg-mainBg shadow-md font-medium rounded-lg text-md h-[6rem] w-[6rem] text-center">
            Dropdown
          </button>
        </div>
      
      <button type="addTask" className="ml-12 text-white bg-mainBg font-medium rounded-lg text-lg w-auto px-10 py-2.5 text-center">
        Add Task
      </button>
    </div>
  );
}

export default Todo;
