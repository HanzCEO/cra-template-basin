import "styles/Button.css";

function Button({ children }) {
        return (
                <div className='Button'>
                        {children}
                </div>
        );
}

export default Button;