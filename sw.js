/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1816d84c80b834cde15e0b4e18ff8039"],["/about/index.html","45126fc9edc0a1439d0e787da4f6b569"],["/archives/1033b493.html","415a0cf2932d1ac4b56b879dbcc8d7b7"],["/archives/1abb07a6.html","d84a6348247ca96fe808d2d56f8e41e1"],["/archives/1def5f0d.html","066ee3bed385bcd6682fab2722f63ad7"],["/archives/2021/03/index.html","d8c96b8aea658e19b6c5c6584f03cfab"],["/archives/2021/04/index.html","f01e26a52ff2ad3df2a5449994facc0c"],["/archives/2021/index.html","8dc945904f25857522cbd61f2730e164"],["/archives/2022/04/index.html","a77f04c9d855c17d9b65fdf65af72ab0"],["/archives/2022/05/index.html","91e23ba0c246151d96fda11d4993c311"],["/archives/2022/06/index.html","c9ee794abe67397f32e74c2bbdcac126"],["/archives/2022/index.html","441247bb85b23856d3aee40c060de76e"],["/archives/2022/page/2/index.html","a68a4334cdb482bca0dd969b175972eb"],["/archives/2023/01/index.html","0169b83c7948471d93f81f6dd135c1ec"],["/archives/2023/02/index.html","398898c5a26acf50b6b3147cc754fefa"],["/archives/2023/03/index.html","569b40305fcaecd36a3c783a5e980259"],["/archives/2023/index.html","3f9301554ce03e826f13fed5802df7c9"],["/archives/23cd4859.html","90e7b7167917eeb6afab498cd0872862"],["/archives/266295d8.html","5f54330b0dd554870df171c4057361c8"],["/archives/330ac4a4.html","6b2fea387a6340648d51be6170d1e4e5"],["/archives/3a816938.html","5087be1107cb5d6c81f4d12de2c8e96b"],["/archives/4360a9bd.html","7950cc587f62dcb627948fb0d68ebb69"],["/archives/49977e84.html","0f49cd1c7ee0a71acbfc5ec8798d8395"],["/archives/573e690a.html","4f5a77480073dae4c100ae73edf04340"],["/archives/57eb0d7a.html","9243f89de51bbbf1c60b6328c715f330"],["/archives/61521166.html","8ea36c7ad02da7e1549f813350b75685"],["/archives/7576230f.html","39c8f718933db93948bced549b7975cb"],["/archives/8063fed6.html","e9300645889d4b06ceb3f2bd1a606683"],["/archives/8c1f6a98.html","33a7cc67c3002e2ecfe1f2d43b541664"],["/archives/91104203.html","c6f25439a465b483925f180335ae2361"],["/archives/a1db3116.html","b904a0dec3fc859f8d146dfe88ffa4cb"],["/archives/a8ccf4cb.html","4352dad5cf76161968786f9c71265ee1"],["/archives/b7563557.html","6fc5f88512cb8d3310356d9d8e90dec7"],["/archives/c144f20a.html","1bf94c8e0acba53c99037a7ae6b73ffe"],["/archives/e84af901.html","07364cdc6af804d4362b112e37581179"],["/archives/f3ecd78a.html","dbeb8824485e46b4937692880e845b84"],["/archives/fe82aeb3.html","c15aefcba411e4dafcd04000b966536e"],["/archives/index.html","141c0c5bb4aaff46fd0ed37add2a586f"],["/archives/page/2/index.html","36a358a21e4790d9e6f4a9cf861916e2"],["/archives/page/3/index.html","39b59d577d64c150f576fe222c7fa84c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","52135ec5046f888881063808fd148015"],["/books/index.html","d7f43d1f74165649d76d01ac5cc996d3"],["/categories/index.html","e6b96cc0c686ade967fbffa13d18ff58"],["/categories/博客搭建/index.html","2a6c7c12c2f44f3baca52ab15338e867"],["/categories/生活/index.html","241687f880830e5ea73f1438ead58a7f"],["/categories/研究方法/index.html","0c41825d314bf7809bb28627cbc78df3"],["/categories/程序代码/index.html","70b05bf17ea96d73f93fda3afee7b752"],["/categories/解决方案/index.html","6721bb90637daf175c91c1c084039087"],["/categories/读书与生活/index.html","01b3d348c4d885c93782e0a550afb3c8"],["/categories/遥感与大数据/index.html","f01b161b14f9eb8caf50292a0373f862"],["/comment/index.html","dc7e42ef1f732bd52e7eac221ae28c5a"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","18bfdfac5040db29c604f03b05f9251b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","ba82f50a892482fd5f3c36fd48ae6a8a"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","7544e3b1a54c0432d70c66470e720155"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","a17099408777ccfab1256b841222cae0"],["/music/index.html","90d64b2f0f9a2cdc0b9c03f9592e100c"],["/notes/index.html","b43e38b2fc6e3b96dccb342b9e1c74ab"],["/page/2/index.html","fc76e7551412cf8f105f40711431a2fe"],["/page/3/index.html","cbc9e1f03f0970a3882d64701b68a3c6"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","fd5093506b76f0c4f930d85dcfaa56a0"],["/sw-register.js","fa891ac49a349bc1ea9275064de8958a"],["/tags/C/index.html","7c4ef47abf7a0d026dfa522343341989"],["/tags/Hexo/index.html","5d87abb87e9c7b2792a9f08e0377e922"],["/tags/Python/index.html","946710276bdd3fec04b2d9033c46534b"],["/tags/Python数值分析/index.html","ced792f15c74b73ba88597e4de966ef5"],["/tags/Python数字图像处理/index.html","43e403889f8b32b7355af9c81b37d8ed"],["/tags/index.html","408885853849674dc4685a8521e733ae"],["/tags/人生/index.html","1206b8aa1accfdba5ddeca3d53966731"],["/tags/生活与感悟/index.html","2ee996b67c5932a758fdb1d3f0998cc9"],["/tags/网络与浏览器/index.html","28981066fc5a2eda2ed92d34b6f87380"],["/tags/诗歌/index.html","b31c0fa13b41aa89c4529ed5782edec5"],["/tags/读书与生活/index.html","0e7290fe741bee1e636036032bc5be6b"],["/tags/辐射传输/index.html","28731aaf0fcbae766bcfa53fb877124c"],["/tags/遥感/index.html","0e82e27fea838aab35e5ccf73da7ca8c"],["/tags/遥感与大气/index.html","6f0c2c1aad83c26a1110fcbf468c4d3a"],["/tags/问题解决方案/index.html","8841ee96d1063dc2a979a05bc7f06dcd"]];
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
