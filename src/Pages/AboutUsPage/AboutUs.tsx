import style from "./AboutUs.module.scss";
import { IoCheckmarkDone } from "react-icons/io5";
import imageAbout from "../../assets/background/aboutImage.png";
import { Avatar } from "@mui/material";
import bgMovie from "../../assets/background/bgMovie.jpg";
import { FaPlay } from "react-icons/fa";
import Subscribe from "../../Components/Footer/Subscribe/Subscribe.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import { members } from "./aboutUs.ts";

const AboutUs = () => {
  return (
    <>
      <article className={style.container}>
        <main className={style.main}>
          <section className={style.introduction}>
            <div className={style.textWrapper}>
              <p className={style.tag}>WHO WE ARE</p>
              <h1>Spacey - largest electronics retail shop in world</h1>
              <p className={style.description}>
                With great respect for the identity that helped establish
                DigiKey across the globe, we are reimagining and refreshing our
                logo and our branding. The unique new look and tone have been
                designed to emphasize our ongoing connection with suppliers and
                customers, while reflecting DigiKey’s digital-first,
                forward-looking perspective.
              </p>

              <ul>
                <li>
                  <IoCheckmarkDone />
                  Great 24/7 customer services
                </li>
                <li>
                  <IoCheckmarkDone />
                  600+ Dedicated employee
                </li>
                <li>
                  <IoCheckmarkDone />
                  50+ Branches all over the world
                </li>
                <li>
                  <IoCheckmarkDone />
                  Over 1 Million Electronics Products
                </li>
              </ul>
            </div>
            <div className={style.imageWrapper}>
              <img src={imageAbout} alt={"about"} />
            </div>
          </section>
          <section className={style.team}>
            <h1>Our core team members</h1>
            <div className={style.wrapperMembers}>
              {members.map(
                (
                  member: {
                    avatar: string;
                    title: string;
                    king?: boolean;
                    post: string;
                  },
                  index: number
                ) => (
                  <div key={index} className={style.wrapperMember}>
                    <Avatar alt="Remy Sharp" src={member.avatar} />
                    <div className={style.infoMember}>
                      <h3>{member.title}</h3>
                      <p>{member.post}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </main>
      </article>
      <section
        className={style.movie}
        style={{ backgroundImage: `url(${bgMovie})` }}
      >
        <div className={style.movieInfo}>
          <h3>Your trusted and reliable retail shop </h3>
          <p>
            Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
            elit gravida eget. Nunc consequat auctor urna a placerat.
          </p>
          <div className={style.play}>
            <FaPlay />
          </div>
        </div>
      </section>

      <footer>
        <Subscribe />
        <Footer />
      </footer>
    </>
  );
};

export default AboutUs;
