import './Casilla.scss'
import PropTypes from 'prop-types'

casilla.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default function casilla({ className, children }) {
  return (
    <div className={`casilla ${ className }`}>
      {children}
    </div>
  )
}
