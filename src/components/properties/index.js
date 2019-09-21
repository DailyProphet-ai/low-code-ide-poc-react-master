import React, { Component } from 'react'
// import ColorPicker from 'react-color-picker'
import { SketchPicker } from 'react-color';

export default class Properties extends Component {
    constructor(props){
        super(props);
        this.state = {
            component:[]
        }
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }
    componentWillReceiveProps(props){
        console.log("Incoming props : "+JSON.stringify(props.component));
        this.setState({component:props.component});
    }
    onTextChange = (e) => {
        console.log("TExt chnged : "+e.target.value);
        let selectedComponent = this.state.component;
        let styleProperty = selectedComponent.styleProperties;
        
        let selectedProperty = styleProperty[0];
        selectedProperty.value = e.target.value;
        styleProperty[0] = selectedProperty;
        selectedComponent.styleProperties = styleProperty;

        selectedComponent.value = e.target.value;
        this.setState({component:selectedComponent})
        // if(this.props.onPropertyUpdate){
            this.props.onPropertyUpdate(selectedComponent);
        // }
        
    }
    onColorChange = (e) => {
        console.log("Color chnged : "+e.target.value);
        let selectedComponent = this.state.component;
        let styleProperty = selectedComponent.styleProperties;
        
        let selectedProperty = styleProperty[1];
        selectedProperty.value = e.target.value;
        styleProperty[1] = selectedProperty;
        selectedComponent.styleProperties = [styleProperty];
       
        console.log("selectedComponent.style.color : "+selectedComponent.style.color);
        selectedComponent.style.color = e.target.value;
        
        this.setState({component:selectedComponent})
        // if(this.props.onPropertyUpdate){
            this.props.onPropertyUpdate(selectedComponent);
        // }
        
    }
    onDrag(color, c) {
        this.setState({
          color
        })
    }
    handleChangeComplete = (color) => {
        console.log("color : "+JSON.stringify(color));
        
        // this.setState({ background: color.hex });

        let selectedComponent = this.state.component;
        let styleProperty = selectedComponent.styleProperties;
        
        let selectedProperty = styleProperty[1];
        selectedProperty.value = color.hex;
        styleProperty[1] = selectedProperty;
        selectedComponent.styleProperties = styleProperty;
       
        // console.log("selectedComponent.style.color : "+selectedComponent.style.color);
        // selectedComponent.value = color.hex;
        
        this.setState({component:selectedComponent})
        // if(this.props.onPropertyUpdate){
            this.props.onPropertyUpdate(selectedComponent);
        // }

    };
    renderConponents = () => {
        let components = [];
        if(this.state.component.styleProperties){
            this.state.component.styleProperties.forEach(property => {
                let component = null;
                // inputElementType:"textfield",
                //         placeholder:"Label",
                //         value:"Label",
                //         name:"Label",
                        // style:{}
                        console.log("property.value : "+property.value);
                if(property.inputElementType == "textfield"){
                    components.push(<div key={property.id}  style={{display:"flex", flex: 1,flexDirection:"row", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}><p style={{marginRight:"10px"}}>{property.name} </p><input type="text" value={property.value} style={property.style} key={property.id} onChange={(e)=>this.onTextChange(e)}/></div>);
                    // components.push(<input type="text" style="width:100px;height:30px" key={this.state.component.id}></input>)
                }
                else if(property.inputElementType == "color"){
                    components.push(<div key={property.id}  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"10px", flexWrap:"wrap"}}><p style={{marginRight:"10px"}}>{property.name} </p> <SketchPicker
                        color={ property.value }
                        onChangeComplete={ this.handleChangeComplete }
                        
                      /></div>);
                    // components.push(<input type="text" style="width:100px;height:30px" key={this.state.component.id}></input>)
                }
                  
            });
        }
       
        return components;
    }
    render() {
        
        return (
            <div style={{display:"flex", flexDirection:"column", padding:"10px"}}>
               {this.renderConponents()}
            </div>
        )
    }
}
