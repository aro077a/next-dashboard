import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Footer from '../Footer';

const MainLayout = ({ children, title = 'Page', description = '...' }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className='layout__content'>
        <Aside openMenu={openMenu} />
        <div style={{ width: '100%' }}>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div className='layout__main'>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
