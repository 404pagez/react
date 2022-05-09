import React from "react";
import './Simple404.stories';
import classnames from 'classnames';
import './Simple404.scss';

interface Simple404Props {
  size?: number;
}

const Simple404 = ({ size }: Simple404Props) => {
  return (
    <div
      id="simple-404"
      style={{ fontSize: `${size}px`}}
    >
      <div
        className="main-header"
      >
        4 0 4
      </div>
      <div className="body">
        Oops! Page Not Found
      </div>
    </div>
  )
};

export default Simple404;