/* 恢复旧站页脚：©2021 - 当前年 <红心> 洛沐 */
(function () {
  function restoreFooterHeart () {
    var copyright = document.querySelector('#footer .copyright')
    if (!copyright || copyright.querySelector('#heartbeat')) return

    var text = copyright.textContent.replace(/\s+/g, ' ').trim()
    var match = text.match(/^©\s*(.+?)\s+By\s+(.+)$/)

    if (match) {
      copyright.innerHTML = '&copy;' + match[1] + ' <i id="heartbeat" class="fa fas fa-heartbeat"></i> ' + match[2]
    } else {
      copyright.innerHTML = copyright.innerHTML.replace(/^(&copy;|©)\s*(.+)$/, '&copy;$2 <i id="heartbeat" class="fa fas fa-heartbeat"></i>')
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', restoreFooterHeart)
  } else {
    restoreFooterHeart()
  }
})()
