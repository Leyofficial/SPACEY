import style from "./Introducing.module.scss";
import IntroItem from "./IntroItem/IntroItem.tsx";
import { UseCustomQuery } from "../../ApiRequests/customQuery/customQuery.ts";

const Introducing = () => {
  const { data } = UseCustomQuery(
    `https://spacey-server-two.vercel.app/api/product?status=New`
  );

  return (
    <section className={style.container}>
      <IntroItem
        typeItem={"yellow"}
        title={"INTRODUCING"}
        item={data ? data?.foundProduct[0] : null}
      ></IntroItem>
      <IntroItem
        typeItem={"blue"}
        title={"INTRODUCING NEW"}
        item={data ? data?.foundProduct[1] : null}
      ></IntroItem>
    </section>
  );
};

export default Introducing;
