import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, teamImageUrl, name} = teamData

  return (
    <Link className="team-card-link" to={`/team-matches/${id}`}>
      <div className="container-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-head">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
