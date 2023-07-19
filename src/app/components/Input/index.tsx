import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../Icons/searchIcon";
import { Container, InputComponent } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

export function Input({value, handleChange, ...props}: InputProps) {
  return (
    <Container>
      <InputComponent onChange={(e) => handleChange(e.target.value)} value={value} {...props} />
      <SearchIcon />
    </Container>
  )
}