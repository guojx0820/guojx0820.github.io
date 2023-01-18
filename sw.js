/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5dbeb3c7ea42bb39fa9e68f2a9440387"],["/about/index.html","ff8e77301070f5844527eaf53f268111"],["/archives/1abb07a6.html","fba4cd92d6be546c490cf5f649e6606b"],["/archives/1def5f0d.html","1835e7bbe549639fcf16c3377f285137"],["/archives/2021/03/index.html","a1b15ee1ec0607c37a71e28d85939fbb"],["/archives/2021/04/index.html","d1e547c394f2bb8c3dbaeb61cd0f8dac"],["/archives/2021/index.html","af7fbfd2aa20fe203c02674d437e5ea3"],["/archives/2022/04/index.html","84f220bbb1cde75585087a4893693186"],["/archives/2022/05/index.html","a72d387b9c9b563fab53797f537d3474"],["/archives/2022/06/index.html","773abe0a31b71797ad64ec650e7938b7"],["/archives/2022/07/index.html","c4e3141307415e0aa7bf784bea1c5c25"],["/archives/2022/index.html","f7fa56ed04cf6f461b0fcf863d00b100"],["/archives/2022/page/2/index.html","f15947d95678b71dd33868aa569d92e7"],["/archives/23cd4859.html","8368eaea34e18214594c1cc8a3390092"],["/archives/266295d8.html","ba04a125c2684d0872f1cb8e3a655082"],["/archives/330ac4a4.html","2b15bb9223c6e51a4e8017a5e7f39084"],["/archives/3a816938.html","3e4d42b4ef93f935c9014a36d1991adc"],["/archives/4360a9bd.html","926d578ba655cdbe59df82cd808abc8c"],["/archives/49977e84.html","2e7b3d60511ecea335270be149992517"],["/archives/573e690a.html","8d6ef9d87fdee55f8689cdc820dae02c"],["/archives/57eb0d7a.html","c78922f54de21d619fc9a52e4c4f6280"],["/archives/61521166.html","2c8293f97a606c4f2189930dcc06f8a9"],["/archives/7576230f.html","dcad923e33cb5c72c6217ea6e7670378"],["/archives/8063fed6.html","559a2a4dd3bced5e36f51e7ea352df33"],["/archives/8c1f6a98.html","c9120b11e8c60e0446cff010e17d8888"],["/archives/91104203.html","46dc20dde05c6f9b0a88d1bb88a5d401"],["/archives/a1db3116.html","e7164850cd9b177c83afd1b6def724af"],["/archives/a8ccf4cb.html","d64f831ce03f22ea87fdb11194a1c140"],["/archives/c144f20a.html","7067d567b8bc0f455e77497225c128ca"],["/archives/e84af901.html","bc0bac3ae78e8818cdf706244711655f"],["/archives/f3ecd78a.html","2d4c3f57d55b30f67bf128dfc36d8fd8"],["/archives/fe82aeb3.html","dc24a3b03bf3d15b426b66dbe2b43b92"],["/archives/index.html","c3251ebe6e3cba52fd25de9da5a8a5e3"],["/archives/page/2/index.html","91eb4b2708553285c5eb7aa429efb863"],["/archives/page/3/index.html","06694de02ca0f5142f9a508f1eedf8e7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","6a2743ee10ee19a8a6a557bdeb39604d"],["/books/index.html","c722d5bcdc85cbd5c778dc44d6cd7613"],["/categories/index.html","96c6700603f02860ed303e01674b2ff4"],["/categories/博客搭建/index.html","234acf773e215bd48bedd5a111b52b5e"],["/categories/生活/index.html","f1c34df9c2986be88109419df7ca9c4f"],["/categories/程序代码/index.html","9e743f5386c2eacb7c3e3bf818829406"],["/categories/解决方案/index.html","19182d1b2276a53f91e530d8588ac35f"],["/categories/读书与生活/index.html","9b93c4835aab7e093c5548854e1eb54c"],["/categories/遥感与大数据/index.html","1b79ea934883be31abb9da76ef2f86b4"],["/comment/index.html","c8ba52b56e0db1bf4300352ecc29a2f4"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","185dfe12404fb13f86261e64f903fbfc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","740bb0199f6abed9a0a6186f2407b073"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","0f5aadc2d754d4de53075145d2e24190"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","aae48c0b6cd36953c0f8e90bcaa177a7"],["/music/index.html","ce0547e3ae50d9d5596821019f6df5bd"],["/notes/index.html","8969b78d194c4972b05f579056d8763d"],["/page/2/index.html","e65e3e4aeb81d7ca55474e71569d6269"],["/page/3/index.html","17193e7827876d5292d01dc209613217"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","3620fcdca0190aa347de12de9aaf8a36"],["/sw-register.js","2699f89154b2a81124b9f084acee4d20"],["/tags/C/index.html","c5a7bf92b490c1a636f8821d923d3360"],["/tags/Hexo/index.html","dbc2373d17e59e1fdd8ba1e82508a466"],["/tags/Python/index.html","dcbc7d8aed4c00dc14229f78fe75cdfd"],["/tags/Python数值分析/index.html","e65ebe98c20a8f8d078a60e5d0e5eed2"],["/tags/Python数字图像处理/index.html","1920fa9ebfec1489e190ee35f69cf001"],["/tags/index.html","045eb404660cf3c645ad1039d78c2eff"],["/tags/人生/index.html","a094b9e4d4e231e39da967731b713733"],["/tags/生活与感悟/index.html","a1d4c7af72457d5844d0f1c296bbbea1"],["/tags/网络与浏览器/index.html","7be416f060479a28a26578fb5308b9ea"],["/tags/诗歌/index.html","396e9e6ea1a7e1f45ce8d10e15ed479e"],["/tags/读书与生活/index.html","6c41e5fad6c0b3b2b6e54f2f339da7b6"],["/tags/辐射传输/index.html","783baf5457ae23d57868992e998ec461"],["/tags/遥感/index.html","5031d996f8e3885dff610d7fcd2e5230"],["/tags/问题解决方案/index.html","cd6859ca5a61a4899aa781014875b1a4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
