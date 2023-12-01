import {useState} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { HelperText } from '../utils/HelperText'

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  }
  const [theForm, setTheForm] = useState(initialValues)
  const [loading, setLoading] = useState(false)
  const [formErrorMessage, setErrorMessage] = useState({})

  function validateForm(value) {
    let errors={}
    if (value.name.length < 3) {
      errors.name = 'error'
    }
    if (!value.email) {
      errors.email = null
    }
    if (!value.message.length < 4) {
      errors.message = 'error'
    }
    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheForm({...theForm, [name]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validateForm(theForm))   
  }

  let isEnabled = theForm.name && theForm.email && theForm.message
  
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'
      >
        <label htmlFor="name" className='flex flex-col'>
            <div>
              <span className='text-white font-medium mb-4'>Your name</span>
              <HelperText message={`Please enter minimum 3 letters`}/>

            </div>
            <input type="text" name="name" value={theForm.name} onChange={handleChange} placeholder="Name" className='bg-tetiary py-4 px-6 placeholder:text-secondary text-white rounder-lg outlined-none border-none font-medum' />
            <span className={`text-xs ${(formErrorMessage.name !== 'error')?`text-white-500`:`text-red-500`}`}>Please enter minimum 3 letters</span>
           
        </label>
          <label htmlFor="name" className='flex flex-col'>
            <div className='relative inline-block group'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <HelperText message={`Please enter valid email id. e.g. xyz@gmail.com`} />

              
            </div>
            <input type="email" name="email" value={theForm.email} onChange={handleChange} placeholder="Email" className='bg-tetiary py-4 px-6 placeholder:text-secondary text-white rounder-lg outlined-none border-none font-medum' />
            <span className={`text-xs ${(formErrorMessage.email !== 'error')?`text-white-500`:`text-red-500`}`}>Please enter valid email address</span>
        </label>
          <label htmlFor="name" className='flex flex-col'>
            <div className='relative inline-block group'>
              <span className='text-white font-medium mb-4'>Your message</span>
              <HelperText message={`Please enter minimum 4 letters`} />

              
            </div>
            <textarea rows="7" name="message" value={theForm.message} onChange={handleChange} placeholder="Message"
            className='bg-tetiary px-6 placeholder:text-secondary text-white rounder-lg outlined-none border-none font-medum'/>
           <span className={`text-xs ${(formErrorMessage.message !== 'error')?`text-white-500`:`text-red-500`}`}>Please enter your message</span>
            
          
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' disabled={!isEnabled}>{ loading ? 'Sending...': 'Send'}</button>
      </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md-h-[550px] h-[350px]'>
      <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')