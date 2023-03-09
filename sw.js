/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b22f4dc76fcbd7a4486eb465a162ec49"],["/about/index.html","c09a57c8fd804b1fab48d71af36bdee6"],["/archives/1033b493.html","415a0cf2932d1ac4b56b879dbcc8d7b7"],["/archives/1abb07a6.html","d84a6348247ca96fe808d2d56f8e41e1"],["/archives/1def5f0d.html","066ee3bed385bcd6682fab2722f63ad7"],["/archives/2021/03/index.html","7eec083c550420c38ed252245b659943"],["/archives/2021/04/index.html","e4c54058e9bb09f0d2ed019d321861fa"],["/archives/2021/index.html","f49293ae9cd7c7efc85d1a05399ea891"],["/archives/2022/04/index.html","de51e9fdc603eeaeba7bc97a89ebae60"],["/archives/2022/05/index.html","fb9f3c512f56ac106e88d006f6edb452"],["/archives/2022/06/index.html","a6b1c21510f8f15451581dc84afa2572"],["/archives/2022/index.html","28dcf47ab794f486ee3f5ae9a2e92ce8"],["/archives/2022/page/2/index.html","987ac92236219279c0cfc616b3a8e133"],["/archives/2023/01/index.html","bbceaca5637920bc9bdc88584f7b56cd"],["/archives/2023/02/index.html","4eb06676b917b4a3097061bd5f979d90"],["/archives/2023/03/index.html","8f2da4cc2cf1894c890430ea5a8517c6"],["/archives/2023/index.html","08a3bfe6d63dfaed91f19d970b16f1dd"],["/archives/23cd4859.html","90e7b7167917eeb6afab498cd0872862"],["/archives/266295d8.html","5f54330b0dd554870df171c4057361c8"],["/archives/330ac4a4.html","6b2fea387a6340648d51be6170d1e4e5"],["/archives/3a816938.html","5087be1107cb5d6c81f4d12de2c8e96b"],["/archives/4360a9bd.html","7950cc587f62dcb627948fb0d68ebb69"],["/archives/49977e84.html","0f49cd1c7ee0a71acbfc5ec8798d8395"],["/archives/573e690a.html","4f5a77480073dae4c100ae73edf04340"],["/archives/57eb0d7a.html","9243f89de51bbbf1c60b6328c715f330"],["/archives/61521166.html","8ea36c7ad02da7e1549f813350b75685"],["/archives/7576230f.html","39c8f718933db93948bced549b7975cb"],["/archives/8063fed6.html","e9300645889d4b06ceb3f2bd1a606683"],["/archives/8c1f6a98.html","669d583f4a559cbb079a2658d9b9631d"],["/archives/91104203.html","c6f25439a465b483925f180335ae2361"],["/archives/a1db3116.html","b904a0dec3fc859f8d146dfe88ffa4cb"],["/archives/a8ccf4cb.html","4352dad5cf76161968786f9c71265ee1"],["/archives/b7563557.html","4b6324022127f20f98d0fdce2163ae0f"],["/archives/c144f20a.html","1bf94c8e0acba53c99037a7ae6b73ffe"],["/archives/e84af901.html","07364cdc6af804d4362b112e37581179"],["/archives/f3ecd78a.html","dbeb8824485e46b4937692880e845b84"],["/archives/fe82aeb3.html","c15aefcba411e4dafcd04000b966536e"],["/archives/index.html","59a4928818bd130858d7d12f5a124f24"],["/archives/page/2/index.html","028a6e9da4ac46a7326e6f9592eafdb4"],["/archives/page/3/index.html","3ff4bcdbe0ec4698c279c234ff33f654"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","30c6b01719bcddbfc48f7fb1de5c937a"],["/books/index.html","b5d0c2dbb7f7db6e855d81ba3c907dbb"],["/categories/index.html","2a85e95dae0ece750054a19498c4b49c"],["/categories/博客搭建/index.html","79381b27cd8b49d3bcd40b624d956339"],["/categories/生活/index.html","aab703295373530b5deda9bad3bb9509"],["/categories/研究方法/index.html","1af53abad29fd2d591098d8b664497e2"],["/categories/程序代码/index.html","eb133a222f7a3214a41c23cb20a35bbc"],["/categories/解决方案/index.html","345a09db634857b35a4c30e503e89715"],["/categories/读书与生活/index.html","f14e7c9c41c890a746bafff2b793c851"],["/categories/遥感与大数据/index.html","e0cb612bd9e385949a990c73595577d3"],["/comment/index.html","05de17b2d69d68c1525164fbdf1bc7ce"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","0ab266ee1637502f0d50871599636449"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5e9e60ab60ceaad697907317d4435614"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","94304ddcfcd570b5dd12e5d546e0be17"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","d26e742178d33ac939075433c0ed1696"],["/music/index.html","8afbb1c2589e21a4484768b7b4644136"],["/notes/index.html","c72f76f551dbce8d7292ba9bc7a84e40"],["/page/2/index.html","9269bb972040e7659f98b7f070ac4c35"],["/page/3/index.html","fa18f9ebada3849d657588a49787f166"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","c503000d213a3c56fdf9ee837514238e"],["/sw-register.js","1d135f37bd3e18573fc63e442223936b"],["/tags/C/index.html","67104be61b23253a70779514323e4927"],["/tags/Hexo/index.html","f49eb6a22ef458979973d161131a950d"],["/tags/Python/index.html","2cd96cb1b948e8b09fff68806818ee6c"],["/tags/Python数值分析/index.html","a524cde2619e345e41ac845e5f31036b"],["/tags/Python数字图像处理/index.html","59bd55b4f4d141b103465115c76c0cba"],["/tags/index.html","c1868e0572e754ae96c257de5fa04a01"],["/tags/人生/index.html","6aa426d19067ae0f4f3485ebe3645c6f"],["/tags/生活与感悟/index.html","bbb422f22193199c2cf5ded0c5d4df3c"],["/tags/网络与浏览器/index.html","71b83c3f3a485989efb5a5127ae0afac"],["/tags/诗歌/index.html","8390a34cd19e1fbef6bcf1bc6b0e93ec"],["/tags/读书与生活/index.html","f796c1a6321c2a7f99b059b1221665e5"],["/tags/辐射传输/index.html","abf15f836e5bb5db61485b09bd057b89"],["/tags/遥感/index.html","db3d525af5961feff79fc72baa4251fa"],["/tags/遥感与大气/index.html","dbd4e6b9af4610343118c6f90dc5159d"],["/tags/问题解决方案/index.html","cc8f85329fefccb2b90e48bc5f27da28"]];
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
