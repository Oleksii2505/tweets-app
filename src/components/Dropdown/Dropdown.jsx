import { filterValues } from "services/filterValues";
import { Select } from "./Dropdown.styled";

const options = [
    filterValues.all,
    filterValues.follow,
    filterValues.followings,
];

export const Dropdown = ({ selectedOption, setSelectedOption }) => {
    return (
      <Select
        name="selected-option"
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    );
  };