import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

export const ServiceCard = ({index, title, icon}) => {
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className='text-white text-[20px] font-bold text-center'>{ title}</h3>
      </div>
     </motion.div>
   </Tilt>
}

ServiceCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
icon: PropTypes.string
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionSubText}>Introduction</h2>
      <h2 className={styles.sectionHeadText}>About me.</h2>
    </motion.div>
      <div className='flex justify-between'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] w-2/4 leading-[30px]'>
        Front-end developer with 6+ years of experience in creating User Interfaces using HTML5, CSS3, JavaScript, jQuery, and
ReactJS. Seeking to leverage expertise in to contribute effectively to a dynamic tech company   </motion.p>
      
      <div className="flex justify-center w-2/4">
        {services.map((service, index) => {
       return   <ServiceCard key={ service.title} index={index} {...service} />
        })}
        </div>
        </div>
    </>
  )
}

export default SectionWrapper(About, "about")