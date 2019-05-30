/* eslint-disable no-console */
(function () {
  document.addEventListener('DOMContentLoaded', () => {

    /* Day1 DrumKit */
    // window.addEventListener('keydown', keyBoxEvent)
    function keyBoxEvent(e) {
      let keyPressed = e.keyCode
      let target = document.querySelector(`.b-key[data-key="${keyPressed}"]`)
      target.classList.add('animated')
      target.classList.add('shake')
    }

    /* Day2 JS & CSS Clock */
    /* Day29 Countdown Timer */
    // Clock先不刻，先能做個電子鐘就行

    /* Day4 & Day7 Array Cardio */
    /* Day6 TypeAhead */
    // 購物車搜尋欄
    const arrayCardio = {
      dom: {
        originDataDOM: document.querySelector('#b-array__table--origin'),
        processedDataDOM: document.querySelector('#b-array__table--processed'),
        btnParent: document.querySelector('.b-array__btns'),
        someInput: document.querySelector('#b-array__input--some'),
        someAns: document.querySelector('#b-array__ans--some'),
        everyInput: document.querySelector('#b-array__input--every'),
        everyAns: document.querySelector('#b-array__ans--every'),
        everyVal: document.querySelector('#b-array__range--value'),
        findIndexInput: document.querySelector('#b-array__input--findIndex'),
        findIndexAns: document.querySelector('#b-array__ans--findIndex'),
      },
      describe: {
        filter: "篩選出誰生於1500's",
        sortAge: '以年齡排序 高到低',
        sortAlpha: '依據 first 做英文字母排序 Z-A',
        find: '找出第一個叫Albert的人',
      },
      originData: [
        {
          first: 'Albert',
          last: 'EinsteinA',
          birth: 1879,
          passed: 1955,
        },
        {
          first: 'Albert',
          last: 'EinsteinB',
          birth: 1879,
          passed: 1955,
        },
        {
          first: 'Isaac',
          last: 'Newton',
          birth: 1643,
          passed: 1727,
        },
        {
          first: 'Galileo',
          last: 'Galilei',
          birth: 1564,
          passed: 1642,
        },
        {
          first: 'Marie',
          last: 'Curie',
          birth: 1867,
          passed: 1934,
        },
      ],
      // 掛載監聽 & Render 原始資料
      init() {
        // 事件代理
        this.dom.btnParent.addEventListener('click', this.createTable)

        // some掛載事件
        this.dom.someInput.addEventListener('change', this.someInputFunc)
        this.dom.someInput.addEventListener('keyup', this.someInputFunc)
        // every掛載事件
        this.dom.everyInput.addEventListener('change', this.everyInputFunc)
        this.dom.everyInput.addEventListener('input', this.everyInputFunc)
        // findIndex掛載事件
        this.dom.findIndexInput.addEventListener('change', this.findIndexInputFunc)
        this.dom.findIndexInput.addEventListener('input', this.findIndexInputFunc)
        
        this.renderData(
          arrayCardio.dom.originDataDOM,
          'origin',
          arrayCardio.processedData(),
        )
      },
      // 已map後資料
      processedData() {
        return this.originData.map(el => ({
          first: el.first,
          last: el.last,
          birth: el.birth,
          passed: el.passed,
          age: el.passed - el.birth,
        }))
      },
      // array處理過程
      processFunc(title) {
        let result = []
        // Map 使用
        let data = arrayCardio.processedData()

        switch (title) {
          case 'filter':
            result = data.filter(el => el.birth >= 1500 && el.birth < 1600)
            break
          case 'sortAge':
            result = data.sort((elA, elB) => {
              let livedA = elA.passed - elA.birth
              let livedB = elB.passed - elB.birth
              return livedA < livedB ? 1 : -1
            })
            break
          case 'sortAlpha':
            result = data.sort((elA, elB) => {
              let nameA = elA.first.toLowerCase()
              let nameB = elB.first.toLowerCase()
              return nameA < nameB ? 1 : -1
            })
            break
          case 'find':
            result = (function () {
              let tmpArr = []
              let target = data.find(elem => elem.first === 'Albert')
              tmpArr.push(target)
              return tmpArr
            }())
            break
          default:
            break
        }

        return result
      },
      // 產生結果陣列
      createTable(e) {
        const tagName = e.target.tagName.toLowerCase()
        if (tagName === 'button') {
          let { func } = e.target.dataset
          arrayCardio.renderData(
            arrayCardio.dom.processedDataDOM,
            func,
            arrayCardio.processFunc(func),
          )
        }
      },
      renderData(target, title, data) {
        // console.table(title, data)
        // 處理describe說明文字
        let describeText = ''
        switch (title) {
          case 'filter':
            describeText = this.describe.filter
            break
          case 'sortAge':
            describeText = this.describe.sortAge
            break

          case 'sortAlpha':
            describeText = this.describe.sortAlpha
            break

          case 'find':
            describeText = this.describe.find
            break

          default:
            break
        }
        // dataMarkUp 為陣列資料處理
        // markUP 為整個Table渲染
        let dataMarkUp = data.reduce((sum, el) => {
          let tempStr = `
            <tr>
              <th scope="row">1</th>
              <td>${el.first}</td>
              <td>${el.last}</td>
              <td>${el.birth}</td>
              <td>${el.passed}</td>
              <td>${el.age}</td>
            </tr>
          `
          return sum + tempStr
        }, '')

        // console.log(dataMarkUp)
        
        let markup = `
          ${describeText}
          <table class="b-array__table table table-dark table-bordered table-hover table-sm">
            <thead class="thead-dark">
              <tr>
                <th style="width: 10%" scope="row">${title}</th>
                <th scope="row">first</th>
                <th scope="row">last</th>
                <th scope="row">birth</th>
                <th scope="row">passed</th>
                <th scope="row">age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                ${dataMarkUp}
              </tr>
            </tbody>
          </table>
        `
        target.innerHTML = markup
      },
      someInputFunc(e) {
        let inputAge = e.target.value
        let someTest = function (elem) { 
          let age = elem.passed - elem.birth
          return (age >= inputAge)
        }
        
        let result = arrayCardio.processedData().some(someTest)
        arrayCardio.dom.someAns.textContent = result
      },
      everyInputFunc(e) {
        let val = e.target.value
        arrayCardio.dom.everyVal.textContent = val
        let result = arrayCardio.processedData().every((elem) => {
          let age = elem.passed - elem.birth
          return (age >= val)
        })
        arrayCardio.dom.everyAns.textContent = result
      },
      findIndexInputFunc(e) {
        let name = e.target.value
        if (!name) {
          arrayCardio.dom.findIndexAns.textContent = '不可為空'
        } else {
          let result = arrayCardio.processedData().findIndex(elem => elem.last === name)
          if (result < 0) {
            arrayCardio.dom.findIndexAns.textContent = '查無此人'
          } else {
            arrayCardio.dom.findIndexAns.textContent = result
          }
        }
      },
    }
    arrayCardio.init()


    /* Day9 DevToolsDomination */
    const myConsole = {
      consoleGenBtn: document.querySelector('.b-console__btn--generate'),
      consoleClearBtn: document.querySelector('.b-console__btn--clear'),
      init() {
        myConsole.consoleGenBtn.addEventListener('click', myConsole.generateConsole)
        myConsole.consoleClearBtn.addEventListener('click', () => {
          console.clear()
        })
      },
      generateConsole() {
        // 帶樣式
        console.log(
          '%c JS30 Day9 Console 練習',
          'font-size:25px; background: #212529; color: #fff;',
        )
  
        // 一般常見
        console.log('log', 'Day9 Console')
        console.info('info', 'Style Work On FireFox')
        console.warn('warn', 'Day9 Console')
        console.error('error', 'Day9 Console ')
  
        // Interpolated  插入變數
        // %s 表 string, %d或%i 表整數 %f表浮點數
        console.log('Interpolated a %s string!', '💩')
  
        // Testing 用
        // 判斷地一個參數是否為true, false則噴錯
        // console.assert((1 > 2), '錯誤訊息: 1並非大於2')
  
        // console.dir 把物件展開
        const consoleDemoObj = {
          title: 'JS30 Day9 Console',
        }
        console.dir(consoleDemoObj)
  
        // console.table 可作欄位篩選
        // Array 用 Table 形式呈現
        const consoleDemoArray = [
          { name: 'Snickers', age: 2 },
          { name: 'hugo', age: 8 },
        ]
        console.table(consoleDemoArray, 'name')
  
        // timing 回傳
        console.time('fetching data')
        fetch('https://api.github.com/users/wesbos')
          .then(data => data.json())
          .then((data) => {
            console.log(data)
            console.timeEnd('fetching data')
          })
      },
    }
    myConsole.init()

    /* Day12 Key Sequence Detection */
    // 這個不難可以先做

    /* Day13 Slide in on Scroll */
    // 做首頁區塊 點擊滑至該區 & 滑入動畫

    /* Day15 LocalStorage */
    const myLocalStorage = {
      dom: {
        itemList: document.querySelector('#b-locals__item__list'),
        form: document.querySelector('#b-locals__form'),
        id: document.querySelector('.b-locals__input[name="id"]'),
        title: document.querySelector('.b-locals__input[name="title"]'),
        tag: document.querySelector('#b-locals__select'),
        price: document.querySelector('.b-locals__input[name="price"]'),
        describe: document.querySelector('.b-locals__textarea'),
        url: document.querySelector('.b-locals__input[name="url"]'),
        searchBar: document.querySelector('#b-locals__search'),
        searchBtn: document.querySelector('#b-locals__search--send'),
        listTab: document.querySelector('.b-locals__tab__list'),
      },
      testData: [
        {
          id: 1,
          title: '京都清水寺一日遊 A',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 2,
          title: '京都清水寺一日遊 B',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 3,
          title: '東京晴空塔夜遊 A',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
        {
          id: 4,
          title: '東京晴空塔夜遊 B',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
      ],
      newData: [
        {
          id: 1,
          title: '京都清水寺一日遊 A',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 2,
          title: '京都清水寺一日遊 B',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 3,
          title: '東京晴空塔夜遊 A',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
        {
          id: 4,
          title: '東京晴空塔夜遊 B',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
      ],
      init() {
        // 資料加入 localStorage & 渲染原始資料/Tab
        this.addOriginData()
        this.renderDataList(this.currentData())
        this.renderListTab()

        // 掛載新增購物清單DOM
        this.dom.form.addEventListener('submit', this.submitData)

        // 搜尋欄
        this.dom.searchBar.addEventListener('keyup', this.renderNewData)
        this.dom.searchBtn.addEventListener('click', this.renderNewData)

        // 側邊欄Tab
        this.dom.listTab.addEventListener('click', this.tabSwitchDataListener)
      },
      // 渲染 ListTab
      renderListTab() {
        let parent = this.dom.listTab
        // let tagType = e.target.children[0].dataset.area
        let westCount = myLocalStorage.currentData().filter(el => el.tag === '關西').length
        let eastCount = myLocalStorage.currentData().filter(el => el.tag === '關東').length
        // console.log('西', westCount, '東', eastCount, 'all', westCount + eastCount)
        
        // all Tab 更改文字內容
        parent.children[1].children[0].textContent = westCount + eastCount
        // 關東 Tab 更改文字內容
        parent.children[2].children[0].textContent = eastCount
        // 關西 Tab 更改文字內容
        parent.children[3].children[0].textContent = westCount
      },
      // Tab 更換清單內容的監聽
      tabSwitchDataListener(e) {
        const tagName = e.target.tagName.toLowerCase()
        const dataType = e.target.children[0].dataset.area
        if (tagName === 'li') {
          myLocalStorage.filterItem(dataType)
        }
        myLocalStorage.dom.searchBar.value = ''
      },
      // 更換清單內容
      filterItem(str) {
        switch (str) {
          case 'all':
            this.renderDataList(this.currentData())
            break
          case '關西':
          case '關東':
            this.renderDataList(this.currentData().filter(el => el.tag === str))
            break
          case '':
            this.renderDataList(this.currentData())
            break
          default:
            this.renderDataList(this.currentData().filter(el => el.title.includes(str)))
            break
        }
      },
      //? 搜尋功能 待做
      renderNewData(e) {
        const inputVal = myLocalStorage.dom.searchBar.value.trim()
        console.log(inputVal)
        const tagName = e.target.tagName.toLowerCase()
        myLocalStorage.filterItem(inputVal)
      },
      // 代入資料 渲染購物清單
      renderDataList(data) {
        let result = ''
        if (data.length === 0) {
          result = `
            <h4 class="d-block ml-3">查無關鍵字<h4/>
          `
        } else {
          data.forEach((el) => {
            let tpl = `
              <div data-itemId="${el.id}" class="col-12 col-sm-6 col-md-4 product mb-3">
                <img class="card-img-top" src="${el.url}" alt="productImg">
                <span class="productTag east">${el.tag}</span>
                <div class="productBody card-body">
                  <h5 class="card-title">${el.title}</h5>
                  <p>${el.describe}</p>
                  <hr>
                  <span class="productPrice mb-3">$${el.price}</span>
                  <button class="productBtn btn">
                    <i class="fas fa-shopping-cart"></i>
                    加入購物車
                  </button>
                </div>
              </div>
            `
            result += tpl
          })
        }
        myLocalStorage.dom.itemList.innerHTML = result
      },
      addOriginData() {
        localStorage.setItem('cartData', JSON.stringify(this.testData))
      },
      currentData() {
        if (!localStorage.getItem('cartData')) {
          localStorage.setItem('cartData', JSON.stringify(this.testData))
        }
        return JSON.parse(localStorage.getItem('cartData'))
      },
      getFormData() {
        return {
          id: this.testData.length + 1,
          title: this.dom.title.value,
          tag: this.dom.tag.value,
          price: this.dom.price.value,
          describe: this.dom.describe.value,
          url: this.dom.url.value,
        }
      },
      // submit事件
      submitData(e) {
        e.preventDefault()
        myLocalStorage.newData.push(myLocalStorage.getFormData())
        localStorage.setItem('cartData', JSON.stringify(myLocalStorage.newData))
        myLocalStorage.renderList()
        // console.table(myLocalStorage.currentData())
        myLocalStorage.renderListTab()
      },
      // 渲染表單
      renderList() {
        let el = myLocalStorage.getFormData()
        let tplStr = `
            <div data-itemId="${el.id}" class="col-12 col-sm-6 col-md-4 product mb-3">
              <img class="card-img-top" src="${el.url}" alt="productImg">
              <span class="productTag east">${el.tag}</span>
              <div class="productBody card-body">
                <h5 class="card-title">${el.title}</h5>
                <p>${el.describe}</p>
                <hr>
                <span class="productPrice mb-3">$${el.price}</span>
                <button class="productBtn btn">
                  <i class="fas fa-shopping-cart"></i>
                  加入購物車
                </button>
              </div>
            </div>
          `
        myLocalStorage.dom.itemList.innerHTML += tplStr
      },
      // 清除localStorage
      resetCartData() {
        localStorage.removeItem('cartData')
        // clear() 則是刪除整個localStorage資料
        // localStorage.clear()
      },
    }
    myLocalStorage.init()

  })
}())
