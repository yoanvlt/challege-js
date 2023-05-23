function blockChain(data, prev) {
    // Fonction pour calculer le hachage
    function hashCode(index, prevHash, data) {
      return index.toString() + prevHash + JSON.stringify(data);
    }

    if (!prev) {
      prev = { index: 0, hash: '0' };
    }

    var block = {
      index: prev.index + 1,
      hash: hashCode(prev.index + 1, prev.hash, data),
      data: data,
      prev: prev
    };
    
    block.chain = function(nextData) {
      return blockChain(nextData, block);
    };
  
    return block;
  }