function Login() {
 
  //TODO button, dont have an account link to register page, and register page, placeholders 

  return (
    <div className="w-[24rem] h-[28rem] mx-auto mt-56 rounded-lg  shadow-lg bg-todo">
        <div className="w-full p-5">
          <p className="font-semibold text-3xl flex justify-center"> TODO List</p>
          </div>

          <div className="w-full grid place-items-center px-10">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">Email</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[19rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>

        <div class="w-full grid place-items-center px-10 mt-5">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
       
    </div>
  )
}

export default Login
