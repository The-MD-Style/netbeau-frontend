import React from "react";
import styled from "@emotion/styled";

const List = styled.ul<Props>`
  display: ${(p) => (p.filteredData.length ? "flex" : "none")};
  flex-direction: column;
  gap: 5px;
  list-style: none;
  padding: 0;
  height: max-content;
  max-height: 500px;
  overflow-y: ${(p) => (p.filteredData.length < 17 ? "hidden" : "scroll")};
  border: 1px solid gray;
  min-width: 256px;
  width: max-content;
  padding: 10px;
`;

const ListElement = styled.li`
  height: 15px;
  border-bottom: 2px solid gray;
  border-left: 0px solid transparent;
  padding: 5px 10px;
  font-size: 18px;
  width: max-content;
  transition: 0.3s;
  &:hover {
    border-left: 10px solid transparent;
  }
`;

type Props = {
  filteredData: string[];
};

const VList: React.FC<Props> = (props: Props) => {
  return (
    <List filteredData={props.filteredData}>
      {props.filteredData.map((item: string) => (
        <ListElement key={item}>{item}</ListElement>
      ))}
    </List>
  );
};

export default VList;
