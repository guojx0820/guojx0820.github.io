/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","387717b4f1530a95bce829388b31c32a"],["/about/index.html","fda8d9970626db0fe4bac3b2f96b8a46"],["/archives/1abb07a6.html","ca39cc26bfc7872c6128ca2b16ae97c9"],["/archives/1def5f0d.html","e363cb2166eacee7293ce96f541a2e8f"],["/archives/2021/03/index.html","872c1feb7710a95b683256908344621a"],["/archives/2021/04/index.html","7e51e8e7cf390e9c28f7f7c9d8651edf"],["/archives/2021/index.html","befcad72ed93fa33c429056da76af9c2"],["/archives/2022/04/index.html","b292b5d9df8818ead29dcddade9ac861"],["/archives/2022/05/index.html","1bb6f974b67d2de8d6f77a12f3aebe1f"],["/archives/2022/06/index.html","8a7a4ab37bbc06a8c992d6ae6be47738"],["/archives/2022/index.html","237bcbda0f2f23a665483c6c6a0ecf30"],["/archives/2022/page/2/index.html","4bf0851c72c78455901b442c039f40c1"],["/archives/23cd4859.html","e2e2f463e16716f1c062b25e7bc0240f"],["/archives/266295d8.html","a174d0215449fe96d99fcc3e7af174c7"],["/archives/330ac4a4.html","2b07269d57992bc7cf3ea7771246a7ae"],["/archives/4360a9bd.html","800b3cf5f4a8458a040ec804326163c2"],["/archives/49977e84.html","a01c578630f78c1d45e564992c81e12a"],["/archives/573e690a.html","90848eabd59d64f9e60763e993eacbb9"],["/archives/57eb0d7a.html","3aabf980c7d149cf3ef1638f407e87d7"],["/archives/7576230f.html","b6d44b7c42a6d79bed9ee361a840434e"],["/archives/8063fed6.html","26365be36203a83060e754c930e52c79"],["/archives/8c1f6a98.html","2da6a46c072b16bc09907aa878beb6d0"],["/archives/91104203.html","7d4d7c00351166e4cd516a908a0890dd"],["/archives/a1db3116.html","ee75374f7a4a88fbee89336c3f8071e8"],["/archives/a8ccf4cb.html","0fe2cd2050caad62f594c9d1daacb459"],["/archives/c144f20a.html","07031eb9c39de02c5b41869f2bf7b39b"],["/archives/e84af901.html","be9a0f4be05ed042aeb14e3c2ce2a70e"],["/archives/f3ecd78a.html","ade1a29a26c2934a58a5b728619da632"],["/archives/fe82aeb3.html","f409b6e06125bf7c1a639e2b4cc0ed7f"],["/archives/index.html","77081a447ffc4d8ce1258cab46eb0b3a"],["/archives/page/2/index.html","9f3a17c65b691b8895811df990d8b044"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","1bf29137634d5bd29d98641bce0654a8"],["/books/index.html","7be2d11668b2eeba4b710ad5ec9c428c"],["/categories/index.html","96c34df780ef6a893bf6fd3ec8e9a8e4"],["/categories/博客搭建/index.html","ef69c23179bdf08e03b9a63554598683"],["/categories/生活/index.html","6230f82b4336b6ba441f02b55d975250"],["/categories/程序代码/index.html","6a0295477d6db454d6be546510313b89"],["/categories/解决方案/index.html","869e10cd67eb1421cc77c37413a74ccf"],["/categories/读书与生活/index.html","a10e9c10319bb056581771f7cccaab23"],["/categories/遥感与大数据/index.html","174b4f1f0666d993a0a1734418bcb4f1"],["/comment/index.html","c988554e1cda3941ad93e7c640826d80"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","7a64641f5257f8bb166e817b5b53b2ce"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","549d5d17f6701035bd68c6e0d6a7289f"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","4c58c53a85bef2eccf7f1d1c09db68e1"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","f801ee5f4bf16ecd67c7320a1e9c6159"],["/music/index.html","7e1e0caf27ca308820e30709d43e2f36"],["/notes/index.html","7586e900f233b35db4081aa52ce73089"],["/page/2/index.html","bb4b56bcd681578cc9fadc6b9bd00e8f"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","18243d115a5592e19d454e048d3af446"],["/sw-register.js","3a66387c54b7c8e89723e2db816c7458"],["/tags/C/index.html","c379a72117150c8fd7391f12933264b6"],["/tags/Hexo/index.html","0a5cf55a345e6a605784fcadf41b1f1e"],["/tags/Python/index.html","7e12be45a03fafb9b1b4b0a9ddf3bab4"],["/tags/Python数值分析/index.html","03d6ede4404ca61e6c4b94592e45a62d"],["/tags/Python数字图像处理/index.html","1ed7c00f5a4af54e942205d1cf2e884d"],["/tags/index.html","4670e5749a8cac81381fb1b52420c5ae"],["/tags/人生/index.html","6a543eca1e26bc0d73481bc7265a19b7"],["/tags/生活与感悟/index.html","309bbede6f69d3b7c09370e245e48720"],["/tags/网络与浏览器/index.html","c4bdc582e6ffcffd717e8cdc8e52698a"],["/tags/诗歌/index.html","27f839f972047791ab49c48c89432ebe"],["/tags/读书与生活/index.html","00eb394026db98f5135131c0c4df903b"],["/tags/辐射传输/index.html","fb73f15f1755cead90309c0d6ad6ffbc"],["/tags/遥感/index.html","08bc7a7dcbcca1cc7d1d0e49e41365b3"],["/tags/问题解决方案/index.html","80be0d000d3da10eae8835e699a28efe"]];
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
