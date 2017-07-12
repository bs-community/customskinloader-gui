# CustomSkinLoader GUI (React 版)

在线试用：https://g-plane.github.io/customskinloader-gui-react/

[![Travis CI Build Status](https://travis-ci.org/g-plane/customskinloader-gui-react.svg?branch=master)](https://travis-ci.org/g-plane/customskinloader-gui-react)
[![Circle CI Build Status](https://circleci.com/gh/g-plane/customskinloader-gui-react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/g-plane/customskinloader-gui-react/)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva?svg=true)](https://ci.appveyor.com/project/g-plane/customskinloader-gui-react)

## 为什么会有这个？

考虑到 [CustomSkinLoader v2](https://github.com/g-plane/CustomSkinLoader-GUI) 的体积有些大（因为它基于 PyQt5 制作），也许有些人会难以接受。因此我做个 Web 版，它既可以放在电脑本地，然后直接双击并在浏览器中打开；也可以根据需要放在服务器。

## 与 CustomSkinLoader v2 相比

为了叙述方便，CustomSkinLoader v2 简称 Python 版。

- React 版可以在不加载已有的配置文件的情况下，从头开始，根据需要调整选项，新建一个适合自己需要的配置文件；而 Python 版在使用时必须打开现有的配置文件。

- React 版的体积极小，即使解压后也不足2MB，而 Python 版压缩后也要占用十多MB。

- React 版拥有完美的跨平台体验，包括移动端；Python 支持 Windows/Linux/macOS 三大平台。

- React 版是基于 Web 的，所以对浏览器有一定的要求（至少支持 ES5）；Python 版的只要能运行，就不会有其它兼容问题。

- React 版仅仅提供对 CSL 的配置文件修改；Python 版还提供了皮肤站连接测试、本地皮肤管理等功能（当然，也许你觉得这些是多余的）。

## Vue or React?

其实我是一个 Vue 粉，但这次我选择了 React。有人说过：Vue 更适合做 Web Pages，而 React 更适合做 Web App。我很认同这一点，并且对于这个项目而言，React 比较适合_（纯属个人看法）_，特别配合 TypeScript，开发体验也是挺不错的。

引用 Vue.js 官网的一句话：

> On a higher level, we can divide components into two categories: presentational ones and logical ones. We recommend using templates for presentational components and render function / JSX for logical ones.
