import React from 'react';
//import { ChevronLeft, ChevronRighrt } from 'lucide-react';

const sampleTransactions = [
    {
        id: 'TRX001',
        date: '2025-05-01',
        description: 'Office Supplies Purchase',
        category: 'Supplies',
        type: 'Expense',
        amount: -150.75,
        balance: 9849.25
    },
    {
    id: 'TRX002',
    date: '2025-05-02',
    description: 'Client Payment - Project Alpha',
    category: 'Revenue',
    type: 'Income',
    amount: 5000.00,
    balance: 14849.25
  },
  {
    id: 'TRX003',
    date: '2025-05-03',
    description: 'Salary Payment - John Doe',
    category: 'Payroll',
    type: 'Expense',
    amount: -3500.00,
    balance: 11349.25
  },
  {
    id: 'TRX004',
    date: '2025-05-04',
    description: 'Equipment Purchase - Laptop',
    category: 'Equipment',
    type: 'Expense',
    amount: -1200.00,
    balance: 10149.25
  },
  {
    id: 'TRX005',
    date: '2025-05-05',
    description: 'Client Payment - Consulting Services',
    category: 'Revenue',
    type: 'Income',
    amount: 2500.00,
    balance: 12649.25
  },
  {
    id: 'TRX006',
    date: '2025-05-06',
    description: 'Utility Bill - Electricity',
    category: 'Utilities',
    type: 'Expense',
    amount: -275.50,
    balance: 12373.75
  },
  {
    id: 'TRX007',
    date: '2025-05-07',
    description: 'Product Sales',
    category: 'Revenue',
    type: 'Income',
    amount: 1750.00,
    balance: 14123.75
  },
  {
    id: 'TRX008',
    date: '2025-05-08',
    description: 'Internet Service',
    category: 'Utilities',
    type: 'Expense',
    amount: -99.99,
    balance: 14023.76
  },
];


const AccountingTable = () => {
    return(
        <div className='w-full p-4'>
            <h1 className='text-3xl font-bold mb-6'>Accountin Transactions!!!</h1>
        </div>
    )
}

export default AccountingTable;