import {useQuery} from "react-query";

export function UseCustomQuery(url:string){
   return  useQuery(['repoData',url], () =>
        fetch(url).then(res => res.json())
    )
}