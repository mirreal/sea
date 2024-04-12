# 裴波那契数列

```js
// 普通低效实现方法
const fib = n => n < 2 ? 1 : fib(n - 1) + fib(n - 2)

// 使用尾递归实现
const fibTail = (n, a = 1, b = 1) => n === 0 ? a : fibTail(n - 1, b, a + b)
```
