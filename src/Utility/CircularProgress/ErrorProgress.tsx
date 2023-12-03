import { useSpring, animated } from 'react-spring';
interface IError {
    isChecked : boolean
}
function ErrorProgress({isChecked} : IError) {
    const springProps = useSpring({
        from: {transform: 'scale(0)'},
        to: {transform: isChecked ? 'scale(1)' : 'scale(0)'},
    });

        return (
            <div
                style={{
                    width: '100px',
                    textAlign : 'center',
                    height: '100px',
                    borderRadius: '50%',
                    // border: '2px solid #000',
                    position: 'relative',
                    cursor: 'pointer',
                }}
            >
                <animated.div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'red',
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...springProps,
                    }}
                >
                    <animated.span
                        style={{
                            color: 'white',
                            fontSize: '24px',
                        }}
                    >
                        <p style={{fontSize : '30px'}}>×</p>
                    </animated.span>
                </animated.div>

            </div>
        );
}
export default ErrorProgress