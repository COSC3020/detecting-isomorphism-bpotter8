function are_isomorphic(graph1, graph2) {
    const tracker = [];
    
    if(graph1.length != graph2.length){
        return false;
    }
    
    for (var i = 0; i < graph1.length; i++){
        var compareFirst = graph1[i];
        var compareSecond = graph2[i];
        
        if (compareFirst.length != compareSecond.length){
            return false;
        }
        
        for (var j = 0; j < compareFirst.length; j++){
            var ind = compareFirst[j];
            
            if (tracker[ind] == undefined){
                tracker[ind] = compareSecond[j];
            } else if (tracker[ind] != compareSecond[j]){
                return false;
            }
        }
    }
    
    return true;
}
