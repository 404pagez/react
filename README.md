# @404pagez/react

This is a template of 404page for react.  
Making 404 pages is more troublesome than I thought.  
just use a 404page template to save your time.

## Install

```
npm install @404pagez/react
```

## Usage

```javascript
import { Simple404 } from "@404pagez/react";

const NotFound = () => {
    return (
        <div>
            <Simple404 size={20} isButton={false} />
        </div>
    );
};
```

## 404pages

-   [Simple404](#simple404)

## Props

### Simple404 <a id=simple-404></a>

| props         | type       |          |
| ------------- | ---------- | -------- |
| size          | number     | required |
| onButtonClick | () => void | optional |
| isButton      | boolean    | optional |
| buttonLabel   | string     | optional |
