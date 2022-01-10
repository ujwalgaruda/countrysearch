/* Write your CSS here */
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="place-card-details">
      <img src={imgUrl} className="image" alt={name} />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
