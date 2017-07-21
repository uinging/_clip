# 常见的 DOM 方法

## HTMLElement 方法
方法 | 说明
---|---
contentEditable | inherit (默认) true false, 返回元素自身的 contentEditable 属性值
dataset 		| 自定义的 data-xx 集合对象, 不带 'data-'
focus			| 聚焦
hidden			| 是否有 hidden 属性
innerText		| 取/设 内部文本, 会受到css影响,只计算可见部分
innerHTML		| 取内部的html内容, 如果文本中有 & < > 字符, 将会被转码为 &amp; &lt; &gt;
textContent		| 取/设 节点及后代文本,不受css影响;如果是CDATA片段、注释、文本节点、ProcessingInstruction节点,将返回 nodevalue
nodeValue		| 返回或设置当前节点的值,对于注释或文本节点返回文本内容,其余多返回 null, 参见
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeValue)
isContentEditable| 返回当前元素是否可以编辑
offsetHeight     | 



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