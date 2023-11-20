import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Check() {
    const params = useParams();
    useEffect(() => {
        console.log(params)
    },[params])
    return (
        <>
        hello
        </>
    )
}
export default Check