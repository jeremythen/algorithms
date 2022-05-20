const crypto = require('crypto');

const LEFT = 'left';
const RIGHT = 'right';

const txHashes = [
    '95cd603fe577fa9548ec0c9b50b067566fe07c8af6acba45f6196f3a15d511f6',
    '709b55bd3da0f5a838125bd0ee20c5bfdd7caba173912d4281cae816b79a201b',
    '27ca64c092a959c7edc525ed45e845b1de6a7590d173fd2fad9133c8a779a1e3',
    '1f3cb18e896256d7d6bb8c11a6ec71f005c75de05e39beae5d93bbd1e2c8b7a9',
    '41b637cfd9eb3e2f60f734f9ca44e5c1559c6f481d49d6ed6891f3e9a086ac78',
    'a8c0cce8bb067e91cf2766c26be4e5d7cfba3d3323dc19d08a834391a1ce5acf',
    'd20a624740ce1b7e2c74659bb291f665c021d202be02d13ce27feb067eeec837',
    '281b9dba10658c86d0c3c267b82b8972b6c7b41285f60ce2054211e69dd89e15',
    'df743dd1973e1c7d46968720b931af0afa8ec5e8412f9420006b7b4fa660ba8d',
    '3e812f40cd8e4ca3a92972610409922dedf1c0dbc68394fcb1c8f188a42655e2',
    '3ebc2bd1d73e4f2f1f2af086ad724c98c8030f74c0c2be6c2d6fd538c711f35c',
    '9789f4e2339193149452c1a42cded34f7a301a13196cd8200246af7cc1e33c3b',
    'aefe99f12345aabc4aa2f000181008843c8abf57ccf394710b2c48ed38e1a66a',
    '64f662d104723a4326096ffd92954e24f2bf5c3ad374f04b10fcc735bc901a4d',
    '95a73895c9c6ee0fadb8d7da2fac25eb523fc582dc12c40ec793f0c1a70893b4',
    '315987563da5a1f3967053d445f73107ed6388270b00fb99a9aaa26c56ecba2b',
    '09caa1de14f86c5c19bf53cadc4206fd872a7bf71cda9814b590eb8c6e706fbb',
    '9d04d59d713b607c81811230645ce40afae2297f1cdc1216c45080a5c2e86a5a',
    'ab8a58ff2cf9131f9730d94b9d67f087f5d91aebc3c032b6c5b7b810c47e0132',
    'c7c3f15b67d59190a6bbe5d98d058270aee86fe1468c73e00a4e7dcc7efcd3a0',
    '27ef2eaa77544d2dd325ce93299fcddef0fae77ae72f510361fa6e5d831610b2'
];

const sha256 = data => {
    return crypto
        .createHash('sha256')
        .update(data)
        .digest()
        .toString('hex');
};

const getTxDirectionInTree = (transactionHash, tree) => {
    const txIndex = tree[0].findIndex(tx0 => tx0 === transactionHash);
    return txIndex % 2 === 0 ? LEFT : RIGHT;
};

/**
 * If the txHashes length is not even, then it copies the last txHash and adds it to the
 * end of the array, so it can be hashed with itself.
 * @param {Array<string>} txHashes
 */
 function ensureEven(txHashes) {
    if(txHashes.length % 2 !== 0) {
        txHashes.push(txHashes[txHashes.length - 1]);
    }
}

/**
 * Generates the merkle root of the txHashes passed through the parameter.
 * Recursively concatenates pair of tx hashes and calculates each sha256 hash of the
 * concatenated hashes until only one hash is left, which is the merkle root, and returns it.
 * @param {Array<string>} txHashes
 * @returns merkleRoot
 */
function generateMerkleRoot(txHashes) {
    if(!txHashes || txHashes.length == 0) {
        return '';
    }
    ensureEven(txHashes);
    const combinedHashes = [];
    for(let i = 0; i < txHashes.length; i += 2) {
        const txPairConcatenated = txHashes[i] + txHashes[i + 1];
        const txsHash = sha256(txPairConcatenated);
        combinedHashes.push(txsHash);
    }
    if(combinedHashes.length === 1) {
        return combinedHashes.join('');
    }
    return generateMerkleRoot(combinedHashes);
}

/**
 * Calculates the merkle root using the merkle proof by concatenating each pair of
 * tx hashes with the correct tree branch direction (left, right) and calculating
 * the sha256 hash of the concatenated pair, until the merkle root hash is generated 
 * and returned.
 * The first transaction needs to be in the first position of this array, with its
 * corresponding tree branch direction.
 * @param {Array<node>} merkleProof 
 * @returns {string} merkleRoot
 */
