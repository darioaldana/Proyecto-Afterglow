import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentsPage.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

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
      </div>
    </div>
  );
}

export default AppointmentsPage;
