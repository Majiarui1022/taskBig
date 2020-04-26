.
├── build/                      # webpack 配置文件;
│   └── ...
├── config/                     # 与项目构建相关的常用的配置选项;
│   ├──env                      # 不同开发环境
│      ├── dev.js               # 开发环境变量
│      ├── prod.js              # 生产环境变量
│      └── qa.js                # 测试环境变量
│   └── index.js                # 主配置文件    
│
├── src/
│   ├── main.js                 # webpack 的入口文件;
│   ├── assets/                 # 存放项目共用的代码以外的资源，如：图片、图标、视频 等;
│   ├── components/             # 存放项目共用的组件，如：封装的导航条、选项卡等等; 备注：这里的存放的组件应该都是展示组件;
│   ├── router/                 # 存放项目路由;
│   ├── config/                 # 存放项目的网络模块，如：接口;
│   ├── utils/                  # 自己封装的一些工具, 如：封装的时间处理、文件上传函数、接口请求方式(axios)封装等; 
│       ├── http                # axios接口请求方式封装;
│   ├── views/                  # 存放项目业务代码;
│   ├── style                   # 存放页面样式;
│       ├── comment.csss        # 存放页面公用样式，如：UI库重置样式;
│       └── resize.scss         # css Reset
│   └── App.vue                 # app 的根组件;
│       
│
├── static/                     # 纯静态资源，该目录下的文件不会被webpack处理，该目录会被拷贝到输出目录下;
├── .babelrc                    # babel 的配置文件
├── .editorconfig               # 编辑器的配置文件;可配置如缩进、空格、制表类似的参数;
├── .eslintrc.js                # eslint 的配置文件
├── .eslintignore               # eslint 的忽略规则
├── .gitignore                  # git的忽略配置文件
├── .postcssrc.js               # postcss 的配置文件
├── index.html                  # HTML模板
├── package.json                # npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
└── README.md