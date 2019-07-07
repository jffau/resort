import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

import Banner from '../components/Banner';
export default function NotFound() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link className="btn-primary" to="/">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
}
