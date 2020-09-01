import { readPaths, generateGraph } from '@/handler/pathHandler';
import { getAbsoluteFromRelativePath } from '@utils/utils'


// ======= TESTING readPaths =======
describe("readPaths test path", () => {
    test("it should return a array of dictionary informing origin, destiny and cost", async () => {
        const rightPaths = [
            {origin: 'LS', destiny: 'SF', cost: '1'},
            {origin: 'SF', destiny: 'LS', cost: '2'},
            {origin: 'LS', destiny: 'LV', cost: '1'},
            {origin: 'LV', destiny: 'LS', cost: '1'},
            {origin: 'SF', destiny: 'LV', cost: '2'},
            {origin: 'LV', destiny: 'SF', cost: '2'},
            {origin: 'LS', destiny: 'RC', cost: '1'},
            {origin: 'RC', destiny: 'LS', cost: '2'},
            {origin: 'SF', destiny: 'WS', cost: '1'},
            {origin: 'WS', destiny: 'SF', cost: '2'},
            {origin: 'LV', destiny: 'BC', cost: '1'},
            {origin: 'BC', destiny: 'LV', cost: '1'},
        ];
        const relativePath = '/sampleData/path/example-00.txt';
        const absolutePath = getAbsoluteFromRelativePath( relativePath );
        const paths = await readPaths( absolutePath );
        expect( paths ).toEqual( rightPaths );
    });
});


// ======= TESTING generateGraph =======
