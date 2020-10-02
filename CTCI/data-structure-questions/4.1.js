// Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the
// two subtrees of any node never differ by more than one.

const calculateHeight = function(tree)
{

  if (!tree) return 0
  if (!tree.left && !tree.right)
  {
    return 1
  }
  const lh = calculateHeight(tree.left)
  const rh = calculateHeight(tree.right)
  if (lh < 0 || rh < 0) return -2 //clever insight
  if (Math.abs( lh - rh) > 1) return -2 //clever insight
  return Math.max(calculateHeight(tree.left), calculateHeight(tree.right)) + 1
}

const balanceCheck = function (tree)
{
  if (!tree) return true
  if (!tree.left && !tree.right)
  {
    return true
  }
  const lh = calculateHeight(tree.left)
  const rh = calculateHeight(tree.right)
  if (lh < 0 || rh < 0) return false

  return Math.abs( lh - rh) < 2

}
module.exports = balanceCheck

