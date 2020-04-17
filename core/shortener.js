function elemDefId(id) {
  return document.getElementById(id);
}

function firstOfClass(className) {
  return document.getElementsByClassName(className)[0];
}

export {
  elemDefId,
  firstOfClass
}