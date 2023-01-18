/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","644faae3974d95720befc8beac37727c"],["/about/index.html","2de4a30447441aff75c264fbd9022e84"],["/archives/1abb07a6.html","121e1eaa3af7e7ffd079845acd4e09f6"],["/archives/1def5f0d.html","0149d83310e62febe05e97b8c433f014"],["/archives/2021/03/index.html","3e706109abef95e1c97ee958c245bc0b"],["/archives/2021/04/index.html","a53dbc84a34201957ab0d08687345089"],["/archives/2021/index.html","d99919ba67e5ed8a94b3530a83f69468"],["/archives/2022/04/index.html","1299a4333bdef58b3f468bd0c4da1c43"],["/archives/2022/05/index.html","73e19c687c35445609afb10c307185d5"],["/archives/2022/06/index.html","aef35a33d58f553befc0f08b952351b6"],["/archives/2022/index.html","fe7665d75c0b6a716cb30fcfecf8b552"],["/archives/2022/page/2/index.html","e925c666478acf92ae5956a5d119c5fe"],["/archives/23cd4859.html","749d647f1cbfcdf5673f28d7bc31b70a"],["/archives/266295d8.html","9fb1439147a624bcabfef6539b0a4dbf"],["/archives/330ac4a4.html","4e95fa6fd055af87345bd4698fda0950"],["/archives/4360a9bd.html","d137661895a46fd17cd2c0bd8a3f3ac5"],["/archives/49977e84.html","9f593932bb18beada48cf32f03583a5e"],["/archives/573e690a.html","3b62d2f1ef2ca2eb6fa0d0a1ab4e6dd5"],["/archives/57eb0d7a.html","fcbf6852c4a56c66f39cf15bc191f825"],["/archives/61521166.html","9eed87af7f825b0228961bc602b16ff3"],["/archives/7576230f.html","a958641842d1130392b233e8a80914bf"],["/archives/8063fed6.html","71f6c6c48e5b3f07d7626a4f08a9ea1e"],["/archives/8c1f6a98.html","debf8c7e9fb29467d83896d8ad6b9b8a"],["/archives/91104203.html","39fc67ff529b979c7939391f5e55116b"],["/archives/a1db3116.html","e4dc271aab3d10fbaed8f4f8efda2353"],["/archives/a8ccf4cb.html","0193a414d1ba34499020345a1241785a"],["/archives/c144f20a.html","2206940d7167c402f430608925554be2"],["/archives/e84af901.html","6cf592e1ae36d87a5becf80ad94e24b0"],["/archives/f3ecd78a.html","e94de5bed66dccfe39954dbf5aa9f64c"],["/archives/fe82aeb3.html","db47855af020efd3d369a4a9b144de92"],["/archives/index.html","96bcfd9d389e5ba718ceaf632479238b"],["/archives/page/2/index.html","2b16d04eb28f5f535026852c7697a0bc"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","c64d1a0e703ac37380917b52503ba2f9"],["/books/index.html","1daeb40bd437ba06e2cbe5fc1b9ddd57"],["/categories/index.html","99224a66b5f335a537c7d322bb83f712"],["/categories/博客搭建/index.html","af06b128c7e2a758a3d73922af2fe8b6"],["/categories/生活/index.html","daeeac2197ae32af7c06085780d1d43d"],["/categories/程序代码/index.html","fa2167511f4cd5cb600c6591b00cc9a9"],["/categories/解决方案/index.html","e445127e010368c58256acaaa89644f1"],["/categories/读书与生活/index.html","7c87ee2e1b1783b8946b115a695b5db6"],["/categories/遥感与大数据/index.html","684a7fc922a165e332742e4cde551b8d"],["/comment/index.html","5beef706973a113188e7e2dd6a7c0b55"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","45ac093486467495c0d33987ddd14257"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","977a3dcb3e58768afcf5ce5497ed221a"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","34c6409bf6503d2f4a3d9824660e8223"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","722459bb4eca2ecebe34a1307c20f683"],["/music/index.html","8ea74896aff0480383d46a188a754ba5"],["/notes/index.html","45596f9f1bc0cd20146bec92aa3b17fe"],["/page/2/index.html","7608699ff8b8eadc051749bc13e8585a"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","0b33c17d9cf3356318c9b245ee5fa0e0"],["/sw-register.js","07b53e77b4710cba0575bbde73c0c3f6"],["/tags/C/index.html","476a30f1a5b1a15f39c3d94afaab129f"],["/tags/Hexo/index.html","33f7a99b83afddd55cd075464b00f6e8"],["/tags/Python/index.html","eb0901ee84f769e69a62736cca54ac3a"],["/tags/Python数值分析/index.html","dd443c2b3c1a492cfe3e1effd3798978"],["/tags/Python数字图像处理/index.html","dcafb840269a72e75293a46099a8f9e3"],["/tags/index.html","ecc1527ae98c6b1cd921ee7a67d788d3"],["/tags/人生/index.html","5c4b4fcce30a6338abcb4877e760b2e0"],["/tags/生活与感悟/index.html","cd8e91da9bea121dfefc6b745c73d26f"],["/tags/网络与浏览器/index.html","8e254875731ccd4aa1432b6606ff49bd"],["/tags/诗歌/index.html","b49aec9d23421abc703b5351900ba73c"],["/tags/读书与生活/index.html","b1a822b63d2905142bd06a01982f05d3"],["/tags/辐射传输/index.html","2030ce8aa3e6d3f700e76cca684c3b42"],["/tags/遥感/index.html","f3f18501a43f4ec257382efd39c4a49b"],["/tags/问题解决方案/index.html","d266f75e9d02c3c5fceb1ea289ad7ee0"]];
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
