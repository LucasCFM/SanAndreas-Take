import fs from 'fs';
import { getFileType } from '@utils/utils.js';


const readFile = async ( filePath ) => {
    // checks if file extension. Must be .txt file
    
    const fileType = getFileType( filePath );
    if( fileType !== 'txt' )
        throw Error( 'Only text files allowed' )
    
    const data = await fs.promises.readFile(filePath, 'utf8');
    const lines = data.toString().split("\n");
    for( i in lines ) {
        console.log( 'readFile line:' );
        console.log( lines[i] );
    }
    return lines;
};

export default readFile;