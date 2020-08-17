import React from 'react';

import { Container } from './styles';
import SearchBar from '../SearchBar';

const FilterBar = () => {

  return (
    <Container>
      <SearchBar placeholder="Filter by title, benefits, companies, expertise" />
      <SearchBar placeholder="Filter by city, state, zip code or country" />
    </Container>
  );
};

export default FilterBar;
