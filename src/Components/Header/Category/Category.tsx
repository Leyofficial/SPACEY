import {useEffect, useRef, useState} from "react";
import style from './Category.module.scss'
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import {CategoryData} from "./CategoryData.tsx";
import PopperWindow from "./ProperWindow/Left/PopperWindow.tsx";

function Category() {
    const [open, setOpen] = useState(false);
    const blurPopperWindow = useRef<HTMLDivElement>(null)

    function handleClick() {
        setOpen((prev) => !prev)
    }

    useEffect(() => {
        const handeClickOutside = (e: MouseEvent) => {
            if (blurPopperWindow.current?.contains(e.target as Node)) {
                return
            }
            setOpen(false)
        }
        document.addEventListener("mousedown", handeClickOutside)
        return () => {
            document.removeEventListener("mousedown", handeClickOutside)
        }
    }, [])

    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.popper}>
                    <button className={`${style.btn} ${open ? style.active : null}`} type="button"
                            onClick={handleClick}>
                        All Category
                        {open ? <AiOutlineArrowUp size={15} color={'white'}/> :
                            <AiOutlineArrowDown color={'black'} size={15}/>}
                    </button>
                </div>
                <div className={style.navItems}>
                    {CategoryData.map((item, index: number) => {
                        return <NavLink key={index} className={`${style.btn}`} to={item.path}>
                            <div className={style.icon}>
                                {item.icon}
                            </div>
                            <p color={style.text}>
                                {item.title}
                            </p>
                        </NavLink>
                    })}
                </div>
            </div>
            <div className={style.popperBlock}>
                <div className={style.boxBlock}>
                    {open ? <PopperWindow refHandler={blurPopperWindow}/> : null}
                </div>
            </div>
        </div>
    )
}

export default Category