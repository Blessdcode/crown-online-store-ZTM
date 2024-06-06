import './button.style.scss'

const BUTTON_TYPE_CLASSES = {
    default: "default_btn",
    primary: "primary_btn",
    secondary:"secondary_btn"
}


const Button = ({ children, button, ...props }) => {
    return (
		<button className={`button-container ${BUTTON_TYPE_CLASSES[button]}`} {...props}>
			{children}
		</button>
    );
}

export default Button