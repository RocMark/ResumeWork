# JS AJAX

# CallBack 
1. 把函式當作另個函式的參數，透過另個函式來呼叫它
2. 控制多個函式間執行的順序
3. 
```js
  window.setTimeout(() => { 
    // 隔一段時間後才執行的函式
  }, 1000)

  const delayFun = function () {}
  setTimeout(delayFun, 1000)
```

# HTTP Request & Fetch 比較
xhr: 傳統 callBack 方式
fetch: 基於promise

# HTTP Request
* readyState 有5種
0 代表已經產生 XMLHttpRequest，但還沒連結到要取得的網址。
1 用了 open() ，但還沒傳送資料過去
2 用了 send()
3 loading 資料
4 撈回資料了，數據已接收完全
```js
   getData('http://localhost:3000/posts')
    function getData(url) {
      const xhr = new XMLHttpRequest()
      // 第三個參數為是否異步執行操作
      // 默認為true
      xhr.open('GET', url, true)
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          console.table(JSON.parse(this.responseText))
        } else if (this.status === 404) {
          console.log('Not Found')
        }
      }
      xhr.onerror = function () {
        console.log('Request Error...')
      }
      xhr.send()
    }
```

# fetch api
```js
  fetch('url')
    .then(res => res.json())
    .then((data) => {
      
    })
```

# promise
```js

```

# async / await
```js
  (async () => {
    const a = await run()
  })()
  async function run() {
    let result
    try {
      result = true
    } catch (e) {
      result = false
    }
    return result
  }
```

