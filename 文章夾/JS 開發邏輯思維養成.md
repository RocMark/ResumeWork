# JS 開發邏輯思維養成

JS 起手式 資料=>事件=>介面

# 資料 (Model)
1. 用陣列與物件 規劃資料
2. JS記憶體儲存變數
3. LocalStorage

# 事件 (Event)
使用者行為觸發事件，一般用function來規劃
1. 更新model
2. 更新view
常見使用者行為
1. 網頁預設載入
2. 使用者行為 (點擊、滑鼠滑入)
畫面更新 innerHTML、appendChild

# 介面 (View)
顯示畫面 處理介面 Render DOM

# Vue MVVM
資料>介面>介面>資料


# 規劃程式 (自我範例練習)
1. 決定資料是甚麼
資料處理方法要用到哪些
增刪改查 filter
建立接受純資料的處理資料用Func

2. DOM有哪些
宣告一個物件統一管理 DOM

3. init()
初始化，取得存在localStorage的資料
掛載 DOM，並考慮事件代理
CallAPI 取得資料
將取得的資料，放入暫存的變數 originData

4. Function 宣告
建立 DOM觸發 Func
建立 DataFilter Func
建立 RenderDOM Func

```js
  // 動作 + 名詞
  const cart = {
    dom: {},
    data: [], // 可以緩存原始資料用
    init(){
      cart.dom.form.addEv('submit',cart.sendData)
      cart.dom.search.addEv('input',cart.searchData)
    },
    getFormData(){ /*取得Form資料 return 物件*/ },
    sendData(){
      // 加入新資料後，渲染List
      cart.data.push(cart.getFormData())
      cart.renderList(cart.data)
    },
    searchData(){
      // 做資料篩選後，渲染List
      cart.renderList(cart.filterData())
    },
    filterData(){ /*下條件篩選的資料*/ },
    renderList(data){ /*根據輸入的資料渲染不同List*/ }
  }
  cart.init()
```