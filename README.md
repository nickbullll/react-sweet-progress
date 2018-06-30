React Sweet Progress
=================
[![npm version](https://badge.fury.io/js/react-sweet-progress.svg)](https://badge.fury.io/js/react-sweet-progress)

A way to quickly add a react progress bar to your app 🌈

![Imgur](http://i.imgur.com/Lhn7hqC.gif)

Basic Usage
-----

1. Install via npm and yarn

    ```
    npm i -S react-sweet-progress

    // or

    yarn add react-sweet-progress
    ```
2. Import `Progress` and progress bar styles

    ```
    import { Progress } from 'react-sweet-progress';
    import "react-sweet-progress/lib/style.css";
    ```
3. Enjoy
    ```
    <Progress percent={88} status="success" />
    ```

  ![Imgur](http://i.imgur.com/f6amLHz.png)

  ```
  <Progress type="circle" percent={100} status="success" />
  ```

  ![Imgur](http://i.imgur.com/YdBD14Tm.png)

Customize
-----

Basic steps to customize React progress bar.

### Percent 🏹

`Percent` cant set the completion percentage of progress bar.

```
<Progress />
```

![Imgur](http://i.imgur.com/Z5HNIL4.png)

---

```
<Progress
  percent={69}
/>
```

![Imgur](http://i.imgur.com/YRSANGi.png)

### Status ⭐

You can use 3 status types:  `active`, `error`, `success`. By default `status` equal to `success` when `percent` is `100`.

```
<Progress
  percent={88}
  status="success"
/>
```
![Imgur](http://i.imgur.com/f6amLHz.png)

---

```
<Progress
  percent={43}
  status="error"
/>
```

![Imgur](http://i.imgur.com/DqWdfud.png)

### Exotic theme 🔥

With `theme` param you can customize icons and styles of the progress bar.

```
<Progress
  theme={{
    success: {
      symbol: '🏄‍',
      color: 'rgb(223, 105, 180)'
    },
    active: {
      symbol: '😀',
      color: '#fbc630'
    },
    default: {
      symbol: '😱',
      color: '#fbc630'
    }
  }}
/>
```

![Imgur](http://i.imgur.com/bJmhojg.png)
![Imgur](http://i.imgur.com/VK7AoHd.png)
![Imgur](http://i.imgur.com/fTcn96g.png)

If you don't specify the theme `trail color`, then the deafult value of `#efefef` will be used.
```
<Progress
  theme={
    {
      error: {
        symbol: this.state.percent + '%',
        trailColor: 'pink',
        color: 'red'
      },
      default: {
        symbol: this.state.percent + '%',
        trailColor: 'lightblue',
        color: 'blue'
      },
      active: {
        symbol: this.state.percent + '%',
        trailColor: 'yellow',
        color: 'orange'
      },
      success: {
        symbol: this.state.percent + '%',
        trailColor: 'lime',
        color: 'green'
      }
    }
  }
/>
```
![Imgur](https://i.imgur.com/QUu7ygb.gif)

If you don't pass custom `status` then it will use the default color theme.

```
<Progress
  theme={{
    success: {
      symbol: '🏄‍',
      color: 'rgb(223, 105, 180)'
    }
  }}
/>
```

![Imgur](http://i.imgur.com/Z5HNIL4.png)
![Imgur](http://i.imgur.com/cStkEcG.png)
![Imgur](http://i.imgur.com/fTcn96g.png)

Also you can use the `status` param.

```
<Progress
  percent={100}
  status="error"
  theme={{
    error: {
      symbol: '🤔',
      color: '#fbc630'
    }
  }}
/>
```

![Imgur](http://i.imgur.com/ZF95CSp.png)

### Circle width 😲

`Width` param can set the size of `circle` progress bar, also it's set `font` and `icon` sizes automatically.

```
<Progress
  type="circle"
  width={70}
  percent={70}
/>
<Progress
  type="circle"
  percent={30}
/>
```

![Imgur](http://i.imgur.com/pkwejEs.png)

### Circle strokeWidth 🤗

With `strokeWidth` param you can customize the `path` circle `strokeWidth`.

```
<Progress
  type="circle"
  strokeWidth={3}
  percent={70}
/>
<Progress
  type="circle"
  percent={30}
/>
```

![Imgur](http://i.imgur.com/qH4xv4B.png)

## API

### Progress

| Property | Description                                                                            | Type          | Default |
|----------|----------------------------------------------------------------------------------------|---------------|---------|
| percent     | set the completion percentage                                      | number        | 0    |
| status   |  set the status of the progress, options: `success`, `error`, `active`           | string        | -       |
| theme    | set the custom styles of the progress, options: `[status]: { color: [string], trailColor: [string], symbol: '[any]'}`            | object        | -       |
| style       | set the custom style of the react progress bar | object | -       |
| type       | set the type of the progress bar, options: `circle` | string | -       |
| width       | set sizes of progress bar type `circle` | number | 132       |
| strokeWidth       | set strokeWidth of progress bar type `circle` | number | 6       |
| className       | set the custom `class` of the react progress bar                         | object | -       |
| symbolClassName       | set the `symbol` custom `class`                          | object | -       |

Supported Browsers
---
`React Sweet Porgress` designed to support the latest web browsers. We support the current versions of Chrome, Firefox, Safari, Microsoft Edge and Internet Explorer 11. Also support the latest mobile browsers.


How to run example locally ?
---
1. `git clone https://github.com/abraztsov/react-sweet-progress.git`
2. `cd react-sweet-progress`
3. `npm start`
4. Go to `localhost:8080`

Feature Requests / Find Bug ?
---

Have an idea for a package or a feature you'd love to see in ReactSimpleFlexGrid? Search for existing GitHub issues and join the conversation or create new!


FAQ
-----

This component based on [ant design progress]( https://ant.design/components/progress/). Huge thanks them for a such an awesome work.

Future Plans
-----
- [x] Create `Circle` progress
- [ ] Add flexibility to custom styles

### Updates

1.1.1 Trail color can now be specified by a progress theme.

1.1.0 Added `Circle` progress

1.0.0 First release
