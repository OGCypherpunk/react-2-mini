import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super();
      this.state ={
        fontColor : 'black',
        fontSize : 12 ,
        fontFamily : 'monospace',
        allowEdit : true
      };
      this.updateColor =this.updateColor.bind(this);
      this.updateSize =this.updateSize.bind(this);
      this.updateFamily =this.updateFamily.bind(this);
      this.updateEditStatus =this.updateEditStatus.bind(this);
  }




  
  // updateColor
  updateColor(val) {
  console.log(val)
    this.setState( { fontColor : val })
  }

  // 
  updateSize(val) {
  console.log(val)
    this.setState ( { fontSize : val })
  }

  // updateFamily
  updateFamily(val) {
  console.log(val)
    this.setState ( { fontFamily : val })
  }

  // updateEditStatus
  updateEditStatus(val) {
  console.log(val)
    this.setState ( { allowEdit : val })
  }






  render() {
    return (
      <div>

        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger update={ this.updateColor }/>
          <SizeChanger update={this.updateSize} />
          <FamilyChanger update={this.updateFamily} />
        </div>

        <div className="textArea">
        <TextContainer 
          color={this.state.fontColor}
          size={this.state.fontSize}
          family={this.state.fontFamily}
          disabled={this.state.allowEdit}
        /> 
        </div>

      </div>
    )
  }
}

export default App;
