import style from "./Rightside.module.css"
export function Rightside(){
    return(
     <div className={ style.RightsideContainer} >
        <div className="upsideRight">
        <h6 className={style.SubContainer}> Welcome to Little Learners Academy </h6>
        <h1 className={style.Heading}> Where Young Minds Blossom
             and <span>Dreams Take Flight.</span> </h1>
             <p className={style.paragraph}>
             Our kinder garden school provides a nurturing and stimulating environment, fostering
              a love for learning that lasts a lifetime. Join us as we embark on an exciting 
              educational journey together!
             </p>
        </div>
    
             <div className={style.Statistics}>
               <div className={style.students}>
                <span>+7000</span>
                <p> Students Passed Out</p>
               </div>
               <div className={style.Awards}>
                <span>+37</span>
                <p> Awards & Recognitions</p>
               </div>
               <div className={style.experianse}>
                <span> +15</span>
                <p>Experience Educators</p>
               </div>
             </div>
     </div>  
    )
}