import { Leftside } from "./leftside/Leftside";
import { Rightside } from "./rightside/Rightside";
import style from "./headerstyle/Hedear.module.css"
export function Header(){
return(
    <header className={style.HedearContainer}>
           <Leftside/>
           <Rightside/>
    </header>
 
)
}