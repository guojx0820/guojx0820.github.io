/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5066b15c6d111b1210f34968ee50be0a"],["/about/index.html","cae968b53bf43714b3d0c86ffa28b90b"],["/archives/1abb07a6.html","656219727003b93cb59751b42d8d44e5"],["/archives/2021/03/index.html","fba6e4473d9eaf1c03605be206fd04e2"],["/archives/2021/04/index.html","81c4aabdc40e2e28effb42f75cccfa41"],["/archives/2021/index.html","7bc28592e828bfc363166aeb51d81431"],["/archives/2022/04/index.html","7fd3c928d3b3c889ad027da0b1a73ae5"],["/archives/2022/05/index.html","f6f971cedfefdff18d129c662ffec062"],["/archives/2022/index.html","90558dc5654f0913d867c7c43a24bfb0"],["/archives/2022/page/2/index.html","8bc8657550981a8348e90d312b06ce13"],["/archives/23cd4859.html","a096de6074dc8e540b63ecfc8c30bc23"],["/archives/266295d8.html","211d5bdeb512eb2c19132bd79d5900d7"],["/archives/4360a9bd.html","a305495e749324f61a8e089afc8bdccb"],["/archives/49977e84.html","775c70904dff8a7a92a23998be83efef"],["/archives/573e690a.html","e954a6011e2a3ac66d48b32001e7260e"],["/archives/7576230f.html","c12fe22a76a76e0fe45be04b4d5c2255"],["/archives/8063fed6.html","10716f20345e955d21ca365081e7f703"],["/archives/8c1f6a98.html","f730018b9737347b514e4c14fe00a541"],["/archives/a1db3116.html","b94c08436f88903336a7db3fa3e05ce1"],["/archives/a8ccf4cb.html","d93bcc8af8a6d0282a9888b785d4eceb"],["/archives/c144f20a.html","bbcb5d9281361f0e638733d4f090c27e"],["/archives/f3ecd78a.html","5b7367c32f8a7975a0a50433447d2456"],["/archives/fe82aeb3.html","5cf8b131e52d401357fde99c279ff500"],["/archives/index.html","19986975ebaf9835623af14885b435f8"],["/archives/page/2/index.html","23c22c9b9e1568605afb9968035d4ac7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","b2318832316b2b9aa02eeee955ca93e8"],["/books/index.html","99659bc5a496379fd1fb212c597b620f"],["/categories/index.html","2b6e32a6723d6816fa366e44676da021"],["/categories/博客搭建/index.html","09ed29aba2ea5f5514c7aaebd0922bac"],["/categories/生活/index.html","bb059a6a7f865552eab7098e9663299f"],["/categories/程序代码/index.html","0ba85e8a23e327a194d63aa8f89f5bb7"],["/categories/解决方案/index.html","e3757baefcde5df38c2dfff04b31a32a"],["/categories/遥感与大数据/index.html","b1d47de115f91cffdd1c8652a624018b"],["/comment/index.html","2557fd968b992b99cc4af6a3b86b8b40"],["/css/index.css","f2bdbbb4db75403c3c74e143a02093a4"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","3d04d4965f4072795dd1b33124662b38"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a4e6625e724fac23bfb89e69f3f4c81a"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","36c014057e7ea05fde7cba6de726fdeb"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","126f3921b6f432f71411c5724001385c"],["/music/index.html","d24b573f596f60ef32f24d536e1cf914"],["/notes/index.html","bb7b2ae0e19053ddbcd1aaf4d45e61de"],["/page/2/index.html","42a5f70bf05d1b37d6f90b95c386c287"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","660d23a7d67536dbf8a018c8b8c6f1ba"],["/sw-register.js","7a7838e8a99ddf8d355556c796b26b3a"],["/tags/C/index.html","7205055dc46accf10171253915e0cc94"],["/tags/Hexo/index.html","25f71ae5c0ead572e37407c8a45b0b4e"],["/tags/Python/index.html","24ffb72f88a656822397c1eb9be3e62b"],["/tags/Python数值分析/index.html","29110548f33b61e13b7f8127741b123a"],["/tags/Python数字图像处理/index.html","4164f6e072de07a5a0a0f6cfb4138080"],["/tags/index.html","b31e0a0996013b1dd2c8b540d853f299"],["/tags/生活与感悟/index.html","7ced17cd3268b78e5a3281ef9c2951e2"],["/tags/网络与浏览器/index.html","9963a0738290e1b5f296b902086c70e0"],["/tags/诗歌/index.html","371a8e9951ac1faad0325623e0bd0c8c"],["/tags/读书与生活/index.html","3860380f58089c3d44840ca2805ab78b"],["/tags/辐射传输/index.html","0a94bfe442fb5587945274b1f6d47db3"],["/tags/遥感/index.html","53ce66a94057ab08ffeba8b1faa6e48d"],["/tags/问题解决方案/index.html","d9c2cc32e92aeb5d85ce9c3e94e64853"]];
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
