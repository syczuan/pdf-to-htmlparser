-f,--first-page <int>         第一页转换 (default: 1) <int>

-l,--last-page <int>          最后一页转换 (default: 2147483647) <int>

--zoom <fp>                   缩放比 <fp>

--fit-width <fp>              像素的宽度 <fp>

--fit-height <fp>             像素的高度 <fp>

--use-cropbox <int>           使用CropBox而不是MediaBox (default: 1) <int> 

--dpi <fp>                    DPI中的图形分辨率 (default: 144) <fp>  

--embed <string>              指定应嵌入哪些元素 <string>     



output 输出

--embed-css <int>             将CSS文件嵌入输出 (default: 1) <int>

--embed-font <int>            将字体文件嵌入输出 (default: 1) <int>

--embed-image <int>           将图像文件嵌入输出 (default: 1) <int>

--embed-javascript <int>      将JavaScript文件嵌入输出 (default: 1) <int>

--embed-outline <int>         将大纲嵌入输出 (default: 1) <int>

--split-pages <int>           将页面拆分为单独的文件 (default: 0) <int>

--dest-dir <string>           指定目标目录 (default: ".") <string>

--css-filename <string>       生成的css文件的文件名 (default: "") <string>

--page-filename <string>      拆分页的文件名模板  (default: "") <string>

--outline-filename <string>   生成的大纲文件的文件名 (default: "") <string> 

--process-nontext <int>       除了文本之外还渲染图形 (default: 1) <int>

--process-outline <int>       以HTML显示大纲 (default: 1) <int>

--process-annotation <int>    以HTML显示批注 (default: 0) <int>

--process-form <int>          包括文本字段和单选按钮 (default: 0) <int>

--printing <int>              启用打印支持 (default: 1) <int>

--fallback <int>              回退模式下的输出 (default: 0) <int>

--tmp-file-size-limit <int>   临时文件使用的最大大小（KB），-1表示无限制 (default: -1) <int>

--embed-external-font <int>   嵌入外部字体的本地匹配 (default: 1) <int>

--font-format <string>        嵌入式字体文件的后缀（ttf、otf、woff、svg） (default: "woff") <string>

--decompose-ligature <int>    分解连字，如fi->fi (default: 0) <int>

--turn-off-ligatures <int>    明确告诉浏览器不要使用连字 (default: 0) <int>

--auto-hint <int>             在没有提示的字体上使用fontforge自动提示 (default: 0) <int>

--external-hint-tool <string> 提示字体的外部工具（覆盖--自动提示） (default: "") <string>

--stretch-narrow-glyph <int>  拉伸窄字形而不是填充它们 (default: 0) <int>

--squeeze-wide-glyph <int>    缩小宽字形而不是截断它们 (default: 1) <int>

--override-fstype <int>       清除TTF/OTF字体中的fstype位 (default: 0) <int>

--process-type3 <int>         转换web的类型3字体（实验） (default: 0) <int>

--heps <fp>                   合并文本的水平阈值，以像素为单位 (default: 1) <fp>

--veps <fp>                   合并文本的垂直阈值，以像素为单位 (default: 1) <fp>

--space-threshold <fp>        分词阈值（阈值*em） (default: 0.125) <fp>

--font-size-multiplier <fp>   大于1的值会提高渲染精度 (default: 4) <fp>

--space-as-offset <int>       将空格字符视为偏移 (default: 0) <int>

--tounicode <int>             如何处理ToUnicode CMaps（0=自动，1=强制，-1=忽略） (default: 0) <int>

--optimize-text <int>         尝试减少用于文本的HTML元素的数量 (default: 0) <int>

--correct-text-visibility <int> 0：不执行文本可见性检查。1： 已处理完全闭塞的文本。2： 已处理部分闭塞文本 (default: 1) <int>

--covered-text-dpi <fp>       如果正确的文本可见性==2并且页面上有部分覆盖的文本，则渲染DPI以使用 (default: 300)

--bg-format <string>          指定背景图像格式 (default: "png") <string>

--svg-node-count-limit <int>  如果svg背景图像中的节点数超过此限制，请将此页面回退到位图背景；负值表示无限制 (default: -1) <int>

--svg-embed-bitmap <int>      1： 在svg背景中嵌入位图；0:如果可能，将位图转储到外部文件 (default: 1) <int>

-o,--owner-password <string>  所有者密码 (用于加密文件) <string>

-u,--user-password <string>   用户密码 (用于加密文件) <string>

--no-drm <int>                替代文档DRM设置 (default: 0) <int> 

--clean-tmp <int>             转换后删除临时文件 (default: 1) <int> 

--tmp-dir <string>            指定临时目录的位置 (default: "/tmp") <string> 

--data-dir <string>           指定数据目录 (default: "/usr/local/share/pdf2htmlEX") <string> 

--poppler-data-dir <string>   指定poppler数据目录 (default: "/usr/local/share/pdf2htmlEX/poppler") <string> 

--debug <int>                 打印调试信息 (default: 0) <int> 

--proof <int>                 文本绘制在文本层和背景上以供证明 (default: 0) <int> 

--quiet <int>                 安静地执行操作 (default: 0) <int> 

-v,--version                  打印版权和版本信息

-h,--help                     打印使用信息