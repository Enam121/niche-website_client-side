import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Specification from '../Specification/Specification';
import Products from '../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Review from '../Review/Review';


const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Specification />
      <Products />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;