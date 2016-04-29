import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react';
import GooglePlaces from '../src/index.js';

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
    it("renders", function(done) {
      this.timeout(5000)

      ReactDOM.render(
        <WrapperGooglePlaces options={{input: 'rice'}} itemComponent={ItemComponent}/>,
          document.getElementById('test')
      )

      setTimeout(function() {
        chai.expect($('.item-component').length).to.be.above(0);
        done();
      }, 2000);
  });
})

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
          <GooglePlaces options={{input: 'rice'}} itemComponent={this.props.itemComponent}/>
        </div>
      )
    }
}

export default WrapperGooglePlaces;
