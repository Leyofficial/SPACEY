import style from './SliderItems.module.scss'
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import {ISliderItemsProps} from "../../productDetail.ts";



const SliderItems = ({imageId}: ISliderItemsProps) => {
    const {image, isLoading} = useGetImage(imageId)

    return (
        <div className={style.item}>
            {isLoading || !image ? <Skeleton width={100} height={100}/>: <img src={image ? image : ""} alt={'product'}/>}
        </div>
    );
};

export default SliderItems;