import { readPackages } from '@/handler/packageHandler';
import { getAbsoluteFromRelativePath } from '@utils/utils'


describe("Test readPackages with non-exist file", () => {
    test("it should throw a ENOENT error", async () => {
        const relativePath = '/sampleData/non-exist.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        
        expect( async () => {
            await readPackages( absolutePath )
        }).rejects.toEqual({
            code: "ENOENT",
            errno: -2,
            error: 'ENOENT',
            path: absolutePath,
            syscall: "open",
        });
    });
});

describe("Test readPackages with bad-type file", () => {
    test("it should throw a error", async () => {
        const relativePath = '/sampleData/bad-type.asd';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        expect( async () => {
            await readPackages( absolutePath )
        }).rejects.toEqual( {error: 'Only text files allowed'} );
    });
});
