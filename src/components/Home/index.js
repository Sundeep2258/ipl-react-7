import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'
// import TeamMatches from '../TeamMatches'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamsData: updatedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>

        <ul className="menu-section">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <li>
              {teamsData.map(item => (
                <TeamCard teamData={item} key={item.id} />
              ))}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default Home
