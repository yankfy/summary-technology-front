# JSON.parse
> JSON.parse(text[, reviver])

# eval
```js
function jsonParse(opt) {
  return eval(`(${opt})`)
}
```
# new Function
```js
function jsonParse(opt) {
  return new Function(`return ${opt}`)()
}
```