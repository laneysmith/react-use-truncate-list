# @laney/use-truncate-list

> a hook that helps handle the logic of truncating long lists and revealing the rest when prompted

[![NPM](https://img.shields.io/npm/v/@laney/use-truncate-list.svg)](https://www.npmjs.com/package/@laney/use-truncate-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @laney/use-truncate-list
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@laney/use-truncate-list'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [laneysmith](https://github.com/laneysmith)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
