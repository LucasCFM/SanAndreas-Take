import { readPaths, generateGraph } from '@/handler/pathHandler.js';
import { getAbsoluteFromRelativePath } from '@utils/utils.js';


// ======= TESTING readPaths =======
describe("Test readPaths with non-exist file", () => {
    test("it should throw a ENOENT error", async () => {
        const relativePath = '/sampleData/non-exist.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        
        expect( async () => {
            await readPaths( absolutePath )
        }).rejects.toEqual({
            code: "ENOENT",
            errno: -2,
            error: 'ENOENT',
            path: absolutePath,
            syscall: "open",
        });
    });
});

describe("Test readPaths with bad-type file", () => {
    test("it should throw a error", async () => {
        const relativePath = '/sampleData/bad-type.asd';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        expect( async () => {
            await readPaths( absolutePath )
        }).rejects.toEqual( {error: 'Only text files allowed'} );
    });
});


// ======= TESTING generateGraph =======
describe("Test readPaths with non-exist file", () => {
    test("it should throw a ENOENT error", async () => {
        const relativePath = '/sampleData/non-exist.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        
        expect( async () => {
            await generateGraph( absolutePath )
        }).rejects.toEqual({
            code: "ENOENT",
            errno: -2,
            error: 'ENOENT',
            path: absolutePath,
            syscall: "open",
        });
    });
});

describe("Test readPaths with bad-type file", () => {
    test("it should throw a error", async () => {
        const relativePath = '/sampleData/bad-type.asd';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        expect( async () => {
            await generateGraph( absolutePath )
        }).rejects.toEqual( {
            error: 'Only text files allowed',
        });
    });
});





