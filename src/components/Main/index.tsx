import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 45px;
`

const MainText = styled.div`
    width: 70%;
    margin-left: 170px;
`

export interface MainProps {
    // header: string;
}

export const Main = (props: MainProps) => (
    <div>
        <Header>Welcome to Data Structures and Algorithms in Ruby</Header>
        <MainText>
            <h2>Hi there!</h2>
            <h2>Glad you could make it :)</h2>
            <h2>I decided to compile this list of data structures and algorithms in Ruby to help anyone who decided they want to take technical interviews in Ruby, like me!</h2>
            <h2>So please take a look around and if you notice anything could use correcting, go ahead and shoot me an email. All contact info can be found in the contact tab.</h2>
            <h2>Thanks for stopping by! Enjoy your stay.</h2>
        </MainText>
    </div>
    // <Header>{props.header}</Header>
);