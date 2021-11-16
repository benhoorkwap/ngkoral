import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3, faFigma, faPhp, faLaravel, faPython, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import styles from './mobileServicesSection.module.css'



const FrontEndSectionContent = ({title, contentText}) => {
    return(
        <div className={styles.frontEndSectionContent}>
        <h3 className={styles.frontEndSectionContentTitle}>
            {title}
        </h3>

        <p className={styles.frontEndSectionContentText}>
            {contentText}
        </p>
        <button className={styles.frontEndSectionContentBtn}>
            Get Started with us
        </button>
        </div>
    )
}


const FrontEndSectionIcons = ({icons}) => {
    return(
        <div className={styles.frontEndSectionIcons}>
            {
            icons.map((icon, index) => 
              <div key={index}>
                <FontAwesomeIcon icon={icon} size="2x" />
              </div>)
          }
        {/* <div>
            <FontAwesomeIcon icon={faReact} size="2x" color="white"/>
        </div>

        <div>
            <FontAwesomeIcon icon={faHtml5} size="2x" color="white"/>
        </div>
        <div>
            <FontAwesomeIcon icon={faFigma} size="2x" color="white"/>
        </div>
        <div>
            <FontAwesomeIcon icon={faCss3} size="2x" color="white"/>
        </div> */}
    </div>
    )
}


const FrontEndSection = ({title, contentText, reversedLayout, theme, icons, iconSize}) => {
    return(
        <div className={styles.frontEndSection}
            style={{backgroundColor: theme.backgroundColor, color: theme.foregroundColor}}>
            <div className={styles.frontEndSectionContainer}>
                <FrontEndSectionIcons icons={icons} iconSize={iconSize}/>
                <FrontEndSectionContent title={title} contentText={contentText}/>
            </div>

        </div>
    )

}

export default FrontEndSection