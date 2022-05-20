/**
 * Simple implementation of a Merkle Tree/Root/Proof.
 */

import crypto from 'crypto';

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

const sha256d = hex => {
    const tx1Hash = crypto
    .createHash('sha256')
    .update(hex)
    .digest()
    .toString('hex');
    return tx1Hash;
};

const tx = '41b637cfd9eb3e2f60f734f9ca44e5c1559c6f481d49d6ed6891f3e9a086ac78';

function ensureEven(txHashes) {
    if(txHashes.length % 2 !== 0) {
        txHashes.push(txHashes[txHashes.length - 1]);
    }
}

function generateMerkleRoot(txHashes) {
    ensureEven(txHashes);
    const combinedHashes = [];
    for(let i = 0; i < txHashes.length; i += 2) {
        const tx1 = txHashes[i];
        const tx2 = txHashes[i + 1];
        const txsConcatenated = tx1 + tx2;
        const txsHashed = sha256d(txsConcatenated);
        combinedHashes.push(txsHashed);
    }
    if(combinedHashes.length === 1) {
        return combinedHashes.join('');
    }
    ensureEven(combinedHashes);
    return generateMerkleRoot(combinedHashes);
}


function getMerkleRootFromMerkleProof(merkleProof) {
    return processMerkleProof(merkleProof);
}

function processMerkleProof(merkleProof) {
    const merkleRootFromProof = merkleProof.reduce((txProof1, txProof2) => {
        if(txProof2.direction === 'right') {
            const hashFromLeft = sha256d(txProof1.tx + txProof2.tx);
            return {tx: hashFromLeft};
        }
        const hashFromRight = sha256d(txProof2.tx + txProof1.tx);
        return {tx: hashFromRight};
    });
    return merkleRootFromProof.tx;
}

function generateMerkleTree(txHashes) {
    const tree = [];
    const generate = txHashes => {
        ensureEven(txHashes);
        tree.push(txHashes);
        const combinedHashes = [];
        for(let i = 0; i < txHashes.length; i += 2) {
            const tx1 = txHashes[i];
            const tx2 = txHashes[i + 1];
            const txsConcatenated = tx1 + tx2;
            const txsHashed = sha256d(txsConcatenated);
            combinedHashes.push(txsHashed);
        }
        if(combinedHashes.length === 1) {
            tree.push(combinedHashes);
            return combinedHashes;
        }
        return generate(combinedHashes, tree);
    }
    generate(txHashes);
    return tree;
}

function generateMerkleProof(tx, txHashes) {
    const tree = generateMerkleTree(txHashes);
    const merkleProof = [{
        tx,
        direction: 'left'
    }];
    let txIndex = - 1;
    for(let i = 0; i < tree.length - 1; i++) {
        if(i === 0) {
            txIndex = tree[0].findIndex(tx0 => tx0 === tx);
        }
        if(txIndex % 2 === 1) {
            merkleProof.push({
                tx: tree[i][txIndex - 1],
                direction: 'left'
            });
        } else {
            merkleProof.push({
                tx: tree[i][txIndex + 1],
                direction: 'right'
            });
        }
        txIndex = Math.floor(txIndex / 2);
    }
    return merkleProof;
}

const merkleRoot = generateMerkleRoot(txHashes);

const generatedMerkleProof = generateMerkleProof(tx, txHashes);

const merkleTree = generateMerkleTree(txHashes);

const merkleRootFromMerkleProof = getMerkleRootFromMerkleProof(generatedMerkleProof);

console.log("merkleRoot: ", merkleRoot);
console.log("generatedMerkleProof: ", generatedMerkleProof);
console.log("merkleTree: ", merkleTree);
console.log("merkleRootFromMerkleProof: ", merkleRootFromMerkleProof);
console.log("merkleRootFromMerkleProof === merkleRoot: ", merkleRootFromMerkleProof === merkleRoot);
