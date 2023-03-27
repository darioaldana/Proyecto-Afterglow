import styles from"./HeroStyles.module.css";

function Hero(){
    return(<>
        <div className={styles.hero}>
            <div className={styles.hero_text}>
                <h1 className={styles.hero_text_h1}>Small steps for us, Big improvements for you!</h1>
                <p className={styles.hero_text_p}>Help is one click away</p>
                <a href="/login" className={styles.login_btn}>LOGIN</a>
                <a href="/register" className={styles.register_btn}>REGISTER</a>
            </div>
        </div>
    </>)
}

export default Hero;