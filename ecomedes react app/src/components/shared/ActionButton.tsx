import { FC } from "react";
import { ActionButtonProps } from "../../interface";

const ActionButton: FC<ActionButtonProps> = ({ children, className = '' }) => (
    <button className={className}>{children}</button>
);
export default ActionButton