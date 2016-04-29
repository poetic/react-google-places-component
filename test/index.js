import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react';
import GooglePlaces from '../src/index.js';

const ItemComponent = ({prediction, onClick}) => {
    return (
      <div onClick={onClick.bind(this, prediction.description)} className='item-component'>
        {prediction.description}
      </div>
    )
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

  handleClick(address) {
    console.log(address)
  }

  render() {
      return (
        <div>
          <GooglePlaces
            options={{input: 'rice'}}
            itemComponent={this.props.itemComponent}
            itemProps={{ onClick: this.handleClick }}
          />
        </div>
      )
    }
}

export default WrapperGooglePlaces;
