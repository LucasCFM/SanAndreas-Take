import readFile from '../../src/handler/fileHandler';
import { getAbsoluteFromRelativePath } from '../../src/utils/utils'

import { realpath } from 'fs.promises';

describe("Test readFile with non-exist file", () => {
    test("it should throw a ENOENT error", async () => {
        const relativePath = '/sampleData/non-exist.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        try {
            await readFile( absolutePath );
        } catch( err ) {
            expect( err.code ).toEqual( 'ENOENT' );
        }
    });
});


describe("Test readFile with bad-type file", () => {
    test("it should throw a error", async () => {
        const relativePath = '/sampleData/bad-type.asd';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        console.log( 'fs realpath:' );
        console.log( realpath( relativePath ) );
        try {
            await readFile( absolutePath );
        } catch( err ) {
            expect( err.code ).toEqual( 'ENOENT' );
        }
    });
});
