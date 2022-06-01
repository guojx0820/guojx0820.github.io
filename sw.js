/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","35ee84fce84fd9e5ededf775a8cdda4d"],["/about/index.html","0608ec96ea51d082bfeea7c0bc0dd511"],["/archives/1abb07a6.html","d2847474492cc9e65237bf4eb12830a6"],["/archives/2021/03/index.html","58b2f106ee33512a05d53a07a8720780"],["/archives/2021/04/index.html","a0546835e52822ea849e895004cf2570"],["/archives/2021/index.html","de2e18ed6ffa2a0d6c74c6e50e3c306b"],["/archives/2022/04/index.html","6813812b53d3d96d2d8273afc37e9929"],["/archives/2022/05/index.html","bd8edae78ef28352eebbfbaf0b536927"],["/archives/2022/06/index.html","b7a5169ccb3559d9c176e4f5f5521594"],["/archives/2022/index.html","8a338cfff3eef38f9d7b5f1929d0b885"],["/archives/2022/page/2/index.html","e72aa142312bd28cc68f184089dc9d78"],["/archives/23cd4859.html","c3d275660b2e5a84925df766e71346f0"],["/archives/266295d8.html","ceb8aab65d6939dfe0d66b60744fd2ff"],["/archives/330ac4a4.html","d5190f43aee6bacdab04b07568ce535d"],["/archives/4360a9bd.html","5adc2d75c84e3650e1c6a611b528326a"],["/archives/49977e84.html","47bf51b11ec235e50814aaff398131b9"],["/archives/573e690a.html","2115e0b8c682f74df24a21fccbb9d699"],["/archives/7576230f.html","3ffdf22b32e5ec426caa28229f1ad29d"],["/archives/8063fed6.html","67277a33d41cbc4ce0d7347c70fd45e3"],["/archives/8c1f6a98.html","3926b649dcf57507f96b2f3973e09ecc"],["/archives/a1db3116.html","3ef11681726cbdce32456eecc8b9a1d4"],["/archives/a8ccf4cb.html","b85848742e8c4b335060857cd0f1eedd"],["/archives/c144f20a.html","4f6d73e7cfaea07ce7246ba81340f956"],["/archives/e84af901.html","f5de2b79a84846915ed69a7158102c50"],["/archives/f3ecd78a.html","52fef60a832e427516fc26495f768bb2"],["/archives/fe82aeb3.html","a30669a4ebbff23020cbd7f064b4587d"],["/archives/index.html","91fe6cb9fce6ffcffad4f1c759e16761"],["/archives/page/2/index.html","788447a98284f91041ed8732f2b83a84"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","44abadb3e478cbeb86f4ef53b366c55e"],["/books/index.html","b2974c448cc5d8ee451c9941f7ed4443"],["/categories/index.html","5d3cf2811a3a8746b7c61e42f0f625d2"],["/categories/博客搭建/index.html","3e959218977c5d354a17b4b20d81637d"],["/categories/生活/index.html","f2447fb93a7fc75119071e5225220584"],["/categories/程序代码/index.html","4386fed36204b38e418c20813f7cc15b"],["/categories/解决方案/index.html","95f7264392526da721f6a48d3dab7654"],["/categories/读书与生活/index.html","83ed9ccec77cb86bd9c23b9264bb03f7"],["/categories/遥感与大数据/index.html","ff01cc6f02499363772b532824d1734c"],["/comment/index.html","8fa5d1c5e1f1cedefa12320024e82861"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","a8f90b7b3c84e6b0530ec34b1b54c5e7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e10e17b77e186a2ead03cb57f245032a"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","e4eeb06a080cb231ad88a785ef8425f5"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","db2c82000117a348aa1acad5f558fbde"],["/music/index.html","fff3ea183c23fb11338fc620917ab206"],["/notes/index.html","6004952ff3dbc681cb19c1041857ed19"],["/page/2/index.html","f9bddd1f3ba71a362861c3a16c6171bb"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","696afdf2120d625c4ffa2d8b6f748ea8"],["/sw-register.js","178ab31c289a1d0abe10d68df9cb3f18"],["/tags/C/index.html","cf5fcb1f90f4f1f78f4cb0d7eaef9dde"],["/tags/Hexo/index.html","907bfa6b48c762f3fd21214222541eb2"],["/tags/Python/index.html","89ee6da4e6c864acf94bd66b4af32b35"],["/tags/Python数值分析/index.html","bc34b424b0f906f1b9d88b893ce868de"],["/tags/Python数字图像处理/index.html","b2ad62793fe77208ed7ca5f94126c7b4"],["/tags/index.html","143a9a895fcd7fe291d0f4f9437b0856"],["/tags/人生/index.html","8a0aad9576160bbf9c81bc5f866bd492"],["/tags/生活与感悟/index.html","663e15e2b65de439b182b7a488a9b5fa"],["/tags/网络与浏览器/index.html","07d37a69c89ab7ad2713e5e0e5e28c87"],["/tags/诗歌/index.html","0715059223202c0c21122fcbdac04daa"],["/tags/读书与生活/index.html","1d7fdf3eff02dfff261cb0b1b7fad592"],["/tags/辐射传输/index.html","b2e529442524fe95779c6c4a8c61634f"],["/tags/遥感/index.html","82203008d9e6c13d5fa10d8ab6875358"],["/tags/问题解决方案/index.html","68af8ff154e18320b0c6a921cf3abe30"]];
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
