import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 45px;
`

export interface MainProps {
    header: string;
}

export const Header = (props: MainProps) => (
    <Title>{props.header}</Title>
);