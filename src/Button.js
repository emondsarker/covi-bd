import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {

    return(
      <div className="buttonContainer">
      <button onClick = {onClick} className="button"> {text} </button>
      </div>
    )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
