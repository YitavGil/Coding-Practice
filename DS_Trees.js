class node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }

    remove(data){
       this.children =  this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBreadthFirst(fn){
        const arr = [this.root];
        while (arr.length){
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDepthFirst(fn) {
        const arr = [this.root];
        while (arr.length) {
            const nide = arr.shift();

            arr.unshift(...nide.children)
            fn(node);
        }
    }

}

//Find the width of a tree => given a binary tree, return an array with each element
//is the number of nodes in each tree level

const levelWidth = (root) => {
    const arr = [root, 'end'];
    const widths = [0];

    while(arr.length > 1) {
        const node = arr.shift();

        if(node === 'end') {
            widths.push(0) 
            arr.push('end')
        } else {
            arr.push(...node.children);
            widths[widths.length - 1]++
        }
    }

    return widths
}


//Binary search tree

//todo: adding a node to the tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }

    insert(data) {
        if(data < this.data && this.left) {
            this.left.insert(data)
        } else if (data < this.data) {
            this.left = new Node(data)
        } else if( data > this.data && this.right){
            this.right.insert(data);
        } else if (data > this.data){
            this.right = new Node(data)
        }
    }

    //todo Find a specific node in the tree ('contains' method)

    contains(data) {
        if(this.data === data) {
            return this;
        }

        if(this.data < data && this.right) {
          return  this.right.contains(data);
        } else if( this.data > data && this.left){
            return this.left.contains(data)
        }
        return null
    }
}

// Tree validation
//todo ensure that every node's left hand is less than the parent's node value and vice versa

const validate = (node, min = null, max = null) => {
    if(max !== null && node.data > max) {
        return false;
    }

    if( min !== null && node.data < min) {
        return false;
    }

    if(node.left && !validave(node.left, min, node.data)){
        return false;
    }
    if(node.right && !validave(node.right, max, node.data)){
        return false;
    }

    return true
}