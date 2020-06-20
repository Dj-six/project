export default {
  addCounter(state,payload) {
    payload.count++
  },
  addToCart(state,payload) {
    payload.select = true
    state.cartList.push(payload)
  }
}