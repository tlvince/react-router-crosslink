# react-router-props-link

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/react-router-props-link
[travis-image]: https://img.shields.io/travis/tlvince/react-router-props-link.svg
[npm-url]: https://www.npmjs.com/package/react-router-props-link
[npm-image]: https://img.shields.io/npm/v/react-router-props-link.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/react-router-props-link.svg

> React Router DOM Link component using history from props

The same as React Router DOM `<Link>` except it supports optionally reading `history` as a prop.

```js
import Link from 'react-router-props-link'
import createHistory from 'history/createBrowserHistory'

// In practice, you'll probably be creating this elsewhere
const history = createHistory()

<Link
  to='/'
  history={history}
/>
```

## Author

© 2018 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
