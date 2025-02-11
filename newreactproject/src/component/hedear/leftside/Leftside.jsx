import kids from "../../../assets/Kids.svg"
import Style from "./Leftside.module.css"

export function Leftside(){
return(
  <div>
    <img  src={kids} alt="Children" className={Style.kids1} />
  </div>
)
}