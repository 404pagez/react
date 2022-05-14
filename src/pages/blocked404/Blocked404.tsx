import React from "react";
import classnames from "classnames";
import "./Blocked404.scss";
import { Button } from "../../components";

export interface Blocked404Props {
    size: number;
    onButtonClick?: any;
    isButton?: boolean;
    buttonLabel?: string;
    buttonColor?: string;
}

const Blocked404 = ({
    size,
    onButtonClick,
    isButton,
    buttonLabel,
    buttonColor,
}: Blocked404Props) => {
    return (
        <div id="blocked-404" style={{ fontSize: `${size}px` }}>
            <div className="left">
                <img className="img" src="https://user-images.githubusercontent.com/9592408/168425383-b77e11b1-201f-4d89-8664-67edcf66027b.jpeg" width="100%" alt="img"/>
            </div>
            <div className="right">
                <div
                    className="oops"
                    style={{
                        marginTop: `${isButton ? null : "0.5em"}`,
                    }}
                >
                    404
                </div>
                <div className="text"> {`PAGE NOT FOUND! :(`}</div>
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

export default Blocked404;
