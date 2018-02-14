# react-router-crosslink

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/react-router-crosslink
[travis-image]: https://img.shields.io/travis/tlvince/react-router-crosslink.svg
[npm-url]: https://www.npmjs.com/package/react-router-crosslink
[npm-image]: https://img.shields.io/npm/v/react-router-crosslink.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/react-router-crosslink.svg

> React Router Link with parametrised history

The same as React Router DOM `<Link>` except it supports optionally reading `history` as a prop.

```js
import CrossLink from 'react-router-crosslink'
import createHistory from 'history/createBrowserHistory'

// In practice, you'll probably be creating this elsewhere
const history = createHistory()

<CrossLink
  to='/'
  history={history}
/>
```

## Install

```shell
npm install --save react-router-crosslink
```

## Intended use case

Multiple "sub-apps", which are integrated together via a parent app. Sub apps should be able to run standalone and set up their own routing. The parent app "mounts" each sub-app under a child route (via [basename][]). Given basenames are prefixed to all URLs, the sub-app can't "break out" of its child route using traditional `<Link>`.

By passing the parent app's `history` to `<CrossLink>`, sub-apps can cross-link between themselves.

### Example

See this [CodeSandbox][] for a live example of the following:

```js
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import {
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import CrossLink from 'react-router-crosslink'

const SubApp1 = ({ basename }) =>
  <Router basename={basename}>
    <Fragment>
      <h2>Sub app 1</h2>
      <Link to='/app-2'>App 2</Link>
    </Fragment>
  </Router>

const SubApp2 = ({ basename }) =>
  <Router basename={basename}>
    <Fragment>
      <h2>Sub app 2</h2>
      <Link to='/app-1'>App 1</Link>
    </Fragment>
  </Router>

const SubApp3 = ({ basename, history }) =>
  <Router basename={basename}>
    <Fragment>
      <h2>Sub app 3</h2>
      <CrossLink to='/app-1' history={history}>App 1</CrossLink>
    </Fragment>
  </Router>

const App = () =>
  <Router>
    <Fragment>
      <h1>Parent App</h1>
      <p>Note the link in sub apps 1 and 2 do not work, but sub app 3 does</p>
      <ul>
        <li><Link to='/app-1'>Sub app 1</Link></li>
        <li><Link to='/app-2'>Sub app 2</Link></li>
        <li><Link to='/app-3'>Sub app 3</Link></li>
      </ul>
      <Route exact path='/app-1' component={() => <SubApp1 basename='/app-1' />} />
      <Route exact path='/app-2' component={() => <SubApp2 basename='/app-2' />} />
      <Route exact path='/app-3' component={({history}) => <SubApp3 basename='/app-3' history={history} />} />
    </Fragment>
  </Router>

render(<App />, document.getElementById('root'))
```

[basename]: https://github.com/ReactTraining/history#using-a-base-url
[CodeSandbox]: https://codesandbox.io/s/5yvrq309n

## Author

© 2018 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
