import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './ItemCard';
import data from './data'
import Icon from './DayElements'

const PaseDia = () => {
  return (
    <>
      <h1> ESCUELA DE AVIACIÓN </h1>  
    { /*
        <h1 className="text-center mt-3">Todas las Cabañas</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return(
                            <ItemCard 
                                img= {item.img} 
                                title= {item.title} 
                                desc= {item.desc} 
                                price= {item.price} 
                                item={item} 
                                key= {index} 
                            />
                        )

                    })}

                </div>
            </section>
        */ }   
    </>
  )
}

export default PaseDia