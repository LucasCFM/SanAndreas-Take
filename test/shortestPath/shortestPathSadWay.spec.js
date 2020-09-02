import { runShortestPaths, getShortestPath } from '@/shortestPath/shortestPath'


// ======== getShortestPath ========
describe("Test getShortestPath if without graph, startNode and/or endNode", () => {
    test("it should throw a error", async () => {
        /*  @test    Test without anything (graph, startNode and endNode)
            @test    Test without startNode
            @test    Test without endNode
            @test    Test without graph
        */
        expect.assertions(4);
        
        expect( async () => {
            await getShortestPath( null, null, null );
        }).rejects.toEqual({
            error: 'All params must be provided'
        });

        expect( async () => {
            await getShortestPath( {AB: {TEST: 2}}, null, 'CS' );
        }).rejects.toEqual({
            error: 'All params must be provided'
        });

        expect( async () => {
            await getShortestPath( {AB: {TEST: 2}}, 'CS', null );
        }).rejects.toEqual({
            error: 'All params must be provided'
        });

        expect( async () => {
            await getShortestPath( null, 'CS', 'AB' );
        }).rejects.toEqual({
            error: 'All params must be provided'
        });
    });
});

describe("Test getShortestPath with a invalid startNode and/or endNode", () => {
    test("it should throw a error", async () => {
        /*  @test    Test startNode not within graph nodes
            @test    Test endNoe not within graph nodes
            @test    Test both startNode and endNoe not within graph nodes
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
        
        expect( async () => {
            await getShortestPath( graph, 'AB', 'SF' );
        }).rejects.toEqual({
            error: 'startNode is no within graph'
        });

        expect( async () => {
            await getShortestPath( graph, 'SF', 'AB' );
        }).rejects.toEqual({
            error: 'endNode is no within graph'
        });

        expect( async () => {
            await getShortestPath( graph, 'AB', 'BA' );
        }).rejects.toEqual({
            error: 'startNode is no within graph'
        });
    });
});


// ======== runShortestPaths ========
describe("Test runShortestPaths without pathFile and/or packagesFile", () => {
    test("it should throw a error", async () => {
        /*  @test    Test without pathFile
            @test    Test without packagesFile
            @test    Test both pathFile and packagesFile
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
        
        expect( async () => {
            await runShortestPaths( 'test', null );
        }).rejects.toEqual({
            error: 'startNode is no within graph'
        });

        expect( async () => {
            await runShortestPaths( graph, 'SF', 'AB' );
        }).rejects.toEqual({
            error: 'endNode is no within graph'
        });

        expect( async () => {
            await runShortestPaths( graph, 'AB', 'BA' );
        }).rejects.toEqual({
            error: 'startNode is no within graph'
        });
    });
});

describe("Test runShortestPaths with both pathFile and packagesFile as not a valid path of file", () => {
    test("it should throw a error", async () => {
        //  @test    Test both pathFile and packagesFile as undefined
        //  @test    Test undefined pathFile
        //  @test    Test undefined packagesFile
        //  @test    Test both pathFile and packagesFile as a invalid file

        expect.assertions(4);
        
        expect( async () => {
            await runShortestPaths( null, null );
        }).rejects.toEqual({
            error: 'All filePaths must be provided'
        });

        expect( async () => {
            await runShortestPaths( null, 'test' );
        }).rejects.toEqual({
            error: 'All filePaths must be provided'
        });

        expect( async () => {
            await runShortestPaths( 'test', null );
        }).rejects.toEqual({
            error: 'All filePaths must be provided'
        });

        expect( async () => {
            await runShortestPaths( 'test', 'test' );
        }).rejects.toEqual({
            error: 'Only text files allowed'
        });
    });
});

