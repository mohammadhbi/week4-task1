import style from"./sectionbottom.module.css"
import linedash from "../../../assets/linedash.svg"
export function Sectionbottom(){
    return(
        <section className={style.Sectionbottom}>
            <h3 className={style.title}>Explore More</h3>
                                   <h2 className={style.benefits}>Navigate through our Pages</h2>
                                   <p className={style.paragraph}>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
                     <div className={style.pages}>
                       <div className={style.upside}>
                       <div className={style.page}>
                            <span> About Us</span>
                            <img src={linedash} alt="" />
                            <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className={style.page}>
                            <span> About Us</span>
                            <img src={linedash} alt="" />
                            <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                            <a href="#">Learn More</a>
                        </div>
                       </div>
                       <div className={style.downside}>
                       <div className={style.page}>
                            <span> About Us</span>
                            <img src={linedash} alt="" />
                            <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className={style.page}>
                            <span> About Us</span>
                            <img src={linedash} alt="" />
                            <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                            <a href="#">Learn More</a>
                        </div>
                       </div>
                     </div>



        </section>
    )
}