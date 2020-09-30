const getElementsByClassName = (targetClassName) => {
  const element = [];
  function findClass(htmlString) {
    let children = htmlString.children;

    if (children === undefined) {
      return;
    }
    if (htmlString.className === targetClassName) {
      element.push(htmlString);
    }
    for (let i = 0; i < children.length; i++) return findClass();
  }
};

module.exports = { getElementsByClassName };
