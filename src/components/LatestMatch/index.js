import {Component} from 'react'

class LatestMatch extends Component {
  state = {
    latestMatchesData: {},
  }

  componentDidMount() {
    this.latestMatch()
  }

  latestMatch = async () => {
    const {getMatchesData} = this.props
    // const {match} = this.props
    const {params} = getMatchesData
    // console.log(this.match)
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    console.log(data)

    const updatedData = {
      //   teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.teams.latest_match_details,
      //   recentMatches: data.recent_matches,
    }
    // console.log(updatedData)

    const latestMatchData = {
      competingTeam: updatedData.latestMatchDetails.competing_team,
      competingTeamLogo: updatedData.latestMatchDetails.competing_team_logo,
      date: updatedData.latestMatchDetails.date,
      firstInnings: updatedData.latestMatchDetails.first_innings,
      id: updatedData.latestMatchDetails.id,
      manOfTheMatch: updatedData.latestMatchDetails.man_of_the_match,
      matchStatus: updatedData.latestMatchDetails.match_status,
      result: updatedData.latestMatchDetails.result,
      secondInnings: updatedData.latestMatchDetails.second_innings,
      umpires: updatedData.latestMatchDetails.umpires,
      venue: updatedData.latestMatchDetails.venue,
    }
    this.setState({latestMatchesData: latestMatchData})

    // console.log(latestMatchData)
  }

  render() {
    const {latestMatchesData} = this.state

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchesData

    return (
      <div className="latest-match">
        <ul>
          <li>{competingTeam}</li>
          <li>{date}</li>
          <li>{competingTeamLogo}</li>
          <li>{venue}</li>
        </ul>
        <img
          src={competingTeamLogo}
          alt="competingTeamLogo"
          className="team-logo"
        />
        <ul>
          <li>{firstInnings}</li>
          <li>{manOfTheMatch}</li>
          <li>{matchStatus}</li>
          <li>{result}</li>
          <li>{secondInnings}</li>
          <li> {umpires}</li>
        </ul>
      </div>
    )
  }
}

export default LatestMatch
