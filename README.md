## eslint-config-lion
### The Lion preset 🦁
@itsmelion reusable style guide.

# Installation
1. Install the correct versions of each package, which are listed by the command:

  If using **npm 5+**, use this shortcut
  ```sh
  npx install-peerdeps --dev eslint-config-lion
  ```
  else:
  ```sh
  npm info "eslint-config-lion@latest" peerDependencies
  ```
2. Install the packages for your ruleset:
```sh
npm info "eslint-config-lion@latest" reactDependencies nodeDependencies typescriptDependencies
```

# Usage
Add to your `.eslintrc`:
```json
{ "extends": "lion" }
```

#### Using "Create React App"?
- dont forget to extend `react-app`
- and react extra dependencies: `eslint-plugin-flowtype` `eslint-config-react-app`
```json
{ "extends": ["lion", "react-app"] }
```

### Using React-Native?
- EXTRA: `eslint-import-resolver-alias`;
```json
{ "extends": "lion/react-native" }
```

### Using Typescript?
Install these two required dependencies:
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

**Web/JSX**
```json
{ "extends": "lion/typescript" }
```

**Node**
```json
{ "extends": "lion/typescript-node" }
```

### Using Node?
- dont forget to set: `type: "module"` | `type: "commonjs"` on your package.json
- REQUIRED: `eslint-plugin-node`;
```json
{ "extends": "lion/node" }
```
