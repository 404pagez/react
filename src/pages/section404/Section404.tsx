import React from "react";
import classnames from "classnames";
import "./Section404.scss";
import { Button } from "../../components";

export interface Section404Props {
    size: number;
    onButtonClick?: any;
    isButton?: boolean;
    buttonLabel?: string;
    buttonColor?: string;
    color?: string;
}

const Section404 = ({
    size,
    onButtonClick,
    isButton,
    buttonLabel,
    buttonColor,
    color,
}: Section404Props) => {
    return (
        <div id="section-404" style={{ fontSize: `${size}px` }}>
            <div className="left">
                <div
                    className="section-icon"
                    style={{
                        backgroundColor: `${
                            typeof color === "string" ? color : "#000"
                        }`,
                    }}
                ></div>
            </div>
            <div className="right">
                <div
                    className="oops"
                    style={{
                        marginTop: `${isButton ? null : "0.5em"}`,
                    }}
                >
                    Oops!
                </div>
                <div className="text">That Page doesn't exist</div>
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
        </div>
    );
};

export default Section404;
