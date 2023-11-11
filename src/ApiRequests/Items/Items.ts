import axios from "axios";


export function getAllItems () {
   return  axios.get('https://spacey-server-1qkt.vercel.app/api');
}