import styled from 'styled-components';
import { borderFeedback } from '../../assets/mixins';
import { cssVar } from 'polished';

export const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem 1.5rem; 
`;

export const StyledSearchInput = styled.input`
    display: flex;
    flex: 1;
    padding: 1rem 1.75rem;

    color: var(--color-black);
    border-radius: 1rem;
    font: 1.6rem Roboto;
    ${borderFeedback(2, cssVar('--color-light-grey'))};
`;
