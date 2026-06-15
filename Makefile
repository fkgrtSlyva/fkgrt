# Build/deploy helpers for the static export. See DEPLOY.md for full details.
# The site builds to ./out (plain static files); the server needs no Node runtime.

# Override on the command line, e.g.
#   make deploy DEPLOY_HOST=user@server DEPLOY_PATH=/var/www/fkgrt
DEPLOY_HOST ?= user@server.example.com
DEPLOY_PATH ?= /var/www/fkgrt

.PHONY: help install build build-local preview deploy clean

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies (Node 22 + pnpm)
	pnpm install

build: ## Build with Tina Cloud -> out/ (needs .env.local creds; enables /admin)
	pnpm build

build-local: ## Build without Tina Cloud -> out/ (no creds; /admin won't work)
	pnpm build-local

preview: ## Serve the built out/ locally at http://localhost:3000
	npx serve out -l 3000

deploy: build ## Build, then mirror out/ to the server over rsync/ssh
	rsync -avz --delete out/ $(DEPLOY_HOST):$(DEPLOY_PATH)/

clean: ## Remove build artifacts
	rm -rf out .next
