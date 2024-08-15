'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import TailwindLogin from '@/components/forms/login/TailwindLogin';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function LoginPage() {
  return (
    <main>
      <Head>
        <title>Cool Bank App</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <TailwindLogin />
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()}{' '}
            <UnderlineLink href='#'>Really Cool Bank Inc</UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
