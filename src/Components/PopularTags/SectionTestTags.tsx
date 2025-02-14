import style from "./SectionTestTags.module.scss";
import PopularTags from "./PopularTags.tsx";
import { useState } from "react";
// import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";

const SectionTestTags = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  // const {data} = UseCustomQuery(`https://spacey-server-two.vercel.app/api/product?tag=${activeTag}`)

  const choseTagHandler = (tag: string) => {
    setActiveTag(tag);
  };
  return (
    <div className={style.container}>
      <PopularTags
        callback={choseTagHandler}
        activeTag={activeTag}
      ></PopularTags>
    </div>
  );
};

export default SectionTestTags;
