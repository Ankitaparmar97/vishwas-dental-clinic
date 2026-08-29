# ⚛️ React + 🟦 TypeScript + ⚡️ Vite

## 🛠️ Makefile Commands

The following make commands help streamline development tasks:

| Command             | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| `make up`           | 🚀 Starts the Vite development server.                                |
| `make install`      | 📦 Install dependencies.                                              |
| `make build`        | 🏗️ Builds the project using `tsc` and `vite`.                         |
| `make type-check`   | 🧠 Runs TypeScript type-checking without emitting files.              |
| `make lint`         | 🧹 Lints the codebase with ESLint.                                    |
| `make lint-fix`     | 🛠️ Lints and auto-fixes issues in the codebase.                       |
| `make lint-naming`  | 📁 Checks only file and folder naming conventions using ESLint rules. |
| `make format`       | 🎨 Formats code using Prettier.                                       |
| `make format-check` | 🔎 Checks if code formatting matches Prettier rules.                  |
| `make check`        | ✅ Runs `type-check`, `lint`, `format:check`, and `build`.            |
| `make clean`        | 🧼 Cleans the `dist` folder and `.tsbuildinfo` files.                 |
| `make tidy`         | 🧹 Runs `lint-fix`, `format`, `clean`, and `type-check` sequentially. |
