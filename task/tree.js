function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

TreeNode.prototype.add=function(ele){
    if (ele < this.val) {
        if (this.left === null) {
            this.left = new TreeNode(ele);
        } else {
            this.left.add(ele); 
        }
    } else {
        if (this.right === null) {
            this.right = new TreeNode(ele);
        } else {
            this.right.add(ele); 
        }
    }
}
TreeNode.prototype.inOrder=function(){
    const result=[]
   function traverse(node){
    if(node!=null){
    traverse(node.left)
    result.push(node.val);
    traverse(node.right)
    }
   }
   traverse(this)
   return result.join('->')
}

TreeNode.prototype.preOrder=function(){
const result=[]
function traverse(node){
  if(node!=null){
    result.push(node.val);
    traverse(node.left)
    traverse(node.right)
  }
}
traverse(this)
return result.join('->')
}

TreeNode.prototype.postOrder=function(){
  const result=[]
  function traverse(node){
    if(node!=null){
        traverse(node.left)
        traverse(node.right)
        result.push(node.val)
    }
  }
  traverse(this)
  return result.join('->')
}

TreeNode.prototype.delete=function(val){
    return deleteNode(this, val);
};

function deleteNode(root, val) {
    if (root === null) return root;

    if (val < root.val) {
        root.left = deleteNode(root.left, val);
    } else if (val > root.val) {
        root.right = deleteNode(root.right, val);
    } else {
        if (root.left === null && root.right === null) {
            root = null;
        }
        else if (root.left === null) {
            root = root.right;
        } else if (root.right === null) {
            root = root.left;
        }
        else {
            let temp = findMinNode(root.right);
            root.val = temp.val;
            root.right = deleteNode(root.right, temp.val);
        }
    }
    return root;
}

function findMinNode(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}


/**
 *             12
 *         10       20
 *       5   11   15   30  
 *                              
 */

var display= function(){
    let tree=new TreeNode(12);
    tree.add(10)
    tree.add(20)
    tree.add(15)
    tree.add(30)
    tree.add(11)
    tree.add(5)
    console.log("In Order",tree.inOrder());
    console.log("pre Order",tree.preOrder());
    console.log("post Order",tree.postOrder());
    console.log('delete',tree.delete(12),tree.inOrder());
    }
display()