import WrapperGooglePlaces from '../src/WrapperGooglePlaces.js';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react';

class ItemComponent extends React.Component{
  render(){
    const {suggestion} = this.props;
    return (
      <div className='item-component'>
        {this.props.prediction.description}
      </div>
    )
  }
}

  describe('GooglePlaces', function() {
    // TODO: import files and dependencies
    it("renders", function(done) {
    ReactDOM.render(
      <WrapperGooglePlaces input={'rice'} itemComponent={ItemComponent}/>,
       document.getElementById('test')
    )

    setTimeout(function() {
      expect($('.item-component').length).to.be.above(0);
      done();
    }, 800);
  });
})
