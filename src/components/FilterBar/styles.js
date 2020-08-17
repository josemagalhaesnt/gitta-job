import styled from 'styled-components';

export const Container = styled.div`
    --container-pd: 1rem;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    width: calc(90vw - var(--container-pd));
    padding: 0 var(--container-pd);
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
