import React from "react";
import "./Simple404.stories";
import classnames from "classnames";
import "./Simple404.scss";
import { Button } from "../../components";

export interface Simple404Props {
    size: number;
    onButtonClick?: any;
    isButton?: boolean;
    buttonLabel?: string;
}

const Simple404 = ({
    size,
    onButtonClick,
    isButton,
    buttonLabel,
}: Simple404Props) => {
    return (
        <div id="simple-404" style={{ fontSize: `${size}px` }}>
            <div className="main-header">4 0 4</div>
            <div className="body">Oops! Page Not Found</div>
            {isButton && (
                <div className="btn-box">
                    <Button
                        label={buttonLabel || "back"}
                        onClick={onButtonClick}
                        fontSize={size}
                    />
                </div>
            )}
        </div>
    );
};

export default Simple404;
