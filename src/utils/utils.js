import path from 'path';


// construct a absolute path based on root-script path
const getAbsoluteFromRelativePath = ( relativePath ) => {
    // relativePath must be relative from the script root path
    // root scritp: main.js
    
    const rootPath = process.cwd();
    if( relativePath.charAt(0) !== '/' )
        relativePath = '/' + relativePath;
    return rootPath + relativePath;
};


// returns the last extension of a file
const getFileType = ( fileName ) => {
    let fileType = path.extname( fileName ).split( '.' );
    fileType = fileType[ fileType.length - 1 ];
    return fileType;
};


export {
    getAbsoluteFromRelativePath,
    getFileType
};