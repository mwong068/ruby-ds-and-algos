import React from 'react';
export interface MainProps {
    header: string;
}

export const Main = (props: MainProps) => (
    <h1>
        {props.header} Data Structures and Algorithms in Ruby
    </h1>
);