# Build/deploy helpers for the static export. See DEPLOY.md for full details.
# The site builds to ./out (plain static files); the server needs no Node runtime.
# Written to work with both GNU make and BSD make (OpenBSD/FreeBSD).

# Override on the command line, e.g.
#   make deploy DEPLOY_HOST=user@server DEPLOY_PATH=/var/www/fkgrt
DEPLOY_HOST ?= user@server.example.com
DEPLOY_PATH ?= /var/www/fkgrt

.PHONY: help install build build-local preview deploy clean

help:
	@echo "Targets:"
	@echo "  install      Install dependencies (Node 22 + pnpm)"
	@echo "  build        Build with Tina Cloud -> out/ (needs .env.local creds; enables /admin)"
	@echo "  build-local  Build without Tina Cloud -> out/ (no creds; /admin won't work)"
	@echo "  preview      Serve the built out/ locally at http://localhost:3000"
	@echo "  deploy       Build, then mirror out/ to the server (DEPLOY_HOST, DEPLOY_PATH)"
	@echo "  clean        Remove build artifacts"

install:
	pnpm install

build:
	pnpm build

build-local:
	pnpm build-local

preview:
	npx serve out -l 3000

deploy: build
	rsync -avz --delete out/ $(DEPLOY_HOST):$(DEPLOY_PATH)/

clean:
	rm -rf out .next
