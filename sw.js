/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","af3cef8768c4891fcaaa9f7fbd1bd4bf"],["/about/index.html","0577c8133f1d85be9abfd24758de1eb5"],["/archives/1abb07a6.html","d1a2d6669147d0fe56b9069731ab6634"],["/archives/1def5f0d.html","34dc20e569ef61a1834bf57f17a6cf69"],["/archives/2022/04/index.html","df3de5efce2356bcbb4a7be6ce4432f4"],["/archives/2022/05/index.html","7c73cca4986987634bee4470f850bad9"],["/archives/2022/06/index.html","fb84441e10ddada316f5c94060e40fce"],["/archives/2022/index.html","35f783d1ea59571aff948aa44bc4eac2"],["/archives/2022/page/2/index.html","b8d4b96bcf610a8f5f8e92c275200bdd"],["/archives/330ac4a4.html","8ec403aaf60ef70d4ee7227fb54bf26d"],["/archives/4360a9bd.html","1a747c4d51b0b8ffbfa22edcc5a4329d"],["/archives/49977e84.html","88397fb7745a54b2dbb62668b91b5c1b"],["/archives/573e690a.html","d3d67179e91cc97b7bc46f097f5df49b"],["/archives/57eb0d7a.html","df5adecea25014557f19c3a0cb0ce3d4"],["/archives/7576230f.html","439a99c9c403f5a98e977aa15ccf2c8f"],["/archives/8063fed6.html","4c81e929b8c21b32bdc8ffd28dff9665"],["/archives/8c1f6a98.html","97d388ef3b58c50aae958eeab870d360"],["/archives/91104203.html","e1e01fbef8e6c8c8f3fb4236e0a6ba29"],["/archives/a1db3116.html","dbbe627738e1918a9837d06af7a71813"],["/archives/a8ccf4cb.html","41eac9c655f430c8bc228b0000884519"],["/archives/c144f20a.html","ad7d7805023d2c73bbaf8ef9a2e63b26"],["/archives/e84af901.html","5e1d616f7ce09da35f13cdee79c72dd4"],["/archives/f3ecd78a.html","db26900b7a89d4205d4203035c5fe89c"],["/archives/fe82aeb3.html","e3fc39df91837b07faa409af1195ebb3"],["/archives/index.html","405abf4f645520657307511dab3923e0"],["/archives/page/2/index.html","6757b922740175ae1a14e58b58ad4a52"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","dd8e98118d9b6c6399cf9efd597b1820"],["/books/index.html","4a90d213e5c1d524b8e74be8b6033879"],["/categories/index.html","d2263078ed842c7b2113ec84a0107ba9"],["/categories/博客搭建/index.html","6cdcfeb5223b7735218392a2d0262877"],["/categories/生活/index.html","6678c06330a6c1963872d75c2110c837"],["/categories/程序代码/index.html","94a5523d59f31e920573e80dde965d48"],["/categories/解决方案/index.html","386c83ca0e39abc7eccba1db8efd1039"],["/categories/读书与生活/index.html","db67b71c723caf5bbd988b792ad20e2f"],["/categories/遥感与大数据/index.html","cdf0e39d6f544b5b852199d3ae17dbf6"],["/comment/index.html","4fd38e7aed69543e296ec91fa215f5e2"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","b9c437f54fb69ee3ca53c95cda31aeee"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6caac5a3de2399d0bed9c2edc24a1ebd"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","ca5ae75c45efdb89e6be4c1a4d5efff7"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","9fb8f3c750fc7f0993df7ef00717f510"],["/music/index.html","aaec6cee0e49072973ff4f2ee90684f5"],["/notes/index.html","396bcc421b3a6347d99ec5da77e7eebe"],["/page/2/index.html","742b42706fa4242332b5f9e5f06ce8fd"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","6b58ac44f097872abe6d5d1ba87f1006"],["/sw-register.js","b931cd3e2b871ef177ab980672b7b3bf"],["/tags/C/index.html","251b1592254a5b1901c06332c12af3b8"],["/tags/Hexo/index.html","f8af8866d974ea99dfce617c339145e0"],["/tags/Python/index.html","5a0799d86e6815b097023a3bd41d2315"],["/tags/Python数值分析/index.html","5ea49ef9decdcf95899f037e8f07ae35"],["/tags/Python数字图像处理/index.html","f990a17947c79fa1fb3c751501a41837"],["/tags/index.html","8a71cc97b6121f9432aebfec9a0b3d6d"],["/tags/人生/index.html","7022fc5c153377186e6981b582327595"],["/tags/生活与感悟/index.html","366d7579ea4826f7dafbff6bf072ac9b"],["/tags/诗歌/index.html","da1836b658224c494aef18fb45d50cd9"],["/tags/读书与生活/index.html","cf74552bf933c50e8d0d90cf41baa841"],["/tags/辐射传输/index.html","83243528debf07bf03ededf720d18f6e"],["/tags/遥感/index.html","31de8979e60a042e52a2d18756a4f701"],["/tags/问题解决方案/index.html","74c444ba1d9e7f96b31f3d4420a4051c"]];
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
