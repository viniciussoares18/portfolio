export interface VspMenuProps {
    email: {
        value: string,
        onClick: () => void
    };
    navProps: VspMenuNavProps;
};

export interface VspMenuNavProps {
    itens: {
        desc: string,
        onClick: () => void
    }[]
};