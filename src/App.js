import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelsList from './components/TravelsList'

import './App.css'

class App extends Component {
  state = {
    travelsList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getTravelsList()
  }

  getTravelsList = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachList => ({
        id: eachList.id,
        name: eachList.name,
        imageUrl: eachList.image_url,
        description: eachList.description,
      }))
      this.setState({travelsList: updatedData, isLoading: false})
    }
  }

  renderLoaderView = () => (
    <div testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelsList = () => {
    const {travelsList} = this.state
    return (
      <ul className="travels-list">
        {travelsList.map(eachList => (
          <TravelsList listOfLocations={eachList} key={eachList.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="horizontal-line" />
        <div className="result-container">
          {isLoading ? this.renderLoaderView() : this.renderTravelsList()}
        </div>
      </div>
    )
  }
}

export default App
