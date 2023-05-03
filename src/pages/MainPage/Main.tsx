import styled from "@emotion/styled";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import VInput from "../../components/VInput/VInput";
import VList from "../../components/VList/VList";

import { DATASET } from "../../data/fillData";

type Props = {};

const MainBlock = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Main: React.FC<Props> = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [query, setQuery] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setQuery(() => ({ name: value }));

    setFilteredData(
      value.length
        ? DATASET.filter((item: string) => {
            if (!e.target.value) return item;
            return item.toLowerCase().match(value.toLowerCase());
          })
        : []
    );
    setSearchInput(value);
  };

  return (
    <MainBlock>
      <VInput handleChange={handleChange} searchInput={searchInput}></VInput>
      <VList filteredData={filteredData}></VList>
    </MainBlock>
  );
};

export default Main;
