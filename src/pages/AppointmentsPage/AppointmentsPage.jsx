import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './AppointmentsPage.css'
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

function App() {
    const [startDate, setStartDate] = useState(new Date());
    const [startHour, setStartHour] = useState(new Date());
  
    return (
      <div className='box'>

        <DatePicker className='datePicker'
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        
        dateFormat = "dd/MM/yyyy"
        minDate = {new Date()}
        filterDate = {date => date.getDay() != 6 && date.getDay() != 0}
        maxDate={new Date().setMonth(new Date().getMonth()+1)}
        />

        <TimePicker 
        onChange={(hour) => setStartHour(hour)} 
        className='timePicker'
        minuteStep={60}
        maxTime = "20:00:00"
        minTime = "7:00:00"
        showSecond={false}
        maxDetail = "hour" 
        placeholder = "7:00"
        />
  
      </div>
    );
  
  }
  
  export default App
  