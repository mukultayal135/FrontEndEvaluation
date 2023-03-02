import React from 'react';
import { Navbar, MainBody, Footer } from '../../components';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
};

export default Home;
