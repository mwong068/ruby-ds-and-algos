import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 45px;
`

export interface MainProps {
    // header: string;
}

export const Interviews = (props: MainProps) => (
    <div>
        <Header>Interviews</Header>
    </div>
    // <Header>{props.header}</Header>
);