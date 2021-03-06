import dijkstra from './dijkstra/dijkstra.js';

import { generateGraph } from '../handler/pathHandler.js';
import { readPackages } from '../handler/packageHandler.js';

import _ from 'lodash';


const getShortestPath = ( graph, startNode, endNode ) => {
    /*
    @param graph    dict    A dictionary representation of a graph,
                            each key is a node
    @param start    string  A graph (dict) key
    @param end      string  A graph (dict) key
    */

    if( !graph || !startNode || !endNode )
        throw Error( 'All params must be provided' );
    
    const nodes = Object.keys( graph );
    if( !nodes.includes(startNode) )
        throw Error( 'startNode is no within graph' );
    if( !nodes.includes(endNode) )
        throw Error( 'endNode is no within graph' );
    
    return dijkstra( graph, startNode, endNode );
};


const runShortestPaths = async (pathFile, packagesFile) => {
    if( !pathFile || !packagesFile )
        throw Error( 'All filePaths must be provided' )

    const graph = await generateGraph( pathFile );
    const packagePaths = await readPackages( packagesFile );
    
    for( var i in packagePaths ) {
        const graphCopy = _.cloneDeep(graph);
        const cost = getShortestPath( graphCopy, packagePaths[i].origin, packagePaths[i].destiny ).distance;
        packagePaths[i]['cost'] = cost;
    }
    return packagePaths;
};


export {
    getShortestPath,
    runShortestPaths
};