NODE ?= node

start:
	$(NODE) ./scripts/start.js

link:
	$(NODE) ./scripts/link.js

test-watch:
	$(NODE) ./scripts/test_watch.js

dist:
	$(NODE) ./scripts/dist.js
