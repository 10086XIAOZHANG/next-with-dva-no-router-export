### in dev process,then run:

  npm run dev
  
### in product process. Then run:

  npm run finishExport
  
### nginx config:
 

```
server {
listen 80;
server_name www.xxxx.com;
root "out output path" ;
index index.html;
}

```

### 图片资源的导入
特别注意，导入图片的方式不再是require或者import了，因为服务端本身的资源都是路径明确的，所以采用传统的html导入图片的写法。而且图片资源必须放在static目录下面，否则就会报错，至于能不能放在
其他目录下面，我还没尝试成功。

```JavaScript
<img src={`/static/search/search_1.png`} className="style_div_img" />
```

### 数据流的处理
这里采用的是dva-no-router,去掉dva的路由,采用next的路由,创建babelrc文件,alias到dva
```
{
    "presets": [
        "next/babel"
    ],
    "plugins": [
        ["module-resolver", {
            "alias": {
                "dva": "dva-no-router"
            }
        }]
    ]
}

```