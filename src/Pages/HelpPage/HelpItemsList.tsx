import {FaCarSide, FaCcMastercard, FaRegUser, FaShippingFast} from "react-icons/fa";
import {PiPassword} from "react-icons/pi";
import {MdOutlinePayment, MdOutlineShoppingBag} from "react-icons/md";
import {GoGitCompare} from "react-icons/go";

export const helpItems = () => {
return  [{
        title:'Track Order',
        icon:<FaCarSide />,
    },
    {
        title:"Reset Password",
        icon:<PiPassword />
    },
    {
        title:"Payment Option",
        icon:<MdOutlinePayment />
    },
    {
        title:"User & Account",
        icon:<FaRegUser />,
    },
    {
        title:"Wishlist & Compare",
        icon:<GoGitCompare />
    },
    {
        title:"Shipping & Billing",
        icon:<FaShippingFast />
    },
    {
        title:"Shopping Cart & Wallet",
        icon:<FaCcMastercard />
    },
    {
        title:"Sell on Spacey",
        icon:<MdOutlineShoppingBag />
    }
]
    
}
