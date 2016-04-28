import React from 'react';
import GooglePlaces from './index.js';

class WrapperGooglePlaces extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      renderGoogle: false,
    }
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({renderGoogle: true})
    }, 300)
  }
  render() {
      return (
        <div>
          <GooglePlaces input={this.props.input} itemComponent={this.props.itemComponent}/>
        </div>
      )
    }
}

export default WrapperGooglePlaces;
