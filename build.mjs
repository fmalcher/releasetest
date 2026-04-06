/**
 * Dummy build script that copies source files to dist/,
 * simulating the Nx build step in soundcraft-ui.
 */

import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname);
const DIST = resolve(ROOT, 'dist');

mkdirSync(DIST, { recursive: true });

// Copy source files to dist
copyFileSync(resolve(ROOT, 'index.js'), resolve(DIST, 'index.js'));

// Copy package.json to dist (this is what gets published)
const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf-8'));
delete pkg.scripts;
writeFileSync(resolve(DIST, 'package.json'), JSON.stringify(pkg, null, 2) + '\n');

console.log('Build complete → dist/');
