import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Arrays } from './Arrays';

const Header = styled.h1`
    font-size: 45px;
`

export interface MainProps {
    // header: string;
}

export const DataStructures = (props: MainProps) => (
    <div>
        <Header>Data Structures</Header>
        <Link to="/datastructures/arrays" >Arrays</Link>
    </div>
    // <Header>{props.header}</Header>
);