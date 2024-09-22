//   9
// 4  20
// 1 6 15 170

const tree = new BInarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6)
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

JSON.stringify(traverse(tree.root));

function traverse(node) {
    const tree = { value: node.value };

    let isNodeLeftNull = node.left == null,
        isNodeRightNull = node.right == null;

    tree.left = isNodeLeftNull ? null : traverse(node.left);
    tree.right = isNodeRightNull == null ? null : traverse(node.right);

    return tree;
}