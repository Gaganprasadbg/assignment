import CreateExpense from '@/components/CreatExpensev'
import React, { useState } from 'react'

const Expenses = () => {
  const [modalOpen,setIsModalOpen]=useState(false)
 const [close,setClose]=useState(false)

  const handelExpensiveModal=()=>{
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const tableData = [
    {
      Name: "Gagan",
      Category: "Category 1",
      DateOfExpenses: "12/12/12",
      Amount: "108",
      UpdatedDate: "12/12/12",
      CreatedDate: "10/10/10",
    },
    {
      Name: "John",
      Category: "Category 2",
      DateOfExpenses: "12/12/12",
      Amount: "108",
      UpdatedDate: "12/12/12",
      CreatedDate: "10/10/10",
    },
   
    {
      Name: "Alice",
      Category: "Category 3",
      DateOfExpenses: "11/11/11",
      Amount: "$50",
      UpdatedDate: "12/12/12",
      CreatedDate: "10/10/10",
    },
    {
      Name: "Bob",
      Category: "Category 4",
      DateOfExpenses: "10/10/10",
      Amount: "$75",
      UpdatedDate: "11/11/11",
      CreatedDate: "09/09/09",
    },
    // Add as many objects as needed
  ];

  return (
    <>
      <div className='mx-auto' style={{margin:"0 auto", maxWidth:"1200px"}}>
        <div className='p-12 border-2 border-solid mt-4 rounded-lg'>
        <div className='flex justify-between'>
            <h1 className='font-bold text-lg py-2'>EXPENSE</h1>
            <div >
                <input className='mx-4 p-2 border-2 border-solid' type="text" placeholder='Filter By Date' />
                <input className='mr-4 p-2 border-2 border-solid' type="text" placeholder='Search By Name' />

                <button className='px-4 py-2 rounded-lg' type='button' style={{backgroundColor:"#a895fd"}} onClick={handelExpensiveModal} >+ New Expense</button>

            </div>
        </div>
        <div className='min-w-full  mt-4 overflow-x-auto'>
  <table className='border border-black rounded-lg table-fixed md:table-fixed  border-separate'>
    <thead className='border-2 border-solid rounded-lg' >
      <tr>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Name</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Category</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Date Of Expenses</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Amount</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Updated Date</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Created Date</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Action</th>
      </tr>
    </thead>
    <tbody>
      
        {tableData?.map((item,index)=>{
          return(
           <tr className='border-collapse border-2 border-solid'>
             <td className='border border-slate-400' >{item.Name}</td>
             <td className='border border-slate-400' >{item.Category}</td>
             <td className='border border-slate-400' >{item.DateOfExpenses}</td>
             <td className='border border-slate-400' >{item.Amount}</td>
             <td className='border border-slate-400' >{item.UpdatedDate}</td>
             <td className='border border-slate-400' >{item.CreatedDate}</td>
              <td>
               <button>Edit</button>
                <button>Del</button>
              </td>


          </tr>
          )
        })}
        
    </tbody>
  </table>
</div>
<div>
<CreateExpense open={modalOpen} onClose={handleCloseModal} />
</div>

        </div>
        
      </div>
    </>
  )
}

export default Expenses
