import {Box, Fade, Popper} from "@mui/material";
import React from "react";
import style from './Category.module.scss'
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import LeftProperWindow from "./ProperWindow/Left/LeftProperWindow.tsx";
import RightProperWindow from "./ProperWindow/Right/RightProperWindow.tsx";
import {CategoryData} from "./CategoryData.tsx";

function Category() {

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
                    {CategoryData.map((item) => {
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