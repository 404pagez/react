import React from "react";
import "./Warning404.stories";
import classnames from "classnames";
import "./Warning404.scss";
import { Button } from "../../components";
import { RiErrorWarningFill } from "react-icons/ri";

export interface Warning404Props {
    size: number;
    onButtonClick?: any;
    isButton?: boolean;
    buttonLabel?: string;
    color?: string;
    buttonColor?: string;
}

const Warning404 = ({
    size,
    onButtonClick,
    isButton,
    buttonLabel,
    buttonColor,
    color,
}: Warning404Props) => {
    return (
        <div id="warning-404" style={{ fontSize: `${size}px` }}>
            <div className="main-header">
                4{" "}
                <RiErrorWarningFill
                    size={size * 3.4}
                    color={typeof color === "string" ? color : "#000"}
                    style={{ verticalAlign: "sub" }}
                />{" "}
                4
            </div>
            <div className="body">Page Not Found</div>
            {isButton && (
                <div className="btn-box">
                    <Button
                        backgroundColor={
                            typeof buttonColor === "string"
                                ? buttonColor
                                : "#00a0ff"
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

export default Warning404;