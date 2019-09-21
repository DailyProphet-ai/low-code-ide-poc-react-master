import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
// import { array } from '../../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types';
import { ItemTypes } from '../../constants';

class Storyboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            components:[]
        }
    }
    componentWillReceiveProps(props){
        // if(props.componentUpdated){
        //     this.setState({
        //         components:[
        //             props.componentUpdated
        //         ]
        //     })
        // }
    }
    renderItem = (droppedItems) => {
        let doms = [];
        droppedItems.forEach(droppedItem => {
            console.log("VALUE : "+JSON.stringify(droppedItem.properties.styleProperties));
            let color = droppedItem.properties.style.color;
            if(droppedItem.properties.styleProperties[1]){
                color = droppedItem.properties.styleProperties[1].value;
            }
            doms.push(<div style={{...droppedItem.properties.style, color:color}} key={droppedItem.properties.id} onClick={(e) => this.props.onSelectComponent(droppedItem.properties)}>{droppedItem.properties.value}</div>);
        });
        return doms;
    }
    render() {
        const { isOver, canDrop, connectDropTarget, droppedItems } = this.props;
        console.log("droppedItem :"+JSON.stringify(droppedItems))
        return connectDropTarget(
            <div style={{margin:"10px",display:"flex",  flexDirection:"column", justifyContent:"flext-start", alignItems:"flext-start", height:"560px",width:"320px", background:"white"}}>
                {this.renderItem(droppedItems)}
            </div>
        )
    }
}

const spec = {
    drop(props, monitor, component){
        const item = monitor.getItem()
        props.onDrop(item)
    }
}
function collect(connect, monitor) {
  return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
  };
}

export default DropTarget("SOURCE", spec, collect)(Storyboard);
