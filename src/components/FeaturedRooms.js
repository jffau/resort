import React, { Component } from 'react';
import { RoomContext } from '../context';
import Rooms from '../pages/Rooms';
export default class FeaturedRooms extends Component {
  /*
  This subscribes the component to RoomContext, 
  and allows access via this.context:
  */
  static contextType = RoomContext;
  render() {
    const value = this.context;
    let { rooms } = this.context;
    return (
      <div>
        {rooms.map(room => {
          return room.name;
        })}
      </div>
    );
  }
}
