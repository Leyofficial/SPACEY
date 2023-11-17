import style from './Banner.module.scss'
import {ISmallDeal} from "../../Pages/MainPage/types.ts";
import {Skeleton} from "@mui/material";
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {CustomSaleType} from "../../Utility/CustomSaleType/CustomSaleType.tsx";
import {useGetImage} from "../../hooks/getImage/useGetImage.ts";

function Banner({item}: ISmallDeal) {

    const {image} = useGetImage(item?.product.images.mainImage)
    return (
        <div className={style.block}>
            <div className={style.wrapperBlock}>
                <div className={style.textBlock}>
                        {item?.product.saleType ?  <><CustomSaleType typeSale={item?.product.saleType}/></> : <><Skeleton variant={'rounded'} width={100} height={30}/></>}
                    <p className={style.title}>
                        {item?.brand ? item?.brand : <Skeleton variant={'rounded'} width={180} height={50}/>}
                    </p>
                    <p className={style.description}>
                        {item?.product.description ? item?.product.description : <Skeleton variant={'rounded'} width={240} height={'7rem'}/>}
                    </p>
                    <div className={style.btn}>
                        <CustomBtn/>
                    </div>
                </div>
                <div className={style.imgBlock}>
                    {image ? <img src={image ? image : ''} alt="photo"/> :
                        <Skeleton variant={'rounded'} width={312} height={349}/>}
                </div>
            </div>
        </div>
    )
}

export default Banner