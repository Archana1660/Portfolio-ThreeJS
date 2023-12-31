import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { styles } from '../styles';
import { github } from '../assets';

import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

export const ProjectCard = ({ index, name, description, tags, image, source_code_link=null, website_link=null }) => {
  return <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        {source_code_link ? <div className="absolute inset-0 flex justify-end m-3">
          <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounder-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>: null}
      </div>
      <div className="mt-5">
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{ description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) =>
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>)}
      </div>
      <div className="text-xs pt-1" >Website: <a href={website_link} rel="noreferrer" target='_blank'>{`${website_link}`}</a></div>
    </div>
  </motion.div>
}

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  website_link: PropTypes.string
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Following project showcase my skills and experience through real-world examples of my work
        </motion.p>
      </div>
      <div className="mt-20 flex justify-evenly flex-wrap">
        {projects.map((project, index) => {
          return <ProjectCard key={`project-${index}`} index={ index}{...project} />
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'work');