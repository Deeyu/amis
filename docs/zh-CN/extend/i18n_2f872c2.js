amis.define('docs/zh-CN/extend/i18n.md', function(require, exports, module, define) {

  module.exports = {
    "title": "多语言",
    "html": "<div class=\"markdown-body\"><p>amis 中对多语言的支持有两方面：</p>\n<ol>\n<li>amis 内部组件的多语言，比如日期组件中的日期</li>\n<li>JSON 配置中的多语言，比如配置中的 label 值</li>\n</ol>\n<h2><a class=\"anchor\" name=\"amis-%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6%E5%A4%9A%E8%AF%AD%E8%A8%80\" href=\"#amis-%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6%E5%A4%9A%E8%AF%AD%E8%A8%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>amis 内部组件多语言</h2><p>分为 JS SDK 和 React 两种用法。</p>\n<h3><a class=\"anchor\" name=\"js-sdk\" href=\"#js-sdk\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>JS SDK</h3><p>从 1.1.0 版本开始已经自带英文翻译，所以只需要在 props 里设置 locale 即可。</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">let</span> amisScoped <span class=\"token operator\">=</span> amis<span class=\"token punctuation\">.</span><span class=\"token function\">embed</span><span class=\"token punctuation\">(</span>\n  <span class=\"token string\">'#root'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    type<span class=\"token operator\">:</span> <span class=\"token string\">'page'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'表单页面'</span><span class=\"token punctuation\">,</span>\n    body<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span>\n      mode<span class=\"token operator\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n      api<span class=\"token operator\">:</span> <span class=\"token string\">'/saveForm'</span><span class=\"token punctuation\">,</span>\n      controls<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token operator\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n          type<span class=\"token operator\">:</span> <span class=\"token string\">'text'</span><span class=\"token punctuation\">,</span>\n          name<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    locale<span class=\"token operator\">:</span> <span class=\"token string\">'en-US'</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n<h3><a class=\"anchor\" name=\"react\" href=\"#react\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>React</h3><p>React 版本中没有内置英文翻译，需要自己 import，使用如下方法：</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token string\">'amis/lib/locale/en-US'</span><span class=\"token punctuation\">;</span></code></pre>\n<p>在渲染 amis 组件的时候设置 locale 为 en-US</p>\n<pre><code class=\"language-javascript\"><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">renderAmis</span><span class=\"token punctuation\">(</span>\n    <span class=\"token punctuation\">{</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'page'</span><span class=\"token punctuation\">,</span>\n      title<span class=\"token operator\">:</span> <span class=\"token string\">'简单页面'</span><span class=\"token punctuation\">,</span>\n      body<span class=\"token operator\">:</span> <span class=\"token string\">'内容'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      locale<span class=\"token operator\">:</span> <span class=\"token string\">'en-US'</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre>\n<h2><a class=\"anchor\" name=\"json-%E9%85%8D%E7%BD%AE%E4%B8%AD%E8%AE%BE%E7%BD%AE%E5%A4%9A%E8%AF%AD%E8%A8%80\" href=\"#json-%E9%85%8D%E7%BD%AE%E4%B8%AD%E8%AE%BE%E7%BD%AE%E5%A4%9A%E8%AF%AD%E8%A8%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>JSON 配置中设置多语言</h2><p>在 JSON 配置中，也可以设置不同语言下的不同展现，比如前面设置了 <code>locale</code> 为 <code>en-US</code>，这时在任意 JSON 配置中都能使用 <code>en-US</code> 对象来覆盖这个语言下的效果。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"controls\": [{\n    \"type\": \"text\",\n    \"name\": \"name\",\n    \"label\": \"姓名：\",\n    \"en-US\": {\n      \"label\": \"username: \"\n    }\n  }]\n}\n</script></div><div class=\"markdown-body\">\n<p>请点击上方的切换语言下拉框切换到英文，就能看到 <code>label</code> 属性被替换了，除了 <code>label</code> 以外，还可以覆盖其他任意属性，比如将 type 换成其他。</p>\n<h2><a class=\"anchor\" name=\"%E6%89%A9%E5%B1%95%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AF%AD%E8%A8%80\" href=\"#%E6%89%A9%E5%B1%95%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AF%AD%E8%A8%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>扩展内置组件的语言</h2><p>如果想扩展其他语言，首先参考 <code>https://github.com/baidu/amis/blob/master/src/locale/en-US.ts</code> 文件，然后参考后面的示例注册新语言，未翻译的文字都将使用中文。</p>\n<blockquote>\n<p>目前这种方式将会在未来修改，为了支持更多语言而不再使用中文为 key</p>\n</blockquote>\n<h3><a class=\"anchor\" name=\"js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" href=\"#js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>JS SDK 扩展方法</h3><pre><code class=\"language-javascript\"><span class=\"token keyword\">let</span> amisLib <span class=\"token operator\">=</span> <span class=\"token function\">amisRequire</span><span class=\"token punctuation\">(</span><span class=\"token string\">'amis'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\namisLib<span class=\"token punctuation\">.</span><span class=\"token function\">registerLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'jp'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'Form.submit'</span><span class=\"token operator\">:</span> <span class=\"token string\">'送信'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n<h3><a class=\"anchor\" name=\"react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" href=\"#react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>React 扩展方法</h3><pre><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>registerLocale<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'amis'</span><span class=\"token punctuation\">;</span>\n<span class=\"token function\">registerLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'jp'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'Form.submit'</span><span class=\"token operator\">:</span> <span class=\"token string\">'送信'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "amis 内部组件多语言",
          "fragment": "amis-%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6%E5%A4%9A%E8%AF%AD%E8%A8%80",
          "fullPath": "#amis-%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6%E5%A4%9A%E8%AF%AD%E8%A8%80",
          "level": 2,
          "children": [
            {
              "label": "JS SDK",
              "fragment": "js-sdk",
              "fullPath": "#js-sdk",
              "level": 3
            },
            {
              "label": "React",
              "fragment": "react",
              "fullPath": "#react",
              "level": 3
            }
          ]
        },
        {
          "label": "JSON 配置中设置多语言",
          "fragment": "json-%E9%85%8D%E7%BD%AE%E4%B8%AD%E8%AE%BE%E7%BD%AE%E5%A4%9A%E8%AF%AD%E8%A8%80",
          "fullPath": "#json-%E9%85%8D%E7%BD%AE%E4%B8%AD%E8%AE%BE%E7%BD%AE%E5%A4%9A%E8%AF%AD%E8%A8%80",
          "level": 2
        },
        {
          "label": "扩展内置组件的语言",
          "fragment": "%E6%89%A9%E5%B1%95%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AF%AD%E8%A8%80",
          "fullPath": "#%E6%89%A9%E5%B1%95%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AF%AD%E8%A8%80",
          "level": 2,
          "children": [
            {
              "label": "JS SDK 扩展方法",
              "fragment": "js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "fullPath": "#js-sdk-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "level": 3
            },
            {
              "label": "React 扩展方法",
              "fragment": "react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "fullPath": "#react-%E6%89%A9%E5%B1%95%E6%96%B9%E6%B3%95",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});