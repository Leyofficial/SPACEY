import {Skeleton} from "@mui/material";

function SkeletonCategoryFilter() {
    return (
        <div style={{display : 'flex' , gap : '8px' , alignItems : 'center'}}>
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="rounded" width={100} height={20}/>
        </div>
    )
}
export default SkeletonCategoryFilter