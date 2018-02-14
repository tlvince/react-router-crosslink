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

## Intended use case

Multiple "sub-apps", which are integrated together via a parent app. Sub apps should be able to run standalone and set up their own routing. The parent app "mounts" each sub-app under a child route (via [basename][]). Given basenames are prefixed to all URLs, the sub-app can't "break out" of its child route using traditional `<Link>`.

By passing the parent app's `history` to `<CrossLink>`, sub-apps can cross-link between themselves. See this [CodeSandbox][].

[basename]: https://github.com/ReactTraining/history#using-a-base-url
[CodeSandbox]: https://codesandbox.io/s/5yvrq309n

## Author

© 2018 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
