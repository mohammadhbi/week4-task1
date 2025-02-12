import style from "../sectionmidlle/sectionmidlle.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stars from "../../../assets/stars.svg"
import jenifer from "../../../assets/jenifer.svg"
import EmilyL from "../../../assets/EmilyL.svg"
import davidk from "../../../assets/davidk.svg"

export function Sectionmidlle(){
    return(
        <section className={style.Sectionmidlle}>
             <h3 className={style.title}>Their Happy Words 🤗</h3>
                        <h2 className={style.benefits}>Our Testimonials</h2>
                        <p className={style.paragraph}>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child`s future.</p>
        
              <div className={style.feedbacks}>
               <div className={style.feedbackPerson}>
                  <img src={jenifer} alt="jenifer" />
                  <span>Jennifer B</span>
                <img src={stars} alt="rate stars" />
                <p>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</p>
               </div>
               <div className={style.feedbackPerson}>
                  <img src={EmilyL} alt="EmilyL" />
                  <span>Emily L</span>
                <img src={stars} alt="rate stars" />
                <p>Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.</p>
               </div>
               <div className={style.feedbackPerson}>
                  <img src={davidk} alt="davidk" />
                  <span>David K</span>
                <img src={stars} alt="rate stars" />
                <p>My sons social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.</p>
               </div>
              </div>
        </section>
    )
}