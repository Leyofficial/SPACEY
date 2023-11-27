import style from './AboutUs.module.scss';
import {IoCheckmarkDone} from "react-icons/io5";
import imageAbout from '../../assets/background/aboutImage.png'
import {Avatar} from "@mui/material";
import member1 from '../../assets/img/team/member1.png'
import member2 from '../../assets/img/team/image 324 (1).png'
import member3 from '../../assets/img/team/image 324.png'
import member4 from '../../assets/img/team/image 324 (2).png'
import member5 from '../../assets/img/team/image 324 (3).png'
import member6 from '../../assets/img/team/image 325 (1).png'
import member7 from '../../assets/img/team/image 325 (2).png'
import member8 from '../../assets/img/team/image 325.png'
import bgMovie from '../../assets/background/bgMovie.jpg'
import {FaPlay} from "react-icons/fa";
import Subscribe from "../../Components/Footer/Subscribe/Subscribe.tsx";
import StatusProducts from "../../Components/StatusProducts/StatusProducts.tsx";

import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import Footer from "../../Components/Footer/Footer.tsx";

const AboutUs = () => {
    const {data} = UseCustomQuery("https://spacey-server.vercel.app/api");


    const members = [{
        avatar: member1,
        title: "Kevin Gilbert",
        post: "Chief Executive Officer"
    }, {
        avatar: member2,
        title: "Ginny D. Ortiz",
        post: "Head of Designer"
    },
        {
            avatar: member3,
            title: "Heather R. France",
            post: "Assistant of CEO"
        },
        {
            avatar: member4,
            title: "Bonnie W. Epps",
            post: "UX Designer"
        },
        {
            avatar: member5,
            title: "Sam S. Reece",
            post: "Product Designer"
        },
        {
            avatar: member6,
            title: "Lowell P. Naccarato",
            post: "Head of Development"
        },
        {
            avatar: member7,
            title: "Samuel K. Cummings",
            post: "Design Engineer"
        },
        {
            avatar: member8,
            title: "Barbara P. Letson",
            post: "UI Designer"
        }
    ]

    return (
        <article className={style.container}>
            <main className={style.main}>
                <section className={style.introduction}>
                    <div className={style.textWrapper}>
                        <p className={style.tag}>WHO WE ARE</p>
                        <h1>Spacey - largest electronics retail shop in world</h1>
                        <p className={style.description}>With great respect for the identity that helped establish
                            DigiKey across the globe,
                            we are reimagining and refreshing our logo and our branding.
                            The unique new look and tone have been designed to emphasize our ongoing connection with
                            suppliers and customers,
                            while reflecting DigiKey’s digital-first, forward-looking perspective.
                        </p>

                        <ul>
                            <li><IoCheckmarkDone/>Great 24/7 customer services</li>
                            <li><IoCheckmarkDone/>600+ Dedicated employee</li>
                            <li><IoCheckmarkDone/>50+ Branches all over the world</li>
                            <li><IoCheckmarkDone/>Over 1 Million Electronics Products</li>
                        </ul>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={imageAbout} alt={'about'}/>
                    </div>
                </section>
                <section className={style.team}>
                    <h1>Our core team member</h1>
                    <div className={style.wrapperMembers}>


                        {members.map((member: { avatar: string, title: string, post: string }, index: number) => <div
                            key={index} className={style.wrapperMember}>
                            <Avatar alt="Remy Sharp" src={member.avatar}/>
                            <div className={style.infoMember}>
                                <h3>{member.title}</h3>
                                <p>{member.post}</p>
                            </div>
                        </div>)}

                    </div>
                </section>
            </main>

            <section className={style.movie} style={{backgroundImage: `url(${bgMovie})`}}>
                <div className={style.movieInfo}>
                    <h3>Your trusted and
                        reliable retail shop </h3>
                    <p>Praesent sed semper metus. Nunc aliquet dolor mauris,
                        et fringilla elit gravida eget.
                        Nunc consequat auctor urna a placerat.</p>
                    <div className={style.play}>
                        <FaPlay/>
                    </div>
                </div>

            </section>
            <section className={style.productsWrapper}>
                <StatusProducts items={data?.categories}></StatusProducts>
            </section>

            <footer>
                <Subscribe></Subscribe>
                <Footer/>
            </footer>
        </article>
    );
};

export default AboutUs;