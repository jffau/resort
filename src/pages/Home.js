import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

import Services from '../components/Services';
const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Beach Resort" subtitle="Luxurious Rooms starting at $99">
          <Link to="/rooms" className="btn-primary">
            Check out Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
