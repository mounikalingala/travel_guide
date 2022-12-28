import './index.css'

const TravelsList = props => {
  const {listOfLocations} = props
  const {id, name, imageUrl, description} = listOfLocations
  return (
    <li className="list-item" key={id}>
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default TravelsList
