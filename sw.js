/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1b64574288772dd17219db9eb220e566"],["/about/index.html","97604ce0d720dea56c36463ee54b8652"],["/archives/1abb07a6.html","1d1dde4f8bef21df3bdf51ceacb8f64a"],["/archives/1def5f0d.html","2aaef3b3f744ab65e00bdc22b80cab90"],["/archives/2021/03/index.html","b3e9c6022e24ae77da2507007b2059db"],["/archives/2021/04/index.html","3d36be8259e64341feebab80e5f2967c"],["/archives/2021/index.html","df2b0f31760a4f15cd0343799a453fde"],["/archives/2022/04/index.html","bd9714bd113598970a0d0414a08bc5d5"],["/archives/2022/05/index.html","17d2729776ac545144a6b7db3e1bcf56"],["/archives/2022/06/index.html","9936f4980a9b7db53d7ef1a1f2a94ad8"],["/archives/2022/index.html","8550431bb48835e3287ded12886f5a2b"],["/archives/2022/page/2/index.html","fae35c157bc84c0f75cedac91e8e27d8"],["/archives/2023/01/index.html","c7aa89dfdf5d111a1d7c685d7eeb1f3c"],["/archives/2023/index.html","ea064c5968d4ecc02152fabb93bf76b1"],["/archives/23cd4859.html","286e49be006c75ad401818122ca84e18"],["/archives/266295d8.html","e4e0274f0391848190778aa1c1092031"],["/archives/330ac4a4.html","be4d8e70cfd2fd3059510ba56f6b5d86"],["/archives/3a816938.html","50d86774159937eba6ff40f21e57e1fd"],["/archives/4360a9bd.html","b914c5e44be435731e649caddd32c63c"],["/archives/49977e84.html","61788605e9eba422c3107fcfb9bdd08a"],["/archives/573e690a.html","c8541a029000558b6078355110289275"],["/archives/57eb0d7a.html","6e8a217aed45685c7c87a2766a6ecc55"],["/archives/61521166.html","0d90c4328d039d3d2a71e2d7df5b82ca"],["/archives/7576230f.html","f9c4396c3d6e7d1ac922f79caddd0003"],["/archives/8063fed6.html","d0e3db7135c05741ba8bdf2e81404738"],["/archives/8c1f6a98.html","bc7f4a9f4e72bfffa45d4cc84fe080ce"],["/archives/91104203.html","3a0d13c6a6293d5a27dac75b3f232fa7"],["/archives/a1db3116.html","50b352c4266827060e58e13ea45ef5ac"],["/archives/a8ccf4cb.html","3ba5cd8b8dd2a5a4fe3fba07288537cd"],["/archives/c144f20a.html","97aa1c996c4307ba98c7b84ace2eafde"],["/archives/e84af901.html","e5d79828afdf07e0a30a0cd2f3fb496c"],["/archives/f3ecd78a.html","5aaf638a3d73085ad6126062c944e8c5"],["/archives/fe82aeb3.html","d3b944b0519959548b8103234c4fa42b"],["/archives/index.html","21574dfd7ae27b65ccaa0e7aa4e38522"],["/archives/page/2/index.html","ff2aaa9185719e4e103c23ea8e7c3d5b"],["/archives/page/3/index.html","645140a9ac8e4df5a6ef9a0dcb524626"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","f15dbda279e31b2b9381d851b0359985"],["/books/index.html","dbad64b8cba0c4ac7cd5cb858955d0f5"],["/categories/index.html","9dde38b08f63b6cc7feb6efa874a06ac"],["/categories/博客搭建/index.html","af9bbb3077268ff659fd54145ba9345c"],["/categories/生活/index.html","0913a93c78e8d0ad922c70f0d1eda575"],["/categories/程序代码/index.html","a5c368e0d1b8572d24178df987ebe996"],["/categories/解决方案/index.html","81920913b6a854d3082ff90410bdf1c8"],["/categories/读书与生活/index.html","3a523b1a555f751a2f4989577b70ba21"],["/categories/遥感与大数据/index.html","51e930f4be9ac45b7b46cb11110ad37e"],["/comment/index.html","e20f786e4a55999388249eaec0cb09bf"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","1b47a5dfb4c9248a5da20d8a310ec521"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8a0a74cc9ee48388e89972ff2c97566d"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","10920f582660a069d3306e34d59f5614"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","6fa0442eb74a0c781a3dc074d7894590"],["/music/index.html","7d088042b7bf792eb6db9fcd233e6f4c"],["/notes/index.html","8327b93b4f99b68458e08c339f4fef5b"],["/page/2/index.html","89c27671a645a89c10194ba245a5cb47"],["/page/3/index.html","1083ace8ce20768cdd1648f8e454a25f"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","d321893dc4b6a8d3de724cff03a186a3"],["/sw-register.js","ccb44a8473d42554966aa52466325119"],["/tags/C/index.html","a19e59ea0a10da2ae03327b484dd6857"],["/tags/Hexo/index.html","f892c9a75088c157ea753e72790f6f5e"],["/tags/Python/index.html","9839b014cb6ac7346690ea0a1343edc8"],["/tags/Python数值分析/index.html","f9a4bfd53f332887e3798345dbfb53da"],["/tags/Python数字图像处理/index.html","e3b7df90c91e13f1d1dd3aa06467e231"],["/tags/index.html","3352e9e89097e29e8019fcc8f281cba0"],["/tags/人生/index.html","558237a898478b42a640d7ead624000c"],["/tags/生活与感悟/index.html","82cd315003f5fef4567e4f6988ad45a6"],["/tags/网络与浏览器/index.html","816f55865d6e319bfc2428fec21c5ace"],["/tags/诗歌/index.html","73b5820091d75910d5d881a70c46dfba"],["/tags/读书与生活/index.html","9ff7f059ce3cd743082ca282ef7f877d"],["/tags/辐射传输/index.html","e4d401cab7641471c3c6115393f9cf52"],["/tags/遥感/index.html","ce8854504cce7ad90a73d2ffe95ac38b"],["/tags/问题解决方案/index.html","9c673e06f9d8808b3c49386c5bf3b458"]];
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
