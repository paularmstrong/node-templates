all:
	@npm install -d
	@cp scripts/githooks/* .git/hooks/
	@chmod -R +x .git/hooks/

test:
	@echo "Soon..."

lint:
	@node scripts/runlint.js

.PHONY: all test lint