# 待做小優化
* 把頁首換成輪播
* googleMap 點擊 燈箱效果
* 空氣品質指標 CityInput 改寫成 Input搜尋

# 待修正
* 購物車 Tab active切換
* 購物清單 Tag 樣式

# 可擴充練習
* 空氣品質 風向

# 待寫文章
1. 陣列去重
2. ES6陣列補完

# 政府公開資料
> https://script.google.com/macros/s/AKfycbwGkhTAu4_N_TdYC-Rxr2cC2sYLtY317P81-_a6xTWgok00h6P9/exec?url=https://script.google.com/macros/s/AKfycbzl6KKgb4v2-F3SCVxVaXjnMwM_XQvnk2A08nw7NjmGfuRVmak0/exec?url=http://opendata2.epa.gov.tw/AQI.json

# XHR response & responseText

## 資料為 文本(text/plain)
- 兩者皆可

## 資料為: JSON
- response 可獲取解析好的 JSON
- responseText 需要加上 JSON.parse() 作解析
## 資料為: document(text/html)
- response 可獲取解析好的DOM對象
- responseText 可獲得 html文本
## 資料為: 媒體(視頻/音訊)
- 設定 responseType 為 blob 再處理