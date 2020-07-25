// closure

function debug(name) {
  return function (strings) {
    console.log(`[${name}] to do ${strings}`);
  };
}

let showDebug = debug("Error");

showDebug("colsure call back");
