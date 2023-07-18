import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../Icons/searchIcon";
import { Container, InputComponent } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputProps) {
  return (
    <Container>
      <InputComponent {...props} />
      <SearchIcon />
    </Container>
  )
}