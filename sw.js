/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/03/06/如何搭建自己的个人博客网站/index.html","f5ed57e90666ae7d4bdb4b647d2d2519"],["/2021/04/13/中国内陆Google搜索使用/YouTube.png","4ce4d44f62645e18ce3b0c167871a3ea"],["/2021/04/13/中国内陆Google搜索使用/index.html","a9f8c0dfb99a772f5cd8980ae67cbfaf"],["/2021/04/13/中国内陆Google搜索使用/下载解压.png","6fb604fe260613a2a772c8b9eeef140f"],["/2021/04/13/中国内陆Google搜索使用/插件安装.png","27a469f3e288bf1d75276c2bed029db1"],["/2021/04/13/中国内陆Google搜索使用/添加拓展程序.png","097f4d3f40ec79af9255e85b08db70fc"],["/2021/04/13/中国内陆Google搜索使用/网上应用商店.png","80b50c289a7af2333bd615613c0731d6"],["/2021/04/13/中国内陆Google搜索使用/谷歌百度对比.png","66e33dbdd595262235acf6a8d1b7ae57"],["/2021/04/13/中国内陆Google搜索使用/谷歌访问助手.png","d135a06801f8ea0568eab71fea420fdc"],["/2021/04/13/中国内陆Google搜索使用/预览1.png","5424fbec4a4cd0db625c3b81d98cb524"],["/2021/04/13/中国内陆Google搜索使用/预览2.png","2f1164f43cda2370014a06c1fd6bf8a9"],["/2022/04/22/Cpp编程基础/C++关键字.png","88426a4d02fa336b09f2ee5caf034a3f"],["/2022/04/22/Cpp编程基础/index.html","7e4c37d8ad9640bf7535395be2efdcb4"],["/2022/04/22/Cpp编程基础/变量与内存图示.png","e937b263bebc06cd686c5079ba01d169"],["/2022/04/22/Cpp编程基础/整型所占用的内存空间分配.png","666c689420a5565626e2f08a161e4e65"],["/2022/04/23/hello-world/index.html","30a23bd154446872e7ba74e4e242ca2d"],["/2022/04/23/我为什么要自建博客网站/index.html","210e56d8ce3cc07cd52a3897c5913552"],["/2022/04/29/权限问题的解决/index.html","c38f07f9e1f1d347361f57df4e9a1769"],["/2022/05/03/Python类中self的作用/index.html","6ab246a041ae1a7691a4041160bf382c"],["/2022/05/06/GEE遥感影像监督分类/S2Qingdao.png","8432f36a99e6326cdcc92e71c7728fa3"],["/2022/05/06/GEE遥感影像监督分类/Sentinel-2Bands.png","008d62fc2c01b158d99ca0edcab8eeaa"],["/2022/05/06/GEE遥感影像监督分类/index.html","71a89201bdf1684312db085c7729cb59"],["/2022/05/06/GEE遥感影像监督分类/分类结果.png","b40cf9edbb85891adffcde99c65ffbea"],["/404.html","be2899d80e7fa8f1fd5809dcd8e04b62"],["/Images/WinterStreet_bg.jpg","e26cb5730e0ee9e32de1a2b1c3d73e7a"],["/Images/bg_deer.jpg","3d80a1fcfe96e57c76a52415c20f6dcc"],["/Images/bg_fliped.png","7a61241014a9df59c0cc477f89942247"],["/Images/bg_girl.jpg","707c540e728c201e69358e7751eb7b9f"],["/Images/bg_rabbit.jpg","e22d62ebb640e45604598aec445962c0"],["/Images/deshan.png","2fbf22bb8f7b8405e29c87dc3155ca5e"],["/Images/gongyuanxun.jpg","dc7bb166b77fc87ceeecdf87befe9a7e"],["/archives/2021/03/index.html","42c0775b76d6a4c005a9c47f1309306c"],["/archives/2021/04/index.html","ade5f09901d89df58b0318f1541e4b1f"],["/archives/2021/index.html","410f3205424c94d0590ed0b2090589ca"],["/archives/2022/04/index.html","b93a4883db67dc7a1ee57a0a9108aaed"],["/archives/2022/05/index.html","1347e15f9d42348b186d1d57e39b99d1"],["/archives/2022/index.html","48bcf681145ee77a9352e3d9b99ddea8"],["/archives/index.html","3c61d7eab191dce5c654dabc74e723da"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","a1f3b66345177ab7d5e3c0ce42cb8082"],["/css/index.css","9278899038f5e4fe8a89235c64e0620b"],["/css/style.css","0e57e7c21b0ef3eda062c554c239da10"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a3b7209dfe6d147612422f45e9dc9f11"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","588acb75fc932927e9b32519dff5028e"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/sw-register.js","15b5b40d59d4df1e8c637dc44567ec67"],["/tags/index.html","1152832ae0aff5fc526938b2f4085d38"]];
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
