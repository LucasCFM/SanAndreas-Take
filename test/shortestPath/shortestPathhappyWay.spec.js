import { runShortestPaths, getShortestPath } from '@/shortestPath/shortestPath'
import { getAbsoluteFromRelativePath } from '@utils/utils.js';


// ======== getShortestPath ========
describe("Test getShortestPath if without graph, startNode and/or endNode", () => {
    test("it should throw a error", async () => {
        /*  @test    Test without anything (graph, startNode and endNode)
            @test    Test without startNode
            @test    Test without endNode
            @test    Test without graph
        */
        expect.assertions(3);

        const graph = {
            LS: { SF: 1, LV: 1, RC: 1 },
            SF: { LS: 2, WS: 1, LV: 2 },
            LV: { LS: 1, SF: 2, BC: 1 },
            WS: { SF: 2 },
            BC: { LV: 1 },
            RC: { LS: 2 },
        };
        
        let expectedResult = { path: ['start', 'WS', 'finish'], distance: 1 };
        let result = await getShortestPath( graph, 'SF', 'WS' );
        expect( result ).toEqual( expectedResult );
        
        expectedResult = { path: ['start', 'SF', 'WS', 'finish'], distance: 2 };
        result = await getShortestPath( graph, 'LS', 'BC' );
        expect( result ).toEqual( expectedResult );

        expectedResult = { path: ['start', 'SF', 'WS', 'finish'], distance: 3 };
        result = await getShortestPath( graph, 'WS', 'BC' );
        expect( result ).toEqual( expectedResult );
    });
});


// ======== runShortestPaths ========
describe("Test runShortestPaths if without graph, startNode and/or endNode", () => {
    test("it should throw a error", async () => {
        /*  @test    Test without anything (graph, startNode and endNode)
            @test    Test without startNode
            @test    Test without endNode
            @test    Test without graph
        */
        expect.assertions(1);

        const pathFileRelativePath = '/src/path.txt';
        const pathFileAbsolutePath = getAbsoluteFromRelativePath( pathFileRelativePath );
        const packageFileRelativePath = '/src/package.txt';
        const packageFileAbsolutePath = getAbsoluteFromRelativePath( packageFileRelativePath );
        
        const expectedResult = [
            { origin: 'SF', destiny: 'WS', cost: 1 },
            { origin: 'LS', destiny: 'BC', cost: 2 },
            { origin: 'WS', destiny: 'BC', cost: 5 }
        ]
        const result = await runShortestPaths( pathFileAbsolutePath, packageFileAbsolutePath );
        expect( result ).toEqual( expectedResult );
    });
});


