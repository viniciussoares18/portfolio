export interface VspTextProps {
    onHover?: {
        color?: string;
        cursorPointer?: boolean; 
    },
    styleType?: string;
    fontWeight?: string;
    color?: string;
    onClick?: () => void;
    content?: string
};