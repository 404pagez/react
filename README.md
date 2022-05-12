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
-   [Section404](#section404)

## Props

### Simple404 <a id=simple404></a>

<img src="https://user-images.githubusercontent.com/9592408/168017258-c1ed6816-522e-4e84-b832-24c7ec1a967a.png" alt="simple404" width="400" />

| props         | type       |                      |
| ------------- | ---------- | -------------------- |
| size          | number     | required             |
| onButtonClick | () => void | optional             |
| isButton      | boolean    | optional             |
| buttonLabel   | string     | optional             |
| buttonColor   | string     | optional(ex:#ffffff) |

<br />

### Warning404 <a id=warning404></a>

<img src="https://user-images.githubusercontent.com/9592408/168017173-ece897ad-e26f-416d-afd4-f4b4ad06d398.png" alt="warning404" width="400" />
| props         | type       |                      |
| ------------- | ---------- | -------------------- |
| size          | number     | required             |
| onButtonClick | () => void | optional             |
| isButton      | boolean    | optional             |
| buttonLabel   | string     | optional             |
| buttonColor   | string     | optional(ex:#ffffff) |
| color         | string     | optional(ex:#ffffff) |

<br />

### Section404 <a id=section404></a>

<img src="https://user-images.githubusercontent.com/9592408/168016963-a5df4b59-45d8-4208-84d9-8ecf64a2c125.png" alt="section404" width="400"/>

| props         | type       |                      |
| ------------- | ---------- | -------------------- |
| size          | number     | required             |
| onButtonClick | () => void | optional             |
| isButton      | boolean    | optional             |
| buttonLabel   | string     | optional             |
| buttonColor   | string     | optional(ex:#ffffff) |
| color         | string     | optional(ex:#ffffff) |

<br />
## License

<a href="https://github.com/404pagez/react/blob/HEAD/LICENSE">MIT</a>
