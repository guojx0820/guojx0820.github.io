/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","56c5ad3f60d1b9fdb5552916ff29826f"],["/about/index.html","01919170e3ceb97f1fe7a70f829d7f49"],["/archives/1033b493.html","2054627979780dcaa279ac1984c309c9"],["/archives/1abb07a6.html","3d84613d60fa1a295cd7ac4d7a03c907"],["/archives/1def5f0d.html","888dd49441197c83184c88fe8957ebb2"],["/archives/2021/03/index.html","115321acf01cf4b4491e6faaee7bb988"],["/archives/2021/04/index.html","28dd207d1897a41f3b00c3d93a4c9f5d"],["/archives/2021/index.html","622541bc8ba23db6a0885366b275a38c"],["/archives/2022/04/index.html","691cea53889c0d948d79e3d72b1bd121"],["/archives/2022/05/index.html","9d45a7d8412e4a6a18e96ff88405b61c"],["/archives/2022/06/index.html","8ab54500c29ecf5cc867fbeed14c9b83"],["/archives/2022/index.html","61bdfd2079e7299a29573307b1f4c4da"],["/archives/2022/page/2/index.html","cc231c8b3e63d5b3d1052cd11deff863"],["/archives/2023/01/index.html","b2c240b437fbc28602eca9c092ec11c7"],["/archives/2023/02/index.html","50ca3b71748f5a508df20d3c67739c3b"],["/archives/2023/03/index.html","7af38c9cc90cc50f8a5ec4763c8c67e4"],["/archives/2023/index.html","8ae49fb490fd4c4fcb9bdd6a2b1c07ed"],["/archives/23cd4859.html","455db5f5ef177ca243ec2efec45c00df"],["/archives/266295d8.html","19cdb25454f19d8d44e0cf4c4ee688f9"],["/archives/330ac4a4.html","e6c40b1ea7c5eff1e7c0094610f70cdf"],["/archives/3a816938.html","52be0b3d1e44c10b699043da98f3e066"],["/archives/4360a9bd.html","e5dcac725e1523fc9c1763bfe55bf60c"],["/archives/49977e84.html","720a55b603359a23af4004d44de1167d"],["/archives/573e690a.html","fa3c40976e8a0a57bb26d27767b2d523"],["/archives/57eb0d7a.html","d8e961dcc7306d18ceaf763d0cf69b5d"],["/archives/58b02e48.html","f39c7a18043954227ee90990448355cb"],["/archives/59a3b95f.html","9be9db52a6651890eabdbfbdb668d914"],["/archives/61521166.html","84f7dc0b6edf7d93d75d8118651546a1"],["/archives/7576230f.html","84090c41ec116e47039d847d1f4c5b92"],["/archives/8063fed6.html","2be8fa72c15c06977b3f34038f9db832"],["/archives/8c1f6a98.html","3d520bae64e1803844e8d2e2c64d3b12"],["/archives/91104203.html","625f45420505986570c25278440db4a3"],["/archives/a1db3116.html","b8586d269be3ded354cc3307c6b579be"],["/archives/a8ccf4cb.html","43f4ce240e5581c6c415c9cd252f7c88"],["/archives/b7563557.html","37ef4b21b547f90054787714ea98740a"],["/archives/c144f20a.html","e6974cefc6b2e5d76fe7d41f69a9a38b"],["/archives/e84af901.html","e3955579f6bf70a2500f7aab945cde7b"],["/archives/f3ecd78a.html","2f3bba3b7a528eeeab495e3218d0f3b3"],["/archives/fe82aeb3.html","0480a3d48acf84a38c63b2d392a813aa"],["/archives/index.html","472b9a3d8026e749eeb54c8593ee5902"],["/archives/page/2/index.html","175a2023efcc53a82422fbc0a66db780"],["/archives/page/3/index.html","3e92d5b67ad31727afe489e08cbbbc2e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","ec7bb7b4864393fcc0ae54d581a8f8da"],["/books/index.html","4314ae890c970970bfebe012d8495c4b"],["/categories/index.html","aa9943fb4c002a623567d55748638d93"],["/categories/博客搭建/index.html","592a27b26bae17582240beae13c73eeb"],["/categories/生活/index.html","170329d18f866296cb1b93a285932352"],["/categories/研究方法/index.html","40bbbd445f5b23555069060c3a655d1a"],["/categories/程序代码/index.html","b9fcdded706ef91f42b039695e948318"],["/categories/解决方案/index.html","409bb8ce13a25259f21563ab9a4f9755"],["/categories/读书与生活/index.html","660a6d955118126be0ad5c89c17cc617"],["/categories/遥感与大数据/index.html","50b56a3a897e28ee91339ee0a475b448"],["/comment/index.html","2eae0366684b0a183ea12d3c30e67605"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","66d1ae9f61ebee80bd922f39b1f861f9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","421352e0e6d6122dedda55e07d74c061"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","edd1b0f34dff166944577a5a84f2d830"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","568fb4e8bb4d79f79b4ebdb8d088649e"],["/music/index.html","9efbbbb81e3ff250861e9a62ee6a8e34"],["/notes/index.html","7ee74fa549bb4fde97d5925f54b09487"],["/page/2/index.html","fafa3229a829f30abedc86711f0b3919"],["/page/3/index.html","2e584eb33da5e58778ef023db74e5e59"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","26089518fe9bd35266e9fbecdc7f820c"],["/sw-register.js","bfe33f25255d975e3856c93415b33e70"],["/tags/C/index.html","d1b7ea0022c0231d1939dbed87ac2166"],["/tags/Hexo/index.html","6940362f2e1520b1ddffa8096c912a94"],["/tags/Python/index.html","c348157d55b05f76d1f97d872825638d"],["/tags/Python卫星数据处理/index.html","52b4f7c4c2db6c39919c76419831c841"],["/tags/Python数值分析/index.html","94965405a8e6bf30c6bdb81be38d435d"],["/tags/Python数字图像处理/index.html","e46aad2ddc3cfe92ccf3f17188c638f3"],["/tags/index.html","fbb6769c965b222f39b5413866ca03b3"],["/tags/人生/index.html","307c70292a688c45d062c4dc7e0b3b1e"],["/tags/生活与感悟/index.html","ac3331ef060a9c6fc5c6a6cbd40f384a"],["/tags/网络与浏览器/index.html","ea31f09a96c0d91d8e231f88f9539800"],["/tags/诗歌/index.html","b957e0d73dc99ebcb32f50de7d71fc9d"],["/tags/读书与生活/index.html","c33be18ffe1af8aa0f0c152ecc5a6f45"],["/tags/辐射传输/index.html","e19e7293125b8bbb0045c88d20d48591"],["/tags/遥感/index.html","98ca6e7e5025237f54b5ea91a033b031"],["/tags/遥感与大气/index.html","44baa3144448b2cb8fe580932d51d71c"],["/tags/遥感影像分类/index.html","4ae0eb9396599a06a56eb6eb2e74da53"],["/tags/问题解决方案/index.html","e6a6d07f73659c2f5cc595ae8c0d1c4f"]];
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
