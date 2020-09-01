import { readPackages } from '@/handler/packageHandler';
import { getAbsoluteFromRelativePath } from '@utils/utils'


describe("readPackages test path", () => {
    test("it should return a array of dictionary informing origin, destiny and cost", async () => {
        const rightPaths = [
            {origin: 'SF', destiny: 'WS'},
            {origin: 'LS', destiny: 'BC'},
            {origin: 'WS', destiny: 'BC'},
        ];
        const relativePath = '/sampleData/package/example-00.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        const paths = await readPackages( absolutePath );
        expect( paths ).toEqual( rightPaths );
    });
});
