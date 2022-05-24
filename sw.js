/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a32845a8b8837d8359be915fa47af0d4"],["/about/index.html","199fb957dc9fad593333f341728d7671"],["/archives/1abb07a6.html","7e909b67709b68a72a68f3ca50d92850"],["/archives/2021/03/index.html","3c19afe1f765a046f2ed5c470a301f1f"],["/archives/2021/04/index.html","88164218186aee2879f114ad2c1be3e1"],["/archives/2021/index.html","a7e70cacd0a05a374419a05339625f57"],["/archives/2022/04/index.html","ea0e7341fda8e4a842a775d8a1b29cc0"],["/archives/2022/05/index.html","0a48e3193cb2e50f480687180bf18755"],["/archives/2022/index.html","e7a5edd2761d818e394d8979d7b3de24"],["/archives/2022/page/2/index.html","0d25276351dd879c774bdd1a2cee1923"],["/archives/23cd4859.html","0a6094ad47a49460bd45c1f8b3048736"],["/archives/266295d8.html","7fd9cef78491254806115d921af561f5"],["/archives/4360a9bd.html","188d3cf7a14318f171cc838386a082da"],["/archives/49977e84.html","5b4fdef744dc7443f2be28583392912d"],["/archives/573e690a.html","7ffaf2dbd93d86f2be2fcfe0c070f7f0"],["/archives/7576230f.html","1a15bd4f10e333fa85e2c76cea16aca8"],["/archives/8063fed6.html","9162d1e67f2dc1405acfc132383226d4"],["/archives/8c1f6a98.html","efa9977f575945e724ec5c50ebe0793b"],["/archives/a1db3116.html","47191b9d9d2cff3583b844e617c56370"],["/archives/a8ccf4cb.html","a172f8806b23e99bda7a7e5de5ae527f"],["/archives/c144f20a.html","fcee6613784f83891b694850ef4d50d4"],["/archives/f3ecd78a.html","74e7f895f1cf7ac50a8e06a91c89960f"],["/archives/fe82aeb3.html","0e73ae5143f18759d87e90ed18b325b9"],["/archives/index.html","0ec1ffb107c7884fdc1c4f0f1e2128fd"],["/archives/page/2/index.html","d8039c794d0f3bfa36b1ab420dcb8d2e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","2d794d053c42b17cd5a1f183f6799534"],["/books/index.html","5460623bd82db498ff6435753050c8fc"],["/categories/index.html","5b7b56e25a2e859df6f628f0950d19fc"],["/categories/博客搭建/index.html","a851160974c5178789b441216ce49d23"],["/categories/生活/index.html","ffb0f5c19848f75366c4444d3f75d1e3"],["/categories/程序代码/index.html","badead9f09368e05a2adcaed5c2c42e1"],["/categories/解决方案/index.html","901ec47bd543d74b1955dfc463f02af7"],["/categories/遥感与大数据/index.html","37f075fb07acc43ed2826ec35164c609"],["/comment/index.html","d88ef8730bcf7395c0541204b3615c9a"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","72a89e747c41d4d8b5c8058776ca3b03"],["/css/index.css","f2bdbbb4db75403c3c74e143a02093a4"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","155bcf1315cda1013418c1018e762c08"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1779116abbead26ec3bfba1da8ddcbf1"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","a42e4a607f10448b09275b4d40754720"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","bbe5507eca0393277f7b7338cf4aa789"],["/music/index.html","9328fdbea4ca959d51e74296306e54bd"],["/notes/index.html","39906369e574fa1c99f17e3c7351d57a"],["/page/2/index.html","899ea34ef7951a2844671ab3852cde88"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","7a8cc315503a88bb61085a93968c74a3"],["/sw-register.js","3579ab296a49e0fd7a4acee7b9555d47"],["/tags/C/index.html","f1b0c693742854385ab4583d5b7cf761"],["/tags/Hexo/index.html","582938032c2214278c8330fedeedb71f"],["/tags/Python/index.html","664f9ee8c6b166b5a1843a4bc72b956e"],["/tags/Python数值分析/index.html","a4a846e2fef7b46469eb88bb26c52a58"],["/tags/Python数字图像处理/index.html","a62e3d5bd7c4d9e4fb1e4f4b0755936f"],["/tags/index.html","5ecc37c6425db026f29ba2c6cf8ca8e9"],["/tags/生活与感悟/index.html","e22b3435dfb149272896d8a278aee5e0"],["/tags/网络与浏览器/index.html","52b0fa0a083f526b0361881ece419ca1"],["/tags/诗歌/index.html","14134287925659132e2da639ffd4038c"],["/tags/读书与生活/index.html","a39942704c1b443c8c844db103abbd94"],["/tags/辐射传输/index.html","83e6c9cf52ce7daaf78ac986979adb1c"],["/tags/遥感/index.html","b230ff10680323f91187b3e22636e67d"],["/tags/问题解决方案/index.html","829ae97be2b20d70e744201a79b9158d"]];
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
