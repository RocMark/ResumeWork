# Array.from()
* Any iterable object...
* Map
* Using an arrow function as the map function to manipulate the elements
* Generate a sequence of numbers
```js
  // ["foo", window]
  Array.from(new Set(["foo", window]));

  // [[1, 2], [2, 4], [4, 8]]
  var m = new Map([[1, 2], [2, 4], [4, 8]]);
  Array.from(m);

  // [2, 4, 6]
  Array.from([1, 2, 3], x => x + x);

  // [0, 1, 2, 3, 4]
  Array.from({length:5}, (v, k) => k);
```

# 還沒整理的鬼東西
copyWithin
slice
```js
  // slice 切片
  var arr = [1, 2, 3, 4, 5]
  let result01 = arr.slice(1, 3) // result01: [2, 3], arr: [1, 2, 3, 4, 5]
  var arr = [1, 2, 3, 4, 5]
  let result02 = arr.slice(-2) // result02: [4, 5], arr: [1, 2, 3, 4, 5]
  var arr = [1, 2, 3, 4, 5]
  let result03 = arr.slice(-2, 0) // result03: [], arr: [1, 2, 3, 4, 5]
  var arr = [1, 2, 3, 4, 5]
  let result04 = arr.slice(0) // result04: [1, 2, 3, 4, 5], arr: [1, 2, 3, 4, 5]
```


# ES6
* sort() 可用於字母、數字排序
> 測一下正序倒序怎寫
* some 其中之一符合回傳 true
是否要配合 break 提早跳出迴圈
* every 每個皆要符合才回傳 true
* find 回傳第一個滿足所提供之測試函式的元素值

* findIndex 回傳第一個滿足的Index值
查回傳所有!! (用filter?)


# 陣列去重另外開一篇文章
