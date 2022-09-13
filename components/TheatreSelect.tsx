import { Select } from "@mantine/core";
import React from "react";
import { MasksTheater } from "tabler-icons-react";
import { useContextStore } from "../context/AuthContext";

const TheatreSelect = () => {
  const { theater, setTheater, theaterdata } = useContextStore();
  return (
    <div className="flex w-full h-full justify-center">
      <Select
        className="w-full px-2 m-2 sm:w-2/3"
        placeholder="Movie Theater"
        required
        searchable
        clearable
        allowDeselect
        size="md"
        icon={<MasksTheater size={16} />}
        value={theater}
        onChange={setTheater}
        data={theaterdata}
      />
    </div>
  );
};

export default TheatreSelect;
