import {useParams} from "react-router-dom";
import {useState} from "react";
import ShowStatus from "./ShowStatus/ShowStatus.tsx";
import succeedImage from '../../../assets/img/like.png'
import wrongImage from '../../../assets/img/dis.png'
const CheckOutPayment = () => {
    const {idOrder} = useParams()
    const [isSucceedStatus] = useState(true)
    console.log(idOrder)
    return (
     <>
         {
             isSucceedStatus ? <ShowStatus image={succeedImage} title={"Your order is successfully place"} subtitle={'To check delivery status go to the dashboard'}></ShowStatus>
                 :
                 <ShowStatus image={wrongImage} title={"Something went wrong"} subtitle={'Try again or check your bank card'}></ShowStatus>
         }

     </>
    );
};

export default CheckOutPayment;