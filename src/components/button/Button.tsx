import React from "react";
import "./Button.scss";
import classnames from "classnames";

export interface ButtonProps {
    label: string;
    size?: number;
    backgroundColor?: string;
    fontColor?: string;
    fontSize?: number;
    onClick: any;
    disabled?: boolean;
}

const Button = ({
    label,
    size,
    backgroundColor,
    fontColor,
    fontSize,
    onClick,
    disabled,
}: ButtonProps) => {
    return (
        <div id="common-button">
            <button
                className={classnames("btn")}
                onClick={onClick}
                style={{
                    padding: `${size || 10}px ${(size || 10) * 2}px`,
                    backgroundColor: `${backgroundColor}`,
                    color: `${fontColor}`,
                    // fontSize: `${fontSize}px`,
                }}
                disabled={disabled}
            >
                {label}
            </button>
        </div>
    );
};

export default Button;
