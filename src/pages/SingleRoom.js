import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBackground from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBackground
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <Hero>
          <div className="error">
            <h3>Room can't be found...</h3>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </div>
        </Hero>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <div>
        <StyledHero img={images[0] || this.state.defaultBackground}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
      </div>
    );
  }
}
