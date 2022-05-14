import React from "react";
import classnames from "classnames";
import "./Cat404.scss";
import { Button } from "../../components";

export interface Cat404Props {
    size: number;
    onButtonClick?: any;
    isButton?: boolean;
    buttonLabel?: string;
    buttonColor?: string;
}

const Cat404 = ({
    size,
    onButtonClick,
    isButton,
    buttonLabel,
    buttonColor,
}: Cat404Props) => {
    return (
        <div id="cat-404" style={{ fontSize: `${size}px` }}>
            <div className="main-header">
                4
                <div className="cat-icon">
                    <img className="img" src="https://user-images.githubusercontent.com/9592408/168426033-dc2416ac-56e1-49c1-b3e1-a022e758bb3f.jpeg" width="100%" alt="cat" />
                </div>
                4
            </div>
            <div className="body">WHAT?! PAGE NOT FOUND</div>
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

export default Cat404;
