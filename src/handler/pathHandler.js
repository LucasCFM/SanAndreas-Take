import readFile from './fileHandler.js';


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
    let graph = {};
    paths.map( (path) => {
        if( !graph[path.origin] )
            graph[path.origin] = {};
        
        try {
            graph[path.origin][path.destiny] = Number( path.cost );
        } catch (error) {
            console.log( error );
            throw error;
        }
    });
    return graph;
};


export { readPaths, generateGraph };