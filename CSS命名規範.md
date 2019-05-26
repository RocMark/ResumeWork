# CSS命名規範 (重構用)

# 重構重點
1. 小駝峰命名 改成 some-class
2. 盡可能減少 BS4 元件架構，留網格系統
3. 注意class排列的順序
4. 將各區域改成 Section 並給予 h2~h6

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
