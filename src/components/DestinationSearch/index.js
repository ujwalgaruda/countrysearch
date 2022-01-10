// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInputTyped = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="destination-container">
          <h1 className="header">Search for your Favourite Country</h1>
          <div className="search-box-container">
            <input
              type="search"
              className="search-box"
              value={searchInput}
              placeholder="Search"
              onChange={this.onSearchInputTyped}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="places-list-container">
            {searchResults.map(eachPlace => (
              <DestinationItem
                key={eachPlace.id}
                destinationDetails={eachPlace}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
