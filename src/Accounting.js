import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Box,
  Typography
} from '@mui/material';
import { type } from '@testing-library/user-event/dist/type';

const transactions = [
  {
    id: 1,
    date: '2025-05-01',
    description: 'Office Supplies Purchase',
    account: 'Office Supplies',
    type: 'expense',
    debit: 250.00,
    credit: 0,
    balance: 9750.00
  },
  {
    id: 2,
    date: '2025-05-02',
    description: 'Client Payment - Invoice #1234',
    account: 'Accounts Receivable',
    type: 'income',
    debit: 0,
    credit: 3500.00,
    balance: 13250.00
  },
]

const AccountingTable = () => {

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
            {transactions.map((transaction) => (
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
    </Box>
  )
}

export default AccountingTable;