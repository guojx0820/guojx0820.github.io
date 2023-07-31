/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","60cca88c7eee33efcfe7e7f7e9bd897f"],["/about/index.html","a8d3f9583286a95855ac8d9e6e6ec0bd"],["/archives/1033b493.html","656369a3e89d2cfab67db1542389ccd3"],["/archives/1abb07a6.html","2f914a6ffa355b1dcb80e29a4208b1d3"],["/archives/1def5f0d.html","b8ac163c95e6fe77de15daab7c58759b"],["/archives/2021/03/index.html","0a3255b93386e5e2c7916bcb2870e485"],["/archives/2021/04/index.html","94d87d13a5dae7c9ff5c3948d718cbdf"],["/archives/2021/index.html","9d6e6663efc011cf21e497955b818473"],["/archives/2022/04/index.html","4acfb230f0617c279c7537c16ddc23cf"],["/archives/2022/05/index.html","cdcfa0e68174887c30b87036136270ca"],["/archives/2022/06/index.html","976af74ce67e84863be03259b3c5e7a3"],["/archives/2022/index.html","46a3db5ac8bf09274339b48d587ec90b"],["/archives/2022/page/2/index.html","3ee6a19e7f326fccaf1e9354521c8066"],["/archives/2023/01/index.html","94e710427e02998e1e12d68e27204e18"],["/archives/2023/02/index.html","9b1c4a7a7b87615b15060d315ad2093e"],["/archives/2023/03/index.html","7980e12c82888f9c95673fe1cdee92f2"],["/archives/2023/07/index.html","80302b9573edb0872db4d008787a5d5c"],["/archives/2023/index.html","719d6dc09816e8943d603ce4664b15e5"],["/archives/23cd4859.html","7fda3ac6f77fead86cf77f74f5cb7ecd"],["/archives/266295d8.html","077fd46cb206982a25af3d1b75f1f4a3"],["/archives/330ac4a4.html","5e6dd3f829ea2435402c9c3b2d2ed016"],["/archives/3a816938.html","5870800e6c8c5af0d57b4c7d15e60f87"],["/archives/4360a9bd.html","07f2ab13e584fdb44d38368c87ed9505"],["/archives/49977e84.html","93c1f60d75f9d155aaca21e115cb2da7"],["/archives/573e690a.html","6bb0b991584a405fe1ef02e0d1e88a4e"],["/archives/57eb0d7a.html","81ba2c1357493264eba48a91e78e8e88"],["/archives/58b02e48.html","4938e2e94aa3af1f772853f06a4023fb"],["/archives/59a3b95f.html","8eead003909a0224069e8f9fb14499e5"],["/archives/61521166.html","b4cee86ef8cf5db6a518f4114601f54e"],["/archives/6f5df5c1.html","b7c4c9efa2c13af12687a37b33def6b2"],["/archives/7576230f.html","a7c91f9bc1982d062997bd84b727cce9"],["/archives/8063fed6.html","99748682da434bbd902142b88d2f7e75"],["/archives/8c1f6a98.html","e0e2bc5b68b987e2cb361cb3421de1f5"],["/archives/91104203.html","27b43f0eed9ed9efe03442c779f851db"],["/archives/92a27152.html","b76f4c44280f1862ccc844f19f0c4663"],["/archives/a1db3116.html","62411a277c390fffc39c09a39e65e063"],["/archives/a8ccf4cb.html","d2a5277b90ab48f8d67d8bb61da49953"],["/archives/b7563557.html","aaf63e34caa84b6a514f43eb4fe47c0f"],["/archives/b9d5eb5f.html","f9eea74b73ff08e0c2ef3ea465aba3fd"],["/archives/c144f20a.html","1dff2173304cafb2047f5abb07d434b3"],["/archives/e84af901.html","216d54c4c364c632769e8579ae96d781"],["/archives/f3ecd78a.html","256bbfd7824d3887aac2f8e8e8c8f45a"],["/archives/fe82aeb3.html","3b1164cc653bae4e91af49a95ef7376c"],["/archives/index.html","f7e968c47a634028fad085e3c0ea3e33"],["/archives/page/2/index.html","06426c93f37d10140602285844c6080f"],["/archives/page/3/index.html","53e499708839f474f34333d4efa99298"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","cbfc54a98b7c81574120d5446fa8ed78"],["/books/index.html","2e534c675cc27d1f2e27fb46b1e46044"],["/categories/index.html","72a5b77d5a3cd91ea8fe59b445548636"],["/categories/博客搭建/index.html","22c4d1b0eba30494cd5c86908fea1d78"],["/categories/生活/index.html","c6eac8e934d6923a41e3422706332a44"],["/categories/研究方法/index.html","f8e092f274e25c8048d63b25681ce77c"],["/categories/程序代码/index.html","4c70e30589838b0b1272d55a8fa3a39f"],["/categories/程序代码/page/2/index.html","d688620442d741f159b053d4d52a0e8f"],["/categories/解决方案/index.html","f4888bfa0a73ee5a6dfefd60ad593068"],["/categories/读书与生活/index.html","a4803101230af6b7e556d0983ae79ce0"],["/categories/遥感与大数据/index.html","529dae161c8bcd295dde95eb96c40e01"],["/comment/index.html","b2c76c422285316192eaa049afb190f0"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","7b022c045b37dcc002c853aeffc9f724"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f59717102a2b4683e89e5c8f5e2ed049"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","7826d0140a79d59a27a02bf4e14165e9"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","6f5fdf91e35c760b5585082bfd11906d"],["/music/index.html","1aa2cc3f5e40d7068fac0602f00f0f96"],["/notes/index.html","2e4f80027c9db38482e5380383da19f4"],["/page/2/index.html","993877c385fab80e7b67bb9e11891d35"],["/page/3/index.html","d7b9b164c53bbe3fc312ecc0d2a20c08"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","6a30dbe6644fff9f8fc5dfcde1301e96"],["/sw-register.js","d7390ebc528dd66072704c5b1b55e193"],["/tags/C/index.html","bab699b75aff44a417ae3d56c41d430d"],["/tags/Hexo/index.html","b9bcc6ba8fb244844e30881b70cccf24"],["/tags/Python/index.html","6361aa705d1a42f7ab05f5c17c4027c4"],["/tags/Python卫星数据处理/index.html","2c5040d01c9354756cf2e5a795772146"],["/tags/Python数值分析/index.html","7f5b485fefe0e3332691ca5a2e630461"],["/tags/Python数字图像处理/index.html","73d4e42813021ab40d12788dee318a3f"],["/tags/index.html","c74e993d51e4a816c1079fd1d523275c"],["/tags/人生/index.html","f5d5d1f482e90655b2e00be5effe88f6"],["/tags/深度学习/index.html","257c598d5c6aa73d02501024a252b965"],["/tags/生活与感悟/index.html","7d6594cd2dbfb225685bee10a31d77e4"],["/tags/网络与浏览器/index.html","e647800a005191798d3fb317064ec53d"],["/tags/诗歌/index.html","2a473711fdf9a0b74adbd6c2fbb83fcb"],["/tags/读书与生活/index.html","a9987206c8378eb5d8922ec0261b9444"],["/tags/辐射传输/index.html","2573959c743f4a6b92aaebeb14db4aa9"],["/tags/遥感/index.html","0229c44613f06234b6fdea78c2781d86"],["/tags/遥感与大气/index.html","4fe9d8b3fe9fe55f5b9f3ebe6daf5e70"],["/tags/遥感影像分类/index.html","2e4fe67ec4122d3173f8c455dbf49bb5"],["/tags/问题解决方案/index.html","0cc702bb7fc225c457e0bd2b903cd3f7"]];
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
