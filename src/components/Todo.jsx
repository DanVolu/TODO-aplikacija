import { useState } from 'react';

function Todo() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-[49rem] h-[61rem] mx-auto mt-12 rounded-lg shadow-lg bg-todo">
      <div className="w-full p-5 flex justify-between items-center">
        <p className="font-semibold text-3xl">TODO LISTAS</p>
        <div className="flex items-center">
          {dropdownOpen && (
            <div className="absolute bg-white shadow-md p-2 top-10 right-0 w-48">
              <button className="block w-full text-left hover:bg-gray-100 px-4 py-2">
                Download task list
              </button>
              <button className="block w-full text-left hover:bg-gray-100 px-4 py-2">
                Delete account
              </button>
            </div>
          )}
          <button onClick={toggleDropdown} type="button" className="w-8 h-8 text-white bg-mainBg font-medium rounded-lg text-lg px-10 py-2.5 text-center">
            <img src="pics/settings.png" alt="Settings" />
          </button>
        </div>
      </div>
      <button type="submit" className="ml-12 text-white bg-mainBg font-medium rounded-lg text-lg w-auto px-10 py-2.5 text-center">
        Add Task
      </button>
    </div>
  );
}

export default Todo;
