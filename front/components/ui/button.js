import {motion} from 'framer-motion';


const CustomButton = ({func, text, classNameProp}) => {

  return (
    <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={func}
          className={classNameProp}
        >
          {text}
    </ motion.button>
  )
}

export default CustomButton;