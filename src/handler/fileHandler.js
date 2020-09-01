import fs from 'fs';


const getFileLines = async ( filePath ) => {
    // checks if file extension. Must be .txt file
    
    console.log( 'fileType:' )
    console.log( fileType )
    if( fileType !== 'txt' ) throw Error( 'Only text files allowed' )
    
    const data = await fs.promises.readFile(filePath, 'utf8');
    const lines = data.toString().split("\n");
    for( i in lines ) {
        console.log( 'readFile line:' );
        console.log( lines[i] );
    }
    return lines;
};

export default getFileLines;