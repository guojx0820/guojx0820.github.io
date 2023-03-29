/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d8faa55848642ca5fbcd36b9b6b0451a"],["/about/index.html","b8079de933746278a168d2de24c5fe24"],["/archives/1033b493.html","e95d9259c2782d7c151a18a5ce67e8c3"],["/archives/1abb07a6.html","aa6cb8e172669e1e8b3e1a3fcf381c93"],["/archives/1def5f0d.html","3feb8b75c58cec66763311ec24ace29b"],["/archives/2021/03/index.html","e876706f36a061c64f5a5272c171b246"],["/archives/2021/04/index.html","2de477984b736325d56e0e8673170c93"],["/archives/2021/index.html","b1e9faa36f54d303c55617543110892d"],["/archives/2022/04/index.html","053bcd0769c6c1b891036e0d968027ec"],["/archives/2022/05/index.html","bf54ac523eba4baa3c7f7f513c1e4096"],["/archives/2022/06/index.html","1c9ee840e3ee0d90c1d876add9e4d6db"],["/archives/2022/index.html","4b338da4afa416bb0b654f21e65acd90"],["/archives/2022/page/2/index.html","575834c40afc2a3fec4e1dcdd0de8706"],["/archives/2023/01/index.html","fcc21b5e23ff25159b46ab02f9ef5e41"],["/archives/2023/02/index.html","a02ce2b868ccca0addd3bf287f06bd07"],["/archives/2023/03/index.html","854b1d02ee8fcc3819e1fa6301718793"],["/archives/2023/index.html","5420a9af22bd76c7221131136d811ddd"],["/archives/23cd4859.html","303d30774acade9630ee2e5e98b09d23"],["/archives/266295d8.html","94a96513f9f9626cee7fb0ee94520b6e"],["/archives/330ac4a4.html","361df073554d8ee9a44c956312e28617"],["/archives/3a816938.html","0b3e9c0f3d8483f991f7a4360b239ab7"],["/archives/4360a9bd.html","954ecda9106cd1ec872d0ed6bf93733d"],["/archives/49977e84.html","9c02e5b2c78b3040c621b1c3345fee60"],["/archives/573e690a.html","38e715eb5a433cd29b7b6679fbabac34"],["/archives/57eb0d7a.html","06e00013eae5988c7a1592c083b6f764"],["/archives/58b02e48.html","1ac32edf3e1ee9916a6633648926af7b"],["/archives/59a3b95f.html","e3f097794ead1b874f4ac560cb02d56a"],["/archives/61521166.html","96314257442cad045fe5445d38df299f"],["/archives/7576230f.html","d95c049007343b37b68818dd0de87d73"],["/archives/8063fed6.html","184fc2ab893281059a3bd0ed8f0a3d43"],["/archives/8c1f6a98.html","4d4727de7d187df46f1d315f4e076f6a"],["/archives/91104203.html","21da08bd93d4b3275953aee4c8f608ca"],["/archives/92a27152.html","31d16317e1adeb11a59910215963365f"],["/archives/a1db3116.html","237a96303fbf6ef5175ce195d54692fe"],["/archives/a8ccf4cb.html","26b8d77b7d86cb6bf009c31336a01ed7"],["/archives/b7563557.html","de0c8c4f71f0aed7699b9bd4e58efaff"],["/archives/b9d5eb5f.html","9965bfeb5acfd00f48a5003634d8bd78"],["/archives/c144f20a.html","d2000bfdfacb097be61cf9406f5625f0"],["/archives/e84af901.html","ecaac5fe911ef50bb8cf8b0064d3a505"],["/archives/f3ecd78a.html","613cee9cce365220c03cc25284a2db30"],["/archives/fe82aeb3.html","8e818648422efa7b3fda9d34b452de5d"],["/archives/index.html","a41bcdf08374ed38caa197e84bb6fb11"],["/archives/page/2/index.html","3b4b8a26fb1b2cd48110bee88fb08680"],["/archives/page/3/index.html","df1bd6bab2f35d261639d2ed94df5b0d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","56007258e3c1fcc550b77bf44558cbff"],["/books/index.html","a1d7de88fc84cd1efbf00f64c4045cc7"],["/categories/index.html","292a0cacdcd98d9da1808a860b012982"],["/categories/博客搭建/index.html","73729ae1ebb8aae23ca42069cde36aa7"],["/categories/生活/index.html","cf4f66af396e2d5ade35c0b183ecd67f"],["/categories/研究方法/index.html","3b5d64fa416c1923350e1dc82c4a801a"],["/categories/程序代码/index.html","e115b3de7b756b549f9ab357530dfe35"],["/categories/解决方案/index.html","dfc9c1d42f1f65f83ed06364c79bf50f"],["/categories/读书与生活/index.html","8e1b6ed392bce7bba8a317c7650cf63a"],["/categories/遥感与大数据/index.html","12a40b03672ffa7a98d86f08dce58f2b"],["/comment/index.html","f843fa5721942590ba7d694054d66467"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/iconfont.css","e3181c027204c85076639ee6a72859e6"],["/css/index.css","dc7c0456e5ebca8e341416e2b1c6c9d5"],["/css/style.css","afb0ff5e6dad81ef6ad152802ba087d0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ideas/index.html","83579ac34f45f5b1155970bcd0eb2341"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6780bed06e5fef7d09188e065261de11"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/mobile_side.js","e795188c9c70681d4b2fa9a6b1dc2b37"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/wow_init.js","cafdb9d2e2c81a15ba9a6e2814c27484"],["/link/index.html","a7ed6ff2c8d337d9f60bb21d54277de2"],["/live2d-widget/README.html","10974779fcb5f2766585322e6a2e9d6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["/live2d-widget/demo/demo.html","5ffb001264c2627e26a2cce8f00e18ca"],["/live2d-widget/demo/login.html","75d9010d79405104b2fce2fa59d73d54"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/movies/index.html","1fd96adccf6106c7d5f57e579590f007"],["/music/index.html","5a106ad6b70c36d0e673718f36457560"],["/notes/index.html","99288724c5697a0661c76951a39bd821"],["/page/2/index.html","110a056901e98189211e6ed55312b086"],["/page/3/index.html","92fcdcaf92462861be7ce7b14cf5f18c"],["/photos/img.png","0531f0c55de03f84563e9919cd534df1"],["/photos/index.html","a38c956c8c327a1a736390ff0f617094"],["/sw-register.js","c649ad37e3177af6ca012715fe424c0c"],["/tags/C/index.html","8562f4c10d9e3b6a0726ec000dc5adf8"],["/tags/Hexo/index.html","ac054ecd106994b0716f0bbf577d4e40"],["/tags/Python/index.html","e45bf9871342b5e9e63070ad83fc32fc"],["/tags/Python卫星数据处理/index.html","9f1f1394547fc40440bf461f4efefbe7"],["/tags/Python数值分析/index.html","19e0d8ae7bfa964309ba71f2a06de460"],["/tags/Python数字图像处理/index.html","c122c6701214e52b825fbb51eadc0192"],["/tags/index.html","e82b5ff084a0505eff1e4357d5c7e889"],["/tags/人生/index.html","1cae080d142dc7d49645c732fbb264fb"],["/tags/生活与感悟/index.html","790b5946fd135014d444f411128b00ac"],["/tags/网络与浏览器/index.html","3bee944f2348147ff20b81c9a4c57be4"],["/tags/诗歌/index.html","4c7dff8f03b5bc53a1cc214690a28c07"],["/tags/读书与生活/index.html","47f81a96c2712b793f3bc34d0aab0353"],["/tags/辐射传输/index.html","1f0d1ffefff523ffe37922a4add1fa9a"],["/tags/遥感/index.html","edd6233a7b2de96eac9f7db2f7c5119b"],["/tags/遥感与大气/index.html","ed09d809091e11fe08225a5b249bc6a5"],["/tags/遥感影像分类/index.html","e48128444989309291aca04195c64d81"],["/tags/问题解决方案/index.html","9f026b34b4f6db6061b62c291f7166fb"]];
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
