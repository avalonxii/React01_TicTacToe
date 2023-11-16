import './Boton.scss'
import PropTypes from 'prop-types'

Boton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default function Boton({ className , children }) {
  return (
    <button className={`boton ${className}`}>
      {children}
    </button>
  )
}
