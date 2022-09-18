import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const Input = styled.input`
  class: ;
  type: ${(props) => props.type};
  id: ${(props) => props.id};
  placeholder: ${(props) => props.placeholder};
  width: ${(props) => props.width};
`;
