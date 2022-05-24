/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cf95cc5a97955c760068da9c155043a0"],["/about/index.html","a2948415c886e10b5fbf9a47fc588234"],["/archives/1abb07a6.html","7e909b67709b68a72a68f3ca50d92850"],["/archives/2021/03/index.html","fb2ee5b353091ac75a66e760ac8c2ae0"],["/archives/2021/04/index.html","a91e2209b4f54ce787ccd507c9691c77"],["/archives/2021/index.html","8c8e8c6e2e2e7e006edb30a9696b1bc5"],["/archives/2022/04/index.html","5ab56313ec12cef19fb3cfbe6217fbc4"],["/archives/2022/05/index.html","fa38624425b22f2e6e8b3a82fc59451b"],["/archives/2022/index.html","343842b0e86a440ca1efd036e5fc1a66"],["/archives/2022/page/2/index.html","ee0e064eaafee7eb94c41e609a8fcbff"],["/archives/23cd4859.html","0a6094ad47a49460bd45c1f8b3048736"],["/archives/266295d8.html","7fd9cef78491254806115d921af561f5"],["/archives/4360a9bd.html","188d3cf7a14318f171cc838386a082da"],["/archives/49977e84.html","98c1343a984a7e4b7dd46f7b20ea0176"],["/archives/573e690a.html","7ffaf2dbd93d86f2be2fcfe0c070f7f0"],["/archives/7576230f.html","1a15bd4f10e333fa85e2c76cea16aca8"],["/archives/8063fed6.html","9162d1e67f2dc1405acfc132383226d4"],["/archives/8c1f6a98.html","efa9977f575945e724ec5c50ebe0793b"],["/archives/a1db3116.html","47191b9d9d2cff3583b844e617c56370"],["/archives/a8ccf4cb.html","a172f8806b23e99bda7a7e5de5ae527f"],["/archives/c144f20a.html","1af12e5b536132f5b2d99b2279a8fd20"],["/archives/f3ecd78a.html","74e7f895f1cf7ac50a8e06a91c89960f"],["/archives/fe82aeb3.html","0e73ae5143f18759d87e90ed18b325b9"],["/archives/index.html","75fa4ddb60bb8fc6518d3685b61b389e"],["/archives/page/2/index.html","55a5f77d077b9e269686830387987f24"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","7e276421edcc8c2e497807be40ef9d87"],["/books/index.html","c83843983c6b8991b3e7ce71aa32c9ae"],["/categories/index.html","6ddd290c9920241e2db03645fd4d8f11"],["/categories/博客搭建/index.html","44aa4552c99253256d1cb939ed6493d2"],["/categories/生活/index.html","5e8ebbc28399451d352a6b34cda686fb"],["/categories/程序代码/index.html","ee2a788df00056b7d909633e5db01da1"],["/categories/解决方案/index.html","6e0c91e4dbcbd128a5c140690cb08ab2"],["/categories/遥感与大数据/index.html","2f7559ae8c92b72f4cc03c48e7bb1917"],["/comment/index.html","5512b5bc6a49ee895a0f530970c36e75"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e97979413c0cc592aea9516410e4af2d"],["/css/index.css","f2bdbbb4db75403c3c74e143a02093a4"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","3e0cc4d1782c4978ee10bd3a21aacf13"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","862a459667e375f9c1f437109f28d747"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","0ddd7b57c08fd629affa0da1c7eff1cf"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","0ec2b36092f6cfb7a41eb4618a7c2a7d"],["/music/index.html","d97017272dbef2a09fe94a82cebaa483"],["/notes/index.html","f20f4ca31e4770f1981914257cea4c10"],["/page/2/index.html","84a381567de9a5a3dbd1d7e1a59542a9"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","cbe259a6a27c1812f43d1d042ec4df58"],["/sw-register.js","ba3f5058a89a2bd6389db6f472c0c9bf"],["/tags/C/index.html","37d356444b583f1e080cd828a39c7c29"],["/tags/Hexo/index.html","e56f4d38842e907a92f892dd8dfabab2"],["/tags/Python/index.html","d17da7bf8a3d49cb0a76f9fb944f90b1"],["/tags/Python数值分析/index.html","113aabdbc283bcf957b4369e83a6c85b"],["/tags/Python数字图像处理/index.html","b93df8cb0d00f008e3e0a588d9c96161"],["/tags/index.html","437ee30c6e25ebef23f2f872e634bd94"],["/tags/生活与感悟/index.html","4b38dc91afd2e1bbc00c8080e8bed99d"],["/tags/网络与浏览器/index.html","95c6ba221e44438a6e2a77f34385edc9"],["/tags/诗歌/index.html","9785fb168c28e426016e667dce2f0758"],["/tags/读书与生活/index.html","d05c89029198120aca0d7b8c13311894"],["/tags/辐射传输/index.html","b2661f53e9f4e59aecd69ac0e4d74050"],["/tags/遥感/index.html","7d86ca9733a67d26b1bbf68e1a00425c"],["/tags/问题解决方案/index.html","ebedc1613373255af13313bb3d09eaf9"]];
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
