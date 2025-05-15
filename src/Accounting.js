import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Box, Typography
} from '@mui/material';
import transactionArray from './data/transactionData';

const Accounting = () => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getChipColor = (type) => {
    switch(type) {
      case 'income':
        return 'success';
      case 'expense':
        return 'error';
      default:
        return 'default';
    }
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom sx={{ mb: 3 }}>
        Accounting Transaction
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 850 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5'}}>
              <TableCell sx={{ fontWeight: 'bold'}}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Description</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Account</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Type</TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold'}}>Debit</TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold'}}>Credit</TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold'}}>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionArray.map((transaction) => (
              <TableRow
                key={transaction.id}
                sx={{
                  '&:last-child td, &last-child th': { border: 0 },
                  '&:hover': { background: '#f9f9f9' }
                }}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.account}</TableCell>
                  <TableCell>
                    <Chip 
                      label={transaction.type}
                      color={getChipColor(transaction.type)}
                      size='small'
                      sx={{ textTransform: 'capitalize'}}
                    />
                  </TableCell>
                  <TableCell align='right'>
                    {transaction.debit > 0 ? formatCurrency(transaction.debit) : '-'}
                  </TableCell>
                  <TableCell align='right'>
                    {transaction.credit > 0 ? formatCurrency(transaction.credit) : '-'}
                  </TableCell>
                  <TableCell align='right' sx={{ fontWeight: 'bold'}}>
                    {formatCurrency(transaction.balance)}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end'}}>
        <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
          <Typography variant='h6'>
            Total Debit: {formatCurrency(transactionArray.reduce((sum, t) => sum + t.debit, 0))}
          </Typography>
          <Typography variant='h6'>
            Total Credits: {formatCurrency(transactionArray.reduce((sum, t) => sum + t.credit, 0))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Accounting;