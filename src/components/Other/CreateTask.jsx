import React from 'react'

export const CreateTask = () => {
  return (
    <div>
        <div className="bg-[#1c1c1c] mt-7  rounded p-10">
        <form className="flex flex-wrap items-start justify-between w-full ">
          <div>
            <div className="w-1/2 ">
              <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                <input className="text-lg  py-1 px-2 w-96 rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a ui design" />
              </div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="text-lg py-1 px-2 w-96 rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="Date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input className="text-lg  py-1 px-2 w-96 rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input className="text-lg py-1 px-2 w-96  rounded  outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Design , dev etc" />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-lg  text-gray-300 mb-0.5">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
            <button className="bg-emerald-500 py-3 px-5 rounded text-sm mt-4  hover:bg-emerald-600 w-full ">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}
