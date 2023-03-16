/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b35fe85b86068f096ae231cb9e2f2094"],["/about/index.html","be515349b4751c71d3b1d9d1e5dc49ad"],["/archives/1033b493.html","2054627979780dcaa279ac1984c309c9"],["/archives/1abb07a6.html","3d84613d60fa1a295cd7ac4d7a03c907"],["/archives/1def5f0d.html","888dd49441197c83184c88fe8957ebb2"],["/archives/2021/03/index.html","13a671c37695589cadfee9a06f5d0e1f"],["/archives/2021/04/index.html","fde6478a9be97674a215ca5542b54e05"],["/archives/2021/index.html","03c3a2aa50653fe5efbe1343e036663e"],["/archives/2022/04/index.html","a4d78969e432bba5a4307e9cf670aabb"],["/archives/2022/05/index.html","0a737bf21c58bcefca7120bf1de4955f"],["/archives/2022/06/index.html","e2e72f0d0c30355ca6cfb959b00b5ad6"],["/archives/2022/index.html","472029f32a954036ca3c479cc1c05d06"],["/archives/2022/page/2/index.html","8b23752e6d3c9740a062a4b75c6735c8"],["/archives/2023/01/index.html","b3d3140f29625a00e9c0a28b5df6a348"],["/archives/2023/02/index.html","7a7866ca6270385e600409e757068e9b"],["/archives/2023/03/index.html","e88292569b4ec38c4f8b635057d2add8"],["/archives/2023/index.html","e143d2ed92dbf7a8b1a8c9a6f827abbb"],["/archives/23cd4859.html","455db5f5ef177ca243ec2efec45c00df"],["/archives/266295d8.html","19cdb25454f19d8d44e0cf4c4ee688f9"],["/archives/330ac4a4.html","e6c40b1ea7c5eff1e7c0094610f70cdf"],["/archives/3a816938.html","52be0b3d1e44c10b699043da98f3e066"],["/archives/4360a9bd.html","e5dcac725e1523fc9c1763bfe55bf60c"],["/archives/49977e84.html","720a55b603359a23af4004d44de1167d"],["/archives/573e690a.html","fa3c40976e8a0a57bb26d27767b2d523"],["/archives/57eb0d7a.html","d8e961dcc7306d18ceaf763d0cf69b5d"],["/archives/58b02e48.html","98fb2f084ad01d3e4cdd07f289d77082"],["/archives/59a3b95f.html","9be9db52a6651890eabdbfbdb668d914"],["/archives/61521166.html","84f7dc0b6edf7d93d75d8118651546a1"],["/archives/7576230f.html","84090c41ec116e47039d847d1f4c5b92"],["/archives/8063fed6.html","2be8fa72c15c06977b3f34038f9db832"],["/archives/8c1f6a98.html","9274956c458fff66a24f488147ce1a72"],["/archives/91104203.html","625f45420505986570c25278440db4a3"],["/archives/a1db3116.html","b8586d269be3ded354cc3307c6b579be"],["/archives/a8ccf4cb.html","43f4ce240e5581c6c415c9cd252f7c88"],["/archives/b7563557.html","498611893889db70a950db470370cb67"],["/archives/c144f20a.html","e6974cefc6b2e5d76fe7d41f69a9a38b"],["/archives/e84af901.html","e3955579f6bf70a2500f7aab945cde7b"],["/archives/f3ecd78a.html","2f3bba3b7a528eeeab495e3218d0f3b3"],["/archives/fe82aeb3.html","0480a3d48acf84a38c63b2d392a813aa"],["/archives/index.html","6a35d7f0614b67b9b8e82594267b09bc"],["/archives/page/2/index.html","db6edcbecd74eecd0cdf64d8531a3025"],["/archives/page/3/index.html","5b15c60f116dede164b6076ebb5df19d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","bcf0d7ab81ee9634ba021033201b5b20"],["/books/index.html","9646b83a97113481c501433c30219bc6"],["/categories/index.html","6950b7b1941290595c558879ba5dd28a"],["/categories/博客搭建/index.html","f4d70f33d2848fe580a9c9129e47981f"],["/categories/生活/index.html","9a353ef58692db1864490327863b2113"],["/categories/研究方法/index.html","6b3c44571f04b1a977b40a1b4525105e"],["/categories/程序代码/index.html","3b048ddb0671db22deffd61883df9bde"],["/categories/解决方案/index.html","03f117c2354d849629f7b79f77927a20"],["/categories/读书与生活/index.html","727967afc1d4714dc123a7b90abd467d"],["/categories/遥感与大数据/index.html","2ea3ac1934c0a91f0ea22a5a99ca9177"],["/comment/index.html","0e6eefe9a8df3c143c5a60861950665b"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","ab7ca158d948a9934c4f48065e8657a5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","80c4a9903f3cce7aca60538c625971a7"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","5fb1b49ec6c6a36e59a5826659b9b9ae"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","c066ee1c70b72286d8b0dfe9c7bfaf76"],["/music/index.html","8565350b4ad85868c3c822abfb9c968c"],["/notes/index.html","16b7b459d5bc5546623e503931a54d38"],["/page/2/index.html","8f518b8867dd7621d66ec8a0b604d4f3"],["/page/3/index.html","cd6bfa876c70b30661034d15054179b6"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","e3386ae48e3f353ffd3762c5130f5317"],["/sw-register.js","02afb0c1031ab904e4f7ea34bf8fe3c1"],["/tags/C/index.html","684f9688ac207541424b3e5a2db10706"],["/tags/Hexo/index.html","793b3f9dcb3b6607ef213373d08fec3e"],["/tags/Python/index.html","46ca45c96608e2541f4f1932895bc1c8"],["/tags/Python卫星数据处理/index.html","466aaea6920c9d8d6cdd805534a11643"],["/tags/Python数值分析/index.html","28be236d84851f5175c6b953e75232c8"],["/tags/Python数字图像处理/index.html","e0ac36bf8eff08c3f764cc81045a1c10"],["/tags/index.html","457b6cc27ad2443650f4394eaba44f3f"],["/tags/人生/index.html","f9ea323628cad8f14371b04b87c6cd5f"],["/tags/生活与感悟/index.html","0af0db5b3d96638fd52bc8481859091d"],["/tags/网络与浏览器/index.html","74632c0974ce4414570a3782fe1db3df"],["/tags/诗歌/index.html","dfbe13291f686b171791534d513c019c"],["/tags/读书与生活/index.html","6c0fa4ecada057566df65ef251319cdd"],["/tags/辐射传输/index.html","35d70d79cac8d112cdb99ad66a871996"],["/tags/遥感/index.html","42f189959baf076cb2dd275ec3235f78"],["/tags/遥感与大气/index.html","4dee77cb9054931f771b16ea98ab73ad"],["/tags/遥感影像分类/index.html","f8b65ccd7e1b7982212119090210dd75"],["/tags/问题解决方案/index.html","b6c5971eabd5d93cddbdd65dadcad096"]];
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
