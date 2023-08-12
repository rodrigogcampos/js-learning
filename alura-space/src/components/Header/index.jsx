import logo from './logo.png'
import search from './search.png'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Alura Space logo" />
            <div className={styles.header__container}>
                <input className={styles.header__input}
                    type="text"
                    placeholder="Type your search"
                />
                <img src={search} alt="Search icon" />
            </div>
        </header>
    )
}