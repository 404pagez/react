import React from "react";
import classnames from "classnames";
import "./Pepe404.scss";
import { Button } from "../../components";

export interface Pepe404Props {
    size: number;
    onButtonClick?: any;
    isButton?: boolean;
    buttonLabel?: string;
    buttonColor?: string;
}

const Pepe404 = ({
    size,
    onButtonClick,
    isButton,
    buttonLabel,
    buttonColor,
}: Pepe404Props) => {
    return (
        <div id="pepe-404" style={{ fontSize: `${size}px` }}>
            <div className="main-header">
                4
                <div className="pepe-icon">
                    <img
                        className="img"
                        src="https://user-images.githubusercontent.com/9592408/168944058-0fea66d6-68e5-4f14-8f61-c79969e93f72.jpg"
                        width="100%"
                        alt="cat"
                    />
                </div>
                4
            </div>
            <div className="body">Aww...PAGE NOT FOUND</div>
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

export default Pepe404;
