/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a156d33599b6f799ae64ba6f95ae8b0a"],["/about/index.html","c75d7c11edab1e3176e0dd1f1dfff633"],["/archives/1abb07a6.html","7fcbab8e5e331eeea41c476be2e9ad1b"],["/archives/2021/03/index.html","8b53e24845b6612caa2b2cadc616dd8d"],["/archives/2021/04/index.html","2bfb2673677d469b3304937014284960"],["/archives/2021/index.html","59449e3eb47d271ca06a2dd43de8e6a2"],["/archives/2022/04/index.html","6e9ad2992d83b64258d1e8ae705fcbc7"],["/archives/2022/05/index.html","3b804474907391daab514c4007cb5d76"],["/archives/2022/index.html","f869f891b49c11bb8fbbdf784eeb02b8"],["/archives/2022/page/2/index.html","68e67a2e58f93b5d4dcbde95f228f5c8"],["/archives/23cd4859.html","da61e92c57be4a89108d5b0e631fca38"],["/archives/266295d8.html","1f92e993caeb1c7260b282d6b4aa387f"],["/archives/4360a9bd.html","c6747f14015a539cd1cd9cc461f11637"],["/archives/49977e84.html","d5a661b5ce98bf38fdae77ce0e94e3db"],["/archives/573e690a.html","841326c0153a63b0b0dcefee67a22032"],["/archives/7576230f.html","4a329ea50fcb2cd2c03c88264cd5f538"],["/archives/8063fed6.html","273d19020c2644a9730c1cb466dc2d68"],["/archives/8c1f6a98.html","880787807bdee06adb88eacf28a642f4"],["/archives/a1db3116.html","ba3a83e71bfc669d630a02e49ab3236b"],["/archives/a8ccf4cb.html","42ae66f53776a5f8b4b97d6cd0794142"],["/archives/c144f20a.html","645c7e2a3f2bbff5a05a31235af41238"],["/archives/e84af901.html","7b5b8dd85ff4a3e69e0501076e9e02d4"],["/archives/f3ecd78a.html","936a7315e1d8e6006aa9c3b91880be3b"],["/archives/fe82aeb3.html","e56716182e4353f3e2143eae7ac878e8"],["/archives/index.html","a638fb7a491c218cc21ff2f3c1605d03"],["/archives/page/2/index.html","cfe910af565b47fc10457b2081504f8f"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","17be4f57761543bb62440ca448951166"],["/books/index.html","aa0f98985dfe351b69e9362946ccf9da"],["/categories/index.html","39b94a26af30c7dfc971594be559c168"],["/categories/博客搭建/index.html","d600d955f25d4a52d8195421b7c55e84"],["/categories/生活/index.html","880892ec46a500651aac0a7156634d59"],["/categories/程序代码/index.html","a6aae5891aceb831b5267266c850aa2f"],["/categories/解决方案/index.html","b7ea9da1b95b694c23f4066cf96471a8"],["/categories/读书与生活/index.html","e555b0b746c5c7077c01618772d9c85b"],["/categories/遥感与大数据/index.html","3c6f89f626784579a244f102fbffceda"],["/comment/index.html","b2d7fefaa6932fa6931d4169d290dc50"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","5d4091244a257a883d216b78ccf6e977"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b504953c7faf4cc727dda7680950fa9c"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","927c4d21ca72a785a6b9808ce0b62c34"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","73b1afa655746b6f8fe7961ba5953b8e"],["/music/index.html","ad2c26139acb5ed2bf87dd7176c911af"],["/notes/index.html","d68ed218aebe0c415823cd50b833881b"],["/page/2/index.html","8fea6df25a3906ac85c4d691126d06f4"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","b143712b7f181136e6342538e5953d0c"],["/sw-register.js","8383b6510c01d2f635658f7264ff91be"],["/tags/C/index.html","9d2c0ce30f5a0abcfe5921aa907799da"],["/tags/Hexo/index.html","46dfc4c5278d3b542dec946eb621e927"],["/tags/Python/index.html","4b4e4d38aab8c3f526eecea49a168af6"],["/tags/Python数值分析/index.html","c3db9b7ba4fc8a5a266e25a650db8841"],["/tags/Python数字图像处理/index.html","25465139781680626eb07022b1fa276e"],["/tags/index.html","4693aeecaf157dbf8527a8f41f45aedd"],["/tags/人生/index.html","a00e871e1acd02ed343e05d2fe9afe6f"],["/tags/生活与感悟/index.html","fed7be56ea1483f97d5536b74e4083f5"],["/tags/网络与浏览器/index.html","c6a67734617d9981b977ce299ffd0777"],["/tags/诗歌/index.html","ac2939c7721c7e4c1d556aff4cdd9d97"],["/tags/读书与生活/index.html","d9a72ca849a95f96232d099ccdbf4bc5"],["/tags/辐射传输/index.html","c65322108f5b42f8ecad3af103561f0c"],["/tags/遥感/index.html","e4d27df9a141c77acf758eb6da43e98a"],["/tags/问题解决方案/index.html","d629e5e2c195351ce17c0de07588bfa6"]];
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
