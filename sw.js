/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","18dbf117dcdd64357e44174e543256cd"],["/about/index.html","e9a89aebbc069c8e55c40b08d6e90c9f"],["/archives/1033b493.html","2054627979780dcaa279ac1984c309c9"],["/archives/1abb07a6.html","3d84613d60fa1a295cd7ac4d7a03c907"],["/archives/1def5f0d.html","888dd49441197c83184c88fe8957ebb2"],["/archives/2021/03/index.html","cab0d550a84a1fbc11796370a51182a6"],["/archives/2021/04/index.html","8e798522f092f6917f338c52cbb58a8a"],["/archives/2021/index.html","aa216bbffec7784fafaaee1293de8aa2"],["/archives/2022/04/index.html","f42d738963e3b627951dc778d4aadb5e"],["/archives/2022/05/index.html","0fad76108fbfa973cd692b1d3405c60b"],["/archives/2022/06/index.html","e6113af81a188121945a219aa64c14b9"],["/archives/2022/index.html","4c518ea5a3cc127b5045bd953995673e"],["/archives/2022/page/2/index.html","e142fe44cc63090d48f473894cd068f2"],["/archives/2023/01/index.html","5da5816f22f7594bdd80a390851b06dd"],["/archives/2023/02/index.html","35b629a62456362981b774d1e4b877b5"],["/archives/2023/03/index.html","e34a2417a9bd66a8aa167bb628302d5b"],["/archives/2023/index.html","808d443c9f16bddeef65160caf65c809"],["/archives/23cd4859.html","455db5f5ef177ca243ec2efec45c00df"],["/archives/266295d8.html","19cdb25454f19d8d44e0cf4c4ee688f9"],["/archives/330ac4a4.html","e6c40b1ea7c5eff1e7c0094610f70cdf"],["/archives/3a816938.html","52be0b3d1e44c10b699043da98f3e066"],["/archives/4360a9bd.html","e5dcac725e1523fc9c1763bfe55bf60c"],["/archives/49977e84.html","720a55b603359a23af4004d44de1167d"],["/archives/573e690a.html","fa3c40976e8a0a57bb26d27767b2d523"],["/archives/57eb0d7a.html","d8e961dcc7306d18ceaf763d0cf69b5d"],["/archives/58b02e48.html","dfa7d90e962f19c50e051d7d3a6e2492"],["/archives/59a3b95f.html","9be9db52a6651890eabdbfbdb668d914"],["/archives/61521166.html","84f7dc0b6edf7d93d75d8118651546a1"],["/archives/7576230f.html","84090c41ec116e47039d847d1f4c5b92"],["/archives/8063fed6.html","2be8fa72c15c06977b3f34038f9db832"],["/archives/8c1f6a98.html","c7ff7b454c28c85eb6ec519e7d9db73f"],["/archives/91104203.html","625f45420505986570c25278440db4a3"],["/archives/a1db3116.html","b8586d269be3ded354cc3307c6b579be"],["/archives/a8ccf4cb.html","43f4ce240e5581c6c415c9cd252f7c88"],["/archives/b7563557.html","37ef4b21b547f90054787714ea98740a"],["/archives/c144f20a.html","e6974cefc6b2e5d76fe7d41f69a9a38b"],["/archives/e84af901.html","e3955579f6bf70a2500f7aab945cde7b"],["/archives/f3ecd78a.html","2f3bba3b7a528eeeab495e3218d0f3b3"],["/archives/fe82aeb3.html","0480a3d48acf84a38c63b2d392a813aa"],["/archives/index.html","db3d4d116b55f575318abb12e9966558"],["/archives/page/2/index.html","818401e24c0afcd739e607790941b848"],["/archives/page/3/index.html","8f5b7401fd247962fa98186a59931f3b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","27bbddddbc6926a3a58d1ff0e62c6447"],["/books/index.html","31cca3bab035b6d54f2db73a550f7792"],["/categories/index.html","97f95c4fa8dd06b0cf71a45684fdd871"],["/categories/博客搭建/index.html","b42b578e66ac8f1761be966214c0f70c"],["/categories/生活/index.html","98e08641e787ebebbb969371cc27c76e"],["/categories/研究方法/index.html","e868a143e66cd7edcd1f7b9afb01e8f4"],["/categories/程序代码/index.html","692203146e58817bc9e21969f24064aa"],["/categories/解决方案/index.html","fe2ed5a3a9237609e301050741966a14"],["/categories/读书与生活/index.html","82c995b2cd2c09568809689b0ddfe2ef"],["/categories/遥感与大数据/index.html","a435a3e5fe648b1d74888bc6f4509afe"],["/comment/index.html","96ad566b8d267676b40aa2242551b9f2"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","8b7dfeafaa5357e5447c18a92d6d7c80"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a54dac2c3c0c98f1ccbe0c44b8b279cf"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","bf284c5cf33c2658eff96be0153329cd"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","9e9d1620025b54c164c1a163b7399a9f"],["/music/index.html","c5f15b572e0b943b1836743b9b33990e"],["/notes/index.html","c54019a521980c4d4956ab1aee9d9498"],["/page/2/index.html","3038af24fdf96e45685cb5a3b2201a42"],["/page/3/index.html","4b8ab88b60cd175eb2a5c64cfc231e2e"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","3b4e312a281b598d85370c05b00fcfb9"],["/sw-register.js","91e9c94cbd1c0fee2587d948511ed6cf"],["/tags/C/index.html","bd7e966ede7237790722148c9e6fd79b"],["/tags/Hexo/index.html","0ea2777aa3b808586fde20bee2324028"],["/tags/Python/index.html","d25912743448030506e6e01d0369c8de"],["/tags/Python卫星数据处理/index.html","f8220f18a4491d1b03b0687d39f6f1f6"],["/tags/Python数值分析/index.html","7189ce72e9372d55c1ba20b8b549603a"],["/tags/Python数字图像处理/index.html","03a826105706151696d6006b64afa438"],["/tags/index.html","d8c1bd4785c1d607c6d4c55569288122"],["/tags/人生/index.html","cde713b1784f3598ddab227756190de7"],["/tags/生活与感悟/index.html","eb889c427201c7f20481e3327c9fd255"],["/tags/网络与浏览器/index.html","75c5f0e98778c81192f6948fac5e919c"],["/tags/诗歌/index.html","7dbd7f8999caddd04bfc212d8fc23e61"],["/tags/读书与生活/index.html","4bc9aa41f8cdb779b4780ad896ac6cde"],["/tags/辐射传输/index.html","73524062718b895749367c8a4561c210"],["/tags/遥感/index.html","42388b1cb45ad8f6b8b128b0f454c25c"],["/tags/遥感与大气/index.html","a2f3977937a0847a80b4aa74e93fdc2c"],["/tags/遥感影像分类/index.html","6475d3e612546472ebd8af5a5739ae64"],["/tags/问题解决方案/index.html","263e9341131f8d266c4d87e15ed1f447"]];
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
