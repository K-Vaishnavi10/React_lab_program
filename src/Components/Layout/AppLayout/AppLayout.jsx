import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import './AppLayout.css';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main style={{ minHeight: "calc(190vh - 120px)", padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
