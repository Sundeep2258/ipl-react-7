import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <Link to="/bad-path">
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
    </div>
  </Link>
)

export default NotFound
