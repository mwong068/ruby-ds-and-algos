import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 45px;
`

export interface MainProps {
    header: string;
}

export const Main = (props: MainProps) => (
    <Header>{props.header}</Header>
);