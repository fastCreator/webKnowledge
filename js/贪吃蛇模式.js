function load (...arg) {
  let len = arg.length
  if (!load._s) {
    load._s = 'loading'
  } else if (load._s === 'loading' && !len) {
    load._s = 'loaded'
  } else if (load._s === 'loaded' && len) {
    load._s = 'runing'
  } else if (load._s === 'runing' && !len) {
    load._s = 'end'
  }

  if (load._s === 'loading') {
    load._f = [].concat(load._f || [], arg)
  } else if (load._s === 'runing') {
    load._f.shift().apply(this, arg)
  } else if (load._s === 'end') {
    console.log('结束')
    load._s = 'loading'
  }
  return load
}

function A (a) {
  console.log('我是A' + a)
}
function B (b) {
  console.log('我是B' + b)
}
function C (c) {
  console.log('我是C' + c)
}
function P (name, age) {
  console.log('我是' + name + ',' + age)
}
load(A)(B)(C)()('a')('b')('c')()(B)()('b')()(A, B)()('a')('b')()

let build = load(A, P)()

build('a')('张三', 12)
