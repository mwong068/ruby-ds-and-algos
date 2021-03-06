import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    margin: auto;
`

const Header = styled.h1`
    font-size: 40px;
    padding: 30px;
    // width: 40%;
    margin: auto;
`

const MainText = styled.div`
    width: 70%;
    margin: auto;
    h2 {
        font-size: 20px;
    }
`

export interface MainProps {
    // header: string;
}

export const Main = (props: MainProps) => (
    <Container>
        <Header>
            Welcome to 
            <br></br>Data Structures and Algorithms
            <br></br>in Ruby
        </Header>
        <MainText>
            <h3>Hi there!</h3>
            <h3>Glad you could make it :)</h3>
            <p>I decided to compile this list of data structures and algorithms in Ruby to help anyone who decided they want to take technical interviews in Ruby, like me!</p>
            <p>So please take a look around and if you notice anything could use correcting, go ahead and shoot me an email. All contact info can be found in the contact tab.</p>
            <p>Thanks for stopping by! Enjoy your stay.</p>
        </MainText>
    </Container>
    // <Header>{props.header}</Header>
);