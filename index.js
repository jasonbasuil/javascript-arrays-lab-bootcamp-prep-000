var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(-1)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(1)
  return kittens
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  var newKittens = kittens
  newKittens.pop()
  return newKittens
}
function removeFirstKitten(){
  var newKittens = kittens
  kittens.slice(1)
  return kittens
}

