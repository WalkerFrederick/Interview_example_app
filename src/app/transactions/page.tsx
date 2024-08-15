'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import UnderlineLink from '@/components/links/UnderlineLink';
import TransactionHistoryList from '@/components/lists/TransactionHistoryList';

export default function TransactionHistory() {
  const [transactions, setTransactions] = React.useState([])

  async function fetchData() {
    const response = await fetch('/api/getTransactions');
    const result = await response.json();
    setTransactions(result);
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      <Head>
        <title>Cool Bank App</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <main className="grid w-full min-h-full place-items-center bg-white px-6 lg:px-8">
            <h1 className='mb-6'>Transactions</h1>
            <TransactionHistoryList transactions={transactions} />
          </main>
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()}{' '}
            <UnderlineLink href='#'>Really Cool Bank Inc</UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}