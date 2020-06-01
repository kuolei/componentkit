(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n(2),i=n(11),r=(n(0),n(203)),a=n(205),c={title:"Scopes"},s={id:"scopes",title:"Scopes",description:"In the following component hierarchy ComponentKit has no way to distinguish the three ListItem components:",source:"@site/docs/scopes.md",permalink:"/docs/scopes",sidebar:"docs",previous:{title:"State",permalink:"/docs/state"},next:{title:"Component Controllers",permalink:"/docs/component-controllers"}},p=[{value:"Defining a Scope",id:"defining-a-scope",children:[]},{value:"Scope collisions",id:"scope-collisions",children:[]}],l={rightToc:p};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In the following component hierarchy ComponentKit has no way to distinguish the three ",Object(r.b)("inlineCode",{parentName:"p"},"ListItem")," components:"),Object(r.b)("img",{src:Object(a.a)("assets/tree.png"),width:"367",height:"124",alt:"Component Tree"}),Object(r.b)("p",null,"ComponentKit needs a way to uniquely identify each ",Object(r.b)("inlineCode",{parentName:"p"},"ListItem"),". Particularly as the component hierarchy is rebuilt over time:"),Object(r.b)("img",{src:Object(a.a)("assets/tree-ids.png"),width:"367",height:"124",alt:"Component Tree with IDs"}),Object(r.b)("p",null,"Scopes give ComponentKit the ability to assign any component with a persistent identity: ",Object(r.b)("em",{parentName:"p"},"regardless of how many times a component is created it will always acquire the same scope"),". This behavior is required in the following three situations:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If a component has ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/state"}),"state")," it must also define a scope"),Object(r.b)("li",{parentName:"ol"},"If a component has a ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/component-controllers"}),"component controller")," it must also define a scope"),Object(r.b)("li",{parentName:"ol"},"If a component has children that themselves have state or component controllers it must also define a scope when encountering a scope collision")),Object(r.b)("h2",{id:"defining-a-scope"},"Defining a Scope"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"CKComponentScope")," to define a component scope at the top of a component's ",Object(r.b)("inlineCode",{parentName:"p"},"+new")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-objectivec"}),"@implementation ListItemComponent\n\n+ (instancetype)newWithListItem:(ListItem *)listItem\n{\n  // Defines a scope that is uniquely identified by the component's class (i.e. ListItemComponent) and the provided identifier.\n  CKComponentScope scope(self, listItem.uniqueID);\n  const auto c = /* ... */;\n  return [super newWithComponent:c];\n}\n\n@end\n")),Object(r.b)("p",null,"If a component does not have a model object with a unique identifier a scope can be defined without one:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-objectivec"}),"@implementation ListComponent\n\n+ (instancetype)newWithList:(List *)list\n{\n  // Defines a scope that is uniquely identified by the component's class (i.e. ListComponent).\n  CKComponentScope scope(self);\n  const auto c = /* ... */;\n  return [super newWithComponent:c];\n}\n\n@end\n")),Object(r.b)("p",null,"Omitting the scope's identifier is safe as long as there will not be more than one sibling component of the same type. The example above assumes ",Object(r.b)("inlineCode",{parentName:"p"},"ListComponent"),"'s parent will only ever render one ",Object(r.b)("inlineCode",{parentName:"p"},"ListComponent"),". If that assumption no longer holds then the parent component must specify a unique identifier for scopes of its children. This is when ",Object(r.b)("inlineCode",{parentName:"p"},"CKComponentKey")," is helpful:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-objectivec"}),"@implementation ListsComponent\n\n+ (instancetype)newWithList:(NSArray<List *> *)lists\n{\n  // Defines a scope that is uniquely identified by the component's class (i.e. ListComponent).\n  CKComponentScope scope(self);\n  const auto c = /* ... */;\n  return\n  [super\n   newWithListComponents:\n   CK::map(lists, ^(List *list) {\n     CKComponentKey key(@([lists indexOfObject:list]));\n     return [ListComponent newWithList:list];\n   })];\n}\n\n@end\n")),Object(r.b)("p",null,"ComponentKit's keys are an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/lists-and-keys.html#keys"}),"analogous to the concept of the same name in React"),". They allow the parent component to implicitly provide child components with a unique identifiers ",Object(r.b)("em",{parentName:"p"},"based on its knowledge of the component hierarchy"),". In the ",Object(r.b)("inlineCode",{parentName:"p"},"ListsComponent")," example each ",Object(r.b)("inlineCode",{parentName:"p"},"ListComponent")," is rendered in the order provided. Since the ",Object(r.b)("inlineCode",{parentName:"p"},"ListsComponent")," knows how it will display each ",Object(r.b)("inlineCode",{parentName:"p"},"ListComponent")," it can provide a key based on each ",Object(r.b)("inlineCode",{parentName:"p"},"list"),"'s order in the ",Object(r.b)("inlineCode",{parentName:"p"},"lists")," array."),Object(r.b)("h2",{id:"scope-collisions"},"Scope collisions"),Object(r.b)("p",null,"Scopes must be uniquely identifiable otherwise ComponentKit will be unable to reliably associate a component with its scope. When ComponentKit cannot uniquely identify two or more scopes then it has encountered a ",Object(r.b)("strong",{parentName:"p"},"scope collision")," and an assertion is raised. To avoid a scope collision either:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Define the scope of a component encountering a scope collision with a unique identifier"),Object(r.b)("li",{parentName:"ol"},"Define a key in a parent component when creating children encountering a scope collision")),Object(r.b)("p",null,"The assertion raised by ComponentKit highlights where in the component hierarchy a scope collision is detected. Information provided by the framework includes the name of the component encountering the scope collision and where the component lives in the component hierarchy."))}m.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),b=o,h=m["".concat(a,".").concat(b)]||m[b]||u[b]||r;return n?i.a.createElement(h,c({ref:t},p,{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<r;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";var o=n(0),i=n(59);t.a=function(){return Object(o.useContext)(i.a)}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(206);var o=n(204);function i(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},206:function(e,t,n){"use strict";var o=n(8),i=n(10),r=n(207),a="".startsWith;o(o.P+o.F*n(208)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return a?a.call(t,o,n):t.slice(n,n+o.length)===o}})},207:function(e,t,n){var o=n(86),i=n(30);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},208:function(e,t,n){var o=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);