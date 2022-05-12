import React from "react";
import classnames from "classnames";
import "./Simple404.scss";
import { Button } from "../../components";

export interface Simple404Props {
    size: number;
    onButtonClick?: any;
    isButton?: boolean;
    buttonLabel?: string;
    buttonColor?: string;
}

const Simple404 = ({
    size,
    onButtonClick,
    isButton,
    buttonLabel,
    buttonColor,
}: Simple404Props) => {
    return (
        <div id="simple-404" style={{ fontSize: `${size}px` }}>
            <div className="main-header">4 0 4</div>
            <div className="body">Oops! Page Not Found</div>
            {isButton && (
                <div className="btn-box">
                    <Button
                        backgroundColor={
                            typeof buttonColor === "string"
                                ? buttonColor
                                : "#000"
                        }
                        label={
                            typeof buttonLabel === "string"
                                ? buttonLabel
                                : "back"
                        }
                        onClick={
                            typeof onButtonClick === "function"
                                ? onButtonClick
                                : null
                        }
                        fontSize={size}
                    />
                </div>
            )}
        </div>
    );
};

export default Simple404;
