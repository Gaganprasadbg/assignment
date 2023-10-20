import CreateExpense from '@/components/CreatExpensev'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useExpense } from '@/utilities/expensesContext';
import dayjs from 'dayjs';

const Expenses = () => {
  const [modalOpen,setIsModalOpen]=useState(false)
  const {expenses,setEditExpenses,setEditEnable,setEditIndex,setExpenses}=useExpense()
  const [search ,setSearch]=useState('');
  const [searchByDate ,setSearchDate]=useState('');

  const handelExpensiveModal=()=>{
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

const handelEdit=(item:any,index:number)=>{
  setIsModalOpen(true);
 const data =[...expenses]
 const editData=data[index]
 setEditExpenses(editData)
 setEditEnable(true)
 setEditIndex(index)
}
const handelDelete=(index:number)=>{
  const DeleteData=[...expenses]
  const deletedData=DeleteData.splice(index,0)
  setExpenses(deletedData);
}


  return (
    <>
      <div className='mx-auto' style={{margin:"0 auto", maxWidth:"1200px"}}>
        <div className='p-12 border-2 border-solid mt-4 rounded-lg'>
        <div className='flex justify-between flex-wrap'>
            <h1 className='font-bold text-lg py-2'>EXPENSE</h1>
            <div >
                <input className='mx-4 p-2 border-2 border-solid' value={searchByDate}  type="text" placeholder='Filter By Date'onChange={(e)=>setSearchDate(e.target.value)} />
                <input className='mr-4 p-2 border-2 border-solid' value={search} type="text" placeholder='Search By Name' onChange={(e)=>setSearch(e.target.value)} />

                <button className='px-4 py-2 rounded-lg' type='button' style={{backgroundColor:"#a895fd"}} onClick={handelExpensiveModal} >+ New Expense</button>

            </div>
        </div>
        <div className='min-w-full  mt-4 overflow-x-auto lg:overflow-x-hidden'>
  <table className='border border-black rounded-lg table-fixed md:table-fixed  border-separate'>
    <thead className='border-2 border-solid rounded-lg' >
      <tr>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Name</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Category</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Date Of Expenses</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Amount</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Updated Date</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Created By</th>
        <th className='px-2 w-[200px] py-2 border border-slate-400'>Action</th>
      </tr>
    </thead>
    <tbody>
      {expenses?.length>0 && expenses?.filter((item:any)=>{return search ? item.name.toLowerCase().includes(search.toLowerCase()) : item })
      .filter((date:any)=>{ return searchByDate ? date.dateOfExpenses ? dayjs(date.dateOfExpenses).format('YYYY-MM-DD').toLowerCase().includes(searchByDate.toLowerCase()) : date:date})
      . map((item:any,index:number)=>{
          return(
           <tr className='border-collapse border-2 border-solid hover:bg-[#d8d6e3]' key={index}>
             <td className='border-b  border-slate-400' >{item.name}</td>
             <td className='border-b border-l border-slate-400' >{item.category}</td>
             <td className='border-b  border-l border-slate-400' >{item?.dateOfExpenses ? dayjs(item.dateOfExpenses).format('YYYY-MM-DD') : ''}</td>
             <td className='border-b border-l border-slate-400' >{item.expensesAmount}</td>
             <td className='border-b  border-l border-slate-400' >{item.updatedDate}</td>
             <td className='border-b  border-l border-slate-400' >{item.CreatedBy}</td>
              <td  className='border-b border-l border-slate-400'>
               <button className='mr-4' onClick={()=>handelEdit(item,index)} ><DriveFileRenameOutlineIcon sx={{color:"#a895fd", fontSize:"50px"}} /></button>
                <button onClick={()=>handelDelete(index)}><DeleteIcon sx={{ fontSize:"50px"}}/></button>
              </td>


          </tr>
          )
        })}
        
        
    </tbody>
  </table>
</div>
<div>
<CreateExpense open={modalOpen} onClose={handleCloseModal}    />
</div>

        </div>
        
      </div>
    </>
  )
}

export default Expenses
