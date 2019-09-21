import React, { Component } from 'react'
import Label from './label';
import Draggable from '../draggable';
import { DragSource } from 'react-dnd';
export default class UIComponents extends Component {
    constructor(props){
        super(props);

        
        this.state = {
            components:[
                {
                    component:<Label name="Label" properties={this.getProperty("#000", "#fff", "Label")} key={this.createUUID()}/>
                },
                {
                    component:<Label name="Button" properties={this.getProperty("#006EFF", "#fff", "Button")} key={this.createUUID()}/>
                }
            ]
        }
    }
    // componentWillReceiveProps(props){
    //     if(props.componentUpdated){
    //         this.setState({
    //             components:[
    //                 {
    //                     component:<Label properties={props.componentUpdated} key={props.componentUpdated.id}/>
    //                 }
    //             ]
    //         })
    //     }
    // }
    getProperty = (color ,bgColor, name) =>{
        let labelProperties = {
            name:name, 
            id:this.createUUID(), 
            value:name,
            style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",color:color, backgroundColor:bgColor, height:"30px"},
            styleProperties:[
                {
                    id:"1",
                    inputElementType:"textfield",
                    placeholder:name,
                    value:name,
                    name:"Text",
                    style:{height:"25px"}
                },
                {
                    id:"2",
                    inputElementType:"color",
                    value:color,
                    name:"Text Color",
                    style:{width:"100px",height:"25px"}
                }
            ]
        }
        return labelProperties;
    }
    createUUID = () => {
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
    renderConponents = () => {
        let components = [];
        this.state.components.forEach(element => {
            components.push(element.component)       
        });
        return components;
    }
    render() {
        
        return (
            <div>
                {/* <Label name="Label" id="label"/> */}
                 {/* <Draggable name="Label" id="label"/> */}
                {this.renderConponents()}
            </div>
        )
    }
}
