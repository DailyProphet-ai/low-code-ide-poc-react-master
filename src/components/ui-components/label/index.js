import React, { Component } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../../constants';
import Draggable from '../../draggable';
import "./index.css";
import { DragSource } from 'react-dnd';

export class Label extends Draggable {
    constructor(props){
        super(props);

    }
    render() {
        const { name, connectDragSource } = this.props;
        return connectDragSource(
            <div className="square">
                {this.props.name}
            </div>
        )
    }
}
function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource()
    };
  }
  function createUUID(){
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
    ) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
  const cardSource = {
      beginDrag(props, monitor, component) {
          const item = { properties: {...props.properties, id:createUUID()}};
          return item;
      }
  };
  export default DragSource("SOURCE", cardSource, collect)(Label);