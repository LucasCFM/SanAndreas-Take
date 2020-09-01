import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('module-alias/register');

import { getAbsoluteFromRelativePath } from './utils/utils.js';
import { runShortestPaths } from './shortestPath/shortestPath.js'


const pathFileRelativePath = '/src/path.txt';
const pathFileAbsolutePath = getAbsoluteFromRelativePath( pathFileRelativePath );
const packageFileRelativePath = '/src/package.txt';
const packageFileAbsolutePath = getAbsoluteFromRelativePath( packageFileRelativePath );

runShortestPaths( pathFileAbsolutePath, packageFileAbsolutePath );
