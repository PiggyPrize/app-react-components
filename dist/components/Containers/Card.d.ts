import React from 'react';
export declare const CardTheme: Readonly<{
    default: string;
    purple: string;
}>;
export interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    theme: string;
    style?: object;
    roundedClassName?: string;
    backgroundClassName?: string;
    sizeClassName: string;
    paddingClassName: string;
}
export declare const Card: {
    (props: CardProps): JSX.Element;
    defaultProps: {
        paddingClassName: string;
        sizeClassName: string;
        theme: string;
    };
};
