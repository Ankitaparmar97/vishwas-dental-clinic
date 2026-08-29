# Makefile

# Start development server
up:
	@echo "🚀 Starting development server..."
	npm run dev

install:
	@echo "📦 Installing dependencies..."
	npm install --force

# Build the project
build:
	@echo "🏗️  Building the project..."
	npm run build

# Type-check the codebase without emitting files
type-check:
	@echo "🧠 Running TypeScript type check..."
	npm run type-check

# Lint the project
lint:
	@echo "🧹 Linting code..."
	npm run lint

# Lint and auto-fix issues
lint-fix:
	@echo "🛠️  Linting and fixing issues..."
	npm run lint:fix

# Check only file/folder naming convention
lint-naming:
	@echo "📁 Checking file/folder naming conventions..."
	npm run lint:naming

# Format code using Prettier
format:
	@echo "🎨 Formatting code with Prettier..."
	npm run format

# Check if formatting matches Prettier rules
format-check:
	@echo "🔎 Checking code formatting (Prettier)..."
	npm run format:check

# Run type-check, lint, and format check together
check:
	@echo "✅ Running full code quality checks..."
	npm run check

# Clean build artifacts
clean:
	@echo "🧼 Cleaning project build artifacts..."
	npm run clean

# Fix lint issues, format code, clean dist, and type-check
tidy:
	@echo "🧹 Lint fixing, formatting, cleaning build, and running type-check..."
	npm run lint:fix && npm run format && npm run clean && npm run type-check