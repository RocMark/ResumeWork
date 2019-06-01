# JS AJAX方法

# 常見 HTTP Status
* 200 is OK
* 403 is Forbidden
* 404 is Not Found
* 500 is Server Error (???)

# XHR
```js
  getData('https://jsonplaceholder.typicode.com/users')
  function getData(url) {
    const xhr = new XMLHttpRequest()
    // type, url/file, async
    // console.log(xhr) // 查看可使用方法
    xhr.open('GET', url, true)

    // 現在較常用這個
    xhr.onload = function () {
      if (xhr.status === 200) {
        // chromeDev/Network 可找到請求的檔
        console.log(this.responseText)
      }
    }
    
    // 用於 loading動畫、讀取時想作的事
    xhr.onprogress = function () {
      // 如果為 3 讀取中 展現loading
      console.log('READY STATE: ', xhr.readyState);
    }

    // 傳遞錯誤訊息
    xhr.onerror = function () {
      console.log('Request Error...')
    }
    xhr.send()
  }
```

# 補充: onreadystatechange
> ready State Values
0. request not init
1. server connection established
2. request received
3. processing request
4. request finished & response is ready

##　readyState Values　vs onload差別
* readyState Values 會檢查每一個 readyState Values
* onload 只檢查1.4

```js
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.table(JSON.parse(this.responseText))
    } else if (this.status === 404) {
      console.log('Not Found')
    }
  }
```