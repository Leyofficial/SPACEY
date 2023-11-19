import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa";

export const getRatingIcons = (rating : number) => {
    switch (rating) {
        case 1 : return <div>
            <FaStar color={'orange'}/>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
        </div>
        case 2 : return <div>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <CiStar />
            <CiStar />
            <CiStar />
        </div>
        case 3 : return <div>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <CiStar />
            <CiStar />
        </div>
        case 4 : return <div>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <CiStar />
        </div>
        case 5 : return <div>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
            <FaStar color={'orange'}/>
        </div>
        default : return
    }
}