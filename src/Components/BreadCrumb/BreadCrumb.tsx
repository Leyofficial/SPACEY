import style from './BreadCrumb.module.scss'
import {Link, useLocation} from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import {MdOutlineNavigateNext} from 'react-icons/md';
import {PiHouseLight} from "react-icons/pi";

function BreadCrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className={style.block}>
            <div className={style.wrapperBlock}>
                <Breadcrumbs aria-label="breadcrumb" separator={<MdOutlineNavigateNext fontSize="small"/>}>
                    {/* Всегда добавляйте "Home" как первый элемент */}
                    <Typography key="home">
                        <Link className={style.link} color="inherit" to="/">
                            <div className={style.home}>
                                <PiHouseLight sx={{mr: 0.5}} fontSize="inherit"/>
                                Home
                            </div>
                        </Link>
                    </Typography>

                    {pathnames.map((path, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;

                        return isLast ? (
                            <Typography key={index} color="text.primary">
                                <p className={style.active}>{path}</p>
                            </Typography>
                        ) : (
                            <Typography key={index}>
                                <Link className={style.link} to={routeTo} color="inherit">
                                    {path}
                                </Link>
                            </Typography>
                        );
                    })}
                </Breadcrumbs>
            </div>
        </div>
    );
}

export default BreadCrumb;
