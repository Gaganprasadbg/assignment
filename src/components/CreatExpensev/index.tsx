import React, { useEffect, useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
} from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useExpense } from '@/utilities/expensesContext';

type ExpenseProps = {
  open: boolean;
  onClose: () => void;
};
const initialExpense = {
  name: '',
  description: '',
  category: '',
  dateOfExpenses: "", 
  expensesAmount: '',
};

function CreateExpense(props: ExpenseProps) {
  const [expense, setExpense] = useState({
    name: '',
    description: '',
    category: '',
    dateOfExpenses: "", 
    expensesAmount: '',
  });
const {setExpenses ,editExpenseData,editEnable,editIndex,expenses,setEditEnable}=useExpense();

  const handleDateChange = (date:any) => {
    setExpense((prev) => ({
      ...prev,
      dateOfExpenses: date,
    }));
  };

  const handelOnChange = (e: any) => {
    setExpense((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(()=>{
    setExpense(editExpenseData)
  },[editExpenseData])

  const handleCreate = () => {
    const currentDate = new Date();
   const formattedDate = currentDate.toISOString().slice(0, 10);
   
   const updatedExpense = { ...expense, updatedDate: formattedDate };
    setExpenses((prev:any)=>[...prev,updatedExpense])
    setExpense(initialExpense)
    props.onClose();
  };

  const handleCancel = () => {
    props.onClose();
  };
  
  const handelUpDate=()=>{
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    const EdeitedData=[...expenses]
     EdeitedData[editIndex]={ ...expense, updatedDate: formattedDate }
     setExpenses(EdeitedData)
     props.onClose();
     setExpense(initialExpense)
     setEditEnable(false)
  }
  return (
    <div>
      <Modal open={props.open} onClose={props.onClose}>
        <Box
          sx={{
            maxWidth: 500,
            backgroundColor: '#fff',
            m: 'auto',
            mt: 4,
            p: 3,
            border: '2px solid #a895fd',
            borderRadius: '10px',
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Create Expense
          </Typography>

          <TextField
            label="Name"
            fullWidth
            name="name"
            value={expense?.name}
            onChange={handelOnChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Description"
            fullWidth
            value={expense?.description}
            onChange={handelOnChange}
            sx={{ marginBottom: 2 }}
            name="description"
            inputProps={{ maxLength: 140 }}
          />
          <TextField
            label="Category"
            fullWidth
            value={expense?.category}
            onChange={handelOnChange}
            sx={{ marginBottom: 2 }}
            select
            name="category"
          >
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </TextField>

          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
              label="Date Of Expenses"
             
              value={expense?.dateOfExpenses}
              onChange={handleDateChange}
              sx={{ marginBottom: 2,width:"100%"}}
            />
          </LocalizationProvider>

          <TextField
            label="Expenses Amount"
            fullWidth
            type="number"
            value={expense?.expensesAmount}
            onChange={handelOnChange}
            sx={{ marginBottom: 2 }}
            name="expensesAmount"
          />

          <div className="flex justify-between">
            <Button variant="outlined" sx={{ marginRight: 2 }} onClick={handleCancel}>
              Cancel
            </Button>
          {editEnable ?    <button className="px-4 rounded" style={{ backgroundColor: '#a895fd' }} onClick={handelUpDate} >
              Update
            </button>:<button className="px-4 rounded" style={{ backgroundColor: '#a895fd' }} onClick={handleCreate}>
              Create
            </button>} 
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateExpense;
