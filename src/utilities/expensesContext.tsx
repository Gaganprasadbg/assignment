import React from 'react'
import { useContext,createContext,useState } from 'react'

const ExpenseContext = createContext<any | null>(null);

export const ExpenseContextProvider=({children}:any)=>{

    const [expenses, setExpenses] = useState([]);
    const [editExpenseData,setEditExpenses]=useState()
    const [editEnable,setEditEnable]=useState(false)
    const [editIndex,setEditIndex]=useState()

    return(
        <ExpenseContext.Provider value={{setExpenses,expenses,setEditExpenses,editExpenseData,setEditEnable,editEnable,setEditIndex,editIndex}}>
            {children}
        </ExpenseContext.Provider>
    )
}
export const useExpense=()=>{
  return  useContext(ExpenseContext)
}