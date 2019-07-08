import React, { Component } from 'react';
import { RoomContext } from '../context';
export default class FeaturedRooms extends Component {
  /*
  This subscribes the component to RoomContext, 
  and allows access via this.context:
  */
  static contextType = RoomContext;
  render() {
    const value = this.context;
    return <div>{value.greeting + ' ' + value.name}</div>;
  }
}
