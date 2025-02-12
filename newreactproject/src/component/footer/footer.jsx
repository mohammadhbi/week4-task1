import { Upsidefooter } from "./upsidefooter/upside"
import style from "./footer.module.css"
export function Footer(){
    return(
        <footer className={style.footer}>
            <Upsidefooter/>
        </footer>
    )
}