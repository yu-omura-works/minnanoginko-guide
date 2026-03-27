var d = new Date();
document.getElementById('dateBadge').textContent = d.getFullYear() + '年' + (d.getMonth()+1) + '月 最新';
document.title = '【最短翌日】みんなの銀行紹介コードで1000円！' + d.getFullYear() + '年' + (d.getMonth()+1) + '月最新の口座開設特典ガイド';

function copyText(btnId) {
  var text = 'WdMQHEHZ';
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() { showCopied(btnId); }).catch(function() { fallbackCopy(text, btnId); });
  } else {
    fallbackCopy(text, btnId);
  }
}
function fallbackCopy(text, btnId) {
  var el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.focus();
  el.select();
  try { document.execCommand('copy'); showCopied(btnId); } catch(e) { alert('コード: ' + text); }
  document.body.removeChild(el);
}
function showCopied(btnId) {
  var btn = document.getElementById(btnId);
  btn.textContent = '✔︎ コピー完了！';
  btn.classList.add('copied');
  setTimeout(function() {
    btn.textContent = '📋 コードをコピーする';
    btn.classList.remove('copied');
  }, 2000);
}
