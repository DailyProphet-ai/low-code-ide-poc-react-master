import React, { Component } from "react";
import ReactDOM from "react-dom";
import Storyboard from './components/storyboard';
import UIComponent from './components/ui-components';
import Properties from './components/properties';
import Toolbar from './components/tool-bar';
import { DndContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./App.css";
import Label from "./components/ui-components/label";
import Draggable from "./components/draggable";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      droppedItems: [],
      selectedComponent:{}
    };
    this.onDrop = this.onDrop.bind(this);
    this.onPropertyUpdate = this.onPropertyUpdate.bind(this);
  }

  onDrop(item) {
    console.log("item : "+JSON.stringify(item));
    let droppedItems = this.state.droppedItems;
    this.setState({
      droppedItems: [...droppedItems, item]
    });
  }

  didSelectStoryboardComponent = (component) =>{
    console.log("Selected Component : "+JSON.stringify(component));
    this.setState({selectedComponent:component})
  }
  onPropertyUpdate(updatedComponent){
    console.log("updatedComponent : "+JSON.stringify(updatedComponent));
    let updatedComponents = []
    this.state.droppedItems.forEach(function(component){
        if(component.id == updatedComponent.id){
          updatedComponents.push(updatedComponent);
        }else{
          updatedComponents.push(component);
        }
    });
    this.setState({droppedItems:updatedComponents, selectedComponent:updatedComponent});
  }

  render() {
    return (
      <div className="App">
        <div className="tools-container">
          <Toolbar/>
        </div>
        <div className="main-app-container">
          <div className="ui-components-container">
            UI components
            <UIComponent />
          </div>
          <div className="storyboard-container">
            {/* Storyboard */}
            <Storyboard droppedItems={this.state.droppedItems} 
              onDrop={this.onDrop}
              onSelectComponent = {this.didSelectStoryboardComponent}/>
          </div>
          <div className="ui-components-container">
            Properties
            <Properties component={this.state.selectedComponent} onPropertyUpdate={this.onPropertyUpdate}/>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Container;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Storyboard from './components/storyboard';
// import UIComponent from './components/ui-components';



// function App() {
//   return (
    // <div className="App">
    //   <div className="ui-components-container">
    //      {/* UI components */}
    //      <UIComponent/>
    //   </div>
    //   <div className="storyboard-container">
    //      {/* Storyboard */}
    //      <Storyboard/>
    //   </div>
    // </div>
//   );
// }

// export default App;
