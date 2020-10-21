import React from 'react';
import styled from 'styled-components';

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
    button: string;
}

export const Navigation = (props: NavigationProps) => (
    <Container>
        <Buttons>
            {/* <Button>
                <button>{props.button}</button>
            </Button> */}
            <Button>Home</Button>
            <Button>Data Structures</Button>
            <Button>Algorithms</Button>
            <Button>Interviews</Button>
            <Button>Why Ruby?</Button>
            <Button>Contact</Button>
        </Buttons>
    </Container>
);