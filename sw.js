/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6fbeda00d2799c3264b5405cdfcc4d92"],["/about/index.html","bfb6f147e6b7fbbb2923bf27857e6137"],["/archives/1033b493.html","656369a3e89d2cfab67db1542389ccd3"],["/archives/1abb07a6.html","2f914a6ffa355b1dcb80e29a4208b1d3"],["/archives/1def5f0d.html","b8ac163c95e6fe77de15daab7c58759b"],["/archives/2021/03/index.html","98f671829c5309ba9be80fc97592e2ea"],["/archives/2021/04/index.html","5901a33a0218a34c4e3217c2445764aa"],["/archives/2021/index.html","069c4d3197b3d7ca037150a61eab4237"],["/archives/2022/04/index.html","fa03da476d68de450198053a80d6b7f2"],["/archives/2022/05/index.html","9a3b692a9fc5a2d3f9fe73041cc11e74"],["/archives/2022/06/index.html","1a369c7b711958de78f671649be3074a"],["/archives/2022/index.html","058075499d9f112b96e7ae34f188782d"],["/archives/2022/page/2/index.html","8fe14a72ca94869b55b6d89232dd3778"],["/archives/2023/01/index.html","b2d7bc289917c7519f7ac065ce0f1900"],["/archives/2023/02/index.html","dde41074b1c156a84a871e3083e91ff4"],["/archives/2023/03/index.html","4120254ae5e4246b692f1df40cc5c6b9"],["/archives/2023/07/index.html","89bee25edd8ce35852bc0f27cca16481"],["/archives/2023/index.html","0f36ec5f5f9be7002ae3a291f2ad2080"],["/archives/23cd4859.html","7fda3ac6f77fead86cf77f74f5cb7ecd"],["/archives/266295d8.html","077fd46cb206982a25af3d1b75f1f4a3"],["/archives/330ac4a4.html","5e6dd3f829ea2435402c9c3b2d2ed016"],["/archives/3a816938.html","5870800e6c8c5af0d57b4c7d15e60f87"],["/archives/4360a9bd.html","07f2ab13e584fdb44d38368c87ed9505"],["/archives/49977e84.html","93c1f60d75f9d155aaca21e115cb2da7"],["/archives/573e690a.html","6bb0b991584a405fe1ef02e0d1e88a4e"],["/archives/57eb0d7a.html","81ba2c1357493264eba48a91e78e8e88"],["/archives/58b02e48.html","4938e2e94aa3af1f772853f06a4023fb"],["/archives/59a3b95f.html","8eead003909a0224069e8f9fb14499e5"],["/archives/61521166.html","b4cee86ef8cf5db6a518f4114601f54e"],["/archives/6f5df5c1.html","b7c4c9efa2c13af12687a37b33def6b2"],["/archives/7576230f.html","a7c91f9bc1982d062997bd84b727cce9"],["/archives/8063fed6.html","99748682da434bbd902142b88d2f7e75"],["/archives/8c1f6a98.html","79b26a3dc4ecca96825ef9227627b0a8"],["/archives/91104203.html","27b43f0eed9ed9efe03442c779f851db"],["/archives/92a27152.html","b76f4c44280f1862ccc844f19f0c4663"],["/archives/a1db3116.html","62411a277c390fffc39c09a39e65e063"],["/archives/a8ccf4cb.html","d2a5277b90ab48f8d67d8bb61da49953"],["/archives/b7563557.html","aaf63e34caa84b6a514f43eb4fe47c0f"],["/archives/b9d5eb5f.html","f9eea74b73ff08e0c2ef3ea465aba3fd"],["/archives/c144f20a.html","1dff2173304cafb2047f5abb07d434b3"],["/archives/e84af901.html","216d54c4c364c632769e8579ae96d781"],["/archives/f3ecd78a.html","256bbfd7824d3887aac2f8e8e8c8f45a"],["/archives/fe82aeb3.html","3b1164cc653bae4e91af49a95ef7376c"],["/archives/index.html","d54f8047355bbc4f7c1c2e1d2470e0fc"],["/archives/page/2/index.html","c275abf4e2a86b29f36a994a7e526517"],["/archives/page/3/index.html","b24d3eca2e0972b113242ab209be9c5a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","69bb4c9f2a3afe9087b29ba2b9955629"],["/books/index.html","a8ad643e4b479f046ec37ba326156e2b"],["/categories/index.html","75f13e8e7817e6a36010057d9b833805"],["/categories/博客搭建/index.html","24214cf6248a5f3c0777c60ce0d1a076"],["/categories/生活/index.html","937f3eae9bb048aab7118147fb77d942"],["/categories/研究方法/index.html","da13798982f671cc2d7889aa448df7de"],["/categories/程序代码/index.html","5f7b6545657b755ff0d3800251fe7007"],["/categories/程序代码/page/2/index.html","b2cb6218d3a6dd38406295c1951205b3"],["/categories/解决方案/index.html","c5990aefcf8c96ec8d81c5a2e345a67a"],["/categories/读书与生活/index.html","966dde3c0ddeaed023739f2b64a26282"],["/categories/遥感与大数据/index.html","375c084da5d8d114db906c5fdf314227"],["/comment/index.html","6132cd7db0d880f910a74c3c8821cf0b"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","976861667a738ae841d5722166d24f6b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b902c345d30929fe5ec84a935278fcd2"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","e5cae06a8223c5a8a13d6c0db945644f"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","7678e74ebc9bd6b10afccf17d8a37446"],["/music/index.html","db60939d7c9bcadd691f72975b6ea158"],["/notes/index.html","518879298b91af527bab6523dd227b62"],["/page/2/index.html","b8e97fcc1ab828994384791f02a6608d"],["/page/3/index.html","ad9365a900b874240ac8c8f81f44962b"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","dd0faef2b46f82cf8094dcb391114688"],["/sw-register.js","788fa6deb7b17298bfbd59a193f88ec3"],["/tags/C/index.html","bde9984ea1787a9b24906ca03e38e90d"],["/tags/Hexo/index.html","7dbbd3f7d66cd3be784fec0e0f284152"],["/tags/Python/index.html","3e828ce91f6aa19b3a601e0edb720fa6"],["/tags/Python卫星数据处理/index.html","bcd421da2e353b400d1e881f7b10a466"],["/tags/Python数值分析/index.html","d242fc2e67af8caa9ffbc61d213e2ab5"],["/tags/Python数字图像处理/index.html","ce5d0e85fdd3b7ea299efb8dca32951a"],["/tags/index.html","c234c811f12b75c4a195607b34cccc79"],["/tags/人生/index.html","eef341b3c325a03be5e1b7ae489f49c9"],["/tags/深度学习/index.html","2bca5c1009d952e4db60b3af48640622"],["/tags/生活与感悟/index.html","dbf74e6a952fe9ff0d340a1e6b31f2a5"],["/tags/网络与浏览器/index.html","8794e065c245be220b5c921a10a93df9"],["/tags/诗歌/index.html","0f95209ee6abe0708e13be8871d840d0"],["/tags/读书与生活/index.html","74bff152c0adef63c7c6b4e282079c69"],["/tags/辐射传输/index.html","f572494b845028cf295a4593314c90ad"],["/tags/遥感/index.html","0a3bae167972202a73f212f03b69741c"],["/tags/遥感与大气/index.html","2b0f1300809aa78ef8ed8d2cdbf401df"],["/tags/遥感影像分类/index.html","3848c9d31ef356b9a80e6de152444cd9"],["/tags/问题解决方案/index.html","54092b4e71ae96ec4086361048b7f512"]];
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
