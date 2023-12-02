import PropTypes from 'prop-types'
import info from "../assets/info.png"

export const HelperText = ({ message }) => {
    return  <div className='relative inline-block group ml-2'>
              <img className="inline-block border border-white-100 rounded-xl bg-white w-4" src={info} alt="information" />
                <div className='hidden absolute top-[-2.4rem] left-3 w-[10rem] bg-white text-black text-xs rounded-xl p-3  group-hover:block'>
        <p> {message}</p>
         </div>
         </div>
}

HelperText.propTypes = {
    message: PropTypes.string
}