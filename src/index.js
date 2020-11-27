import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Account from './components/Account';
import Searchbar from './components/Searchbar';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Content from './components/Content';
import Seller from './components/Seller';
import Order from './components/Order';
import Review from './components/Review';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Account />
    <Searchbar />
    <Navbar />
    <Banner />
    <Content />
    <Seller />
    <Order />
    <Review />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


