# JS Scroll

# 滾動事件基礎
```js
  // 綁定滾動事件
  window.addEventListener('scroll', smScroll.showBTopBtn)
  // 當前螢幕Y
  window.scrollY
```

# 最新 SmoothScrolling 神解
支援度頗渣，但不會造成錯誤，只會變成直接跳到該處而已
加上此CSS，JS使用 window.scrollTo() 即可
scrollTo() 支援度也不是太好
```css
  html {
    scroll-behavior: smooth;
  }
```

# 思路
1. 給予要捲至的區域上個class & data-*
2. 取得個區高度位置，是否要根據nav高度做微調
3. 監聽滾動事件，判斷當前Y
4. Y符合觸發該區動畫

# WOW JS用法
> https://wowjs.uk/docs.html
- HTML加入以下
- CSS撰寫 animation (可從animate.css中抽出使用)
- 大小僅8KB 且MIT Free
```html
  <!-- Wow.js 使用 -->
  <h1 class="wow bounce">Wow....</h1>

  <!-- Wow.js 掛載 -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
  <!-- Wow.js 初始化 -->
  <script>
    new WOW().init()
  </script>
```