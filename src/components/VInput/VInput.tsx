import React from "react";
import styled from "@emotion/styled";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchInput: string;
};

const StyledInput = styled.input`
  border: 2px solid black;
  background: transparent;
  color: black;
  padding: 5px 15px;
  font-size: 15px;
  width: 256px;
  &:focus {
    outline: none;
  }
`;

const VInput: React.FC<Props> = (props: Props) => {
  return (
    <StyledInput
      type="text"
      placeholder="Search..."
      onChange={props.handleChange}
      value={props.searchInput}
    />
  );
};

export default VInput;
