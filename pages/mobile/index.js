import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3, faFigma, faPhp, faLaravel, faPython, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faDatabase, faFontAwesomeFlag } from '@fortawesome/free-solid-svg-icons'

import styles from '../../styles/mobile.module.css'



export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
            <title>Todo App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.brandNameContainer}>
                <Link href='/'>
                    <a className={styles.brandName}>KORAL NG</a>
                </Link>
                </div>
                <div className={styles.hamburgerMenu}>
                    <button className={styles.hamburgerMenuBtn}>
                        <FontAwesomeIcon icon={faBars} size="1x" color="white"></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </header>
        </div>
    )

}