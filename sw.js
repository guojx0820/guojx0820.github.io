/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c5dbe8cd86a3982f72d5bc4d7afc2f24"],["/about/index.html","35e4f6fcba55e32d7d99007112b8674f"],["/archives/1033b493.html","bee2689114f3cd1b43375b5e125955a1"],["/archives/1abb07a6.html","ae4d4032385a199cd9171dc14aa8b409"],["/archives/1def5f0d.html","2395113d38ac584b73f9a6976c8a5975"],["/archives/2021/03/index.html","fcd3d311fb625099d0cfd6b47087e683"],["/archives/2021/04/index.html","275126327873e90792838b4772462948"],["/archives/2021/index.html","5a558fa83b173484d2c6fc93e2b2341f"],["/archives/2022/04/index.html","5246c770753c3163659d449bb951cbbd"],["/archives/2022/05/index.html","8ff187278df089d8971f6c01fe19a510"],["/archives/2022/06/index.html","e3d12721238861e69670064be5b33c6f"],["/archives/2022/index.html","e81b809b369716eac28f6195c6b309d6"],["/archives/2022/page/2/index.html","1207e41dcd5979d7fd154185a3e9f23a"],["/archives/2023/01/index.html","25b14694e2172b202b883891d51cdd5f"],["/archives/2023/02/index.html","bafb67a8ab176174592d1ab44a1a7d4b"],["/archives/2023/03/index.html","c022692bd8e62957cc3fe291f1ccf1a3"],["/archives/2023/index.html","fd143f7c87166755aff3e502ac3c5a80"],["/archives/23cd4859.html","bf390679ad5da4e5af90247dc83799b6"],["/archives/266295d8.html","df27cc9987c60283f8085bffd1e2dfd4"],["/archives/330ac4a4.html","c6ea16fa0e8bc570fd89f69668db25a5"],["/archives/3a816938.html","6c66ca7336293efccc5c2f9ac6c24359"],["/archives/4360a9bd.html","4cac1b8cd9e7b41555849f5dfface808"],["/archives/49977e84.html","c2da979225356f2f61bb5212e8f66223"],["/archives/573e690a.html","98eb16b14a7fbca8d62d2922092a936a"],["/archives/57eb0d7a.html","27f1b01f0c6c4c33e94c09039fe9adf5"],["/archives/58b02e48.html","b18949407807c9db52f7dc8969b39724"],["/archives/61521166.html","264b6dd9932e09aaf3d35af4c3f9111b"],["/archives/7576230f.html","5facadda2acef89beebfb66b621ec29c"],["/archives/8063fed6.html","c8d0cc9f5d0576ac1030ee2146e4249e"],["/archives/8c1f6a98.html","6903af6c930fef0f9d9eff828dd9cbe4"],["/archives/91104203.html","9b8abe81191729306c9aae3462f7a4c7"],["/archives/a1db3116.html","54aa8e0c6399712d48ea41a6e7db287e"],["/archives/a8ccf4cb.html","c530821fa31f0d69f0c2ee1d90090a7e"],["/archives/b7563557.html","ef7b24f4301d114867c535445a05c0fa"],["/archives/c144f20a.html","6fbf694f2cd08e91d4429e94d5f8f01c"],["/archives/e84af901.html","d95873ff4a9ed1141fea6c72816b05f7"],["/archives/f3ecd78a.html","c26a26c1a3d6fb185140dace256e1401"],["/archives/fe82aeb3.html","6578ae6d186d02ceaea7c7239af6a83e"],["/archives/index.html","137cd7d072333a9b358cb527c8f2fd3b"],["/archives/page/2/index.html","339ed0ecc3015ab1db664b1147bd8ed1"],["/archives/page/3/index.html","62bcecca597c5757b71af1bfb6dc9be2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","b0067a4bcfd26b8394ff3670cd9ea680"],["/books/index.html","829a69bdc0320e3d015923b5d8702c15"],["/categories/index.html","00d0495840f11e4f4adf498f093f0676"],["/categories/博客搭建/index.html","f5e9edc8b8525c6c39890df069ebada7"],["/categories/生活/index.html","db1d3a45c911ceab961cb3b157b138a1"],["/categories/研究方法/index.html","6a1b4d0536a80f74d99946a75480f0c7"],["/categories/程序代码/index.html","9abd9bd5961e2c275e9af993c3697cc3"],["/categories/解决方案/index.html","ed701bbf7216f2a8271bdc1967be5ee8"],["/categories/读书与生活/index.html","693a74763180a8c15dfa7311dc8b5b2c"],["/categories/遥感与大数据/index.html","79a9c9e1d27661be4cddf86fba9a176d"],["/comment/index.html","91ae4e50b24fa6b6b4a901989f249900"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","d7293b2616dc87f9c5bc4b63da7fbf96"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5d105ec36e4c585bccb87976097178a3"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","923280dc21f99dca7f4481da0c481995"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","1dbb2115df15da25e7ab10ab5ae4f6be"],["/music/index.html","6efde40e1b738af91c0bdb1b07bf9200"],["/notes/index.html","886c23ea5cec6bb2e88c02bb4165ab2e"],["/page/2/index.html","ab90be42dabcd1db6ed94228d1b3f0df"],["/page/3/index.html","2ac77bc64809c28f5db8da2b8d89beda"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","c47acdbfe5c184515fa45f25c5028eff"],["/sw-register.js","a952592c731ead14e0f336cd0b3af8a9"],["/tags/C/index.html","deb8629386cac68196e34fb3f9139cac"],["/tags/Hexo/index.html","7e1970add96fe8ca8918399898269170"],["/tags/Python/index.html","41fdd97c045dc8719aef995e43709a60"],["/tags/Python数值分析/index.html","66ed30e336c6afba851478c2ada6c1c3"],["/tags/Python数字图像处理/index.html","832fd1e33bc671f99666aa502cad2871"],["/tags/Python面向对象编程/index.html","2fc3e38d5eb60e7138258910af073e1d"],["/tags/index.html","3105896e4932bfc4f054d96c05484de8"],["/tags/人生/index.html","2bbd9d3fde68dd2eaa058bded8866961"],["/tags/生活与感悟/index.html","5749dc96c83f4801760f4d64a1f7dfab"],["/tags/网络与浏览器/index.html","78a8499d0e60fcb629c5f5d9eeda3071"],["/tags/诗歌/index.html","1ab0c03b248f4130a4a480b918bcb37b"],["/tags/读书与生活/index.html","42812e8f6259bbc921450f0e071c6094"],["/tags/辐射传输/index.html","dc0acfab025b04f6fa8d6e4caedfd3e2"],["/tags/遥感/index.html","89486c55dd0b49fa753317c370a4c257"],["/tags/遥感与大气/index.html","7af32599b6a4525966730737f0d58832"],["/tags/遥感影像分类/index.html","2f9a02a0349ad8aa9f706ba27e976685"],["/tags/问题解决方案/index.html","18496dd7a69c6c9a0fa509d27f3f74ca"]];
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
