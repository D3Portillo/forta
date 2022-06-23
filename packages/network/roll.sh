#! /bin/bash

rm -rf forta-*.tgz dist ||:
npm run build
cp lib/*.d.ts -t dist/
npm publish --access=public
