/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d66541fbeefe4c8875e0a6a2eaf838be"],["/about/index.html","826b1c16a4d6cf3bd5d916383da446d8"],["/archives/1033b493.html","bee2689114f3cd1b43375b5e125955a1"],["/archives/1abb07a6.html","ae4d4032385a199cd9171dc14aa8b409"],["/archives/1def5f0d.html","2395113d38ac584b73f9a6976c8a5975"],["/archives/2021/03/index.html","b0a760e93d287938d143181b84235d35"],["/archives/2021/04/index.html","80841560ac98a1cbcdbf39819a4bf5fb"],["/archives/2021/index.html","fe1790591a5c4105eb02c6f1b8938314"],["/archives/2022/04/index.html","d32a7510ab4a4eda4ecfd6ed85183c25"],["/archives/2022/05/index.html","1eca35f3c87efc330987a923494caea6"],["/archives/2022/06/index.html","c41b1b7980a69f3b06820312adeac2e3"],["/archives/2022/index.html","f8bef39826761048a1c6f5cd290ed2d8"],["/archives/2022/page/2/index.html","9312ce7c1b2df7a183421968260b8b09"],["/archives/2023/01/index.html","48a30fbaf39bf02b045ac2e3a593e17b"],["/archives/2023/02/index.html","375c91c77ca6dd3f7b044034da7ff429"],["/archives/2023/03/index.html","84990ed978317750a44ae8102af72115"],["/archives/2023/index.html","e20f5cbf5e32f31b47fe8f4b18616e29"],["/archives/23cd4859.html","bf390679ad5da4e5af90247dc83799b6"],["/archives/266295d8.html","df27cc9987c60283f8085bffd1e2dfd4"],["/archives/330ac4a4.html","c6ea16fa0e8bc570fd89f69668db25a5"],["/archives/3a816938.html","6c66ca7336293efccc5c2f9ac6c24359"],["/archives/4360a9bd.html","4cac1b8cd9e7b41555849f5dfface808"],["/archives/49977e84.html","c2da979225356f2f61bb5212e8f66223"],["/archives/573e690a.html","98eb16b14a7fbca8d62d2922092a936a"],["/archives/57eb0d7a.html","27f1b01f0c6c4c33e94c09039fe9adf5"],["/archives/58b02e48.html","43422f63362894f97cbb1515f2752132"],["/archives/61521166.html","264b6dd9932e09aaf3d35af4c3f9111b"],["/archives/7576230f.html","5facadda2acef89beebfb66b621ec29c"],["/archives/8063fed6.html","c8d0cc9f5d0576ac1030ee2146e4249e"],["/archives/8c1f6a98.html","dcd1d8addfee45c31e07b8cadfa706aa"],["/archives/91104203.html","9b8abe81191729306c9aae3462f7a4c7"],["/archives/a1db3116.html","54aa8e0c6399712d48ea41a6e7db287e"],["/archives/a8ccf4cb.html","c530821fa31f0d69f0c2ee1d90090a7e"],["/archives/b7563557.html","ef7b24f4301d114867c535445a05c0fa"],["/archives/c144f20a.html","6fbf694f2cd08e91d4429e94d5f8f01c"],["/archives/e84af901.html","d95873ff4a9ed1141fea6c72816b05f7"],["/archives/f3ecd78a.html","c26a26c1a3d6fb185140dace256e1401"],["/archives/fe82aeb3.html","6578ae6d186d02ceaea7c7239af6a83e"],["/archives/index.html","ce23d728aaca8cf0418b8fdeff67d3a7"],["/archives/page/2/index.html","a37c1437f2afb4026a2d8f7757088b84"],["/archives/page/3/index.html","e63a69f7b9a74597a70279e3765e1d16"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","9d1ed2fa491e4fc993fcd79117e9c4a0"],["/books/index.html","1d28167225ddf3d0acb21255a8c2642d"],["/categories/index.html","7d5a48e73302676c0b25d4edee631c9c"],["/categories/博客搭建/index.html","54dcc3c3c70ba652f104933c6b3bfc57"],["/categories/生活/index.html","0ba5e3ab6081256720780695da9de30d"],["/categories/研究方法/index.html","2934dfaee15d241fb33d999cff0c0f90"],["/categories/程序代码/index.html","22afa7d33ead96c1f2b288fcb1e3466f"],["/categories/解决方案/index.html","f6e198442196723be0ab710b2d8d9d1b"],["/categories/读书与生活/index.html","f5037f81a2511129f107d9baca3f956f"],["/categories/遥感与大数据/index.html","27135bc9727294767854beed7fc6ee1f"],["/comment/index.html","61ffeb9a4854f8f61e77d814f061cdf6"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","2e8e5bbb00983cbd5d380730dcb33de3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","241db9013f5c3a7002d083311e493b77"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","d94126a8cc7a8913798961f0c87688c2"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","4178b59533125129913c0b513cb567de"],["/music/index.html","b2cb1628027f2ee1500610e324de1c34"],["/notes/index.html","1ffa74ac9ae649438b52ceee8ad4f871"],["/page/2/index.html","faad57444ea205bc6b54cec9df505aec"],["/page/3/index.html","9e3c4d7809928f68ac8ee4bf4d82a933"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","399cf4ec76b6f321dcb712a06c6e22e2"],["/sw-register.js","1b41b3fbcca61ca71b369c3e1e6345b6"],["/tags/C/index.html","8d79023d783488791a10c3d8fd9fa0e0"],["/tags/Hexo/index.html","07bb6d16eb7216966156160854873ad8"],["/tags/Python/index.html","6956f86a50b158f14c3731bc5b9ca464"],["/tags/Python数值分析/index.html","8d2525c018fd814f83325eca449e6aa9"],["/tags/Python数字图像处理/index.html","179dea9cb8361adf925de47e9c629787"],["/tags/Python面向对象编程/index.html","ed6f3f11c96159d88d5f2d1a9881ac77"],["/tags/index.html","e21a61e391adc923870e071d55939171"],["/tags/人生/index.html","1471b1fe4790e9e03ed727556ee8e47c"],["/tags/生活与感悟/index.html","96c3a13aa0f969dfa058fdb1dea441b3"],["/tags/网络与浏览器/index.html","0cfee84ccf5c77888cac2eee1cfacf0a"],["/tags/诗歌/index.html","8b009e2591f9b0257138a23d7bd03c7a"],["/tags/读书与生活/index.html","548c4c59f8b01bcca9e39a76a4b7b113"],["/tags/辐射传输/index.html","91faf816075ced476e43961b96d8979c"],["/tags/遥感/index.html","ed72ad5b78e79fd60becd8607ed464e6"],["/tags/遥感与大气/index.html","0f36b51f3b616cae89a0a2f9ccb03c9c"],["/tags/遥感影像分类/index.html","052ba7be11610919f0bbbebf7a4864ce"],["/tags/问题解决方案/index.html","4e7835bcadadcc8fc2132724894714c5"]];
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
