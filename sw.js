/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f60c2a17647d042ff3d66dadbbceddf8"],["/about/index.html","a92cd3f952ccca0dbba1d932ee395cb1"],["/archives/1033b493.html","415a0cf2932d1ac4b56b879dbcc8d7b7"],["/archives/1abb07a6.html","d84a6348247ca96fe808d2d56f8e41e1"],["/archives/1def5f0d.html","066ee3bed385bcd6682fab2722f63ad7"],["/archives/2021/03/index.html","27749e1ac5a0b6da77cc4c869a3ddf8f"],["/archives/2021/04/index.html","7d367eeeafb673735c6b82643e09e114"],["/archives/2021/index.html","e1292274841c428495c3accc092214c6"],["/archives/2022/04/index.html","cf95621e22aab4898bdcc1370cb44fff"],["/archives/2022/05/index.html","bfc7d6f250b6b17aee9c7ebe5fcb537b"],["/archives/2022/06/index.html","429a7c1a49a8216f02485f8204cddc69"],["/archives/2022/index.html","eed1458b11cf30400f56c2a6586d505a"],["/archives/2022/page/2/index.html","7ccc1dfb5587251f76ffa4b0ff7e83a1"],["/archives/2023/01/index.html","3045a42864f60e2f5c8a54eb4e2ac8a5"],["/archives/2023/02/index.html","8c777de9b29596cd37d91f1ec9f399ee"],["/archives/2023/03/index.html","dc444db18adbabba38b11f12262b4fe7"],["/archives/2023/index.html","c9b60dc4d85774b2317d226610f1007c"],["/archives/23cd4859.html","90e7b7167917eeb6afab498cd0872862"],["/archives/266295d8.html","5f54330b0dd554870df171c4057361c8"],["/archives/330ac4a4.html","6b2fea387a6340648d51be6170d1e4e5"],["/archives/3a816938.html","5087be1107cb5d6c81f4d12de2c8e96b"],["/archives/4360a9bd.html","7950cc587f62dcb627948fb0d68ebb69"],["/archives/49977e84.html","0f49cd1c7ee0a71acbfc5ec8798d8395"],["/archives/573e690a.html","4f5a77480073dae4c100ae73edf04340"],["/archives/57eb0d7a.html","9243f89de51bbbf1c60b6328c715f330"],["/archives/61521166.html","8ea36c7ad02da7e1549f813350b75685"],["/archives/7576230f.html","39c8f718933db93948bced549b7975cb"],["/archives/8063fed6.html","e9300645889d4b06ceb3f2bd1a606683"],["/archives/8c1f6a98.html","82a76fafa3fa32d26ab2d66361a63ef5"],["/archives/91104203.html","c6f25439a465b483925f180335ae2361"],["/archives/a1db3116.html","b904a0dec3fc859f8d146dfe88ffa4cb"],["/archives/a8ccf4cb.html","4352dad5cf76161968786f9c71265ee1"],["/archives/b7563557.html","43ca2a8ea48b384f25c3a5299021bc55"],["/archives/c144f20a.html","1bf94c8e0acba53c99037a7ae6b73ffe"],["/archives/e84af901.html","07364cdc6af804d4362b112e37581179"],["/archives/f3ecd78a.html","dbeb8824485e46b4937692880e845b84"],["/archives/fe82aeb3.html","c15aefcba411e4dafcd04000b966536e"],["/archives/index.html","e84ceac3a4c78082d5c9dc2972985de7"],["/archives/page/2/index.html","01f9487a84095115f46b5904f0edf506"],["/archives/page/3/index.html","81dc77ee20daecfb99394a2c84b86bef"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","90edc2d84551994ee3c6809b4b4566c4"],["/books/index.html","140b198af23b065c2cacb7b485869a95"],["/categories/index.html","fdd5cc11da9aec03bd2e8e190e9ecef9"],["/categories/博客搭建/index.html","46fbde3fc3d1751b2783f17a3764ade2"],["/categories/生活/index.html","95325b451d2b73239e6737580b6e815e"],["/categories/研究方法/index.html","50aa6594b63af7d74c351c7386246848"],["/categories/程序代码/index.html","e1404007254aa3c1b4e8052c9b9775e1"],["/categories/解决方案/index.html","ea4c81005eb34d2a0d4119d5befa1d0d"],["/categories/读书与生活/index.html","40c9be69e397366ceba6442d0010776a"],["/categories/遥感与大数据/index.html","6e57345f2993a7f9edd0fab5e0a0bdc5"],["/comment/index.html","0c57410576fa6ff509a58b2743954fee"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","9078d92c1636dd5ac90f261bf7055cf4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","962e4e93eeac67c8b2d0c203b6c4d268"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","115aff01dcfad5f3f258e37edcb57985"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","e0cfbf643280318de559cc916dc4c36e"],["/music/index.html","d414022ec5f311b8c20d18594cabef85"],["/notes/index.html","1b8301e01cd47b38d5d58f773d615196"],["/page/2/index.html","1885e1bdaed87dc4e297afa7babc9bcf"],["/page/3/index.html","ff271bc25b694bec606e2ae940358021"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","56d9e3be928d75817a26c0ba94177528"],["/sw-register.js","eaca9049d2d83a44183ab42a7930ff0b"],["/tags/C/index.html","b3194802c561d4f1bbf513d9d554c734"],["/tags/Hexo/index.html","64b9a2cb81ff86a0545b7bc7ea465a19"],["/tags/Python/index.html","5336e4b19ed87b2a2ef187bfdc8e63df"],["/tags/Python数值分析/index.html","4d8744f9f6df9bbf50b0217e4a4c6169"],["/tags/Python数字图像处理/index.html","8a053965b56a0dab4e3c1621e6893317"],["/tags/index.html","e501d0a133eb84121dec79eb898a4801"],["/tags/人生/index.html","6d1b2fc72b560bf18c0078160e1ad54b"],["/tags/生活与感悟/index.html","09bfce14a8ab7add8920872da2fbbc37"],["/tags/网络与浏览器/index.html","7a33386b5fff0c81f732f330e99f0095"],["/tags/诗歌/index.html","885463b83596e54c25c981cd5e93cf82"],["/tags/读书与生活/index.html","1b776c0be87dc4cbf3a7e7a58edb842b"],["/tags/辐射传输/index.html","0b358f411a0001af3c6217c11ee83acb"],["/tags/遥感/index.html","1d02ad35ecfa43332f2b46ad18696445"],["/tags/遥感与大气/index.html","c7d83e77d83a58903d3076fe18f87bfe"],["/tags/问题解决方案/index.html","5bed19041ddb1fcb1b1312e5fad96194"]];
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
