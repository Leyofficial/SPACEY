import axios from "axios";


export function getAllItems () {
   return  axios.get('https://spacey-server.vercel.app/api');
}