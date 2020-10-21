import React from 'react';
export interface NavigationProps {
    button: string;
}

export const Navigation = (props: NavigationProps) => (
    <div>
        <h1>Hi</h1>
        <button>{props.button}</button>    
    </div>
);