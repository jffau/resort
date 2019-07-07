import React from 'react';
import Banner from './Banner';
const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;

Hero.defaultProps = {
  hero: 'defaultHero'
};
