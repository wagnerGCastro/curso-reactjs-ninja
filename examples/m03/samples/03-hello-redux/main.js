'use strict'


// Redux 
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }

  return state
}



const { createStore } = Redux
const store = createStore(counter)

console.log(store)
console.log('getState', store.getState())   // getState(), pega o estado atual = 0
store.dispatch({ type: 'INCREMENT' })        // dispatch(), dispara uma ação   = 1
store.dispatch({ type: 'INCREMENT' })        // dispatch(), dispara uma ação   = 2
console.log('getState', store.getState())    // 1 + 1 = 2



var $value = document.querySelector('[data-js="counter"]')
const $counter = document.querySelector('[data-js="counter"]')
const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')

$decrement.addEventListener('click', decrement, false)
$increment.addEventListener('click', increment, false)

function decrement () {
  console.log(
    counter( parseInt($value.innerHTML), { type: 'DECREMENT' }) ,
    counter( parseInt($value.innerHTML), { type: 'INCREMENT' }) === 1,
  );
  store.dispatch({ type: 'DECREMENT' })
}

function increment () {
  console.log(
    counter( parseInt($value.innerHTML), { type: 'INCREMENT' }) ,
    counter( parseInt($value.innerHTML), { type: 'INCREMENT' }) === 1,
  );
  store.dispatch({ type: 'INCREMENT' })
}

store.subscribe(() => {
  $counter.textContent = store.getState()
})





