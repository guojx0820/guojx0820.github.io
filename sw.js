/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c34dc45908bd657c488bcc52682bf30b"],["/about/index.html","5f2c0a49ab551794a56b4f921d3e235e"],["/archives/1abb07a6.html","7e909b67709b68a72a68f3ca50d92850"],["/archives/2021/03/index.html","40ae9fe6c23ceb7a13ee6f9ef993451f"],["/archives/2021/04/index.html","00f3df7f743fe282d3777d787a33a612"],["/archives/2021/index.html","795527e768a5449de50dab276145ce94"],["/archives/2022/04/index.html","7c9ec641cbef276f9269c04190edc4ab"],["/archives/2022/05/index.html","17148799ac992cc87e7968b1f3f9732f"],["/archives/2022/index.html","c79bebeafa465774477114f8c4cdd965"],["/archives/2022/page/2/index.html","ef8d52e26e918f823a2ca88ce5d22c1f"],["/archives/23cd4859.html","0a6094ad47a49460bd45c1f8b3048736"],["/archives/266295d8.html","7fd9cef78491254806115d921af561f5"],["/archives/4360a9bd.html","188d3cf7a14318f171cc838386a082da"],["/archives/49977e84.html","5b4fdef744dc7443f2be28583392912d"],["/archives/573e690a.html","7ffaf2dbd93d86f2be2fcfe0c070f7f0"],["/archives/7576230f.html","1a15bd4f10e333fa85e2c76cea16aca8"],["/archives/8063fed6.html","9162d1e67f2dc1405acfc132383226d4"],["/archives/8c1f6a98.html","efa9977f575945e724ec5c50ebe0793b"],["/archives/a1db3116.html","47191b9d9d2cff3583b844e617c56370"],["/archives/a8ccf4cb.html","a172f8806b23e99bda7a7e5de5ae527f"],["/archives/c144f20a.html","1af12e5b536132f5b2d99b2279a8fd20"],["/archives/f3ecd78a.html","74e7f895f1cf7ac50a8e06a91c89960f"],["/archives/fe82aeb3.html","0e73ae5143f18759d87e90ed18b325b9"],["/archives/index.html","f932170af96837312ac7d2343f5a8412"],["/archives/page/2/index.html","62a81b795c87e832b0b257ee1ac94b8a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","b6888c0e7d9677fb3262e5a80b7d34f4"],["/books/index.html","0157f115f3adbf5964e70b14cb1af1f1"],["/categories/index.html","e952817218f739d69a4b72af7527e708"],["/categories/博客搭建/index.html","167557fb93e52c302452765de6247b2c"],["/categories/生活/index.html","d382aad55b31686e1fc6e394296dd4bb"],["/categories/程序代码/index.html","edd502bdb43f02ba838bbb76effe6a20"],["/categories/解决方案/index.html","613abb27690891d8d1dcebde62bb2a6e"],["/categories/遥感与大数据/index.html","149d3784ad35af252f64ef80c06bef36"],["/comment/index.html","65c990da62d74dc2c335b512cf11fb87"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","72a89e747c41d4d8b5c8058776ca3b03"],["/css/index.css","f2bdbbb4db75403c3c74e143a02093a4"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","aeccfd2495ba9449a75c0b5d36da8da8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","716e8f125f8b2aec7b4abbac3d958934"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","655f90c1beda23d952c2211e80598738"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","cb16fd3046f4bb20831d5f1d1f8b45f1"],["/music/index.html","58b815306e859520db2ffd6f43d44903"],["/notes/index.html","dd1bab5f03ae30dd52e3fd89bf3a5560"],["/page/2/index.html","c5b2ec382eccd0671710fc4d7ab013c6"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","b139faaf826ef766501ae8ad7e993248"],["/sw-register.js","3b630b568f446da21d9e677178423bed"],["/tags/C/index.html","11e6006cb3565a5ace231932562b85a3"],["/tags/Hexo/index.html","2b0b377c75b03cb969ae1591f00a2de5"],["/tags/Python/index.html","0d805327bc43bf8b7472d66a9e8dbf0f"],["/tags/Python数值分析/index.html","4bd447227b4c2ee29e339ad6ae1697c4"],["/tags/Python数字图像处理/index.html","7258669047a98ae5f112ba80fe5c5210"],["/tags/index.html","a853fda0c906fafa99672c96d4d1d11f"],["/tags/生活与感悟/index.html","7c5c6e5ce7ee1d46147592616b2910dc"],["/tags/网络与浏览器/index.html","6cec3df760202664571d1fd35d023c8b"],["/tags/诗歌/index.html","f4233a7b86922a69397654e004852785"],["/tags/读书与生活/index.html","b4358c7eeb24dc666267752d380f17e6"],["/tags/辐射传输/index.html","077a294594e0dd41a24cb1d9ab0377fa"],["/tags/遥感/index.html","8845be60c1fd6a4ad18d3fa92ecadd21"],["/tags/问题解决方案/index.html","095432239230f8a0dc701eff82d55afe"]];
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
