import readFile from '@/handler/fileHandler.js';
import { getAbsoluteFromRelativePath } from '@utils/utils.js'


describe("Test readFile with non-exist file", () => {
    test("it should throw a ENOENT error", async () => {
        const relativePath = '/sampleData/non-exist.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        
        expect( async () => {
            await readFile( absolutePath )
        }).rejects.toEqual({
            code: "ENOENT",
            errno: -2,
            error: 'ENOENT',
            path: absolutePath,
            syscall: "open",
        });
    });
});


describe("Test readFile with bad-type file", () => {
    test("it should throw a error", async () => {
        const relativePath = '/sampleData/bad-type.asd';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        expect( async () => {
            await readFile( absolutePath )
        }).rejects.toEqual( {error: 'Only text files allowed'} );
    });
});
