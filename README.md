## eslint-config-lion
### The Lion preset 🦁
@itsmelion reusable style guide.

# Installation
It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`, `eslint-plugin-node`, `eslint-plugin-standard`, `eslint-plugin-promises` and others...

1. Install the correct versions of each package, which are listed by the command:

  If using **npm 5+**, use this shortcut
  ```sh
  npx install-peerdeps --dev eslint-config-lion
  ```
  else:
  ```sh
  npm info "eslint-config-lion@latest" peerDependencies
  ```
# Usage
Add to your `.eslintrc`:
```json
  "extends": ["lion"]
```
#### Using "Create React App" ?
dont forget to extend `react-app`
```json
  "extends": ["lion", "react-app"]
```
and its dependencies: `eslint-plugin-flowtype` `eslint-config-react-app`
