import React, {useState} from 'react'
import PromoSection from '../components/Promociones'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import DataPromociones from '../components/Promociones/DataPromo'

const Promociones = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
      <>
        <Sidebar isOpen = {isOpen} toggle = {toggle} />
        <Navbar toggle = {toggle}  />
        <PromoSection />
        <DataPromociones />
        <Footer />
      </>
    )
  }
  
  export default Promociones