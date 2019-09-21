import React, { Component } from 'react'

export default class ToolBar extends Component {
    constructor(props){
        super(props);

    }
    render() {
        
        return (
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <img src="./assets/play-icon.png" style={{width:"30px", height:"30px"}}></img>
                <p style={{margin:"5px", color:"white"}}>Run</p>
            </div>
        )
    }
}
