export default {
  //计算属性
  powerCounter(state) {
    return state.counter * state.counter
  },
  more2(state) {
    // return state.foods.filter(data => {
    //   return data.id > 2
    // })
    return state.foods.filter( data => data.id > 1 )
  },
  more2Length(state , getters) {
    return getters.more2.length
  },
  more2Id(state) {
    // return function (id) {
    //   return state.foods.filter( data => data.id > id )
    // }
    return id => { return state.foods.filter( data => data.id > id ) }
  }

}
