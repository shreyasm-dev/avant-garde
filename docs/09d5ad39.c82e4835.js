(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{64:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return s})),o.d(n,"metadata",(function(){return c})),o.d(n,"toc",(function(){return r})),o.d(n,"default",(function(){return m}));var a=o(3),t=o(7),i=(o(0),o(89)),s={id:"examples",title:"Examples"},c={unversionedId:"examples",id:"examples",isDocsHomePage:!1,title:"Examples",description:"console.animation",source:"@site/docs/examples.md",slug:"/examples",permalink:"/docs/examples",editUrl:"https://github.com/shreyasm-dev/avant-garde/edit/master/docusaurus/docs/examples.md",version:"current",sidebar:"sidebar",previous:{title:"Community",permalink:"/docs/community"}},r=[{value:"<code>console.animation</code>",id:"consoleanimation",children:[]},{value:"<code>console.json</code>",id:"consolejson",children:[]}],l={toc:r};function m(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"consoleanimation"},Object(i.b)("inlineCode",{parentName:"h3"},"console.animation")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"console.animation( // Play an animation\n  [ // Animation frames\n    '-',\n    '--',\n    '---',\n    '----',\n    '-----',\n    '------',\n    '-------',\n    '--------',\n    '---------',\n    '----------',\n    '-----------',\n  ],\n  100, // Every frame should be shown for 100 ms\n\n  // This will be called after every frame is shown\n  (iteration) => iteration !== 10, // If a falsy value is returned, the animation will stop\n);\n")),Object(i.b)("h3",{id:"consolejson"},Object(i.b)("inlineCode",{parentName:"h3"},"console.json")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"console.json( // Pretty-print and syntax highlight some JSON\n  {\n    a: 1,\n    b: 2,\n    c: 3,\n  },\n  2, // Indentation size\n)\n")))}m.isMDXComponent=!0}}]);