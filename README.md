# JS練習用　おみくじ(ドットインストール)
## JavaScriptについて
### ボタンクリック時イベントの追加方法
```js
const btn = document.getElementById('btn');

    btn.addEventListener('click',()=>{
        //イベント
    });
```

- addEventListenerでクリックイベントを追加する

### JSでボタンの上にマウスがの買った時のスタイルを実装する方法
```js
btn.addEventListener('mouseover',function(event){
    console.log('OK');
    btn.style.opacity=0.9;
});
btn.addEventListener('mouseout',function(event){
    console.log('out');
    btn.style.opacity = 1.0;
});
```
- addEventListenerでmouseover(マウスが乗った時)、mouseout(マウスが外れた時)の処理を実装できる。

### 乱数の生成
```js
const n = Math.floor(Math.random()*result.length);
```
- Math.random()で0~1未満(1は含まれない)の乱数を生成。
-  Math.random() * nとすることで、n数分の乱数を生成
    -   例えば、n=5なら0~4までの五つの数が生成される。
- 上記をMath.floorで小数点以下切り捨てで完成


## CSSについて
### ボタンの上にマウスが乗ったら矢印を変える。
```css
#btn{
    cursor: pointer;
}
```
### クリックされてもボタンの文字が選択されないようにする。
```css
#btn{
    user-select: none;
}
```

### ボタンを丸にする。
### 文字の位置を上下左右の中心にする。
```css
#btn{
    border-radius: 50%;
    text-align: center;
    line-height: 200px;　//height: 200px;の場合
}
```
- border-radius:50%で4つ角が丸くなり、正円になる。
- text-align: center;で左右の中心に
- line-height: 200px;ここでは円の高さに合わせることによって、上下の中心に文字が来る。
