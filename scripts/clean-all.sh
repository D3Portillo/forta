#! /bin/bash

rm -rf \
	node_modules \
	package-lock.json \
	packages/**/node_modules \
	packages/**/package-lock.json \
	packages/**/dist \
	packages/**/.turbo

echo "ALL CACHE/BUILD FILES REMOVED"