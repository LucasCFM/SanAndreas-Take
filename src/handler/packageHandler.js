import readFile from './fileHandler';


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

export default readPackages;