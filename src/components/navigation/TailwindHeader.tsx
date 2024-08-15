'use client';

import { PopoverGroup } from '@headlessui/react';

export default function TailwindHeader() {
  return (
    <header className='border-b bg-white'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
      >
        <div className='flex flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span>Really Cool Bank</span>
          </a>
        </div>
        <PopoverGroup className='hidden md:flex md:gap-x-12'>
          <a href='/dashboard' className='text-sm font-semibold leading-6 text-gray-900'>
            Your Dashboard
          </a>
          <a href='/manage-accounts' className='text-sm font-semibold leading-6 text-gray-900'>
            Manage Accounts
          </a>
          <a href='/transactions' className='text-sm font-semibold leading-6 text-gray-900'>
            Transaction History
          </a>
        </PopoverGroup>
        <div className='flex flex-1 justify-end'>
          <a
            href='/login'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}
