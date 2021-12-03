import React from 'react';
export interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    label: string;
    children?: React.ReactNode;
    className?: string;
    style?: object;
    noPad?: boolean;
    noSize?: boolean;
    noBgColor?: boolean;
    noTextColor?: boolean;
    noRoundCorners?: boolean;
}
export declare const Modal: {
    (props: ModalProps): JSX.Element;
    defaultProps: {
        noPad: boolean;
        noSize: boolean;
    };
};
