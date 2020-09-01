import readFile from './fileHandler';


const formatPath = ( pathLine ) => {
    const pathPieces = pathLine.split( ' ' );
    return {
        origin: pathPieces[0],
        destiny: pathPieces[1],
        cost: pathPieces[2],
    };
}

// maps lines on path file to a dictionary of origins, destinies and costs
const readPaths = async ( filePath ) => {
    let linesOfPaths = await readFile(filePath);
    const paths = linesOfPaths.map( formatPath );
    return paths;
};


const generateGraph = async ( filePath ) => {
    const paths = await readPaths( filePath );
    console.log( 'paths:' );
    console.log( paths );
    let graph = {};
    paths.map( (path) => {
        try {
            graph[path.origin][path.destiny] = path.cost;
        } catch (error) {
            console.log( error );
            throw error;
        }
    });
    console.log( 'graph:' );
    console.log( graph );
    return graph;
};


export { readPaths, generateGraph };