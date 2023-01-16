/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6dbb69f848a88096a85c7e029623cbba"],["/about/index.html","462f3cb0877f5624de72318b8d92cf95"],["/archives/1abb07a6.html","fa80a682120960f98f69fa5ebdc8864f"],["/archives/1def5f0d.html","61137aa24fd8f916dac420bead104c41"],["/archives/2021/03/index.html","93596e86c1bb506993e6cbd28c04fd67"],["/archives/2021/04/index.html","bde72b39e8705aaf885a84d29664f895"],["/archives/2021/index.html","b6f1348d3c76c831984a01e1594ff478"],["/archives/2022/04/index.html","f2e34a64537204416082dfbd97c3b65f"],["/archives/2022/05/index.html","a26ed81170267c0ace93173ad91105e4"],["/archives/2022/06/index.html","5dc095f112184dfa4c39d827001c5ae9"],["/archives/2022/07/index.html","11e9b3ea9e57bdbfaaadce89983f9edd"],["/archives/2022/index.html","9bc8c86135289e65ccd62c9eb847cf66"],["/archives/2022/page/2/index.html","52b577797da974eb3bb52bb4507ff358"],["/archives/23cd4859.html","32a6f4984d00ef98694de9cf16fc3172"],["/archives/266295d8.html","81c2d747ef9e26333ff5339686e09fea"],["/archives/330ac4a4.html","c096849fe4b1bd5dafdc91880d732e9b"],["/archives/3a816938.html","046fdf2ebd69dc25f6a12951a0f5a0e3"],["/archives/4360a9bd.html","7c7ea88be44bffe9a56bc628c0990a9f"],["/archives/49977e84.html","c2120edf8a6b7cd3491c8bc911039dc7"],["/archives/573e690a.html","dde885d60c58fd623fa63172bca6f8b4"],["/archives/57eb0d7a.html","14074e45511d2198d6d76050e1ebade9"],["/archives/61521166.html","7488cac1dfce70646862d8e646a1c2be"],["/archives/7576230f.html","8991ad0d787334b8dee3271436a39274"],["/archives/8063fed6.html","278e57555e8ec05573d867389d0944a3"],["/archives/8c1f6a98.html","f1a3074eaed2154d839a75cc592a0eb3"],["/archives/91104203.html","37aa885866af1fc040c6ae02b37eb90f"],["/archives/a1db3116.html","e0fad6d4338e403bddae4c124e07b65b"],["/archives/a8ccf4cb.html","25066e3334f515c7096c03acea81933b"],["/archives/c144f20a.html","dbfe9f5e5fb5a231932e15ec34c8afeb"],["/archives/e84af901.html","5b4f24628bd57a1a1377209c397a5149"],["/archives/f3ecd78a.html","6ed5757e4a362476a6841fe4e41edcd7"],["/archives/fe82aeb3.html","1baab396cb9b6662660fafb1ab0933f8"],["/archives/index.html","cfc1e877c6f6b42662ea5c6942005900"],["/archives/page/2/index.html","fc70cc83f3349f4c7505b2839fecd28f"],["/archives/page/3/index.html","e0d1b29657a13aa56e9d17aa54a33e65"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","d2225b87c681ef30f0ab219bcc890fad"],["/books/index.html","83c138553acdcea4184bf6c90358d820"],["/categories/index.html","7fb062b531cfb8a6e99161341a686499"],["/categories/博客搭建/index.html","b858adad61c2e9fba3c46e85fb2ac8a1"],["/categories/生活/index.html","9704a436837dc64ac32f82c6fd54b24e"],["/categories/程序代码/index.html","cd1e9189cfd525a10cafe7f9f06cbd54"],["/categories/解决方案/index.html","07b7423fe2780877d26874008f267d99"],["/categories/读书与生活/index.html","e72868c27617261b787b16912ca92ff5"],["/categories/遥感与大数据/index.html","979cf0380ec69ead5d3f18b073ba3423"],["/comment/index.html","c81bf2f074a1a0c33f89ec3be5b7a2a1"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","4ce66f16e18f460c539c538d948d8d91"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3cade2c4168b38300d064d195bec3b05"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","e509df9aebfa79b33645f8f63eed5c04"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","b766a2557d5dd421d58c012838197c7b"],["/live2d-widget/demo/login.html","1ef70a3be900a00a8f9058620a57cdcc"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","b55c95278a4deaa2e76073e839f0d9f7"],["/music/index.html","8a426a056d9e099edacb5c40b4cd9b8b"],["/notes/index.html","a1e35b53af668204e5fce99fc11e5183"],["/page/2/index.html","fb8ed6e818724a22fab19d7e3432971b"],["/page/3/index.html","5d10f13792c915e42286f8fea36936c7"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","b05f0239c3140066e53ea051d9674ee4"],["/sw-register.js","dc67e38ee8c53832718dcacd62c246e4"],["/tags/C/index.html","326d57b6e69c9eabe426fbeaa20e165e"],["/tags/Hexo/index.html","0773ccee89e1865e26c1641cf90d618c"],["/tags/Python/index.html","0978f8aa8588d231a24d5f7ec08bfbdf"],["/tags/Python数值分析/index.html","bcc6b50773f5c44e3147a50e4a285440"],["/tags/Python数字图像处理/index.html","655ba865f2739dc5d96aa67db3ec84c9"],["/tags/index.html","f7a69f59539aaabba9f405b3534f63fc"],["/tags/人生/index.html","b9841e7450b1a6b3de2216307872ae76"],["/tags/生活与感悟/index.html","217eea79dac48e2b583416e981a68358"],["/tags/网络与浏览器/index.html","4ee9160b67c6904fffa31b7917958b87"],["/tags/诗歌/index.html","9789608e295e6e77d197fdde4a8d0934"],["/tags/读书与生活/index.html","b38f3b2bc90938cf442bc714d5128247"],["/tags/辐射传输/index.html","35b4f3dbaa634f9f58939ccd058f8be0"],["/tags/遥感/index.html","5241c8a81355416ab5a1d61101b8fce4"],["/tags/问题解决方案/index.html","acb7fb306128b5c97f84ded4ac5fcd45"]];
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
