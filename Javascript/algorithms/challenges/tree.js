class Node {
  constructor(data) {
    this.data = data;
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => (node.data !== data));
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}


/** Given the root node of a tree, return an array where each element is
the width of the tree at each level.
Example
Given:
    0
  / |  \
 1   2   3
 |       |
 4       5

 Answer: [1, 3, 2]
 */

function levelWidth(root) {
  const arr = [root, 'done'];
  const levelCounter = [0];

  while (arr.length > 1) {
    const node = arr.shift();
    let lastElement = levelCounter[levelCounter.length - 1];

    if (node === 'done') {
      arr.push(node);
      levelCounter.push(0)
    } else {
      arr.push(...node.children);
      lastElement++
    }
  }
  return levelCounter
}


// BINARY SEARCH TREE / BINARY TREE

class BinarySearchTreeNode {
  constructor(data) {
    this.root = data;
    this.left = [];
    this.right = [];
  }

  insert(data) {
    const node = new Node(data);

    if (data < this.root && this.left) {
      this.left.insert(data);
    } else if (data < this.root) {
      this.left = node;
    } else if (data > this.right && this.right) {
      this.right.insert(data);
    } else {
      this.right = node;
    }
  }

  contains(data) {
    if (data === this.root){
      return this;
    }

    if (data > this.root) {
      return this.right.contains(data);
    }
    if (data < this.root) {
      return this.left.contains(data);
    }

    return null;
  }
}


console.log()