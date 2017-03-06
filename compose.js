// composeFunc(f1, f2, f3)(x) where f1, f2, f3 are functions and x = input
// result is f1( f2( f3(x) ) )
const composeFunc = (...args) => (x) => {
  const [...fns] = args.reverse();
  return fns.reduce( (acc, fn) => fn(acc) , x);
}

// pipeFunc(f1, f2, f3)(x) where f1, f2, f3 are functions and x = input
// result is f3( f2( f1(x) ) )
const pipeFunc = (...args) => (x) => {
  const [...fns] = args;
  return fns.reduce( (acc, fn) => fn(acc) , x);
}

module.exports.composeFunc = composeFunc;
module.exports.pipeFunc = pipeFunc;





