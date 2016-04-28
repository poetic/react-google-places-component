var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

class GooglePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = { predictions: [] };
  }

  componentWillReceiveProps(props) {
    if (!props.input) {
      this.setState({ suggestions: [] });
      return false;
    }
    const service = new google.maps.places.AutocompleteService();
    service.getQueryPredictions({ input: props.input }, (predictions = []) => {
      this.setState({ predictions });
    });
    return true;
  }

  render() {
    const { itemProps, itemComponent, ...other } = this.props;
    const ItemComponent = itemComponent;

    return React.createElement(
      'div',
      other,
      this.state.predictions.map((prediction, index) => {
        return React.createElement(ItemComponent, _extends({ key: index, prediction: prediction }, itemProps));
      })
    );
  }
}

export default GooglePlaces;
GooglePlaces.propTypes = {
  input: React.PropTypes.string.isRequired,
  itemComponent: React.PropTypes.func.isRequired,
  itemProps: React.PropTypes.object
};