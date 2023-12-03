import style from './TrackOrderWrapper.module.scss'
interface ITrackOrderStatus {
    orderId : string
}
function TrackOrderWrapper({orderId} : ITrackOrderStatus) {
    return (
        <div className={style.block}>

        </div>
    )
}
export default TrackOrderWrapper