/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","60cd836a6fe61f9331bf9a82d997ed27"],["/about/index.html","21061e587e0902d47553cdd425e467ba"],["/archives/1abb07a6.html","4570c8b7c6faa143b7cd2fd5ea2694ff"],["/archives/2021/03/index.html","b7d1dd98528e9bb48cedf958b27914dd"],["/archives/2021/04/index.html","fafcf3acebac2c2aba1f565d9f977da7"],["/archives/2021/index.html","b5d8b6771596bca28d4db69aafaaf0ba"],["/archives/2022/04/index.html","979195c900ea94567a86c39d0470d85c"],["/archives/2022/05/index.html","4aa1d736f02c12921b0ed98292c29413"],["/archives/2022/index.html","a8e3c25bc448a041d9bf2b5dfeb5f108"],["/archives/2022/page/2/index.html","18173a2571cfafcf5eafd079d9e971bf"],["/archives/23cd4859.html","fdf94afcbf16b4ae86b623b25c08c89b"],["/archives/266295d8.html","c46b21559590380b7e661c8c5be77791"],["/archives/4360a9bd.html","1bd4521792a82589642eabdeddecd01a"],["/archives/49977e84.html","865c1bb0a0406a13680b5a55ac3a8d7f"],["/archives/573e690a.html","e686ed0d5865fb806d8a1d8cd51bd8c1"],["/archives/7576230f.html","841c1fde368a04532067d913a0012a47"],["/archives/8063fed6.html","baf01058e1506bdf87dcf0739f6a4194"],["/archives/8c1f6a98.html","62ef9b65de3bc290f98c9a87862ada2b"],["/archives/a1db3116.html","3e29654ac0444bae247d7f67a76329d1"],["/archives/a8ccf4cb.html","5e27874ea3402b9cd6668bbd5ecc6e3f"],["/archives/c144f20a.html","f8ce4e261487e8efea57928ca1248584"],["/archives/f3ecd78a.html","7980bd21119bb9fbb4f29eef3a72ef85"],["/archives/fe82aeb3.html","970de9ad66c00d4d58fe1970ba656bcb"],["/archives/index.html","fc77088259575290ed41335268fc36d0"],["/archives/page/2/index.html","1e61961e3026ed57569e62e958eeaa62"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","aec10cf7e2d2d15ff3e0160caa324601"],["/books/index.html","0b9ce559553299e532c7b5b853fafa2d"],["/categories/index.html","756fcc5fe0f82691bf22312f65c60333"],["/categories/博客搭建/index.html","85a26d144ac5e60a28efb8499d199773"],["/categories/生活/index.html","8de319bb6aa3cfc172b92e1eb08feb21"],["/categories/程序代码/index.html","6b9f7012454ce238135dab24872d2f00"],["/categories/解决方案/index.html","35431009ac9b23927b59191883e0f1a6"],["/categories/遥感与大数据/index.html","5a34088602c15a4359ed98aca3440db5"],["/comment/index.html","537ac5436279e85cefebd8c4cc093f21"],["/css/index.css","30f837a26c97ec35ca670ca0ea5b4c4b"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","ce8e715351c755f3a17ef282fe299469"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3bebd1410a26b805209e64a00cb08123"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","4aa504c73b065b8ddf57e373f79c5266"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","072d8586e6e9ff0012953da243f560a7"],["/music/index.html","2aa534137aac1a3affb8f3cf9da5f140"],["/notes/index.html","b2adc8a9c419ffab5fbb5d8bf86864f8"],["/page/2/index.html","014ee7b19a8a1c22ef6911f6a333ffcc"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","e375a6265fd67264dc88923a880eea59"],["/sw-register.js","2db678a11a08d85685107f482a364791"],["/tags/C/index.html","0e3abe17830a07455e43916d00305fed"],["/tags/Hexo/index.html","afab0510e896cd8eb9e7d2a148953bb4"],["/tags/Python/index.html","fcc2b195e994d06ae22e0d3c0b130451"],["/tags/Python数值分析/index.html","916838a604ef31a8d1541a8d3443450b"],["/tags/Python数字图像处理/index.html","724d61eef4108d607037a7242a0974c3"],["/tags/index.html","c992849a035858479643005676539e07"],["/tags/生活与感悟/index.html","8a563232e33e7bc1858f77d9ec42113f"],["/tags/网络与浏览器/index.html","caa217dee9c755e3547c1f012b8b6def"],["/tags/诗歌/index.html","b431e0f87dfd37e92f89e69628da4bae"],["/tags/读书与生活/index.html","07b0398bc59bf8e2a5b6ab949cf41330"],["/tags/辐射传输/index.html","da6548916ee6d7108ce8226e65d11e8a"],["/tags/遥感/index.html","b966065c2329c372b306bf69f11d4f20"],["/tags/问题解决方案/index.html","229c1fbe0411575efefa4f8655d833ba"]];
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
