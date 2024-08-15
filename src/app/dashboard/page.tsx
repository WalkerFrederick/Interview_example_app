'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Cool Bank App</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600">placeholder</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Dashboard</h1>
            </div>
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