import style from "../sectiontop/sectiontop.module.css"
import graduate from "../../../assets/graduate.svg"
import crest from "../../../assets/crest.svg"
import mask from "../../../assets/mask.svg"
import play from "../../../assets/play.svg"
import Attention from "../../../assets/Attention.svg"
import personal from "../../../assets/personal.svg"
export function Sectiontop(){
    return(
        <section className={style.sectiontop}>
            <h3 className={style.title}>Children Deserve Bright Future</h3>
            <h2 className={style.benefits}>Our Benefits</h2>
              <p className={style.paragraph}>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your childs future.</p>
             <div className={style.cards}>
                <div className={style.upcards}>
                    <div className={style.card}>
                      <img src={graduate} alt="graduate" />
                      <span>Holistic Learning Approach</span>
                      <p>Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
                    </div>
                       <div className={style.card}>
                          <img src={crest} alt="crest" />
                         <span>Experienced Educators</span>
                         <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.
                         </p>
                        </div>
                     <div className={style.card}>
                      <img src={mask} alt="mask" />
                      <span>Nurturing Environment</span>
                      <p>We prioritize safety and provide a warm and caring atmosphere for every child.</p>
                   </div>
                </div>
                <div className={style.downcards}>
                   <div className={style.card}>
                      <img src={play} alt="play" />
                      <span>Play-Based Learning</span>
                      <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>
                    <div className={style.card}>
                      <img src={Attention} alt="attetion" />
                      <span>Individualized Attention</span>
                      <p>Our small class sizes enable personalized attention, catering to each childs unique needs.</p>
                    </div>
                    <div className={style.card}>
                      <img src={personal} alt="personal" />
                      <span>Parent Involvement</span>
                      <p>We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
                    </div>
                </div>
             </div>
        </section>
    )
}