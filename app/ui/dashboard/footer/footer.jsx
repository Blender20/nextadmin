import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Gecko Printing</div>
            <div className={styles.text}>&copy; 2023 All rights reserved </div>
        </div>
    )
}

export default Footer