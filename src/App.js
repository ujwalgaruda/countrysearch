import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'United Kingdom',
    imgUrl: './uk.jpg',
  },
  {
    id: 2,
    name: 'India',
    imgUrl: './india.jpg',
  },
  {
    id: 3,
    name: 'Australia',
    imgUrl: './australia.jpg',
  },
  {
    id: 4,
    name: 'Malaysia',
    imgUrl: './malaysia.jpg',
  },
  {
    id: 5,
    name: 'Singapore',
    imgUrl:
      './singapore.jpg',
  },
  {
    id: 6,
    name: 'Bangkok',
    imgUrl:
      './bangkok.jpg',
  },
  {
    id: 7,
    name: 'Turkey',
    imgUrl:
      './turkey.jpg',
  },
  {
    id: 8,
    name: 'Switzerland',
    imgUrl: './switzerland.jpg',
  },
  {
    id: 9,
    name: 'Japan',
    imgUrl: './japan.jpg',
  },
  {
    id: 10,
    name: 'New Zealand',
    imgUrl: './newzealand.jpg',
  },
  {
    id: 11,
    name: 'Italy',
    imgUrl: './italy.jpg',
  },
  {
    id: 12,
    name: 'China',
    imgUrl:
      './china.jpg',
  },
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
