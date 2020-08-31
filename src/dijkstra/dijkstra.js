const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce( (lowest, node) => {
        if( lowest === null || costs[node] < costs[lowest] ) {
            if( !processed.includes(node) )
                lowest = node;
        }
        return lowest;
    }, null );
};


// gets the lowest-cost path between start and end nodes on a graph
const dijkstra = (graph, start, end) => {
    /*
    @param graph    dict    TODO:
    @param start    string  a graph (dict) key
    @param end      string  a graph (dict) key
    */

    if( !graph || !start || !end )
        throw Error( 'All params must be provided' )
    
    // define/set start and finish references
    graph['start'] = graph[start]
    graph[end]['finish'] = 0

    // track lowest cost to reach each node
    const costs = Object.assign( {finish: Infinity}, graph.start );

    // track paths
    const parents = {finish: null};
    for( let child in graph.start ) {
        parents[child] = 'start';
    }

    // track nodes that have already been processed
    const processed = [];

    let node = lowestCostNode( costs, processed );

    while( node ) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            let newCost = cost + children[n];
            if( !costs[n] ) {
                costs[n] = newCost;
                parents[n] = node;
            }
            if( costs[n] > newCost ) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push( node );
        node = lowestCostNode( costs, processed );
    }

    let optimalPath = ['finish'];
    let parent = parents.finish;
    while( parent ){
        optimalPath.push( parent );
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs.finish,
        path: optimalPath
    };

    return results;
};


export default dijkstra