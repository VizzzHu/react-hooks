import React from 'react';

export const themes = {
    light: {
        fontColor: 'blue',
        backgroundColor: 'white',
    },
    dark: {
        fontColor: 'white',
        backgroundColor: 'gray',
    },
}

export const ThemeContext = React.createContext(
    themes.light
);
