// btnというidをもつHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidをもつHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// 2秒の待ち時間を設定し、文章を書き換える
btn.addEventListener('click', () => {
     setTimeout(() => {
      text.textContent = ('ボタンをクリックしました');
     }, 2000);
 });
