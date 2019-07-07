import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="Home Page" subtitle="subtitle here">
        <Link to="/rooms" className="btn-primary">
          Check out Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
