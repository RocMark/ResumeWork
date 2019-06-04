# CSS命名規範 (重構用)

# 重構重點
1. 小駝峰命名 改成 some-class
2. 盡可能減少 BS4 元件架構，留網格系統
3. 注意class排列的順序
4. 將各區域改成 Section 並給予 h2~h6
5. 利用 HTML Outline 補上 該補的 h2~h6

# 遵循規則
- 樣式結構分離,盡可能減少裝飾樣式於HTML上
- 從Class名就可知道 功能 / 用在哪 / 關聯性
- 抽象化命名 顏色primary/字體大小md
- 勿以方向或位置命名 left-menu(X)
- HTML,CSS分離，修正以html tag指定子元素的情況

# 重構範例
```css
  l-header (表網站獨特的header)
    p-comments (表該頁專屬區塊)
      b-comments__img (block表只用一次的樣式)
      b-comments__title
    b-logo
      b-logo__img
      b-logo__title
    m-search (m表可在多個地方使用的元件組)
      m-search__input (元件)
      m-search__input--focus
      m-search__btn
```

# 重構命名
l-  表 layout 唯一
m-  表 modules 區塊性組件
e-  表 element 可復用元件
p-  表 page 頁面專屬
js- 表 js 控制物件

__title 雙底線當成後墜 表用途/修飾字

--  表 state 狀態

is- 表 JS 控制用 通用狀態
> Ex: .is-hidden

sty- 表樣式
text- 表文字色彩
bg- 表背景色彩


# Concentric-CSS 同心排序
> 依據 box model 從 外向內排序
{前墜class} {bs4-mp} {樣式類}

# 待重寫 CSS
```scss
// Form 狀態開一Module
.is-hidden { display: none ;}
.is-error {
  font-weight: 700;
  color: red;
}
.is-tab-active {
  border-bottom-color: transparent;
}


// socialLinks 顏色待改
.e-icon {
  color: #fff;
  &__facebook { color:#3a5795};
  &__twitter { color:#41abe1};
  &__youtube { color:#c4302b};
}

// 部分 mixin 更換成 extend
%sty-rounded { border-radius: 50%; }
%sty-shadow { 
  box-shadow: pxToRem(3px) pxToRem(3px) pxToRem(4px) 0 rgba(#000,0.16) 
}
```

# 一些命名字
廣告/頁首 banner
指南/導覽 guide
合作夥伴 partner


# CSS命名規則

# mixin & extend 比較
extend 用於合併程式碼 (Code長一模一樣)

mixin  
1. 幫助記憶程式片段，呼其名即可
2. 可帶入變數
3. 可配合media query

* 注意 不要把 mixin 當 extend用
會造成同片段，重複編譯，導致CSS暴肥

```css
  %circle { border-radius: 50%; }
  .e-card-Img { @extend %circle; }
```

# BEM
* Block__Element--Modifier

## Block 在頁面上獨立存在可復用的元件
如同 SMACSS 的 Module, Layout
每個 Block 都是獨立存在的

## Element (.button__icon 雙下底線)
Block的一部份子元件
無法獨立於 Block 之外

## Modifier 
用來定義 Block 或 Element 的狀態或屬性
類似 SMACSS 的 State

# OOCSS
結構與外觀分離 Structure & Skin
容器與內容分離 Container & Content

# SMACSS
* Decoupling CSS from HTML 分離 (重要!!)
避免使用HTML結構去指定目標
給與自訂義class保有彈性
```css
.media li a {}  (BAD)
.media-link {}  (Better)
```
Naming rules 命名規則
* Categorization 結構分類
Base   /  CSS Reset/Normalize
Layout /  Header/SideBar/Content
Module /  Tabs/CustomizedList/Button
State  /  default/active/disabled
Theme  /  

## Module (.mod-header / .mod-body)
頁面可單獨存在 且 可重複使用的元件
應避免使用 #id 或 tag 做為選擇器

## State (.is-hidden / .is-error)
與 Layout,Module搭配
用以表示狀態變化

## Theme (.theme-*)
定義網站主視覺
類似 Layout，但影響的是網站視覺的變化

# figure & picture 用法整理
picture 可用 source 根據viewport 載入不同圖片
```html

```

# CSS 代碼性能優化
1. margin/padding/border 盡量合併
2. 盡可能減少選擇棄嵌套
3. 不使用 * 
4. border: none; 而非0
5. background/font 能縮寫就縮寫
6. 盡量不用 !important
7. 背景圖 盡可能使用 sprite,減少http請求
8. 

# CSS 字型選擇
* 字型屬性
serif(襯線字)
sans-serif(無襯線字)
cursive(類手寫字)
fantasy(裝飾字)
monospace(等寬字)

* font-family 使用對應英文名較佳
雅黑 用於簡中較佳， 正黑則為繁中
* sans-serif 為 無襯線的內建字型

* 設定網頁字體時，會將「英文字體」在最前、MAC、Windows
因中字通常「包含」英字，若中在前，則不繼續往下找了。

* 使用 GoogleFonts 要注意大小、字重亦有差別，避免使用2套+
```html
  <style>
    body {
      /* 微軟雅黑(第一順), 正黑(二順), 預設 */
      font-family: Microsoft JhengHei, Microsoft Yahei, sans-serif;
      /* GoogleFont 思源黑體 */
      font-family: 'Noto Sans TC', sans-serif;
  }
  </style>
  <!-- 
    可用 HTML Link 亦可用 SCSS Import方式
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap&subset=chinese-traditional');
   -->
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap" rel="stylesheet">
```

