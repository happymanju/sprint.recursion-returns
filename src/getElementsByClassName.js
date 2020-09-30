const getElementsByClassName = (targetClassName) => {
  const element = [];

  function findClass(node = document.body) {
    let children = node.children;

    if (children === null) {
      return;
    }
    if (node.className.includes(targetClassName)) {
      element.push(node);
    }
    for (let element of children) {
      findClass(element);
    }
  }

  findClass();
  return element;
};

module.exports = { getElementsByClassName };
