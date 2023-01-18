/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b567f4601b2f14c992735f917f3b76a9"],["/about/index.html","976a4c738021b8614c699b8886d2ec79"],["/archives/1abb07a6.html","9bdfe8ed335246396af8ccc00078a8eb"],["/archives/1def5f0d.html","5a138b8138f521f437f56647ee00d60c"],["/archives/2021/03/index.html","946e4de68e6edbec8e31464e74f51ef9"],["/archives/2021/04/index.html","6d1e00d9ec30d7387642f25197bda2c4"],["/archives/2021/index.html","1eda5e6905e6d937ef8500ee6042b6f8"],["/archives/2022/04/index.html","4cd38f0437f351d096e24831b31007f3"],["/archives/2022/05/index.html","a20c40be08b3cdd9c38cbdbddef6d036"],["/archives/2022/06/index.html","f19ecd741b27a14a489e64664b4d8fd4"],["/archives/2022/index.html","cb5c35dff58bca8a052d98a1a4cd20e2"],["/archives/2022/page/2/index.html","18394944e458ea7afb0867672111dba5"],["/archives/2023/01/index.html","381a36e68ae54ea30d6362cd73b0c19d"],["/archives/2023/index.html","26b10de5b4d7a6cce8a5acd93d23a0d2"],["/archives/23cd4859.html","286e49be006c75ad401818122ca84e18"],["/archives/266295d8.html","e4e0274f0391848190778aa1c1092031"],["/archives/330ac4a4.html","be4d8e70cfd2fd3059510ba56f6b5d86"],["/archives/3a816938.html","7a04405ba60125bfc00c84d1d213f48f"],["/archives/4360a9bd.html","b914c5e44be435731e649caddd32c63c"],["/archives/49977e84.html","46330d9b4f70a1edf52f48b921836c0f"],["/archives/573e690a.html","c8541a029000558b6078355110289275"],["/archives/57eb0d7a.html","25ce4fd979e2629d134de5d5a0a1b3e9"],["/archives/61521166.html","fb4f3f5283026dac4b13c665b5f1f29f"],["/archives/7576230f.html","f9c4396c3d6e7d1ac922f79caddd0003"],["/archives/8063fed6.html","d0e3db7135c05741ba8bdf2e81404738"],["/archives/8c1f6a98.html","35d7bafff3cfca59ca361e496900fe1f"],["/archives/91104203.html","ee5987f206d07641dec6152f8f6ccd9c"],["/archives/a1db3116.html","50b352c4266827060e58e13ea45ef5ac"],["/archives/a8ccf4cb.html","3ba5cd8b8dd2a5a4fe3fba07288537cd"],["/archives/c144f20a.html","97aa1c996c4307ba98c7b84ace2eafde"],["/archives/e84af901.html","7dbb58e5a5511c4853369696832af03d"],["/archives/f3ecd78a.html","5aaf638a3d73085ad6126062c944e8c5"],["/archives/fe82aeb3.html","d3b944b0519959548b8103234c4fa42b"],["/archives/index.html","fb984c016591271ab587fc2062c422fa"],["/archives/page/2/index.html","0619d31e950ac588a6743375cadfa3d7"],["/archives/page/3/index.html","1a2d283fa10171843895475527aa5038"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","cefc8a33c3172af415014c74f0678d7b"],["/books/index.html","75e3b522f36ca32ea88c3f8a55bf57d4"],["/categories/index.html","4652ea4e99340463190f7cd323a651c9"],["/categories/博客搭建/index.html","78daca65bcb233a637af6bb4cc03eee9"],["/categories/生活/index.html","a4231c102afb695a97d42e621f0470af"],["/categories/程序代码/index.html","84c2ad8825848fd01f2074deccf3dca3"],["/categories/解决方案/index.html","59d4c9aed4135236f7ca136125dc200e"],["/categories/读书与生活/index.html","cf8735699d8b19589b5755fca0181a84"],["/categories/遥感与大数据/index.html","db2567751e5e31f54751c7f880076254"],["/comment/index.html","8e5f3af167ef50de4810b45f7f9d4fb5"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","200b600e39b1339fd0b979ef5d90d986"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","75d57db90db69ac8ba643ff762ade221"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","8863e1368c40db768f22a2e030f313e7"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","4c4aaf38cfd86b1f179fdf95a02000d4"],["/music/index.html","2b4c6555d09911826ed7264ac3153a5e"],["/notes/index.html","c454391fcd9b430a6a9885fe1c321b4b"],["/page/2/index.html","2463d664b76dd3db3afb446e7eb683f4"],["/page/3/index.html","2227b49c08c90a0776058776d082b0c4"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","7ef57fc4fb3a338b26b71a17de192c65"],["/sw-register.js","f3d7bfe713f09706a8c76931b8957cac"],["/tags/C/index.html","f434ffd7aa3f72f1c72e6992d6420ef8"],["/tags/Hexo/index.html","bcb45b1edaabfaf5c488e282c420fbd4"],["/tags/Python/index.html","a0d1433c30c040c54a1d233f8af0a913"],["/tags/Python数值分析/index.html","bb16106a0144d8b3f313dab0f1abdc9b"],["/tags/Python数字图像处理/index.html","0f93fffc15e279b5656542aaacb0212b"],["/tags/index.html","3d8390fcd27d6f061ad555ea45e82b00"],["/tags/人生/index.html","63f58fcb77bfda45b456aa3c2e17c496"],["/tags/生活与感悟/index.html","4d978f2ae7a74d3eb447cff1fbaf2609"],["/tags/网络与浏览器/index.html","fd9d78252b9be1a489dbb0ef8d428ab2"],["/tags/诗歌/index.html","6ea1d907af28e2967fe59b178b9108e7"],["/tags/读书与生活/index.html","e973da380ad814796ae70039fac45fe4"],["/tags/辐射传输/index.html","809c8a4cf646c67e47508480c126d990"],["/tags/遥感/index.html","9988192f2311f65c6c20c4dd419f4e26"],["/tags/问题解决方案/index.html","e6709259fbb361864dfc17bf768b3b52"]];
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
