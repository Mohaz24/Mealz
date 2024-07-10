

isTrue === "false" && formData ?
       <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg
       mt-4  w-11/12 absolute top-36 right-0 left-0 mx-auto sm:w-8/12 md:w-8/12 lg:w-7/12 ">
       <div className="flex items-center justify-between">
       <p className="text-lg font-semibold">Order Status: Confirmed</p>
       <AiOutlineClose 
       className="w-5 h-5"
       onClick={emptyCart} />
       </div>
       <p className="text-sm pt-2">Your order has been successfully confirmed  

         <span className="font-medium m-1 text-red-500">{formData}</span> 
         and is now being processed.</p>
   </div> : null