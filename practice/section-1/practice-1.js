    
'use strict';

function collectSameElements(collectionA, collectionB) {
  let newVar = [];
        for (let i = 0; i < collectionA.length; i++) {
            for (let j = 0; j < collectionB.length; j++) {
                if(collectionB[j] === collectionA[i]){
                    newVar.push(collectionB[j]);
                }
        }
     }
  return newVar;
}
