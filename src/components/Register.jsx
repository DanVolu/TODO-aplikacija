function Register(){


    //TODO  Prideti aki kad matyti passwordus, sutvarkyt melynus borderius ant input fieldu paspaudimu

    return(
        <div className="w-[24rem] h-[38rem] mx-auto mt-56 rounded-lg  shadow-lg bg-todo">
        <div className="w-full p-5">
          <p className="font-semibold text-3xl flex justify-center"> TODO App</p>
          </div>

          <div className="w-full grid place-items-center px-10">
            <label htmlFor="email" className="block mb-2 font-semibold text-sm  text-gray-900 dark:text-white w-full">Username</label>
            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[19rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@email.com" required />
        </div>

          <div className="w-full grid place-items-center px-10 mt-5">
            <label htmlFor="email" className="block mb-2 font-semibold text-sm  text-gray-900 dark:text-white w-full">Email</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[19rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@email.com" required />
        </div>

        <div className="w-full grid place-items-center px-10 mt-5">
        <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white w-full">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" required />
    </div> 

    <div className="w-full grid place-items-center px-10 mt-5">
        <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white w-full">Repeat password</label>
        <input type="password" id="repeatPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
       <div className="w-full grid place-items-center p-9">
    <button type="submit" className=" w-[13rem] h-[3rem] text-white bg-mainBg font-medium rounded-lg text-lg  px-10 py-2.5 text-center">Register</button>
     </div>   

      <div className="w-full grid place-items-center">
         <h3><a href="#">Have an account? Login</a></h3>
      </div>

    </div>
    )
}

export default Register