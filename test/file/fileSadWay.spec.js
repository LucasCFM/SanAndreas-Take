import readFile from '@/handler/fileHandler';
import { getAbsoluteFromRelativePath } from '@utils/utils'


describe("Test readFile with non-exist file", () => {
    test("it should throw a ENOENT error", async () => {
        const relativePath = '/sampleData/non-exist.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        
        expect( async () => {
            await readFile( absolutePath )
        }).toThrow( 'ENOENT' );
        
        // try {
        //     await readFile( absolutePath );
        // } catch( err ) {
        //     expect( err.code ).toEqual( 'ENOENT' );
        // }
    });
});


// describe("Test readFile with bad-type file", () => {
//     test("it should throw a error", async () => {
//         const relativePath = '/sampleData/bad-type.asd';
//         const absolutePath = getAbsoluteFromRelativePath( relativePath );
//         try {
//             await readFile( absolutePath );
//         } catch( err ) {
//             console.log( 'Error code of file type' );
//             console.log( err.code );
//             expect( err.code ).toEqual( 'ENOENT' );
//         }
//     });
// });
