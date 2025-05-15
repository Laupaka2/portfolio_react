import React from 'react';
import MentionsLegales from './MentionsLegales';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <MentionsLegales />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
