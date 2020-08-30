import dijkstra from './dijkstra/dijkstra.js';
import fs from 'fs'; // https://nodejs.org/api/fs.html

const graph = {
    LS: { SF: 1, LV: 1, RC: 1 },
    SF: { LS: 2, WS: 3, WS: 4, WS: 6, LV: 2 },
    LV: { LS: 1, SF: 2, BC: 1 },
    WS: { SF: 2, finish: 0 },
    BC: { LV: 1 },
    RC: { LS: 2 },
    finish: {}
};

const start = graph.SF
graph['start'] = start

console.log('problem.SF.WS: ')
console.log(graph.SF.WS)

// TODO: Remove more than one path to same location, leave only the smalllest
// ASK THEM IF THIS CAN HAPPEN

console.log(dijkstra(graph));


