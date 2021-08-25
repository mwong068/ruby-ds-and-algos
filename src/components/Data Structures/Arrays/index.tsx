import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 45px;
`

const Divi = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px;
    h2 {
        font-size: 20px;
    }
`

export interface MainProps {
    // header: string;
}

export const Arrays = (props: MainProps) => (
    <Divi>
        <h1>Arrays</h1>
        <p>Arrays are the most basic data structure in my opinion and extremely widely used. You will run into all kinds of problems involving arrays, from the most basic of easy questions on leetcode to the most difficult.</p>
        <h3></h3>
    </Divi>
);