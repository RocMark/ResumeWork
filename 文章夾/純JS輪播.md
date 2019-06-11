# JS 簡易輪播

# 功能
- 按上下按鈕 可切換
- 自動輪播，Hover本體停止自動輪播
- 點選 nav 切換圖片

# CSS
1. 用一容器將圖片列表裝成一行 (flex)
2. 把多餘的圖片隱藏 (overflow: hidden)
3. 控制該容器使其往左右滑動 (transformX)
- Smooth效果 (transition-duration)
- 圖片填滿 (flex: 1)

# 邏輯
- 以 index 為 觸發位移事件的 Trigger
- preBtn 當非首張時，index-1，觸發位移
- nextBtn 當非末張時，index+1，觸發位移
- 注意 index 0為始，跟資料陣列長度比較要調整
- 注意型別 字串、數字轉換

# JS 變數
- currentIndex 紀錄當前圖片為誰
用於位移的計算、觸發Nav Checked樣式
- carouselWidth 計算容器大小
用於位移計算
- autoLoopTimer 用來開關 setInterVal 用
- HTML data-* 自定義屬性 可以更方便的判斷 DOM

# JS 應用
- Hover 事件
mouseenter 滑鼠移入，移除計時器，關閉自動輪播效果
mouseleave 滑鼠移出，重新掛載計時器，啟動自動輪播
- getComputedStyle 用來計算容器寬
需注意該取得數值為字串，必須處理成數字
- transform 控制位移動畫，必寫px

```js
  const strWithPx = window.getComputedStyle(dom).getPropertyValue('width') // '50px'
  const val = parseInt(strWithPx , 10) // 50

  // Index 乘上 位移量 (正號確保為數字)
  let result = +(carousel.currentIndex) * +(carousel.carouselWidth)
  // transform 屬性 必須有 px 勿省略
  carousel.dom.imgList.style.transform = `translateX(-${result}px)`
```