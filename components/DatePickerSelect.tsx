import { DatePicker } from "@mantine/dates";
import React from "react";
import { Calendar } from "tabler-icons-react";
import { useContextStore } from "../context/AuthContext";

const DatePickerSelect = () => {
  const { date, dateChange } = useContextStore();

  return (
    <div className="flex w-full h-full justify-center">
      <DatePicker
        className="w-full px-2 m-2 sm:w-2/3"
        placeholder="Ticket Booking Date"
        required
        size="md"
        inputFormat="DD/MM/YYYY"
        icon={<Calendar size={16} />}
        value={date}
        onChange={dateChange}
      />
    </div>
  );
};

export default DatePickerSelect;
