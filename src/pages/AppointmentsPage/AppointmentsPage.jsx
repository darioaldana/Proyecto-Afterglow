import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentsPage.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { Link, useNavigate } from "react-router-dom";

function AppointmentsPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [startHour, setStartHour] = useState(new Date());

  return (
    <div className="box">
      <div className="botones flex flex-col">
        <DatePicker
          className="datePicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          filterDate={(date) => date.getDay() != 6 && date.getDay() != 0}
          maxDate={new Date().setMonth(new Date().getMonth() + 1)}
        />

        <TimePicker
          className="timePicker"
          onChange={(hour) => setStartHour(hour)}
          minuteStep={60}
          maxTime="20:00:00"
          minTime="7:00:00"
          showSecond={false}
          maxDetail="hour"
          placeholder="7:00"
        />

        <Link>
          <button className='block h-16 bg-blue-600 text-white font-bold text-xl leading-6 cursor-pointer rounded-2xl w-60 hover:scale-105 hover:bg-blue-500  mt-20'>
            GO
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AppointmentsPage;
