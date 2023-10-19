import React from 'react'

const Expenses = () => {
  return (
    <>
      <div className='mx-auto' style={{margin:"0 auto", maxWidth:"1200px"}}>
        <div className='p-12 border-2 border-solid mt-4 rounded-lg'>
        <div className='flex justify-between'>
            <h1 className='font-bold text-lg py-2'>EXPENSE</h1>
            <div >
                <input className='mx-4 p-2 border-2 border-solid' type="text" placeholder='Filter By Date' />
                <input className='mr-4 p-2 border-2 border-solid' type="text" placeholder='Search By Name' />

                <button className='px-4 py-2 rounded-lg' type='button' style={{backgroundColor:"#a895fd"}} >+ New Expense</button>

            </div>
        </div>
        <div className='w-full mt-4'>
  <table className='border-2 border-solid rounded-lg'>
    <thead className='border-2 border-solid rounded-lg' >
      <tr>
        <th className='px-2 w-[200px] py-2'>Name</th>
        <th className='px-2 w-[200px] py-2'>Category</th>
        <th className='px-2 w-[200px] py-2'>Date Of Expenses</th>
        <th className='px-2 w-[200px] py-2'>Amount</th>
        <th className='px-2 w-[200px] py-2'>Updated Date</th>
        <th className='px-2 w-[200px] py-2'>Created Date</th>
        <th className='px-2 w-[200px] py-2'>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>hello</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
        
      </div>
    </>
  )
}

export default Expenses
