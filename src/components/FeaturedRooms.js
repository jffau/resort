import React, { Component } from 'react';
import { RoomContext } from '../context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';
import Rooms from '../pages/Rooms';
export default class FeaturedRooms extends Component {
  /*
  This subscribes the component to RoomContext, 
  and allows access via this.context:
  */
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms, loading } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
