import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PaseDia from '../components/DayPass'
import ListRooms from '../components/DayPass/ListElements';
import { CartProvider } from 'react-use-cart';

const DayPassPage = () => {
  return (
    <>
        <CartProvider>
            <PaseDia />
            <ListRooms /> 
         </CartProvider>
    </>
  )
}

export default DayPassPage