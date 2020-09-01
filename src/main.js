import 'module-alias/register.js';
import dijkstra from './dijkstra/dijkstra.js';

const graph = {
    LS: { SF: 1, LV: 1, RC: 1 },
    SF: { LS: 2, WS: 3, WS: 4, WS: 6, LV: 2 },
    LV: { LS: 1, SF: 2, BC: 1 },
    WS: { SF: 2 },
    BC: { LV: 1 },
    RC: { LS: 2 },
};

// TODO: Remove more than one path to same location, leave only the smalllest
// ASK THEM IF THIS CAN HAPPEN

console.log( dijkstra(graph, 'SF', 'WS') );
