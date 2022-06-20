/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fbc337a2dd778729a9b0703b370bb653"],["/about/index.html","0a5b515c26b00ee02aefcd42a485eb21"],["/archives/1abb07a6.html","ab38b6b8265ce567042305bff3eb528a"],["/archives/1def5f0d.html","74e4cab12fef1cafe241ab0df6d26700"],["/archives/2021/03/index.html","1abe9cfcddd3e9a08825a777706a6d16"],["/archives/2021/04/index.html","8006afa2498e5bd213c85896961fa770"],["/archives/2021/index.html","67416e3586ded6d403d5237d5f04aee7"],["/archives/2022/04/index.html","b2ff02457c19e4f501c1e1218869cc50"],["/archives/2022/05/index.html","6fc3db1bbde6b701e015a9d7daf56635"],["/archives/2022/06/index.html","54a0fe1cead7b75c65742d4ea341a3e4"],["/archives/2022/index.html","0914858bb15e7e0de262bf65f5e28a0f"],["/archives/2022/page/2/index.html","4c35b5100f04082107584da42cc0c031"],["/archives/23cd4859.html","b832f1befd16e6a461d6bea256ea72ad"],["/archives/266295d8.html","ab187f9d668ccdfcf446660471c9cbb5"],["/archives/330ac4a4.html","ec57d5aa6d76308d9d36099b1b99e4c3"],["/archives/4360a9bd.html","ccd51bb97a5d3ce05818ea2f71fb3ff6"],["/archives/49977e84.html","7e8e0eb80b043389ce1a477a9765d843"],["/archives/573e690a.html","61b353d2e34583907de5821c40dbc500"],["/archives/57eb0d7a.html","d520817ef15642d15df2cfaf0d7b325b"],["/archives/7576230f.html","328934679819f7d68e3fbf9f4d69ea6f"],["/archives/8063fed6.html","6943e5c4fbcbf32adf4fb24e7399cf44"],["/archives/8c1f6a98.html","eec760728e8ff34f51cd4cab20c3fd92"],["/archives/91104203.html","fe00ca7a8a929608d635e8aaa59a417e"],["/archives/a1db3116.html","551fb91a377f7086dba3c09a5a85700a"],["/archives/a8ccf4cb.html","035566d2993da09c5cba98241950cb9c"],["/archives/c144f20a.html","ab593a874f3e48e0a9781d6fb4867c80"],["/archives/e84af901.html","4e1a9a4d837121dad9f200c3ec8d9bc3"],["/archives/f3ecd78a.html","93527c574541dd4ae206dd970c01bd28"],["/archives/fe82aeb3.html","92f09cbff059294cf1366ab6d46a5347"],["/archives/index.html","ebc118f94c816e14957e90ab29ec7196"],["/archives/page/2/index.html","dbe067a27fe06c5945cf4d096636d6d5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","9e8132d45c6208b4c64961b2bda10b93"],["/books/index.html","480aa416e44bb7f8902eb85e701846db"],["/categories/index.html","907c1989458e56065513493541b7fdb8"],["/categories/博客搭建/index.html","423617f9abb133e6452c341a2e9056ec"],["/categories/生活/index.html","8e339a11698fbfc4d1dbfa662edd9193"],["/categories/程序代码/index.html","d804d42d96fbb4df51e30e59794699fa"],["/categories/解决方案/index.html","ce508b1d94bd980b35a961ff08c4af1c"],["/categories/读书与生活/index.html","4d85463d50192ece22e03fab550ecc59"],["/categories/遥感与大数据/index.html","4e018ae33c18571e45dc304d79e2d8bd"],["/comment/index.html","19570ac08d15d03164f98fed398b3afe"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","de94728f22bf28db242b5717b8719429"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","ee927310d745f5bee0c6c68cd896cd89"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9afccb19b33ac4c2c6d3272072d6ac70"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","ff1824f3d8979be69aa183a83c4a6b81"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","b766a2557d5dd421d58c012838197c7b"],["/live2d-widget/demo/login.html","1ef70a3be900a00a8f9058620a57cdcc"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","beba028f24ccf6055745e1029304bb7e"],["/music/index.html","815175483effaf5bbc97bf9f7b82f234"],["/notes/index.html","a927bbd8228e2a2191044e076bd064cc"],["/page/2/index.html","b21d17076a68b7f8c39d58d217771a01"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","d7cb9892ca4c801d39b2b5ab37dfe311"],["/sw-register.js","de160956abc14f7f1406d077063bc1bd"],["/tags/C/index.html","d92cd4eb950df8789f4ea0c7d887c924"],["/tags/Hexo/index.html","a96286ff73c659cede36dafe7367a976"],["/tags/Python/index.html","a8a51194bbe4f93494071960894bc80c"],["/tags/Python数值分析/index.html","0f284f882328590d87f682638ecf03bb"],["/tags/Python数字图像处理/index.html","185597470bab22ff807130c5fff746f2"],["/tags/index.html","9b3d4d3af6919007a3857413dd1e466f"],["/tags/人生/index.html","6174c9f38d26591d798adc5e2fb5d0fd"],["/tags/生活与感悟/index.html","ad4d0cfb5202cbfceff7847f1b93da83"],["/tags/网络与浏览器/index.html","71892def628ff33dc5d1b821f0a77c13"],["/tags/诗歌/index.html","5eb3d8c7dc097e4feb5dadea83eec696"],["/tags/读书与生活/index.html","e33a2fea6db419a4fd0ddf516adcd8aa"],["/tags/辐射传输/index.html","b61b1cd44e892b636846871486ceea87"],["/tags/遥感/index.html","da4115c46db93723a966d031f5dad359"],["/tags/问题解决方案/index.html","29fa4ab1962fb0546b2d6dd724d0a6a7"]];
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
