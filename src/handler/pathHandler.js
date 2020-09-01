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
    const paths = linesOfPaths.map( function( line ) {
        const pathPieces = line.split( ' ' );
        return {
            origin: pathPieces[0],
            destiny: pathPieces[1],
            cost: pathPieces[2],
        };
    });
    // for( line in linesOfPaths ) {
    //     pathPieces = line.split( ' ' );
    //     paths.push({
    //         origin: pathPieces[0],
    //         destiny: pathPieces[1],
    //         cost: pathPieces[2],
    //     })
    // }
    console.log( 'readPaths paths:' );
    console.log( paths );
    return paths;
    // TODO: return readFile( filePath ).map( formatPath );
};

const generateGraph = ( filePath ) => {
    let graph = {};
    readPaths( filePath ).map( function( path ) {
        try {
            graph[path.origin][path.destiny] = path.cost;
        } catch (error) {
            console.log( error );
            throw error;
        }
    });
    return graph;
};


export { readPaths, generateGraph };