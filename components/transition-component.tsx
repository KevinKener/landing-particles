//Instalo framer motion: https://motion.dev/docs/react-quick-start

"use client" //para que no de fallo con las importaciones

import { fadeIn } from "@/utils/motion-transitions"

import { motion } from "motion/react"

interface MotionTransitionProps {
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}


//Este componente realiza el movimiento del navbar al recargar la pagina generando el efecto de entrada desde la derecha.
//Efecto: Swipe
const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position, className } = props

    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>    
    );

}

export default MotionTransition;