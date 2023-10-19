import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

type ExpenseProps = {
  open: boolean;
  onClose: () => void;
};

function CreateExpense(props: ExpenseProps) {
  const [close, setSetclose] = useState(false);
  const [category, setCategory] = useState('');
  const [dateOfExpenses, setDateOfExpenses] = useState('');
  const [amount, setAmount] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [createdDate, setCreatedDate] = useState('');

  const handleCreate = () => {
   
   
  };
  const handleCancel = () => {
    // Close the modal when the "Cancel" button is clicked
    props.onClose();
  };

  return (
    <div >
 <Modal open={props.open} onClose={props.onClose} >
      <Box
        sx={{
          width: 500,
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
         
          
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Category"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Date Of Expenses"
          fullWidth
          value={dateOfExpenses}
          onChange={(e) => setDateOfExpenses(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Amount"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Updated Date"
          fullWidth
          value={updatedDate}
          onChange={(e) => setUpdatedDate(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Created Date"
          fullWidth
          value={createdDate}
          onChange={(e) => setCreatedDate(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <div className='flex justify-between'>
        <Button variant="outlined"sx={{ marginRight: 2 }} onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" sx={{backgroundColor:"#a895fd"}} onClick={handleCreate}>
          Create
        </Button>
        </div>
        
      </Box>
    </Modal>
    </div>
   
  );
}

export default CreateExpense;
