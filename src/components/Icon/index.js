import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-right: 2px;
    color: ${(props) => (!props.color ? props.theme.colors.text : props.color)};
`;

export const Icon = ({ color, children })=> {
    return (
        <StyledIcon className="Icon" color={color}>
            {children}
        </StyledIcon>
    );
};
