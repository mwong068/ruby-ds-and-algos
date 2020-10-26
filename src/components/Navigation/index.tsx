import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    border-right: 1px dotted black;
`

const Buttons = styled.ul`
    font-size: 30px;
    list-style: none;
    padding: 0px 20px;
`

const Button = styled.li`
    padding: 20px; 
`

export interface NavigationProps {
    children?: any
    button: string;
}

export const Navigation = (props: NavigationProps) => (
    <Container>
        <Buttons>
            <Button><Link to="/" >Home</Link></Button>
            <Button><Link to="/datastructures" >Data Structures</Link></Button>
            <Button><Link to="/algorithms">Algorithms</Link></Button>
            <Button><Link to="/interviews">Interviews</Link></Button>
            <Button><Link to="/whyruby">Why Ruby?</Link></Button>
            <Button><Link to="/contact">Contact</Link></Button>
        </Buttons>
    </Container>
);