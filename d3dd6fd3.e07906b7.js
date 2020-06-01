(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(11),r=(n(0),n(203)),i=n(205),c={title:"Overview"},l={id:"datasource-overview",title:"Overview",description:"ComponentKit really shines when used with a UICollectionView.",source:"@site/docs/datasource-overview.md",permalink:"/docs/datasource-overview",sidebar:"docs",previous:{title:"Legacy APIs",permalink:"/docs/animations-legacy-apis"},next:{title:"Basics",permalink:"/docs/datasource-basics"}},s=[{value:"Automatic reuse",id:"automatic-reuse",children:[]},{value:"Scroll performance",id:"scroll-performance",children:[]},{value:"The data sources",id:"the-data-sources",children:[{value:"CKDataSource",id:"ckdatasource",children:[]},{value:"CKCollectionViewDataSource",id:"ckcollectionviewdatasource",children:[]}]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ComponentKit really shines when used with a ",Object(r.b)("inlineCode",{parentName:"p"},"UICollectionView"),"."),Object(r.b)("h3",{id:"automatic-reuse"},"Automatic reuse"),Object(r.b)("p",null,"Who hasn't had bugs with cell reuse? In ComponentKit, the declarative nature of a Component makes it so you don't have to worry about reuse anymore! ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.objc.io/issue-22/facebook.html"}),"This article in objc.io")," explains in great detail how we achieve ",Object(r.b)("strong",{parentName:"p"},"automatic reuse and reconfiguration")," with ComponentKit."),Object(r.b)("h3",{id:"scroll-performance"},"Scroll performance"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ComponentKit addresses common scroll performance issues holistically"),". Putting cells on screen is usually very performance sensitive. Cells are dequeued during scrolling, so any frame drop will be immediately visible."),Object(r.b)("p",null,"Automatic and optimized reuse is already great for performance. But also, because generating a component and laying it out is just a ",Object(r.b)("strong",{parentName:"p"},"succession of pure functions working with immutable data")," this operation can be very ",Object(r.b)("strong",{parentName:"p"},"easily moved to the background"),"."),Object(r.b)("p",null,"As a result, the list view infrastructure provided by ComponentKit only spends a minimal amount of time in the main thread. No more stutters due to complex view hierarchies or expensive text layout!"),Object(r.b)("h2",{id:"the-data-sources"},"The data sources"),Object(r.b)("p",null,"ComponentKit includes a standard data source stack dedicated to render components directly in a ",Object(r.b)("inlineCode",{parentName:"p"},"UICollectionView"),", and with a bit more effort, in a ",Object(r.b)("inlineCode",{parentName:"p"},"UITableView"),"."),Object(r.b)("h3",{id:"ckdatasource"},"CKDataSource"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CKDataSource")," is at the core of the list view infrastructure. Instances of this class are agnostic to the ",Object(r.b)("inlineCode",{parentName:"p"},"UICollectionView")," API. The role of a ",Object(r.b)("inlineCode",{parentName:"p"},"CKDataSource")," is to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Take as input changesets containing commands and models.\n","*",'e.g: "Insert at index 0 in section 1 the item representing ModelA".'),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Generate and layout in the background")," the components associated to those changes."),Object(r.b)("li",{parentName:"ol"},"Output a changeset along with handles to the generated components so that it can be used with a ",Object(r.b)("inlineCode",{parentName:"li"},"UITableView")," or a ",Object(r.b)("inlineCode",{parentName:"li"},"UICollectionView"))),Object(r.b)("h3",{id:"ckcollectionviewdatasource"},"CKCollectionViewDataSource"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CKCollectionViewDataSource")," is a thin wrapper around ",Object(r.b)("inlineCode",{parentName:"p"},"CKDataSource")," that implements the ",Object(r.b)("inlineCode",{parentName:"p"},"UICollectionViewDataSource")," API."),Object(r.b)("p",null,"It can be used to easily bootstrap a ",Object(r.b)("inlineCode",{parentName:"p"},"UICollectionView")," using components. See how to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/datasource-basics"}),"display components in a collection view.")),Object(r.b)("h4",{id:"philosophy"},"Philosophy"),Object(r.b)("p",null,"The UIKit way to add content to a collection view is:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Tell the ",Object(r.b)("inlineCode",{parentName:"li"},"UICollectionView")," to add/insert/update rows or sections."),Object(r.b)("li",{parentName:"ol"},"Synchronously, the ",Object(r.b)("inlineCode",{parentName:"li"},"UICollectionView")," asks its data source for number of rows, sections and layout info."),Object(r.b)("li",{parentName:"ol"},"Depending on whether or not the updated index paths are visible the ",Object(r.b)("inlineCode",{parentName:"li"},"UICollectionView")," will synchronously call ",Object(r.b)("inlineCode",{parentName:"li"},"cellForItemAtIndexPath:"),"."),Object(r.b)("li",{parentName:"ol"},"Finally, the data source returns a configured cell for this index path.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CKCollectionViewDataSource"),' uses an idiom that is more "reactive":'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Tell the ",Object(r.b)("inlineCode",{parentName:"li"},"CKCollectionViewDataSource")," to add/insert/update rows or sections."),Object(r.b)("li",{parentName:"ol"},"Asynchronously, and in the background, computes the corresponding components."),Object(r.b)("li",{parentName:"ol"},"When the computation is done, apply the changes to the ",Object(r.b)("inlineCode",{parentName:"li"},"UICollectionView"),".")),Object(r.b)("p",null,"Conceptually, we now have a one directional data flow. Obviously the back and forth between the ",Object(r.b)("inlineCode",{parentName:"p"},"UICollectionView")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"CKCollectionViewDataSource")," still happens but it is now hidden."),Object(r.b)("img",{src:Object(i.a)("assets/datasource-overview.png"),alt:"CKCollectionViewDataSource overview",width:"518",height:"180"}))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";var a=n(0),o=n(59);t.a=function(){return Object(a.useContext)(o.a)}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(206);var a=n(204);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},206:function(e,t,n){"use strict";var a=n(8),o=n(10),r=n(207),i="".startsWith;a(a.P+a.F*n(208)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})},207:function(e,t,n){var a=n(86),o=n(30);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},208:function(e,t,n){var a=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);