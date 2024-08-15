'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import UnderlineLink from '@/components/links/UnderlineLink';
import AccountsList from '@/components/lists/AccountsList';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AccountType } from '@/app/api/getAccounts/route';

export default function HomePage() {

  const [accounts, setAccounts] = React.useState([])
  const [accountTypeFilter, setAccountTypeFilter] = React.useState<AccountType | null>(null)

  async function fetchData() {
    const response = await fetch('/api/getAccounts' + (accountTypeFilter ? "?filter=" + accountTypeFilter : ""));
    const result = await response.json();
    setAccounts(result);
  }

  React.useEffect(() => {
    fetchData();
  }, [accountTypeFilter])

  return (
    <main>
      <Head>
        <title>Cool Bank App</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <main className="grid w-full min-h-full place-items-center bg-white px-6 lg:px-8">
            <h1 className='mb-6'>Accounts</h1>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {accountTypeFilter ? accountTypeFilter : 'All'}
                  <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      onClick={() => setAccountTypeFilter(null)}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      All
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      onClick={() => setAccountTypeFilter(AccountType.internal)}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Internal
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      onClick={() => setAccountTypeFilter(AccountType.external)}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      External
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <AccountsList accounts={accounts} />
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