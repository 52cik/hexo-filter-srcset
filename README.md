# hexo-filter-srcset

> hexo &lt;img&gt; srcset 扩展


## 安装

``` sh
$ npm install --save 52cik/hexo-filter-srcset
```

## 使用规范

安装后无需任何操作，即可使用，当你执行 `hexo generate` 或 `hexo g` 时，自动处理多倍图。

``` md
![aaa](http://xxx.com/abc.png?@2x "bbb")
![aaa][1]

[1]: http://xxx.com/abc@3x.png "bbb"
```

唯一要注意的就是这里的 `@2x`，也就是说你的图片名需要带 `@2x` 标识。  
`hexo g` 生成后代码为:

``` html
<img src="http://xxx.com/abc.png?@2x" srcset="http://xxx.com/abc.png?@2x 2x" alt="aaa" title="bbb">
<img src="http://xxx.com/abc@3x.png" srcset="http://xxx.com/abc@3x.png 3x" alt="aaa" title="bbb">
```

> PS: 本工具只会处理带有 `@2x`, `@3x`, `@5x` 这样标识的 img 标签。
