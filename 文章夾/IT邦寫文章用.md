
# 
* fetch API return Promise物件!
# Promise /  Async / Await 範例
```js
  const posts = [
    { name: 'A', body: 'AAA' },
    { name: 'B', body: 'BBB' },
  ]

  function getPosts() {
    // 用來模擬從伺服器取得資料的時間delay
    setTimeout(() => {
      let output = []
      posts.forEach((el) => { 
        output.push(el)
      })
      console.table(output)
    }, 1000)
  }

  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post)
        // 設為true 試試
        const error = false
        if (!error) {
          resolve('OK')
        } else { reject(new Error('Error')) }
      }, 2000)
    })
  }

  createPost({ name: 'C', body: 'CCC' }).then()
    .then(getPosts)
    // .catch((err) => { console.log(err) })


  // Async / Await 用法
  async function init() {
    await createPost({ name: 'C', body: 'CCC' })
    getPosts()
  }
  init()
```

# Async / Await with fetch
```js
  run()
  async function run() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.table(data)
  }
```



## CSS CustomCheckBox
* [CSS 版本](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp)
* SCSS 版本 .e-checkbox > input + span
* [CodePen](https://codepen.io/RocMark/pen/XwoZga)
```html
  <label class="e-checkbox">
    <input type="checkbox" checked="checked">Text
    <span class="checkmark"></span>
  </label>
```
```css
    .e-checkbox{
      display: inline-block;
      position: relative;
      padding-top: 5px;
      padding-left: 30px;
      cursor: pointer;
      user-select: none;
      /* Hide the browser's default checkbox */
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ span {
          background-color: #2196F3;
          &:after {
            display: block;
          }
        }
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        &:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        &:after {
          content: "";
          position: absolute;
          display: none;
        }
      }
      &:hover input ~ .checkmark {
        background-color: #ccc;
      }
    }
```

## CSS Exist
* 使用 a 做為 dom
* [CSS Version](https://codepen.io/brissmyr/pen/egidw)
* Scss Version
```css
    .existIcon {
      position: absolute;
      right: 32px;
      top: 32px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      &:hover { opacity: 1; }
      &:before, &:after{
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
      }
      &:before { transform: rotate(45deg); }
      &:after { transform: rotate(-45deg); }
    }
```