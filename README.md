# eslint-plugin

Shared ESLint flat configs for ESLint 10.

## Usage

Install the package:

```bash
pnpm add -D @fethcat/eslint-plugin eslint
```

Create an `eslint.config.js` file:

```js
import fethcat from '@fethcat/eslint-plugin'

export default fethcat.configs.back
```

Or in a frontend project:

```js
import fethcat from '@fethcat/eslint-plugin'

export default fethcat.configs.front
```
