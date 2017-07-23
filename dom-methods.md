# 常见的 DOM 方法与属性

这个 `DOM 系列` 要做 `DOM 属性与方法` 、`DOM 事件（未开始）`

标签类型的继承关系:

> 具体标签元素(如 div 元素为 HTMLDivElement) <<-- HTMLElement <<-- Element <<-- Node <<-- EventTarget <<-- Object

具体标签元素的属性/方法每个都不相同, 以后另开项目做, 这里从第二项 `HTMLElement` 开始做起.


## 1. HTMLElement


### HTMLElement 属性

属性 | 说明
---|---
contentEditable 	| inherit (默认) true false, 返回元素自身的 contentEditable 属性值
dataset 					| 自定义的 data-xx 集合对象, 不带 'data-'
hidden						| 是否有 `hidden` 属性
innerText					| 取/设 内部文本, 会受到 `css` 影响,只计算可见部分
innerHTML					| 取内部的html内容, 如果文本中有 & < > 字符, 将会被转码为 &amp; &lt; &gt;
textContent				| 取/设 节点及后代文本,不受css影响;如果是CDATA片段、注释、文本节点、ProcessingInstruction节点,将返回 `nodevalue`
nodeValue					| 返回或设置当前节点的值,对于注释或文本节点返回文本内容,其余多返回 null, 参见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeValue)
isContentEditable	| 返回当前元素是否可以编辑
outerText					| 非标准属性; 取值时返回 `innerText` 一样的内容; 设置值时,会将当前节点替换为给定字符.
style 						| 返回当前元素 `style` 属性的值,如果没有 `style` 属性,返回 `''`. 并不包含 CSS 文件的样式, CSS 样式需要用 `getComputedStyle()` 获取。也可以用来设置当前元素的 `style`, 会实时添加到标签的 `style` 属性中, 属性名采用 **驼峰命名方式**.
title 						| 返回当前元素的 `title` 属性,通常鼠标悬浮后作为一个 tooltip 出现, 也可以设置 title. 当作为 `document.title` 使用时,返回 `<head>` 标签里 `<title>` 标签的内容,也可以用来设置 `<title>` 的值,会实时修改 `DOM`. 【iOS / Android 浏览器里可能会不能修改 DOM，待验证】


### HTMLElement 方法

方法 | 说明
---|---
focus()							| 聚焦
offsetHeight()     	| int, 返回当前元素高度,包括 border, padding, 还包括水平滚动条高度(如果有).
offsetWidth()				| int, 返回当前元素宽度,包括 border, padding, 还包括垂直滚动条宽度(如果有).
offsetLeft()				| 返回相对于 `HTMLElement.offsetParent` 节点的左侧偏移量,对于块级元素,`offsetLeft`, `offsetTop`, `offsetHeight`, `offsetWidth` 描述了元素相对于 `offsetParent` 的边界框; 然而,对于可被截断到下一行的行内元素(如 span), `offsetLeft` 和 `offsetTop` 描述的是 first border box 的位置(使用[Element.getClientRects()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects)来获取高度和位置),`offsetWidth` ,`offsetHeight` 描述的是 bounding border box 的维度(用 [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)获取位置). 参见[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft)
offsetTop()					| 返回元素相对于 `HTMLElement.offsetParent` 节点顶部的距离.
offsetParent()			| 优先指向一个最近的包含当前元素的 **定位元素**. 如果没有定位元素,就指向最近的 table cell 元素或 root 元素(标准模式是 html, quirks 模式是 body).如果元素设置了 `display:none`, 则返回 `null`. 



## 2. Element

### Element 属性

属性 | 说明
---|---



	assignedSlot | 非标准
	attachShadow() | 非标准
	attributes
	before()
	childElementCount
	children
	classList
	className
	clientHeight
	clientLeft
	clientTop
	clientWidth
	closest
	constructor
	createShadowRoot
	firstElementChild
	getAttribute
	getAttributeNS
	getAttributeNode
	getAttributeNodeNS
	getBoundingClientRect
	getClientRects
	getDestinationInsertionPoints
	getElementsByClassName
	getElementsByTagName
	getElementsByTagNameNS
	hasAttribute
	hasAttributeNS
	hasAttributes
	hasPointerCapture
	id
	innerHTML
	insertAdjacentElement
	insertAdjacentHTML
	insertAdjacentText
	lastElementChild
	localName
	matches
	namespaceURI
	nextElementSibling
	outerHTML
	prefix
	prepend
	previousElementSibling
	querySelector
	querySelectorAll
	releasePointerCapture
	remove
	removeAttribute
	removeAttributeNS
	removeAttributeNode
	replaceWith
	requestPointerLock
	scrollHeight
	scrollIntoView
	scrollIntoViewIfNeeded
	scrollLeft
	scrollTop
	scrollWidth
	setAttribute
	setAttributeNS
	setAttributeNode
	setAttributeNodeNS
	setPointerCapture
	shadowRoot
	slot
	tagName
	webkitMatchesSelector
	webkitRequestFullScreen
	webkitRequestFullscreen


### Element 方法

方法 | 说明
---|---
after() 			| 给指定元素后面添加一个紧跟着的兄弟元素
append() | 非标准




## 3. Node
```js
// Node.prototype
[
	"ELEMENT_NODE", 
	"ATTRIBUTE_NODE", 
	"TEXT_NODE", 
	"CDATA_SECTION_NODE", 
	"ENTITY_REFERENCE_NODE", 
	"ENTITY_NODE", 
	"PROCESSING_INSTRUCTION_NODE", 
	"COMMENT_NODE", 
	"DOCUMENT_NODE", 
	"DOCUMENT_TYPE_NODE", 
	"DOCUMENT_FRAGMENT_NODE", 
	"NOTATION_NODE", 
	"DOCUMENT_POSITION_DISCONNECTED", 
	"DOCUMENT_POSITION_PRECEDING", 
	"DOCUMENT_POSITION_FOLLOWING", 
	"DOCUMENT_POSITION_CONTAINS", 
	"DOCUMENT_POSITION_CONTAINED_BY", 
	"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", 
	"nodeType", 
	"nodeName", 
	"baseURI", 
	"isConnected", 
	"ownerDocument", 
	"parentNode", 
	"parentElement", 
	"childNodes", 
	"firstChild", 
	"lastChild", 
	"previousSibling", 
	"nextSibling", 
	"nodeValue", 
	"textContent", 
	"hasChildNodes", 
	"getRootNode", 
	"normalize", 
	"cloneNode", 
	"isEqualNode", 
	"isSameNode", 
	"compareDocumentPosition", 
	"contains", 
	"lookupPrefix", 
	"lookupNamespaceURI", 
	"isDefaultNamespace", 
	"insertBefore", 
	"appendChild", 
	"replaceChild", 
	"removeChild", 
	"constructor"
]
```

## 4. EventTarget

## 5. object