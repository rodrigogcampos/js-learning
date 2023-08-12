import Header from "../../components/Header";
import Menu from "../../components/Menu";
import banner from "./banner.png";
import styles from './HomePage.module.scss';

export default function HomePage() {
    return (
        <>
            <Header/>
            <main>
                <section className={styles.mainsection}>
                    <Menu/>        
                    <div className={styles.mainsection__image}>
                        <h1> The complete gallery from space</h1>
                        <img src={banner} alt="Earth seen from space" />
                    </div>
                </section>
            </main>
        </>
    )
}