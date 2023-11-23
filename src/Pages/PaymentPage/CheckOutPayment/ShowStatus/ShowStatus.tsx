import style from './ShowStatus.module.scss';
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import DashboardBtn from "../../../../Utility/DashboardBtn/DashboardBtn.tsx";

interface IShowStatusProps {
    subtitle: string,
    title: string,
    image: string
}

const ShowStatus = ({subtitle, title, image}: IShowStatusProps) => {
    return (
        <div className={style.container}>
            <img src={image ? image : ""} alt={'status'}/>
            <h1>{title}</h1>
            <p className={style.subtitle}>{subtitle}</p>
            <div className={style.wrapperBtns}>
                <DashboardBtn></DashboardBtn>
                <CustomBtn text={'VIEW ORDER'}></CustomBtn>
            </div>
        </div>
    );
};

export default ShowStatus;