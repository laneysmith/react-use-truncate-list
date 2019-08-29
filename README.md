# @laney/react-use-truncate-list

> a hook that helps handle the logic of truncating long lists and revealing the rest when prompted

[![NPM](https://img.shields.io/npm/v/@laney/react-use-truncate-list.svg)](https://www.npmjs.com/package/@laney/react-use-truncate-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @laney/react-use-truncate-list
```

## Usage

```jsx
const App = () => {
  const cheeses = [
  'Brie',
  'Cheddar',
  'Chhurpi',
  'Goat',
  'Gouda',
  'Havarti',
  'Provolone',
  'Raclette',
  'Roquefort',
  'Swiss'
  ]

  const {
    displayed,
    remaining,
    displayAllAction,
    truncateAction
  } = useTruncateList(cheeses.length)

  return (
    <div>
      <h1>Cheeses!</h1>
      <ul>
        {cheeses.slice(0, displayed).map(cheese => (
          <li key={cheese}>{cheese}</li>
        ))}
      </ul>
      {remaining
        ? <button onClick={displayAllAction}>Show {remaining} More Cheeses</button>
        : <button onClick={truncateAction}>Show Fewer Cheeses</button>}
    </div>
  )
}
```

## License

MIT © [laneysmith](https://github.com/laneysmith)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
