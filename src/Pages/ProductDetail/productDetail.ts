import {ICategory} from "../../types.ts";
import {ReactNode} from "react";

export interface IProductImagesSliderProps {
    images: {
        mainImage: string,
        restImages: [{
            images: [string],
            color: string
        }]
    }
}

export interface ISliderItemsProps {
    imageId: string,
    callback: (arg: number) => void,
    index: number
}

export interface IProductInfoProps {
    product: ICategory
}

export interface ITabItems {
    tab: string,
    content: ReactNode
}