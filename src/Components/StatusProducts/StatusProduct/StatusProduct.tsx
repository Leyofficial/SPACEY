import style from "./StatusProduct.module.scss";
import { IProductOutside } from "../../../types.ts";
import { useEffect, useState } from "react";
import { getStateType } from "../../../ApiRequests/Items/getStateType.ts";
import ActualItemState from "./ActualItemState/ActualItemState.tsx";
import SkeletonActualItem from "./ActualItemState/SkeletonActualItem.tsx";
import { Skeleton } from "@mui/material";
function StatusProduct({ title }: IProductOutside) {
  const numSkeleton = useState(2)[0];
  const [actualState, setActualState] = useState([]);
  function SkeletonFunc() {
    return (
      <div className={style.skeletonBlock}>
        {Array(numSkeleton)
          .fill(null)
          .map((index: number) => (
            <SkeletonActualItem key={index} />
          ))}
      </div>
    );
  }
  useEffect(() => {
    if (!title) return;
    getStateType(title).then((res) =>
      setActualState(res.data.foundProduct.splice(0, 3))
    ); // shuffleArray
  }, [title]);

  return (
    <div className={style.listItem}>
      {title ? (
        <h1 className={style.title}>{title}</h1>
      ) : (
        <Skeleton variant={"rounded"} width={100} height={10} />
      )}
      <div className={style.block}>
        {actualState.length > 0
          ? actualState.map((item, index: number) => {
              return <ActualItemState key={index} item={item} />;
            })
          : SkeletonFunc()}
      </div>
    </div>
  );
}
export default StatusProduct;
