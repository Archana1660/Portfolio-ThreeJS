import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formRef = useRef()
  const [theForm, setTheForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  console.log(theForm);

  const [loading, setLoading] = useState(false)
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({name, value})
    setTheForm({...theForm, [name]:value })
  }
  const handleSubmit = (e) => {
    e.preventHandler();
    setLoading(true)
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      <form ref={formRef}
        onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'
      >
        <label htmlFor="name" className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your name</span>
          <input type="text" name="name" value={theForm.name} onChange={handleChange}  placeholder="what's your name" className='bg-tetiary py-4 px-6 placeholder:text-secondary text-white rounder-lg outlined-none border-none font-medum'/>
        </label>
        <label htmlFor="name" className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your email</span>
          <input type="text" name="email" value={theForm.email} onChange={handleChange}  placeholder="what's your email" className='bg-tetiary py-4 px-6 placeholder:text-secondary text-white rounder-lg outlined-none border-none font-medum'/>
        </label>
        <label htmlFor="name" className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your name</span>
            <textarea rows="7" name="message" value={theForm.message} onChange={handleChange} placeholder="what's your message"
            className='bg-tetiary py-4 px-6 placeholder:text-secondary text-white rounder-lg outlined-none border-none font-medum'/>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{ loading ? 'Sending...': 'Send'}</button>
      </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md-h-[550px] h-[350px]'>
<EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')