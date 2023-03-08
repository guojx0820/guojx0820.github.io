/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0abeb8bee5be6dee2165faa8dd0bb48c"],["/about/index.html","cd795953fe3b5de41f0195e8097cc506"],["/archives/1033b493.html","c2279820186ee0e6f1ce9894c55d11d5"],["/archives/1abb07a6.html","d84a6348247ca96fe808d2d56f8e41e1"],["/archives/1def5f0d.html","095798d1bf3dfc88bfcf5127bcd33805"],["/archives/2021/03/index.html","4f57a99c0cb472a811bee33dbe02b977"],["/archives/2021/04/index.html","02b56800f5e1acd9cfc2f45cbf76dde5"],["/archives/2021/index.html","17ff49cd53f08565785d177addf67f48"],["/archives/2022/04/index.html","38f9b666adfeb54e256996ca4f4c1b21"],["/archives/2022/05/index.html","4426d9a69911d36e45b3dfcfb683234b"],["/archives/2022/06/index.html","0290074a66f18deb36640cfb5d9134fd"],["/archives/2022/index.html","0939c5876f5582b00d55b1e8333e8b2d"],["/archives/2022/page/2/index.html","abea4fec6ddb0b2312e59c9a1c965058"],["/archives/2023/01/index.html","a36a53453efa43b7078ddcf2e554771b"],["/archives/2023/02/index.html","64a5a5a77d01369ff494c569e3394335"],["/archives/2023/03/index.html","ac1eb2171b402ea51532346395b90312"],["/archives/2023/index.html","a807ba68630586e5fe1072a835e7260d"],["/archives/23cd4859.html","90e7b7167917eeb6afab498cd0872862"],["/archives/266295d8.html","5f54330b0dd554870df171c4057361c8"],["/archives/330ac4a4.html","6b2fea387a6340648d51be6170d1e4e5"],["/archives/3a816938.html","c9bcef88dad3f7b45f32e480637ec6f3"],["/archives/4360a9bd.html","7950cc587f62dcb627948fb0d68ebb69"],["/archives/49977e84.html","a8c38bc5013ab1889ce901200e318208"],["/archives/573e690a.html","4f5a77480073dae4c100ae73edf04340"],["/archives/57eb0d7a.html","6f55b0531c2858e82dd18e94dec2c7ca"],["/archives/61521166.html","afe5bc7a5a1f01d8e8adb320e7d987c5"],["/archives/7576230f.html","39c8f718933db93948bced549b7975cb"],["/archives/8063fed6.html","e9300645889d4b06ceb3f2bd1a606683"],["/archives/8c1f6a98.html","7f0dbc8079ddf151a51e5cf8b911241e"],["/archives/91104203.html","bceb4b18bfc6ea73de741cb20d8384c7"],["/archives/a1db3116.html","b904a0dec3fc859f8d146dfe88ffa4cb"],["/archives/a8ccf4cb.html","4352dad5cf76161968786f9c71265ee1"],["/archives/b7563557.html","6e1b63f283489d8b6f78c63f159d2cf4"],["/archives/c144f20a.html","1bf94c8e0acba53c99037a7ae6b73ffe"],["/archives/e84af901.html","23f9df130b066bc2ddf495413c816c1a"],["/archives/f3ecd78a.html","dbeb8824485e46b4937692880e845b84"],["/archives/fe82aeb3.html","c15aefcba411e4dafcd04000b966536e"],["/archives/index.html","e4a5cad5071265972e664bf5693a80f2"],["/archives/page/2/index.html","93618e9f06f2a8191805096279246f79"],["/archives/page/3/index.html","83847527d921b94ac5cd9e9f2bed53fe"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","37149695d034d3f91857c5eddf9d273c"],["/books/index.html","a9c8497219debd4ad5b7d46ec14a5ed2"],["/categories/index.html","b5d0fcd0ac46d97b3c4b4b5fce84af5c"],["/categories/博客搭建/index.html","7e65c56d93cc2233c3a60a5c5e6390cd"],["/categories/生活/index.html","fa3f7ed9127a89dfaa9f39d51aae8bd2"],["/categories/研究方法/index.html","702ace6e4a904dcb6309ffd8d23fa7f3"],["/categories/程序代码/index.html","66d971c5bafe16e84021609023d4d522"],["/categories/解决方案/index.html","9b53ff628da3584e0a49c999f31e4fd8"],["/categories/读书与生活/index.html","cd19d8a8cb7eed532d5579d63bf39630"],["/categories/遥感与大数据/index.html","8e86024d0e4a32c28f50a69a3ece7b42"],["/comment/index.html","609b0eab947982285047cbc60ccb5b52"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","b86db209dce0c957086b233bceffd400"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","65b699c3b75f9d38f0a8a83fe89b8230"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","e86742255ad95b11a4a5cb963562be60"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","49c8b7424b9e47d273d8c4228ec14b2f"],["/music/index.html","ae29636419086fa0c8f3ba269bf64043"],["/notes/index.html","1f7cd63bf88e3b435eeee2b81e9ba7e1"],["/page/2/index.html","e463072a1773f552af92972a4f679c39"],["/page/3/index.html","3986a3b580044b0b3e5b79ce57528d03"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","2f2cb66b6dc4db40eb62821c9bb0905a"],["/sw-register.js","89d7bf2331d1da30206e72251e831aaa"],["/tags/C/index.html","b2572ffdaa636bf2217a4dd29e1e2739"],["/tags/Hexo/index.html","1c6d34948b7ff78827546870526c1c35"],["/tags/Python/index.html","499bec27e74fd7db1bf03b44ac430c84"],["/tags/Python数值分析/index.html","58b31d51563893b7cc9d87097ebef3ac"],["/tags/Python数字图像处理/index.html","fc0ea7e077385d4f0816e7a4e8abe096"],["/tags/index.html","65f18549296ef9bc26bb8d229aac42c1"],["/tags/人生/index.html","e367cfb6bc87f006dc7b7def6c326bac"],["/tags/生活与感悟/index.html","35e36febc4a5ff6df7d42e8400ec0a5a"],["/tags/网络与浏览器/index.html","7e0b961688cc8097577f578da88d9d39"],["/tags/诗歌/index.html","163b9a53728af9a4db1323c42fd45e05"],["/tags/读书与生活/index.html","2fac1afa21088db11efb56c666c0c577"],["/tags/辐射传输/index.html","6bf6d04e23192b31d7e625520a0d6371"],["/tags/遥感/index.html","c1a16c73f50858bd3e9d98edc2a841ed"],["/tags/遥感与大气/index.html","70642eb81046a133bc614a08d02475c1"],["/tags/问题解决方案/index.html","6e5ad70800c322b1f4efdb3e1f1ed9f2"]];
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
