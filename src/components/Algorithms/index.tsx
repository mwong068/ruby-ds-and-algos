import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 45px;
`

export interface MainProps {
    // header: string;
}

export const Algorithms = (props: MainProps) => (
    <div>
        <Header>Algorithms</Header>
    </div>
    // <Header>{props.header}</Header>
);