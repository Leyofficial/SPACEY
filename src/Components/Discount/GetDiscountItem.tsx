import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../ApiRequests/uploads/getImage.ts";
import style from './GetDiscount.module.scss'
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {Skeleton} from "@mui/material";

interface IGetDiscountItemProps {
    idItem: string
}

const GetDiscountItem = ({idItem}: IGetDiscountItemProps) => {

    const [image, setImage] = useState<string | null>(null)
    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api/${idItem}`)
    const [isLoadImage,setIsLoadImage] = useState<boolean>(false)

    useEffect(() => {
        getImageFromServer(data?.found?.product.images.mainImage, setImage,setIsLoadImage)
    }, [data])
    return (
        <section className={style.container}>
            {isLoadImage ? <Skeleton  variant="text" width={'100%'} height={161}></Skeleton> : <img src={image ? image : ""} alt={'photo'}/>}
            <p className={style.discount}>{data?.found?.product.percentageOfSale}% Discount</p>
            <div className={style.info}>Escape the noise,It`s time to hear the magic
                with <span>{data?.found?.product.title}</span></div>
            <p className={style.price}>Starting price with <span>${data?.found?.product.price} USD</span></p>
            <div className={style.btn}>
                <CustomBtn text={'SHOP NOW'}></CustomBtn>
            </div>

        </section>
    );
};

export default GetDiscountItem;