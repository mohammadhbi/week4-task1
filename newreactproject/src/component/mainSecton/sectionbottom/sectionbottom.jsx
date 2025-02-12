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
                            <span> Academics</span>
                            <img src={linedash} alt="" />
                            <p>Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.</p>
                            <a href="#">Learn More</a>
                        </div>
                       </div>
                       <div className={style.downside}>
                       <div className={style.page}>
                            <span> Student Life</span>
                            <img src={linedash} alt="" />
                            <p>Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className={style.page}>
                            <span>Admissions</span>
                            <img src={linedash} alt="" />
                            <p>Learn about our Enrollment Process and how to secure your childs place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.</p>
                            <a href="#">Learn More</a>
                        </div>
                       </div>
                     </div>



        </section>
    )
}