import style from "../../Pages/ShopGridPage/Grid/Grid.module.scss";

export function NotFound() {
    return (
        <div className={style.notFound}>
            <p className={style.notFoundText}>
                Product<span className={style.span}> not found</span> :(
            </p>
        </div>
    );
}