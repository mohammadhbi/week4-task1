import style from "../mainSecton/mainsection.module.css"
import { Sectionmidlle } from "./sectionmidlle/sectionmiddle"
import { Sectiontop } from "./sectiontop/sectiontop"
import {Sectionbottom} from "../mainSecton/sectionbottom/sectionbottom"
export function MainSection(){
    return(
        <main className={style.MainSection}>
            <Sectiontop/>
            <Sectionmidlle/>
            <Sectionbottom/>
        </main>
    )
}