'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import TailwindHero from '@/components/hero/TailwindHero';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Cool Bank App</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <TailwindHero />
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()}{' '}
            <UnderlineLink href='#'>Really Cool Bank Inc</UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