function getMerkleRootFromMerkleProof(merkleProof) {
    if(!merkleProof || merkleProof.length === 0) {
        return '';
    }
    const merkleRootFromProof = merkleProof.reduce((txProof1, txProof2) => {
        if(txProof2.direction === RIGHT) {
            const hashFromLeftSubtree = sha256(txProof1.tx + txProof2.tx);
            return { tx: hashFromLeftSubtree };
        }
        const hashFromRightSubtree = sha256(txProof2.tx + txProof1.tx);
        return { tx: hashFromRightSubtree };
    });
    return merkleRootFromProof.tx;
}

/**
 * Creates a merkle tree, recursively, from the provided transaction hashes, represented
 * with an array of arrays of transactions/nodes. Where each array in the array
 * is a tree level with all the transactions/nodes in that level.
 * In the array at position tree[0] (the first array of transactions) there are
 * all the transaction hashes.
 * In the array at position tree[1] there are the combined pair or sha256 hashes of the
 * transactions in the position tree[0], and so on.
 * In the last position (tree[tree.length - 1]) there is only one hash, which is the
 * root of the tree, or merkle root.
 * @param {Array<string>} txHashes 
 * @returns {Array<Array<string>} merkleTree
 */
function generateMerkleTree(txHashes) {
    if(!txHashes || txHashes.length === 0) {
        return [];
    }
    const tree = [txHashes];
    const generate = (txHashes, tree) => {
        if(txHashes.length === 1) {
            return txHashes;
        }
        ensureEven(txHashes);
        const combinedHashes = [];
        for(let i = 0; i < txHashes.length; i += 2) {
            const txsConcatenated = txHashes[i] + txHashes[i + 1];
            const txsHashed = sha256(txsConcatenated);
            combinedHashes.push(txsHashed);
        }
        tree.push(combinedHashes);
        return generate(combinedHashes, tree);
    }
    generate(txHashes, tree);
    return tree;
}

/**
 * Generates the merkle proof by first creating the merkle tree,
 * and then finding the tx index in the tree and calculating if it's a 
 * left or right child (since the hashes are calculated in pairs, 
 * tx at index 0 would be a left child, transaction at index 1 would be a right child.
 * Even indices are left children, odd indices are right children),
 * then it finds the sibling node (the one needed to concatenate and hash it with the child node)
 * and adds it to the proof, with its direction (left or right)
 * then it calculates the position of the next node in the next level, by
 * dividing the child index by 2, so this new index can be used in the next iteration of the
 * loop, along with the level.
 * If we check the result of this representation of the merkle tree, we notice that
 * The first level has all the transactions, an even number of transactions.
 * All the levels have an even number of transactions, except the last one (since is the 
 * merkle root)
 * The next level have half or less transactions than the previous level, which allows us
 * to find the tx associated with the index of a previous tx in the next level in constant time.
 * Then we simply return this merkle proof.
 * @param {string} tx 
 * @param {Array<string>} txHashes 
 * @returns {Array<node>} merkleProof
 */
function generateMerkleProof(tx, txHashes) {
    if(!tx || !txHashes || txHashes.length === 0) {
        return null;
    }
    const tree = generateMerkleTree(txHashes);
    const merkleProof = [{
        tx,
        direction: getTxDirectionInTree(tx, tree)
    }];
    let txIndex = tree[0].findIndex(tx0 => tx0 === tx);
    for(let level = 0; level < tree.length - 1; level++) {
        const isLeftChild = txIndex % 2 === 0;
        const siblingDirection = isLeftChild ? RIGHT : LEFT;
        const siblingIndex = isLeftChild ? txIndex + 1 : txIndex - 1;
        const siblingNode = {
            tx: tree[level][siblingIndex],
            direction: siblingDirection
        };
        merkleProof.push(siblingNode);
        txIndex = Math.floor(txIndex / 2);
    }
    return merkleProof;
}

const merkleRoot = generateMerkleRoot(txHashes);

const generatedMerkleProof = generateMerkleProof(txHashes[4], txHashes);

const merkleTree = generateMerkleTree(txHashes);

const merkleRootFromMerkleProof = getMerkleRootFromMerkleProof(generatedMerkleProof);

console.log("merkleRoot: ", merkleRoot);
console.log("generatedMerkleProof: ", generatedMerkleProof);
console.log("merkleTree: ", merkleTree);
console.log("merkleRootFromMerkleProof: ", merkleRootFromMerkleProof);
console.log("merkleRootFromMerkleProof === merkleRoot: ", merkleRootFromMerkleProof === merkleRoot);
