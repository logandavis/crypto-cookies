// Function stolen from https://github.com/hank/cloud-to-butt
// (which in turn stole from http://is.gd/mwZp7E)
function walk(node) {  
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      if (node.parentElement.tagName.toLowerCase() != 'script') {
        coinReplacers.forEach(function(replacer) {
          node.nodeValue = node.nodeValue.replace(replacer.regex, replacer.fn);
        });
      }
      break;
  }
}

walk(document.body);
