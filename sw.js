/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3ba0b85a36e7a09822cbbe4712ed94ea"],["/about/index.html","6a371134681cc61503b6dd1e7cd94ae7"],["/archives/1033b493.html","3d308bcfd809a8c61926396dcb2a7896"],["/archives/1abb07a6.html","7dcb861835a2c3f9cb803d22affbb99f"],["/archives/1def5f0d.html","9f7d2e29932a0993014e2c8e7368dac1"],["/archives/2021/03/index.html","5716c3fc6fd1b2f0be4450c4cf744298"],["/archives/2021/04/index.html","531ea4ae9227f1e46dea2898249a98bf"],["/archives/2021/index.html","e256703307ccf2d4f6fab5aae1d4abcb"],["/archives/2022/04/index.html","2e0dfc9918ed12a9c76729b4d08e40b0"],["/archives/2022/05/index.html","ad8f438d9d951faf66970420625c179e"],["/archives/2022/06/index.html","edcfb4cac4de57e5b99be71bcf50169a"],["/archives/2022/index.html","f9d6c0e27729f7a23a12a772481e9302"],["/archives/2022/page/2/index.html","d31f89f10c9794cfa65a92f2ff41b571"],["/archives/2023/01/index.html","76fdc87bb3fbd8da735440e19ccaaba8"],["/archives/2023/02/index.html","99f54cf22eda1131832659db8abc764f"],["/archives/2023/03/index.html","0c233687aa9aa6de1f66a78ed0033215"],["/archives/2023/index.html","26b97d931c6cf2b9afc8db324b550822"],["/archives/23cd4859.html","c58e6252344a3921642e5bfd3d68e59e"],["/archives/266295d8.html","9f298ce794cbfa5c216b9fe9b1b19027"],["/archives/330ac4a4.html","9ca397562be54cdc4183d134f924dd15"],["/archives/3a816938.html","8264c3b2ff2fe4a8c104ad7cf8e4a2bf"],["/archives/4360a9bd.html","b8cce5394342a8e329a573859bb9cc2d"],["/archives/49977e84.html","d5cfed870219804f97c9f199a431aa18"],["/archives/573e690a.html","561d3cb6053d189250aa3f03a265ff39"],["/archives/57eb0d7a.html","70e25a7fcaa8703235380ff59b791742"],["/archives/58b02e48.html","45d2990314c5697e4a7e7a33908bd1a1"],["/archives/59a3b95f.html","65f3131447f94a67d8047c15cb5db8ca"],["/archives/61521166.html","aeaed89a3e8d5f29c34b1c58e1ded0b1"],["/archives/7576230f.html","5ab0ef069f27893aa1355c81a8dc3036"],["/archives/8063fed6.html","47d80a8419be865a8a95f3ecddf56481"],["/archives/8c1f6a98.html","2cf040a179b248dbe69956b2df9ecbb1"],["/archives/91104203.html","4f6b3dd8a8379f540146b85702f5776f"],["/archives/92a27152.html","488c97453292c21a3fff92b5c4fe1353"],["/archives/a1db3116.html","9284a34b493d98788ab814f46028b8bf"],["/archives/a8ccf4cb.html","45e0ec9f8273f6529c40d1d1a6493910"],["/archives/b7563557.html","295c21a6bff17ed5c8e5ef927e7fee2c"],["/archives/c144f20a.html","0214a171d5be2dea289b39e81efefdd3"],["/archives/e84af901.html","7775bff0bb8df128a7341957c5affe45"],["/archives/f3ecd78a.html","5e58bdb2fd69f4fab6e90ebf44700f19"],["/archives/fe82aeb3.html","17eb0350788d35593648ef048073d625"],["/archives/index.html","b52e9f892605941b0d4bc231a783cf23"],["/archives/page/2/index.html","625524479f814cc2e59f990e4ada3fec"],["/archives/page/3/index.html","9d4a45d38fa9734e9e7f65e41a16dc1d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","0c8b119ed934d3a5b351908e02338866"],["/books/index.html","2cb713f273edf71fef21756898e098db"],["/categories/index.html","4c8acb103be695a512bc9e0882c130c9"],["/categories/博客搭建/index.html","544d6ac1036ef37ec24bb0ea7ad26d52"],["/categories/生活/index.html","6431d3342d0a384e59b373540c35b312"],["/categories/研究方法/index.html","a3293e690652d5afd6924259b5305482"],["/categories/程序代码/index.html","630124af5ce576036ebb19219104f45c"],["/categories/解决方案/index.html","c8265b6ae4d379630328ba306ee99c46"],["/categories/读书与生活/index.html","bff26a01d2c8e4c020b6e4bded727ca4"],["/categories/遥感与大数据/index.html","8170aaa27ac366293cb72796ea0da29f"],["/comment/index.html","5c8e7628cfad4797ee3f0d83e556fa9f"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","25ec91bd1f9b2f13e5ff44a3bdeb5746"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7752d23160a232acf034a45e06cf4c9b"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","dd61031f0eb449ef7567431988bb7267"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","88126761c87673669a0f24d5442ae3d2"],["/music/index.html","2f34b81f67463ae7f27d3b40cfde9952"],["/notes/index.html","d2a89420b4fddc4c498e10ddee8aeea4"],["/page/2/index.html","898007f61608c814fba353f06d1c5afd"],["/page/3/index.html","1434122d541ad4f78a5e778406696625"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","3f85de09b807a43792337cea57f359d4"],["/sw-register.js","b0f4fa1ed5a3eeb4b98e268db8a0bc6b"],["/tags/C/index.html","885648f83ce46bff6f7e95f5cb348e28"],["/tags/Hexo/index.html","fa28e135d6341c3223b99d76e325244d"],["/tags/Python/index.html","a6fd37c19184eb39cbe97a2af615b2d8"],["/tags/Python卫星数据处理/index.html","e1119959b40fa7164b81c0cb21a7d648"],["/tags/Python数值分析/index.html","2661cd9cc6bd6cc73b4072d0b2d3a7b6"],["/tags/Python数字图像处理/index.html","9f00e9f966dcdaa17c51ed6f3ff758f6"],["/tags/index.html","2515c0c8da0f7368e0820098bb426459"],["/tags/人生/index.html","ce1d1d97e5efdeb3d4f5843c9871734d"],["/tags/生活与感悟/index.html","27f00488f4dc014a1d86c2ad6e0d9398"],["/tags/网络与浏览器/index.html","703d1b996ba5d49e079c7ac608dfb931"],["/tags/诗歌/index.html","f18035ff250fe3cfcdd7415740304a5e"],["/tags/读书与生活/index.html","6892f50341d0421b0084483300d7ccd3"],["/tags/辐射传输/index.html","bdf5ff1b655eb8e6e71751b8f0212be7"],["/tags/遥感/index.html","f1148f510a3f5b30770485e773a903d9"],["/tags/遥感与大气/index.html","475421cf3b5329a8164a6a58753f10b7"],["/tags/遥感影像分类/index.html","a57c31cbd230957c45b9327be2b0cf8d"],["/tags/问题解决方案/index.html","c4eb3557ca7b9828c170280a7419249b"]];
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
