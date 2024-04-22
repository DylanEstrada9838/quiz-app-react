const HomeIn = ()=>{

    return (
        <div className="mt-20 flex flex-col gap-5">
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-16 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                My Quizzes
            </button>

            <div class="mb-5">
      <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Do you want to enter a Quiz?</label>
      <input type="text" placeholder="Enter code" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
  </div>
        </div>
    )
}

export default HomeIn;