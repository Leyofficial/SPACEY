import style from './WishPage.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";

function WishPage() {
    return (
        <>
            <div className={style.bread}>
                <BreadCrumb/>
            </div>
            <div className={style.block}>
                <h2>Wishlist</h2>
            </div>
        </>
    )
}

export default WishPage