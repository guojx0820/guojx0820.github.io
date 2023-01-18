/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7087f9cee507765eb3433fe64698e390"],["/about/index.html","d8f8480d09fbac5a56a0f410afb3f5d0"],["/archives/1abb07a6.html","9bdfe8ed335246396af8ccc00078a8eb"],["/archives/1def5f0d.html","5a138b8138f521f437f56647ee00d60c"],["/archives/2021/03/index.html","e49a5446927987473683aed713405689"],["/archives/2021/04/index.html","075388ad9409680a9c0963999f6ea25a"],["/archives/2021/index.html","9110ee26bb5625708ae0c8fdddb97b5e"],["/archives/2022/04/index.html","6888869fae7d69641302576d14e76154"],["/archives/2022/05/index.html","8b8cb6d152f5a5e1f0332ab3226d7603"],["/archives/2022/06/index.html","1bf34e5d336a1e62d4bea07080ab17e0"],["/archives/2022/index.html","14194989c9c799934209cc9a5ba67024"],["/archives/2022/page/2/index.html","61618c24b50bc5538e6a69461f85118d"],["/archives/2023/01/index.html","5d0225e75b7e5f4faed0df87232436a8"],["/archives/2023/index.html","dab3f1c776f58f2af868b615ce7cefbd"],["/archives/23cd4859.html","286e49be006c75ad401818122ca84e18"],["/archives/266295d8.html","e4e0274f0391848190778aa1c1092031"],["/archives/330ac4a4.html","be4d8e70cfd2fd3059510ba56f6b5d86"],["/archives/3a816938.html","7a04405ba60125bfc00c84d1d213f48f"],["/archives/4360a9bd.html","b914c5e44be435731e649caddd32c63c"],["/archives/49977e84.html","46330d9b4f70a1edf52f48b921836c0f"],["/archives/573e690a.html","c8541a029000558b6078355110289275"],["/archives/57eb0d7a.html","25ce4fd979e2629d134de5d5a0a1b3e9"],["/archives/61521166.html","fb4f3f5283026dac4b13c665b5f1f29f"],["/archives/7576230f.html","f9c4396c3d6e7d1ac922f79caddd0003"],["/archives/8063fed6.html","d0e3db7135c05741ba8bdf2e81404738"],["/archives/8c1f6a98.html","5a81c9547607a3c1b6716d50c9bde115"],["/archives/91104203.html","ee5987f206d07641dec6152f8f6ccd9c"],["/archives/a1db3116.html","50b352c4266827060e58e13ea45ef5ac"],["/archives/a8ccf4cb.html","3ba5cd8b8dd2a5a4fe3fba07288537cd"],["/archives/c144f20a.html","97aa1c996c4307ba98c7b84ace2eafde"],["/archives/e84af901.html","7dbb58e5a5511c4853369696832af03d"],["/archives/f3ecd78a.html","5aaf638a3d73085ad6126062c944e8c5"],["/archives/fe82aeb3.html","d3b944b0519959548b8103234c4fa42b"],["/archives/index.html","f69cec24d415efd7bee8e9dd978583b2"],["/archives/page/2/index.html","ee64702088ad9f840440d08621274230"],["/archives/page/3/index.html","ff9c068e3d4f886926513ffedb836659"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","c716e88bffbd8eb3d617a82398d24004"],["/books/index.html","7c1ee8e25e135878c73e0ac5a99bf39e"],["/categories/index.html","aee9c042036acb120d1263efb7a7a1d1"],["/categories/博客搭建/index.html","c02f0ee69f011008d778222a7d603d2b"],["/categories/生活/index.html","d6b2df42e264a4d6f5dfd357a5e9f6b1"],["/categories/程序代码/index.html","18293617f7bf5d8bdd8bef29aa91f81e"],["/categories/解决方案/index.html","fef7763e8f3561cdbd734f2b7edfaa6c"],["/categories/读书与生活/index.html","f55b31b98e914f2bc41479e4e4569d99"],["/categories/遥感与大数据/index.html","aa39ce402ea9c449d9176491680bd4dc"],["/comment/index.html","aea45d070521e9f6cd691a1f192bb037"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","1244abfff68ba7f89a029b3af5e125fe"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","794cd0cff397717eb3f4cff410d08593"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","a3149c269105cf9f08677c51cd8f177f"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","958d20668645bb0639653ac388e8060a"],["/music/index.html","2baff91f3837076a6086e5bd393fbcd1"],["/notes/index.html","cf906bda6bee0e9168c10372f669a79d"],["/page/2/index.html","efc6200306d2fd2515bc915f8a6ae2fa"],["/page/3/index.html","3397456df5ec8f57ea000bdd0e77e237"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","55cfbe06065269a20d00de13d6ee74e9"],["/sw-register.js","639abfcd73ab4b8f392c5a62451fe57f"],["/tags/C/index.html","6a88f0e963159deebc04656ba40d8755"],["/tags/Hexo/index.html","e51a2256dbd00a2d918d943ea09b3615"],["/tags/Python/index.html","056c69c1c6fa3d800ea42bebf36f8a38"],["/tags/Python数值分析/index.html","e7a9f5774095ffc2098a01250ac5dba2"],["/tags/Python数字图像处理/index.html","2f09f90d505e1a843d62308dca572c22"],["/tags/index.html","7ac001b55db807e352c1d136f49b2126"],["/tags/人生/index.html","11c9f37d108a729dbd36032f591db18d"],["/tags/生活与感悟/index.html","89ed70122b29cca5bd27fb178dcf7395"],["/tags/网络与浏览器/index.html","67b391bf6998aaecafcb817db158cbdc"],["/tags/诗歌/index.html","550f55a2104dfd72b93b7c448cdbc74d"],["/tags/读书与生活/index.html","1f939d0af8c395f387a6a53fc11e2ddf"],["/tags/辐射传输/index.html","edef95018e8a03d6a2cfc5ec0dff2cb7"],["/tags/遥感/index.html","64b17e0a3968bf4e88ffe57ccfb33219"],["/tags/问题解决方案/index.html","9a8f1f0ff2998ec002ce482e19b9880e"]];
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
