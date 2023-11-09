import {Box, Fade, Popper} from "@mui/material";
import React from "react";
import style from './Category.module.scss'
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import {PiArrowsCounterClockwiseFill, PiHeadphonesLight} from "react-icons/pi";
import {NavLink} from "react-router-dom";
import LeftProperWindow from "./ProperWindow/Left/LeftProperWindow.tsx";
import RightProperWindow from "./ProperWindow/Right/RightProperWindow.tsx";

interface ICategory {
    path: string,
    icon: React.ReactNode,
    title: string
}

function Category() {
    const data: ICategory[] = [
        {
            path: 'order',
            icon: <CiLocationOn color={'#5F6C72'}/>,
            title: 'Track Order'
        },
        {
            path: 'compare',
            icon: <PiArrowsCounterClockwiseFill color={'#5F6C72'}/>,
            title: 'Compare'
        },
        {
            path: 'support',
            icon: <PiHeadphonesLight color={'#5F6C72'}/>,
            title: 'Customer Support'
        },
        {
            path: 'help',
            icon: <AiOutlineInfoCircle color={'#5F6C72'}/>,
            title: 'Need Help'
        }
    ]
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open: boolean = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.popper}>
                    <button className={`${style.btn} ${open ? style.active : null}`} aria-describedby={id} type="button"
                            onClick={handleClick}>
                        All Category
                        {open ? <AiOutlineArrowUp size={15} color={'white'}/> :
                            <AiOutlineArrowDown color={'black'} size={15}/>}
                    </button>
                </div>
                <div className={style.navItems}>
                    {data.map((item) => {
                        return <NavLink className={`${style.btn}`} to={item.path}>
                            <div className={style.icon}>
                                {item.icon}
                            </div>
                            <p color={style.text}>
                                {item.title}
                            </p>
                        </NavLink>
                    })}
                </div>
                <div className={style.popperBlock}>
                    <Popper id={id} open={open} anchorEl={anchorEl} transition>
                        {({TransitionProps}) => (
                            <div className={style.boxBlock}>
                                <Fade {...TransitionProps} timeout={350}>
                                    <Box sx={{
                                        border: '1px solid rgba(0, 0, 0, 0.24)',
                                        borderRadius: '5px',
                                        p: 1,
                                        bgcolor: 'background.paper'
                                    }}>
                                        <LeftProperWindow/>
                                    </Box>
                                </Fade>
                                <Fade {...TransitionProps} timeout={350}>
                                    <Box sx={{
                                        border: '1px solid rgba(0, 0, 0, 0.24)',
                                        borderRadius: '5px',
                                        p: 1,
                                        bgcolor: 'background.paper'
                                    }}>
                                        <RightProperWindow/>
                                    </Box>
                                </Fade>
                            </div>
                        )}
                    </Popper>
                </div>
            </div>
        </div>
    )
}

export default Category