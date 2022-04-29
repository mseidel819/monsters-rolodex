import { ChangeEvent } from "react";
import "./search-box.style.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
