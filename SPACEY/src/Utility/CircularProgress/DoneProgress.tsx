import {animated, useSpring} from "react-spring";


export function DoneProgress(props : any){
    const {isChecked} = props
    const springProps = useSpring({
        from: {transform: 'scale(0)'},
        to: {transform: isChecked ? 'scale(1)' : 'scale(0)'},
    });
    return (
        <div
            style={{
                width: '100px',
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
                    background: 'green',
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
                    ✔
                </animated.span>
            </animated.div>
        </div>
    )
}