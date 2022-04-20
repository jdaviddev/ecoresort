import imgSuite from '../../images/rooms/room2.jpg'
import imgPareja from '../../images/rooms/room3.jpg'
import imgAmigos from '../../images/rooms/room1.jpg'
import imgNormal from '../../images/rooms/room4.jpg'
import imgFamiliar from '../../images/rooms/room5.jpg'

const data = {
    productData:[
        {
            id: 1,
            img: imgSuite,
            title: 'Suites',
            desc: 'Hermosa habitación con Jacuzzi',
            price: 45,
        },

        {
            id: 2,
            img: imgPareja,
            title: 'Habitación Matrimonial',
            desc: 'Hermosa habitación para pareja',
            price: 30,
        },

        {
            id: 3,
            img: imgAmigos,
            title: 'Habitación entre Amigos',
            desc: 'Hermosa habitación Amigos',
            price: 27,
        },

        {
            id: 4,
            img: imgNormal,
            title: 'Habitación para el día',
            desc: 'Habitación familiar pequeña',
            price: 27,
        },
   
        {
            id: 5,
            img: imgFamiliar,
            title: 'Habitaciones Familiares',
            desc: 'Habitación familiar grande',
            price: 35,
        },
    ]
}

export default data;