import style from './ContactUs.module.scss';
import ContactBlock from "./ContactBlock/ContactBlock.tsx";
import {FaPhoneVolume} from "react-icons/fa";
import {IoChatboxEllipsesOutline} from "react-icons/io5";

const ContactUs = () => {
    const blockItems = [{
        title: 'Call us now',
        icon: <FaPhoneVolume/>,
        description: "We are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now",
        subject: '+1-202-555-0126',
        btnTitle: "call now",
        color: 'blue'
    },
        {
            title: 'Chat with us',
            icon: <IoChatboxEllipsesOutline/>,
            description: "We are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now",
            subject: 'Support@clicon.com',
            btnTitle: "contact us",
            color: 'green'
        }]

    return (
        <div className={style.container}>
            <div className={style.wrapperTitle}>
                <p className={style.tag}>CONTACT US</p>

                    <h1 className={style.title}>Dont find your answer.</h1>
                    <h1 className={style.title}>Contact with us</h1>
            </div>
            <div className={style.blockWrapper}>
                {blockItems.map((item, index) => <ContactBlock item={item} key={index}></ContactBlock>)}
            </div>
        </div>
    );
};

export default ContactUs;