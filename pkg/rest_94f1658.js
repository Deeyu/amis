;/*!examples/index.jsx*/
define("ca626e1",function(e,t){"use strict";function o(e){r.render(n.createElement(l.default,null),e)}Object.defineProperty(t,"__esModule",{value:!0});var d=e("node_modules/tslib/tslib"),n=d.__importStar(e("node_modules/react/index")),r=e("node_modules/react-dom/index"),l=d.__importDefault(e("135e0c7"));t.bootstrap=o});
;/*!src/components/Editor.tsx*/
define("997c87d",function(s,a){"use strict";function e(s){return s.replace(/\.js$/,"")}function t(s,a,e){return a.editor.create(s,i.__assign({autoIndent:!0,formatOnType:!0,formatOnPaste:!0,selectOnLineNumbers:!0,scrollBeyondLastLine:!1,folding:!0,minimap:{enabled:!1}},e))}Object.defineProperty(a,"__esModule",{value:!0});var i=s("node_modules/tslib/tslib"),o=i.__importDefault(s("node_modules/react/index")),n=i.__importDefault(s("node_modules/classnames/index")),c=s("256b65d"),g={url:"vs/loader.js","vs/nls":{availableLanguages:{"*":"zh-cn"}},paths:{}};try{g.url="https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/loader.js",g.paths={vs:e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/editor/editor.main.js").replace(/\/vs\/.*$/,""),"vs/base/worker/workerMain":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/base/worker/workerMain.js"),"vs/basic-languages/apex/apex":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/apex/apex.js"),"vs/basic-languages/azcli/azcli":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/azcli/azcli.js"),"vs/basic-languages/clojure/clojure":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/clojure/clojure.js"),"vs/basic-languages/bat/bat":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/bat/bat.js"),"vs/basic-languages/coffee/coffee":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/coffee/coffee.js"),"vs/basic-languages/cpp/cpp":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/cpp/cpp.js"),"vs/basic-languages/csharp/csharp":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/csharp/csharp.js"),"vs/basic-languages/css/css":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/css/css.js"),"vs/basic-languages/dockerfile/dockerfile":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/dockerfile/dockerfile.js"),"vs/basic-languages/fsharp/fsharp":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/fsharp/fsharp.js"),"vs/basic-languages/go/go":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/go/go.js"),"vs/basic-languages/handlebars/handlebars":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/handlebars/handlebars.js"),"vs/basic-languages/html/html":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/html/html.js"),"vs/basic-languages/ini/ini":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/ini/ini.js"),"vs/basic-languages/java/java":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/java/java.js"),"vs/basic-languages/javascript/javascript":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/javascript/javascript.js"),"vs/basic-languages/less/less":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/less/less.js"),"vs/basic-languages/lua/lua":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/lua/lua.js"),"vs/basic-languages/markdown/markdown":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/markdown/markdown.js"),"vs/basic-languages/msdax/msdax":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/msdax/msdax.js"),"vs/basic-languages/objective-c/objective-c":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/objective-c/objective-c.js"),"vs/basic-languages/php/php":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/php/php.js"),"vs/basic-languages/postiats/postiats":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/postiats/postiats.js"),"vs/basic-languages/powershell/powershell":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/powershell/powershell.js"),"vs/basic-languages/pug/pug":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/pug/pug.js"),"vs/basic-languages/python/python":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/python/python.js"),"vs/basic-languages/r/r":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/r/r.js"),"vs/basic-languages/razor/razor":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/razor/razor.js"),"vs/basic-languages/redis/redis":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/redis/redis.js"),"vs/basic-languages/redshift/redshift":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/redshift/redshift.js"),"vs/basic-languages/ruby/ruby":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/ruby/ruby.js"),"vs/basic-languages/rust/rust":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/rust/rust.js"),"vs/basic-languages/sb/sb":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/sb/sb.js"),"vs/basic-languages/scheme/scheme":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/scheme/scheme.js"),"vs/basic-languages/scss/scss":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/scss/scss.js"),"vs/basic-languages/shell/shell":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/shell/shell.js"),"vs/basic-languages/solidity/solidity":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/solidity/solidity.js"),"vs/basic-languages/sql/sql":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/sql/sql.js"),"vs/basic-languages/st/st":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/st/st.js"),"vs/basic-languages/swift/swift":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/swift/swift.js"),"vs/basic-languages/typescript/typescript":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/typescript/typescript.js"),"vs/basic-languages/vb/vb":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/vb/vb.js"),"vs/basic-languages/xml/xml":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/xml/xml.js"),"vs/basic-languages/yaml/yaml":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/basic-languages/yaml/yaml.js"),"vs/editor/editor.main":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/editor/editor.main.js"),"vs/editor/editor.main.css":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/editor/editor.main.css"),"vs/editor/editor.main.nls":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/editor/editor.main.nls.js"),"vs/editor/editor.main.nls.zh-cn":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/editor/editor.main.nls.zh-cn.js"),"vs/language/typescript/tsMode":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/typescript/tsMode.js"),"vs/language/typescript/tsWorker":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/typescript/tsWorker.js"),"vs/language/json/jsonMode":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/json/jsonMode.js"),"vs/language/json/jsonWorker":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/json/jsonWorker.js"),"vs/language/html/htmlMode":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/html/htmlMode.js"),"vs/language/html/htmlWorker":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/html/htmlWorker.js"),"vs/language/css/cssMode":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/css/cssMode.js"),"vs/language/css/cssWorker":e("https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/language/css/cssWorker.js")},/^(https?:)?\/\//.test(g.paths.vs)&&(window.MonacoEnvironment={getWorkerUrl:function(){return"data:text/javascript;charset=utf-8,"+encodeURIComponent("\n                self.MonacoEnvironment = {\n                    baseUrl: '"+g.paths.vs+"',\n                    paths: "+JSON.stringify(g.paths)+"\n                };\n                importScripts('https://bce.bdstatic.com/fex/amis-gh-pages/n/monaco-editor/min/vs/base/worker/workerMain.js');")}})}catch(r){}a.monacoFactory=t;var m=function(s){function a(a){var e=s.call(this,a)||this;return e.disposes=[],e.wrapperRef=e.wrapperRef.bind(e),e.currentValue=a.value,e}return i.__extends(a,s),a.prototype.componentWillReceiveProps=function(s){this.props.options.readOnly!==s.options.readOnly&&this.editor&&this.editor.updateOptions&&this.editor.updateOptions(s.options)},a.prototype.componentDidUpdate=function(){if(this.props.value!==this.currentValue&&this.editor){var s=String(this.props.value);if("json"===this.props.language)try{s=JSON.stringify(JSON.parse(s),null,4)}catch(a){}this.preventTriggerChangeEvent=!0,this.editor.setValue&&this.editor.setValue(s),this.preventTriggerChangeEvent=!1}},a.prototype.componentWillUnmount=function(){this.disposes.forEach(function(s){var a=s.dispose;return a()}),this.disposes=[]},a.prototype.wrapperRef=function(s){if(this.container=s,s)this.loadMonaco();else try{this.disposes.forEach(function(s){var a=s.dispose;return a()}),this.disposes=[],this.editor&&(this.editor.getModel().dispose(),this.editor.dispose()),this.editor=null}catch(a){}},a.prototype.loadMonaco=function(){var s=this,a=this.props.requireConfig,e=a.url||"vs/loader.js",t=window.monacaAmd||(window.monacaAmd={document:window.document}),i=function(){if(t.__REACT_MONACO_EDITOR_LOADER_ISPENDING__&&a.paths&&a.paths.vs&&t.require.config(a),t.require(["vs/editor/editor.main","vs/editor/editor.main.nls.zh-cn"],function(){s.initMonaco()}),t.__REACT_MONACO_EDITOR_LOADER_ISPENDING__){t.__REACT_MONACO_EDITOR_LOADER_ISPENDING__=!1;var e=t.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__;if(e&&e.length)for(var i=e.shift();i;)i.fn.call(i.context),i=e.shift()}};if(t.__REACT_MONACO_EDITOR_LOADER_ISPENDING__)t.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__=t.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__||[],t.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__.push({context:this,fn:i});else if("undefined"==typeof t.require){var o=t.document.createElement("script");o.type="text/javascript",o.src=e,o.addEventListener("load",i),t.document.body.appendChild(o),t.__REACT_MONACO_EDITOR_LOADER_ISPENDING__=!0}else i()},a.prototype.initMonaco=function(){var s=null!==this.props.value?this.props.value:this.props.defaultValue,a=this.props,e=a.language,o=a.editorTheme,n=a.options,c=a.editorFactory,g=this.container;if(g){var r=this.props.context||window,m=r.monaco||window.monaco;if("undefined"!=typeof m){if(this.editorWillMount(m),"json"===this.props.language)try{s=JSON.stringify("string"==typeof s?JSON.parse(s):s,null,4)}catch(p){}var d=c||t;this.editor=d(g,m,i.__assign({},n,{automaticLayout:!0,value:s,language:e,editorTheme:o,theme:o})),this.editorDidMount(this.editor,m)}}},a.prototype.editorWillMount=function(s){var a=this.props.editorWillMount;a&&a(s)},a.prototype.editorDidMount=function(s,a){var e=this,t=this.props,i=t.editorDidMount,o=t.onChange,n=t.onFocus,c=t.onBlur;i&&i(s,a),s.onDidChangeModelContent&&this.disposes.push(s.onDidChangeModelContent(function(a){var t=s.getValue();e.currentValue=t,!e.preventTriggerChangeEvent&&o&&o(t,a)})),n&&s.onDidFocusEditorWidget&&this.disposes.push(s.onDidFocusEditorWidget(n)),c&&s.onDidBlurEditorWidget&&this.disposes.push(s.onDidBlurEditorWidget(c))},a.prototype.render=function(){var s=this.props,a=s.className,e=s.classPrefix,t=s.width,i=s.height,c=this.props.style||{};return c.width=t,c.height=i,o.default.createElement("div",{className:n.default(e+"MonacoEditor",a),style:c,ref:this.wrapperRef})},a.defaultProps={requireConfig:g,language:"javascript",editorTheme:"vs",width:"100%",height:"100%",options:{}},a}(o.default.Component);a.Editor=m,a.default=c.themeable(m)});
;/*!examples/components/Play.jsx*/
define("9b1667d",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("node_modules/tslib/tslib"),o=n.__importStar(e("node_modules/react/index")),s=e("6ae88e0"),a=e("d019970"),i=n.__importStar(e("node_modules/axios/index")),r=n.__importDefault(e("node_modules/react-frame-component/lib/index")),d=n.__importStar(e("node_modules/strip-json-comments/index")),l=n.__importDefault(e("997c87d")),h='{\n    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",\n    "type": "page",\n    "title": "Title",\n    "body": "Body",\n    "aside": "Aside",\n    "toolbar": "Toolbar"\n}',c={none:"",body:'{\n        "type": "page",\n        "body": SCHEMA_PLACEHOLDER\n    }',form:'{\n        "type": "page",\n        "body": {\n            "title": "",\n            "type": "form",\n            "autoFocus": false,\n            "api": "https://houtai.baidu.com/api/mock2/saveForm?waitSeconds=1",\n            "mode": "horizontal",\n            "controls": SCHEMA_PLACEHOLDER,\n            "submitText": null,\n            "actions": []\n        }\n    }',"form-item":'{\n        "type": "page",\n        "body": {\n            "title": "",\n            "type": "form",\n            "mode": "horizontal",\n            "autoFocus": false,\n            "controls": [\n                SCHEMA_PLACEHOLDER\n            ],\n            "submitText": null,\n            "actions": []\n        }\n    }'},u=function(e){function t(t){var o=e.call(this,t)||this;o.state=null,o.startX=0,o.oldContents="";var a=o.buildSchema(t.code||h,t);o.state={asideWidth:t.asideWidth||Math.max(300,.3*window.innerWidth),schema:a,schemaCode:JSON.stringify(a,null,2)},o.handleMouseDown=o.handleMouseDown.bind(o),o.handleMouseMove=o.handleMouseMove.bind(o),o.handleMouseUp=o.handleMouseUp.bind(o),o.removeWindowEvents=o.removeWindowEvents.bind(o),o.handleChange=o.handleChange.bind(o),o.schemaProps={style:{height:"100%"}},o.env={updateLocation:function(){},fetcher:function(e){return e=n.__assign({dataType:"json"},e),"json"===e.dataType&&e.data&&(e.data=JSON.stringify(e.data),e.headers=e.headers||{},e.headers["Content-Type"]="application/json"),i[e.method](e.url,e.data,e)},notify:function(e,t){return s.toast[e]?s.toast[e](t,"error"===e?"系统错误":"系统消息"):console.warn("[Notify]",e,t)}};var r=[].slice.call(document.head.querySelectorAll("link,style")).map(function(e){return e.outerHTML});return o.frameTemplate="<!DOCTYPE html><html><head>"+r.join("")+"</head><body><div></div></body></html>",o.handleEditorMount=o.handleEditorMount.bind(o),o}return n.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this.props;if(t.code!==e.code){var n=this.buildSchema(e.code||h,e);this.setState({schema:n,schemaCode:JSON.stringify(n,null,2)})}},t.prototype.componentDidMount=function(){this.props.setAsideFolded&&this.props.setAsideFolded(!0)},t.prototype.componentWillUnmount=function(){this.props.setAsideFolded&&this.props.setAsideFolded(!1)},t.prototype.buildSchema=function(e,t){void 0===t&&(t=this.props);var n=t.location.query;try{var o=n.scope||t.scope;return o&&c[o]&&(e=c[o].replace("SCHEMA_PLACEHOLDER",e)),e=d(e).replace(/('|")raw:/g,"$1"),JSON.parse(e)}catch(s){console.error(this.formatMessage(s.message,e))}return{}},t.prototype.formatMessage=function(e,t){if(/position\s?(\d+)$/.test(e)){var n=t.substring(0,parseInt(RegExp.$1,10)).split(/\n|\r\n|\r/);e="Json 语法错误，请检测。出错位置："+n.length+"，列："+n[n.length-1].length+"。"}return e},t.prototype.renderPreview=function(){var e=this.state.schema;return this.props.useIFrame?o.createElement(r.default,{width:"100%",height:"100%",frameBorder:0,initialContent:this.frameTemplate},a.render(e,this.schemaProps,this.env)):a.render(e,this.schemaProps,this.env)},t.prototype.handleEditorMount=function(e,t){t.languages.json.jsonDefaults.setDiagnosticsOptions({enableSchemaRequest:!0,validate:!0})},t.prototype.handleChange=function(e){this.setState({schemaCode:e});try{var t=JSON.parse(e);this.setState({schema:t})}catch(n){}},t.prototype.handleMouseDown=function(e){return this.startX=e.clientX,this.startWidth=this.state.asideWidth,window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove),!1},t.prototype.handleMouseMove=function(e){var t=this.startX-e.clientX;e.preventDefault(),this.setState({asideWidth:Math.min(800,Math.max(200,this.startWidth+t))})},t.prototype.handleMouseUp=function(){this.removeWindowEvents()},t.prototype.removeWindowEvents=function(){window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove)},t.prototype.renderEditor=function(){return o.createElement(l.default,{value:this.state.schemaCode,onChange:this.handleChange,language:"json",editorDidMount:this.handleEditorMount})},t.prototype.render=function(){var e=this.props.vertical;return e?o.createElement("div",{className:"vbox"},o.createElement("div",{className:"row-row"},o.createElement("div",{className:"cell pos-rlt"},o.createElement("div",{className:"scroll-y h-full pos-abt w-full"},this.renderPreview()))),o.createElement("div",{className:"row-row",style:{height:200}},o.createElement("div",{className:"cell"},this.renderEditor()))):o.createElement("div",{style:{position:"absolute",top:50,bottom:0}},o.createElement("div",{className:"hbox"},o.createElement("div",{className:"col pos-rlt"},o.createElement("div",{className:"scroll-y h-full pos-abt w-full"},this.renderPreview())),o.createElement("div",{className:"col bg-light lter b-l bg-auto pos-rlt",style:{width:this.state.asideWidth}},o.createElement("div",{className:"resizer",onMouseDown:this.handleMouseDown}),this.renderEditor())))},t.defaultProps={useIFrame:!1,vertical:!1},t}(o.Component);t.default=u});
;/*!src/components/RichText.tsx*/
define("1e5b785",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("node_modules/tslib/tslib"),n=i.__importDefault(e("node_modules/react/index")),o=i.__importDefault(e("node_modules/jquery/dist/jquery"));[e("node_modules/froala-editor/js/froala_editor.min"),e("node_modules/froala-editor/js/plugins/align.min"),e("node_modules/froala-editor/js/plugins/colors.min"),e("node_modules/froala-editor/js/plugins/font_family.min"),e("node_modules/froala-editor/js/plugins/font_size.min"),e("node_modules/froala-editor/js/plugins/image.min"),e("node_modules/froala-editor/js/plugins/image_manager.min"),e("node_modules/froala-editor/js/plugins/inline_style.min"),e("node_modules/froala-editor/js/plugins/line_breaker.min"),e("node_modules/froala-editor/js/plugins/link.min"),e("node_modules/froala-editor/js/plugins/lists.min"),e("node_modules/froala-editor/js/plugins/paragraph_format.min"),e("node_modules/froala-editor/js/plugins/paragraph_style.min"),e("node_modules/froala-editor/js/plugins/quote.min"),e("node_modules/froala-editor/js/plugins/save.min"),e("node_modules/froala-editor/js/plugins/table.min"),e("node_modules/froala-editor/js/plugins/code_view.min"),e("node_modules/froala-editor/js/plugins/fullscreen.min"),e("node_modules/froala-editor/js/plugins/video.min")].forEach(function(e){return e()});var a=function(e){function t(t){var i=e.call(this,t)||this;return i.listeningEvents=[],i.$element=null,i.$editor=null,i.config={immediateReactModelUpdate:!1,reactIgnoreAttrs:null},i.editorInitialized=!1,i.oldModel=null,i.textareaRef=i.textareaRef.bind(i),i}return i.__extends(t,e),t.prototype.componentDidUpdate=function(){JSON.stringify(this.oldModel)!=JSON.stringify(this.props.model)&&this.setContent()},t.prototype.textareaRef=function(e){e?this.createEditor(e):this.destroyEditor()},t.prototype.createEditor=function(e){this.editorInitialized||(this.config=this.props.config||this.config,this.$element=o.default(e),this.setContent(!0),this.registerEvents(),this.$editor=this.$element.froalaEditor(this.config).data("froala.editor").$el,this.initListeners(),this.editorInitialized=!0)},t.prototype.setContent=function(e){void 0===e&&(e=!1),(this.editorInitialized||e)&&(this.props.model||""==this.props.model)&&(this.oldModel=this.props.model,this.setNormalTagContent(e))},t.prototype.setNormalTagContent=function(e){function t(){i.$element.froalaEditor("html.set",i.props.model||"",!0),i.$element.froalaEditor("undo.reset"),i.$element.froalaEditor("undo.saveStep")}var i=this;e?this.registerEvent(this.$element,"froalaEditor.initialized",t):t()},t.prototype.getEditor=function(){return this.$element?this.$element.froalaEditor.bind(this.$element):null},t.prototype.updateModel=function(){if(this.props.onModelChange){var e="",t=this.$element.froalaEditor("html.get");"string"==typeof t&&(e=t),this.oldModel=e,this.props.onModelChange(e)}},t.prototype.initListeners=function(){var e=this;this.registerEvent(this.$element,"froalaEditor.contentChanged",function(){e.updateModel()}),this.config.immediateReactModelUpdate&&this.registerEvent(this.$editor,"keyup",function(){e.updateModel()})},t.prototype.registerEvent=function(e,t,i){e&&t&&i&&(this.listeningEvents.push(t),e.on(t,i))},t.prototype.registerEvents=function(){var e=this.config.events;if(e)for(var t in e)e.hasOwnProperty(t)&&this.registerEvent(this.$element,t,e[t])},t.prototype.destroyEditor=function(){this.$element&&(this.listeningEvents&&this.$element.off(this.listeningEvents.join(" ")),this.$editor.off("keyup"),this.$element.froalaEditor("destroy"),this.listeningEvents.length=0,this.$element=null,this.editorInitialized=!1)},t.prototype.render=function(){return n.default.createElement("textarea",{ref:this.textareaRef})},t}(n.default.Component);t.default=a,o.default.FE.VIDEO_PROVIDERS=[{test_regex:/^.+(bcebos.com)\/[^_&]+/,url_regex:"",url_text:"",html:'<span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><video class="fr-draggable" controls="" data-msg="ok" data-status="0" src="{url}" style="width: 600px;"></video></span>'}],o.default.FE.LANGUAGE.zh_cn={translation:{"Type something":"输入一些内容",Bold:"粗体",Italic:"斜体",Underline:"下划线",Strikethrough:"删除线",Insert:"插入",Delete:"删除",Cancel:"取消",OK:"确定",Back:"背部",Remove:"去掉",More:"更多",Update:"更新",Style:"风格","Font Family":"字体","Font Size":"字号",Colors:"颜色",Background:"背景",Text:"文字","Paragraph Format":"格式",Normal:"正常",Code:"代码","Heading 1":"标题1","Heading 2":"标题2","Heading 3":"标题3","Heading 4":"标题4","Paragraph Style":"段落样式","Inline Style":"内联样式",Align:"对齐方式","Align Left":"左对齐","Align Center":"居中","Align Right":"右对齐","Align Justify":"两端对齐",None:"无","Ordered List":"编号列表","Unordered List":"项目符号","Decrease Indent":"减少缩进","Increase Indent":"增加缩进","Insert Link":"插入链接","Open in new tab":"开启在新标签页","Open Link":"打开链接","Edit Link":"编辑链接",Unlink:"删除链接","Choose Link":"选择链接","Insert Image":"插入图片","Upload Image":"上传图片","By URL":"通过网址",Browse:"浏览","Drop image":"图像拖放","or click":"或点击","Manage Images":"管理图像",Loading:"载入中",Deleting:"删除",Tags:"标签","Are you sure? Image will be deleted.":"你确定吗？图像将被删除。",Replace:"更换",Uploading:"上传","Loading image":"导入图像",Display:"显示",Inline:"排队","Break Text":"断开文本","Alternate Text":"备用文本","Change Size":"尺寸变化",Width:"宽度",Height:"高度","Something went wrong. Please try again.":"出了些问题。 请再试一次。","Insert Video":"插入视频","Embedded Code":"嵌入式代码","Insert Table":"插入表格","Table Header":"表头","Remove Table":"删除表","Table Style":"表格样式","Horizontal Align":"水平对齐方式",Row:"行","Insert row above":"在上方插入","Insert row below":"在下方插入","Delete row":"删除行",Column:"列","Insert column before":"在左侧插入","Insert column after":"在右侧插入","Delete column":"删除列",Cell:"单元格","Merge cells":"合并单元格","Horizontal split":"水平分割","Vertical split":"垂直分割","Cell Background":"单元格背景","Vertical Align":"垂直对齐方式",Top:"最佳",Middle:"中间",Bottom:"底部","Align Top":"顶部对齐","Align Middle":"中间对齐","Align Bottom":"底部对齐","Cell Style":"单元格样式","Upload File":"上传文件","Drop file":"文件拖放",Emoticons:"表情","Grinning face":"脸上笑嘻嘻","Grinning face with smiling eyes":"","Face with tears of joy":"笑嘻嘻的脸，含笑的眼睛","Smiling face with open mouth":"笑脸张开嘴","Smiling face with open mouth and smiling eyes":"笑脸张开嘴微笑的眼睛","Smiling face with open mouth and cold sweat":"笑脸张开嘴，一身冷汗","Smiling face with open mouth and tightly-closed eyes":"笑脸张开嘴，紧紧闭着眼睛","Smiling face with halo":"笑脸晕","Smiling face with horns":"微笑的脸角","Winking face":"眨眼表情","Smiling face with smiling eyes":"面带微笑的眼睛","Face savoring delicious food":"面对品尝美味的食物","Relieved face":"面对如释重负","Smiling face with heart-shaped eyes":"微笑的脸，心脏形的眼睛","Smiling face with sunglasses":"笑脸太阳镜","Smirking face":"面对面带笑容","Neutral face":"中性面","Expressionless face":"面无表情","Unamused face":"一脸不快的脸","Face with cold sweat":"面对冷汗","Pensive face":"沉思的脸","Confused face":"面对困惑","Confounded face":"该死的脸","Kissing face":"面对接吻","Face throwing a kiss":"面对投掷一个吻","Kissing face with smiling eyes":"接吻脸，含笑的眼睛","Kissing face with closed eyes":"接吻的脸闭着眼睛","Face with stuck out tongue":"面对伸出舌头","Face with stuck out tongue and winking eye":"面对伸出舌头和眨动的眼睛","Face with stuck out tongue and tightly-closed eyes":"面对伸出舌头和紧闭的眼睛","Disappointed face":"面对失望","Worried face":"面对担心","Angry face":"愤怒的脸","Pouting face":"面对噘嘴","Crying face":"哭泣的脸","Persevering face":"怎奈脸","Face with look of triumph":"面带看的胜利","Disappointed but relieved face":"失望，但脸上释然","Frowning face with open mouth":"面对皱着眉头张口","Anguished face":"面对痛苦","Fearful face":"可怕的脸","Weary face":"面对厌倦","Sleepy face":"面对困","Tired face":"疲惫的脸","Grimacing face":"狰狞的脸","Loudly crying face":"大声哭脸","Face with open mouth":"面对张开嘴","Hushed face":"安静的脸","Face with open mouth and cold sweat":"","Face screaming in fear":"面对张开嘴，一身冷汗","Astonished face":"面对惊讶","Flushed face":"红扑扑的脸蛋","Sleeping face":"熟睡的脸","Dizzy face":"面对眩","Face without mouth":"脸上没有嘴","Face with medical mask":"面对医疗口罩",Break:"破",Subscript:"下标",Superscript:"上标",Fullscreen:"全屏","Insert Horizontal Line":"插入水平线","Clear Formatting":"格式化删除",Undo:"撤消",Redo:"重复","Select All":"全选","Code View":"代码视图",Quote:"引用",Increase:"增加引用",Decrease:"删除引用","Quick Insert":"快插"},direction:"ltr"}});