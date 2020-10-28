import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    border-right: 1px dotted black;
    background-color: #316e6f;
`

const Buttons = styled.ul`
    font-size: 20px;
    list-style: none;
    padding: 0px 20px;
`

const Button = styled.li`
    padding: 20px;
    
    .link {
        color: white;
        text-decoration: none;
    }

    .link:hover {
        border-bottom: 1px solid white;
    }
`

export interface NavigationProps {
    children?: any
    button: string;
}

export const Navigation = (props: NavigationProps) => (
    <Container>
        <Buttons>
            <Button><Link to="/" className="link">Home</Link></Button>
            <Button><Link to="/datastructures" className="link">Data Structures</Link></Button>
            <Button><Link to="/algorithms" className="link">Algorithms</Link></Button>
            <Button><Link to="/interviews" className="link">Interviews</Link></Button>
            <Button><Link to="/whyruby" className="link">Why Ruby?</Link></Button>
            <Button><Link to="/contact" className="link">Contact</Link></Button>
        </Buttons>
    </Container>
);