import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 45px;
`

const List = styled.ul`
    list-style-type: none;
`

export interface MainProps {
    // header: string;
}

export const Ruby = (props: MainProps) => (
    <div>
        <Header>Why Ruby?</Header>
        <h3>That's a great question!</h3>
        <p>I chose Ruby as my interview language for a few reasons:</p>
        <List>
            <li>1. It's so easy to understand and learn!</li>
            <li>2. It has some great built in functions</li>
            <li>3. I learned it at Flatiron School and it's versatility has really stuck with me</li>
        </List>
    </div>
    // <Header>{props.header}</Header>
);