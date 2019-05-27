(function () {
  document.addEventListener('DOMContentLoaded', () => {


    /* Day1 DrumKit */
    window.addEventListener('keydown', keyBoxEvent)
    function keyBoxEvent(e) {
      let keyPressed = e.keyCode
      let target = document.querySelector(`.b-key[data-key="${keyPressed}"]`)
      target.classList.add('animated')
      target.classList.add('shake')
    }

    /* Day2 JS & CSS Clock */

    /* Day3 CSS Variable */

    /* Day4 & Day7 Array Cardio */
    
    /* Day5 Flex Panel Gallery */

    /* Day6 TypeAhead */
    
    /* Day8 HTML Canvas */

    /* Day9 DevToolsDomination */ 

    const consoleGenBtn = document.querySelector('.b-console__btn--generate')
    consoleGenBtn.addEventListener('click', generateConsole)

    // 清空 console 
    const consoleClearBtn = document.querySelector('.b-console__btn--clear')
    consoleClearBtn.addEventListener('click', () => { console.clear() })
    
    function generateConsole() {
      // 帶樣式
      console.log('%c JS30 Day9 Console 練習', 'font-size:25px; background: #212529; color: #fff;')
      
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
      const consoleDemoArray = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]
      console.table(consoleDemoArray, 'name')

      // timing 回傳
      console.time('fetching data')
      fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then((data) => { console.timeEnd('fetching data') })
    }

    /* Day10 Hold Shift and Check Checkboxes */
    /* Day11 Custom Video Player */
    /* Day12 Key Sequence Detection */
    /* Day13 Slide in on Scroll */
    /* Day14 JavaScript References VS Copying */
    /* Day15 LocalStorage */
    /* Day16 Mouse Move Shadow */
    /* Day17 Sort Without Articles */
    /* Day18 Adding Up Times with Reduce */
    /* Day19 Webcam Fun */
    /* Day20 Speech Detection */
    /* Day21 Geolocation */
    /* Day22 Follow Along Link Highlighter */
    /* Day23 Speech Synthesis */
    /* Day24 Sticky Nav */
    /* Day25 Event Capture, Propagation, Bubbling and Once */
    /* Day26 Stripe Follow Along Nav */
    /* Day27 Click and Drag */
    /* Day28 Video Speed Controller */
    /* Day29 Countdown Timer */
    /* Day30 Whack A Mole */



    


  })
}())
    
    





