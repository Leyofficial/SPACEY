import style from './PaymentGrid.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";


const  PaymentGrid = () => {
    return (
        <>
            <div className={style.breadCrumb}>
                <BreadCrumb/>
            </div>
            <div className={style.block}>
                <div className={style.blockWrapper}>
                    <main className={style.filters}>

                    </main>
                    <section className={style.itemsBlock}>

                    </section>
                </div>

            </div>
        </>
    )
}

export default PaymentGrid