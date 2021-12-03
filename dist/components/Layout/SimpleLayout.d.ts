import React, { ReactNode } from 'react';
interface SimpleLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    header?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
}
export declare const SimpleLayout: (props: SimpleLayoutProps) => JSX.Element;
export {};
