# 空氣汙染API
* 記得補進 CodeBase

# 查
*  scope="row"
```html
  <th class="" scope="row">1</th>
```

# Promise with XHR
```JS
    setRawData() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', aqi.dataUrl, true)
        xhr.send(null)
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve('OK')
            console.log(this.responseText)
          } else {
            reject(new Error('Error'))
          }
        }
        xhr.onerror = function () {
          reject(new Error('Error'))
        }
        
      })
    }
```








# SCSS Each
```scss
  // @each $var1,$var2 in <list/map>
  @each $key, $color in $aqi-c {
    .b-aqi__table thead tr th{
      &:nth-child(#{$key}){
        background-color: $color;
      }
    }
  }
```

# 顏色
* 使用數字作為 Key，為了配合 ScssMap
```scss
  $aqi-c:(
    // 低到高
    1: #00E800,
    2: #FFFF00,
    3: #FF7E00,
    4: #FF0000,
    5: #8F3F97,
    6: #7E0023,
  );

  @function aiq-c($color-name) {
    @return map-get($aiq-c, $color-name);
  }

  .test {
    color: aiq-c(level1);
  }
```

# 
```scss
// @each $var1,$var2 in <list/map>
// 渲染 aqi 表單
@each $key, $color in $aqi-c {
  .b-aqi__table--rule thead tr th{
    &:nth-child(#{$key}){
      background-color: $color;
    }
  }
}
```

# Table 基本
* overflow:scroll;
```scss
  table {
    // Prevent double borders
    border-collapse: collapse;
  }

  table {
    text-align: center;
    border: .5px solid $table-border-c;
    thead {
      border-bottom: .5px solid $table-border-c;
    }
    th{
      border-right: .5px solid $table-border-c;
    }
    td {
      border-right: .5px solid $table-border-c;
    }
  }




```