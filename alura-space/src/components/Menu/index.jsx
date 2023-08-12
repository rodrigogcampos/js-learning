import home from '../../assets/icons/home-ativo.png';
import moreLiked from '../../assets/icons/mais-curtidas-inativo.png';
import moreViewed from '../../assets/icons/mais-vistas-inativo.png';
import newOnes from '../../assets/icons/novas-inativo.png';
import surpriseMe from '../../assets/icons/surpreenda-me-inativo.png';
import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="">Home</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={moreLiked} alt="" />
                    <a href="">More liked</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={moreViewed} alt="" />
                    <a href="">More viewed</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={newOnes} alt="" />
                    <a href="">New ones</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpriseMe} alt="" />
                    <a href="">Surprise-me</a>
                </li>
            </ul>
        </nav>
    )
}