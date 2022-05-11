# @404pagez/react

This is a template of 404page for react.  
Making 404 pages is more troublesome than I thought. just use a 404page template to save your time.

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
-   [Warning404](#warning404)

## Props

### Simple404 <a id=simple404></a>

| props         | type       |                      |
| ------------- | ---------- | -------------------- |
| size          | number     | required             |
| onButtonClick | () => void | optional             |
| isButton      | boolean    | optional             |
| buttonLabel   | string     | optional             |
| buttonColor   | string     | optional(ex:#ffffff) |

### Warning404 <a id=warning404></a>

| props         | type       |                      |
| ------------- | ---------- | -------------------- |
| size          | number     | required             |
| onButtonClick | () => void | optional             |
| isButton      | boolean    | optional             |
| buttonLabel   | string     | optional             |
| buttonColor   | string     | optional(ex:#ffffff) |
| color         | string     | optional(ex:#ffffff) |

## License

<a href="https://github.com/404pagez/react/blob/HEAD/LICENSE">MIT</a>
