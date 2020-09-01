import readFile from './fileHandler.js';


const formatPackage = ( packageLine ) => {
    const packagePieces = packageLine.split( ' ' );
    return {
        origin: packagePieces[0],
        destiny: packagePieces[1],
    };
}

// maps lines on package file to a dictionary of origins and destinies
const readPackages = async ( filePath ) => {
    const linesOfPackages = await readFile( filePath );
    const packages = linesOfPackages.map( formatPackage );
    return packages;
};


export {
    readPackages
};