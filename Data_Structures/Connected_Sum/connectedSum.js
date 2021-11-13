function connectedSum(graphNodes, graphFrom, graphTo) {
    const nodesMap = new Map();
    for(let i = 0; i < graphFrom.length; i++) {
        const v1 = graphFrom[i];
        const v2 = graphTo[i];
        if(!nodesMap.has(v1)) {
            nodesMap.set(v1, []);
        }
        if(!nodesMap.has(v2)) {
            nodesMap.set(v2, []);
        }
        nodesMap.get(v1).push(v2);
    }

    const results = [];
    const visited = new Set();

    function countChildren(v1, children, map, visited) {
        let childCount = children.length;
        if(!visited.has(v1)) {
            visited.add(v1);
            for(let j = 0; j < children.length; j++) {
                const v2 = children[j];
                childCount += countChildren(v2, map.get(v2), map, visited);
            }
        }
        return childCount;
    }
    
    for(let i = 0; i < graphFrom.length; i++) {
        const v1 = graphFrom[i];
        if(!visited.has(v1)) {
            const nodes = nodesMap.get(v1);
            const result = countChildren(v1, nodes, nodesMap, visited) + 1;
            results.push(result);
        }
    }
    
    const difference = graphNodes - results.reduce((a, b) => a + b, 0);
    return results.map(r => Math.ceil(Math.sqrt(r))).reduce((a, b) => a + b, 0) + difference;

}

connectedSum(10, [1,1,2,3,7], [2,3,4,5,8]); // 8
connectedSum(4, [1,1], [2,4]); // 3