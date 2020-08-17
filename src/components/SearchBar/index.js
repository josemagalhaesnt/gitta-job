import React from 'react';

import { StyledSearchBar, StyledSearchInput } from './styles';

const SearchBar = ({ placeholder }) => {

  return (
    <StyledSearchBar>
      <StyledSearchInput placeholder={placeholder} />
    </StyledSearchBar>
  );
};

export default SearchBar;
