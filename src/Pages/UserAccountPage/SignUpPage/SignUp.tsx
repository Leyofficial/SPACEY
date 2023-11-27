import style from './SignUp.module.scss'
import CustomTab from "../../../Utility/CustomTab/CustomTab.tsx";
import {tabArray} from "../tabArray.ts";
function SignUp() {
    return (
        <div className={style.block}>
            <div className={style.tabs}> {
                <CustomTab array={[...tabArray]}/>
            }</div>
        </div>
    )
}
export default SignUp