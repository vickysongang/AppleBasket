/**
 * Created by songang on 2017/8/18.
 */

function initApplesOnTree(total) {
  return new Promise((resolve, reject)=> {
    total = total || 10
    let apples = []
    for (var i = 0; i < total; i++) {
      let weight = Math.floor(200 + Math.random() * 50)
      let apple = {
        id: i + 1,
        weight: weight,
        type: weight % 3 === 0 ? 'green' : 'red'
      }
      apples.push(apple)
    }
    resolve(apples)
  })
}

export {
  initApplesOnTree
}
