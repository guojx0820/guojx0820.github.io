/*
 * Local lazyload fallback for LuoMu Blog.
 *
 * Keep Butterfly/hexo-lazyload-image enabled, but make local preview resilient:
 * if the theme lazyload runtime or an external CDN script fails to initialize,
 * this small local script still swaps data-original into src/bg images when
 * elements approach the viewport.
 */
(function () {
  'use strict'

  var loadedAttr = 'data-luomu-lazyloaded'
  var selector = 'img[data-original], [bg-lazy]'

  function loadElement(el) {
    if (!el || el.getAttribute(loadedAttr) === 'true') return

    if (el.hasAttribute('bg-lazy')) {
      var bg = el.getAttribute('data-original') || el.getAttribute('bg-lazy')
      if (bg) el.style.backgroundImage = 'url("' + bg + '")'
      el.removeAttribute('bg-lazy')
      el.setAttribute(loadedAttr, 'true')
      return
    }

    var original = el.getAttribute('data-original')
    if (!original) return

    el.setAttribute(loadedAttr, 'true')
    el.addEventListener('load', function () {
      el.removeAttribute('data-original')
    }, { once: true })
    el.addEventListener('error', function () {
      el.removeAttribute(loadedAttr)
    }, { once: true })
    el.src = original
  }

  function collect() {
    return Array.prototype.slice.call(document.querySelectorAll(selector))
      .filter(function (el) {
        return el.getAttribute(loadedAttr) !== 'true'
      })
  }

  function eagerFirstScreen() {
    collect().forEach(function (el) {
      var rect = el.getBoundingClientRect()
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight
      if (rect.top <= viewportHeight * 1.5 && rect.bottom >= -viewportHeight * 0.5) {
        loadElement(el)
      }
    })
  }

  function start() {
    var elements = collect()

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            observer.unobserve(entry.target)
            loadElement(entry.target)
          }
        })
      }, {
        rootMargin: '600px 0px',
        threshold: 0.01
      })

      elements.forEach(function (el) {
        observer.observe(el)
      })
    } else {
      eagerFirstScreen()
      window.addEventListener('scroll', eagerFirstScreen, { passive: true })
      window.addEventListener('resize', eagerFirstScreen)
    }

    eagerFirstScreen()

    ;[100, 500, 1500, 3000, 6000].forEach(function (delay) {
      window.setTimeout(eagerFirstScreen, delay)
    })

    window.addEventListener('load', eagerFirstScreen)
    window.addEventListener('scroll', eagerFirstScreen, { passive: true })
    window.addEventListener('resize', eagerFirstScreen)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start)
  } else {
    start()
  }
})()
