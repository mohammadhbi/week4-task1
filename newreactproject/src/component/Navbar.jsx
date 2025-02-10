import { Downside } from "./DownSide"
import { Upside } from "./upside"
import styles from "./Navbar.module.css";
function Navbar(){
    return(
        <nav className={styles.Navbar}>
            <Upside />
           <Downside />
        </nav>
    )
}
export default Navbar