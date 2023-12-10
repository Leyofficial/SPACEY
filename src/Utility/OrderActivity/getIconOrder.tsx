import {CiCircleCheck, CiMap} from "react-icons/ci";
import {PiChecksLight, PiMapPinLineBold, PiNotepad} from "react-icons/pi";
import {LuUser2} from "react-icons/lu";
import {MdAttachMoney} from "react-icons/md";

const successBtn = '#2DB224';
const blueBtn = '#2DA5F3';
const greenStyles = {
    borderRadius: '0.125rem',
    border: '1px solid var(--success-100, #D5F0D3)',
    background: '#EAF7E9',
    padding: '0.35rem'
}
const blueStyles = {
    borderRadius: '0.125rem',
    border: '1px solid var(--success-100, #D5EDFD)',
    background: '#EAF6FE',
    padding: '0.35rem'
}

export function getIconOrder(text: string) {
    const lowerCaseText = text.toLowerCase();
    // verified , way , confirmed , last mile , picked up , delivered , deliveredCash , pay cash
    if (lowerCaseText.includes('verified')) {
        return <div style={greenStyles}><CiCircleCheck size={'2rem'} color={successBtn}/></div>;
    } else if (lowerCaseText.includes('way')) {
        return <div style={blueStyles}><CiMap size={'2rem'} color={blueBtn}/></div>;
    } else if (lowerCaseText.includes('confirmed')) {
        return <div style={blueStyles}><PiNotepad size={'2rem'} color={blueBtn}/></div>;
    } else if (lowerCaseText.includes('last mile')) {
        return <div style={blueStyles}><PiMapPinLineBold size={'2rem'} color={blueBtn}/></div>;
    } else if (lowerCaseText.includes('pay сash')) {
        return <div style={greenStyles}><MdAttachMoney size={'2rem'} color={successBtn} /></div>
    }
    else if (lowerCaseText.includes('picked up')) {
        return <div style={blueStyles}><LuUser2 size={'2rem'} color={blueBtn}/></div>;
    } else if (lowerCaseText.includes('delivered')) {
        return <div style={greenStyles}><PiChecksLight size={'2rem'} color={successBtn}/></div>;
    }
}
