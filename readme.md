# 複數 Bootstrap Modal 的使用

情境：需要關掉一個 Model 時，開啟另一個 Model 時，該怎麼做呢？

## 操作
1. 當然，需要在有 Bootstrap 的狀況下
2. 因為要控制 Bootstrap 開啟的時間點，所以要自己寫 js，自己找事件去觸發
3. 所以按鈕上的 `data-bs-toggle="modal" data-bs-target="#exampleModal"` 這些要全去掉
4. 然後建立 Bootstrap Modal 物件，[參照這裡](https://getbootstrap.com/docs/5.3/components/modal/#via-javascript)
5. 再來需要 Modal 開啟與關閉的方法，[閱讀這裡](https://getbootstrap.com/docs/5.3/components/modal/#methods)
6. 最後要有事件的加入，[事件的整理](https://getbootstrap.com/docs/5.3/components/modal/#events)
7. 如果想對 Modal 有全面的了解，[這裡有老師一小時的影片](https://youtu.be/Ig6u1WxnaQo)，可以按讚分享再看個十遍，追蹤一下讓老師有一天能開會員更好
8. 範例裡的第一個按鈕是開啟第一個 Modal 後，完全關掉時開第二個
9. 範例裡的第二個按鈕是開啟第一個 Modal 後，完全關閉時再開啟第一個 Modal，並更改裡面的內容、樣式與事件
10. 請按能力去使用與修改
11. [線上測試](https://idben.github.io/multiple_modal_01/)
12. 按個星星讓老師知道你有來看過