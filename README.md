# react-google-places-component

## Usage
First install GooglePlaces component
```
$  npm install react-google-places-component
```
Add the following script tag to your HTML.
Include your API key for "Google Places API Web Service".
```
<script src="https://maps.googleapis.com/maps/api/js?key=XXXXXXXXXX&libraries=places"></script>
```

## Component API
```
<GooglePlaces
  options={{input: 'poetic systems'}}
  itemComponent={Place}
  itemProps={{onClick: onClickPlace}}
/>

#####options
AutocompletionRequest object specifications being sent through getPlacePredictions().
For more details:
https://developers.google.com/maps/documentation/javascript/places-autocomplete#place_autocomplete_service
https://developers.google.com/maps/documentation/javascript/reference#AutocompleteService

#####itemComponent
React component that will be rendered for each prediction.

#####itemProps
Pros that will be passed to each itemComponent.
```

## Example
```
import React from 'react';
import GooglePlaces from 'react-google-places-component';

const Place = ({prediction, onClick}) => {
    return (
      <div onClick={onClick.bind(this, prediction.description)} className='item-component'>
        {prediction.description}
      </div>
    )
}

const Places = function({onClickPlace}) {
  return <GooglePlaces
    options={{input: 'poetic systems'}}
    itemComponent={Place}
    itemProps={{onClick: onClickPlace}} />
}
```

## Resources
- https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests
- example prediction object passed to the itemComponent
```
{
  description: "Poetic Systems, Bering Drive, Houston, TX, United States",
  id: "a578b600406c5b3e6db4350ef6d64018f1a8f02c",
  matched_substrings: [
    {
      length: 14,
      offset: 0
    }
  ],
  place_id: "ChIJGQ1R6v3DQIYR7AQTfQRxGbc",
  reference: "ClRHAAAABUZAZiM67fZ7sXVkMxAQ64HDkSbh2yrmT7lhcuZha4-5jSzXMxcxRgFgY5YaxJ52klhiVtvfOlIKpx4-ahObAogee7i0FaIh5yuZacmdEMgSENyJkU4LIjtmpDT_YO7L2EIaFPIIiyDwg11ttyCaatPWtd5FCKKf",
  terms: [
    {
      offset: 0,
      value: "Poetic Systems"
    },
    {
      offset: 16,
      value: "Bering Drive"
    },
    {
      offset: 30,
      value: "Houston"
    },
    {
      offset: 39,
      value: "TX"
    },
    {
      offset: 43,
      value: "United States"
    }
  ],
  types: [
    "establishment"
  ]
}
```
