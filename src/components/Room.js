import React from 'react';
import { Link } from 'react-router-dom';

import defaultRoomImg from '../images/room-1.jpeg';

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultRoomImg} alt="featured room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/room/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
    </article>
  );
}
