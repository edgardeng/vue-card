


# devDependencies

### autoprefixer

Autoprefixer是一个后处理程序，不象Sass以及Stylus之类的预处理器。它适用于普通的CSS，可以实现css3代码自动补全。也可以轻松跟Sass，LESS及Stylus集成，在CSS编译前或编译后运行。详情见，https://github.com/postcss/autoprefixer

### babel

### Mocha 
是一个功能丰富的JavaScript测试框架，他可以跑在node和浏览器上，使异步测试变得简单和有趣。Mocha在运行测试用例过程中，当捕获到错误时，依旧能够灵活地运行精确的报告。

Chai 断言库
http://chaijs.com/

Mocha
http://visionmedia.github.io/mocha/


### connect-history-api-fallback 

v1.3.0，地址：https://github.com/bripkens/c...，当然它也可以作为express的中间件使用


### cross-env

跨平台 
这个迷你的包能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行
    

### eslint


### eventsource-polyfill.js 
https://github.com/Yaffle/EventSource/
是个Remy Sharp's polyfill for SSE。最后我们需要在/views/home.html中使用视图帮助导入前端产生的脚本(见reloadify.js中"分配脚本到本地变量")：
现在每次你改变home.html页面时，浏览器将自动从服务器刷新新的页面内容给你：http://localhost:1337/。

### Express

 基于 Node.js 平台，快速、开放、极简的 web 开发框架

### webpack

* extract-text-webpack-plugin
* friendly-errors-webpack-plugin
* html-webpack-plugin 
* http-proxy-middleware





### file-loader
    
    file-laoder是对require或者import的指定文件(比如A.html)进行抽取（上面例子中从js中抽取index.html）。
    
    在这一个过程中，抽取文件可以指定具体的目录信息、文件名称、hash信息、后缀信息等等，导入(A.html)的文件在构建编译后不会有该文件A.html的任何痕迹，因为文件被抽取了。
    
    比如，可以将上面index.html文件指定到某个目录下如html目录下，那么file-loader配置中可以这样写：
    
    { test: /\.html?$/, loader: 'file?name=html/[name].[ext]' }
    具体的其他配置参考一下其官网给出的例子：
    
    require("file?name=js/[hash].script.[ext]!./javascript.js");
    // => js/0dcbbaa701328a3c262cfd45869e351f.script.js
    
    require("file?name=html-[hash:6].html!./page.html");
    // => html-109fa8.html
    
    require("file?name=[hash]!./flash.txt");
    // => c31e9820c001c9c4a86bce33ce43b679
    
    require("file?name=[sha512:hash:base64:7].[ext]!./image.png");
    // => gdyb21L.png
    // use sha512 hash instead of md5 and with only 7 chars of base64
    
    require("file?name=img-[sha512:hash:base64:7].[ext]!./image.jpg");
    // => img-VqzT5ZC.jpg
    // use custom name, sha512 hash instead of md5 and with only 7 chars of base64
    
    require("file?name=picture.png!./myself.png");
    // => picture.png
    
    require("file?name=[path][name].[ext]?[hash]!./dir/file.png")
    // => dir/file.png?e43b20c069c4a01867c31e98cbce33c9
### html-loader
    
    html-loader是将require或者import的html文件转换为html字符串并导出。
    
    在这一过程中，在导出HTML字符串之前，会将html内容中指定元素的一些属性按照attrs=<tag>:<attribute>形式进行更改，一般是一些外部资源的链接替换，默认attrs=img:src
    
    
### karma

karma为测试框架准备运行环境，可以让这些测试在真正的浏览器里运行。

而且，karma运行测试的过程是自动化的。自动化并非理所当然的事。想起之前用Jasmine的时候，需要在一个html文件里引入各种js文件，然后用某个浏览器来打开这个html文件，使js在浏览器中运行起来。当测试内容发生变化时，需要刷新页面，并时不时地清空缓存。。。有了karma，就省事多啦~而且不需要额外的配置，karma就会自己找到系统已经装好的浏览器并启动。


### less

### lodash 4.17.4

一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库

### function-bind

### js-yaml yaml-loader
将yaml转为 json

### opn 
强制打开浏览器

### ora
为生成环境打包

### phantomjs

### postcss ， postcss-less


### rimraf

### semver

### shelljs


    "sinon": "^1.17.7",
    "sinon-chai": "^2.8.0",
    "sort-object": "^3.0.2",
    
    
    "thunkify": "^2.1.2",
    
    "shelljs": "^0.7.6",
        "touch": "^1.0.0",
        "url-loader": "^0.5.7",
        "vue-loader": "^12.2.1",
        "vue-router": "^2.6.0",
        "vue-style-loader": "^2.0.0",
        "vue-template-compiler": "^2.3.4",
        "vuex": "^2.3.1",
        "webpack": "^3.0.0",
        "webpack-bundle-analyzer": "^2.2.1",
        "webpack-dev-middleware": "^1.10.0",
        "webpack-hot-middleware": "^2.16.1",
        "webpack-merge": "^2.6.1",
        "yaml-loader": "^0.4.0",
        "yargs": "^6.6.0"
        



    
    