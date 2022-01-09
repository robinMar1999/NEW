# NEW CLI Tool

**This is a CLI tool to generate components built using Node.js**

## Installation

Clone this repo. Open terminal in the app directory and run these commands

```
$ npm i
$ npm i -g .
```

## Usage & Examples

#### To generate a MongoDB model in Node.js app

Run this command in the respective app.

```
$ new model <model_name>
```

model will be created in _src/models/_ directory of your app.
**Example**

```
$ new model rider
```

#### To generate a route in Node.js app

```
$ new route <route_name>
```

route will be created in _src/routes/_ directory of your app.
**Example**

```
$ new route rider
```

#### To generate a functional component in React app

Open terminal in react app and run following command.

```
$ new fcmp <component_name> [additional_path]
```

_Here additional_path is optional_
Functional component will be created in _src/components/[additional_path]/_

**Examples**

```
$ new fcomp layout
```

Following files will be created

1. _src/components/Layout/Layout.js_
2. _src/components/Layout/Layout.module.css_

```
$ new fcomp navbar Headers/Nav
```

Following files will be created

1. _src/components/Headers/Nav/Navbar.js_
2. _src/components/Headers/Nav/Navbar.module.css_
