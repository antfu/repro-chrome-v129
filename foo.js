export function define(foo) {
  return foo.toUpperCase()
}

const getter = () => import('./bar.js')

await 1

getter()
  .then(r => {
    console.log(r.default)
    if (typeof document !== 'undefined') {
      const el = document.createElement('div')
      el.textContent = r.default
      el.style.color = 'green'
      el.style.fontSize = '2em'
      document.body.appendChild(el)
    }
  })
  .catch(e => {
    console.error(e)
    if (typeof document !== 'undefined') {
      const el = document.createElement('div')
      el.textContent = 'Error:' + String(e)
      el.style.color = 'red'
      el.style.fontSize = '2em'
      document.body.appendChild(el)
    }
  })
