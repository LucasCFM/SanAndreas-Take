import fs from 'fs'; // https://nodejs.org/api/fs.html


const readFile = async ( filePath ) => {
    let lines = []
    fs.readFile( filePath, function(err, data) {
        if(err) throw err;
        
        lines = data.toString().split("\n");
        for( i in lines ) {
            console.log( 'readFile line:' );
            console.log( lines[i] );
        }
    });
    return lines;
};


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


const formatPackage = ( packageLine ) => {
    const packagePieces = packageLine.split( ' ' );
    return {
        origin: packagePieces[0],
        destiny: packagePieces[1],
    };
}


// maps lines on package file to a dictionary of origins and destinies
const readPackages = async ( filePath ) => {
    let linesOfPackages = await readFile( filePath );
    const packages = linesOfPackages.map( function( line ) {
        const packagePieces = line.split( ' ' );
        return {
            origin: packagePieces[0],
            destiny: packagePieces[1],
        };
    });
    console.log( 'readPackages packages:' );
    console.log( packages );
    // return packages;
    // TODO: return readFile( filePath ).map( formatPackage );
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


export default generateGraph;
export default readPackages;
