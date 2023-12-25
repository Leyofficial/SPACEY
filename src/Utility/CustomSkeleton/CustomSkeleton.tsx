
import {Skeleton} from "@mui/material";
import {ReactNode} from "react";

interface ICustomSkeletonProps{
    image:string | null,
    width:string | number,
    height:string | number,
    children:ReactNode
}
const CustomSkeleton = ({image,width,height,children}:ICustomSkeletonProps) => {

    return (
       <>
           {!image ? <Skeleton variant="text" width={width} height={height}></Skeleton> :
               children}
       </>
    );
};

export default CustomSkeleton;