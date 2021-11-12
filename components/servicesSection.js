import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3, faFigma, faPhp, faLaravel, faPython, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import styles from './servicesSection.module.css'




const ServicesSectionContent = ({title, content}) => {

    return (
        <div className={styles.servicesSectionContent}>
        <h3 className={styles.servicesSectionContentTitle}>
          {title}
        </h3>

        <p className={styles.servicesSectionContentText}>
          {content}
        </p>

        <button className={styles.servicesSectionContentBtn}>
          Get Started with us
        </button>
      </div>
    )
}


const ServicesSectionIcons = ({icons}) => {
    return (
        <div className={styles.servicesSectionIcons}>

          {
            icons.map((icon, index) => 
              <div key={index}>
                <FontAwesomeIcon icon={icon} size="4x" />
              </div>)
          }


        {/* <div className={styles.servicesSectionBrandIconOne}>
          <FontAwesomeIcon icon={faReact} size="4x" />
        </div>

        <div className={styles.servicesSectionBrandIconTwo}>
          <FontAwesomeIcon icon={faHtml5} size="4x" />
        </div>
        <div className={styles.servicesSectionBrandIconThree}>
          <FontAwesomeIcon icon={faFigma} size="4x"/>
        </div>
        <div className={styles.servicesSectionBrandIconFour}>
          <FontAwesomeIcon icon={faCss3} size="4x"/>
        </div> */}
      </div>
    )
}



const ServicesSection = ({title, content, reversedLayout, theme, icons}) => {

    if(reversedLayout) {
      return (
        <div className={styles.servicesSection}
              style={{backgroundColor: theme.backgroundColor, color: theme.foregroundColor}}>
        <div className={styles.servicesContainer}>
          <ServicesSectionIcons icons={icons}/>
          <ServicesSectionContent title={title} content={content}/>
        </div>
      </div>
      )
    }

    else {
      return (
        <div className={styles.servicesSection} 
              style={{backgroundColor: theme.backgroundColor, color: theme.foregroundColor}}>
        <div className={styles.servicesContainer}>
         <ServicesSectionContent title={title} content={content}/>
         <ServicesSectionIcons icons={icons}/>
        </div>
      </div>
      )
    }
}



export default ServicesSection;