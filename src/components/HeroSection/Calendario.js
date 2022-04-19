import React from 'react'
import { DatePicker } from "@material-ui/pickers";

const CalendarIn = () => {
  return (
    <div className='contenedor'>
        <div className='grupo'>
            <label>Fecha</label>
            <DatePicker />
        </div>
    </div>
  )
}

export default CalendarIn