//Generar 2 constantes que van a tener las transisiones con Motion

import { Opacity } from "@tsparticles/engine"

//Encargada de la pagina completa
export const transitionVariantsPage = {
    initial: {
        x: "100%",
        width: "100%"
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    }
}

//Transision para cuando aparezcan los objetos y animaciones
export const fadeIn = (position: string) => {
    return {
        visible: {
            y: 0,
            x:0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        },
        hidden: {
            y: position === 'bottom' ? -80 : 0,
            x: position === 'right' ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}