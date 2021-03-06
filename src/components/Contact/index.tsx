import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 45px;
`

export interface MainProps {
    // header: string;
}

export const Contact = (props: MainProps) => (
    <div>
        <Header>Contact</Header>
        <h2>My name is Megan!</h2>
        <p>You can find my github <a href="github.com/mwong068">here</a>.</p>
        <p>You can find my LinkedIn <a href="github.com/mwong068">here</a>.</p>
        <p>Or of course you can shoot me an email at mwong068@gmail.com</p>
    </div>
);