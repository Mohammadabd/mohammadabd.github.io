(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],u=0,v=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},n=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"58f1e793"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=r(t);var c=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"3a19":function(t,e,a){t.exports=a.p+"img/profile.0ddf7379.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[t._m(0),a("div",{staticClass:"container-fluid p-0"},[a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:"about"}},[a("div",{staticClass:"my-auto"},[a("h1",{staticClass:"mb-0"},[t._v(" "+t._s(t.name)+" "),a("span",{staticClass:"text-primary"},[t._v(t._s(t.surname))])]),a("div",{staticClass:"subheading mb-5"},[t._v(" "+t._s(t.address)+" "),a("a",{attrs:{href:"mailto:name@email.com"}},[t._v(t._s(t.email))])]),a("p",{staticClass:"mb-5"},[t._v(t._s(t.aboutMe))]),t._m(1)])]),a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"experience"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"mb-5"},[t._v("Experience")]),t._l(t.experience,(function(e){return a("div",{key:e.description,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[a("div",{staticClass:"resume-content mr-auto"},[a("h3",{staticClass:"mb-0"},[t._v(t._s(e.position))]),a("div",{staticClass:"subheading mb-3"},[t._v(t._s(e.company))]),a("p",[t._v(t._s(e.description))])]),a("div",{staticClass:"resume-date text-md-right"},[a("span",{staticClass:"text-primary"},[t._v(t._s(e.startDate)+" - "+t._s(e.endDate))])])])}))],2)]),t._m(2),t._m(3),t._m(4),t._m(5)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[s("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#about"}},[s("span",{staticClass:"d-block d-lg-none"},[t._v("Start Bootstrap")]),s("span",{staticClass:"d-none d-lg-block"},[s("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:a("3a19"),alt:""}})])]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#experience"}},[t._v("Experience")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#education"}},[t._v("Education")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#skills"}},[t._v("Skills")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#interests"}},[t._v("Interests")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#awards"}},[t._v("Awards")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-inline list-social-icons mb-0"},[a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),a("i",{staticClass:"fa fa-facebook fa-stack-1x fa-inverse"})])])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),a("i",{staticClass:"fa fa-twitter fa-stack-1x fa-inverse"})])])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://www.linkedin.com/in/mohammadabdollahi/"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),a("i",{staticClass:"fa fa-linkedin fa-stack-1x fa-inverse"})])])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),a("i",{staticClass:"fa fa-github fa-stack-1x fa-inverse"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"education"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"mb-5"},[t._v("Education")]),a("div",{staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[a("div",{staticClass:"resume-content mr-auto"},[a("h3",{staticClass:"mb-0"},[t._v("Wayne State University")]),a("div",{staticClass:"subheading mb-3"},[t._v("Doctor of Philosophy")]),a("div",[t._v("Industrial Engineering")]),a("p",[t._v("GPA: 4.0")])]),a("div",{staticClass:"resume-date text-md-right"},[a("span",{staticClass:"text-primary"},[t._v("August 2014 - Present")])])]),a("div",{staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[a("div",{staticClass:"resume-content mr-auto"},[a("h3",{staticClass:"mb-0"},[t._v("Wayne State University")]),a("div",{staticClass:"subheading mb-3"},[t._v("Master of Science")]),a("div",[t._v("Computer Science (Machine Learning Concentration)")]),a("p",[t._v("GPA: 4.0")])]),a("div",{staticClass:"resume-date text-md-right"},[a("span",{staticClass:"text-primary"},[t._v("August 2014 - Present")])])]),a("div",{staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[a("div",{staticClass:"resume-content mr-auto"},[a("h3",{staticClass:"mb-0"},[t._v("University of Tehran")]),a("div",{staticClass:"subheading mb-3"},[t._v("Master of Science")]),a("div",[t._v("Industrial Engineering")]),a("p",[t._v("GPA: 4.0")])]),a("div",{staticClass:"resume-date text-md-right"},[a("span",{staticClass:"text-primary"},[t._v("August 2014 - Present")])])]),a("div",{staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[a("div",{staticClass:"resume-content mr-auto"},[a("h3",{staticClass:"mb-0"},[t._v("K.N.Toosi University of Technology")]),a("div",{staticClass:"subheading mb-3"},[t._v("Bachelor of Science")]),a("div",[t._v("Industrial Engineering")]),a("p",[t._v("GPA: 3.13")])]),a("div",{staticClass:"resume-date text-md-right"},[a("span",{staticClass:"text-primary"},[t._v("August 2014 - Present")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"skills"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"mb-5"},[t._v("Skills")]),a("div",{staticClass:"subheading mb-3"},[t._v("Programming Languages & Tools")]),a("ul",{staticClass:"list-inline list-icons"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-python"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-cplusplus"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-java"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-html5"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-javascript"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-jquery"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-sass"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-python"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-bootstrap"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-wordpress"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-grunt"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-gulp"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"devicons devicons-npm"})])]),a("div",{staticClass:"subheading mb-3"},[t._v("Workflow")]),a("ul",{staticClass:"fa-ul mb-0"},[a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Mobile-First, Responsive Design ")]),a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Cross Browser Testing & Debugging ")]),a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Cross Functional Teams ")]),a("li",[a("i",{staticClass:"fa-li fa fa-check"}),t._v(" Agile Development & Scrum ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"interests"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"mb-5"},[t._v("Interests")]),a("p",[t._v(" Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking. ")]),a("p",{staticClass:"mb-0"},[t._v(" When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"awards"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"mb-5"},[t._v("Awards & Certifications")]),a("ul",{staticClass:"fa-ul mb-0"},[a("li",[a("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" Google Analytics Certified Developer ")]),a("li",[a("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" Mobile Web Specialist - Google Certification ")]),a("li",[a("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" 1"),a("sup",[t._v("st")]),t._v(" Place - University of Colorado Boulder - Emerging Tech Competition 2009 ")]),a("li",[a("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" 1"),a("sup",[t._v("st")]),t._v(" Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category) ")]),a("li",[a("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" 2"),a("sup",[t._v("nd")]),t._v(" Place - University of Colorado Boulder - Emerging Tech Competition 2008 ")]),a("li"),a("li",[a("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" 1"),a("sup",[t._v("st")]),t._v(" Place - James Buchanan High School - Hackathon 2006 ")]),a("li",[a("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" 3"),a("sup",[t._v("rd")]),t._v(" Place - James Buchanan High School - Hackathon 2005 ")])])])])}],r=(a("fb6a"),a("ac1f"),a("5319"),{data:function(){return{title:"My portfolio",name:"MOHAMMAD",surname:"ABDOLLAHI",address:"32500 Concord Dr. Apt 113 · Madison Heights, MI 48071 · (313) 600-6016 ·",email:"Abbdollahi@gmail.com",aboutMe:"I am currently a senior/lead data scientist in vehicle safety advanced organization withing General Motors. Within my team, we develop and deploy many AI/ML algorithms for safety emerging issue identification at scale. Mainly we deal with NLP problems and telematics to find safety issues. We leverage different AI/ML and optimization concepts such as supervised, unsupervised, weakly-supervised learning, graph theory and network optimization to build models and applications. Prior to joining GM, I was a graduate teaching/research assistant at Wayne State University where I have worked on problems on different fields such as health-care, supply chain, transportation, and etc. I have developed different mathematical formulation and algorithms as well as machine learning/deep learning models to solve problems. My PhD dissertation is around dynamic ride pooling in which I have developed multiple MILP and CP modelsand used decomposition algorithms to solve routing and scheduling problems. Moreover, I have developed feature learning framework based on deep learning for travel time prediction. Besides those, I worked ondeep reinforcement learning to solve dynamic pricing of this system. ",experience:[{position:"Senior Data Scientist",company:"General Motors",description:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",startDate:"Ocotober 2019",endDate:"Present"},{position:"Data Scientist",company:"General Motors",description:"Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",startDate:"June 2018",endDate:"October 2019"},{position:"Data Scientist Intern",company:"Bayer (aka Monsanto)",description:"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",startDate:"September 2008",endDate:"June 2010"}]}},mounted:function(){var t=this.jquery;this.$nextTick((function(){t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click((function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=t(this.hash);if(e=e.length?e:t("[name="+this.hash.slice(1)+"]"),e.length)return t("html, body").animate({scrollTop:e.offset().top},1e3,"easeInOutExpo"),!1}})),t(".js-scroll-trigger").click((function(){t(".navbar-collapse").collapse("hide")})),t("body").scrollspy({target:"#sideNav"})}))}}),l=r,o=(a("034f"),a("2877")),c=Object(o["a"])(l,i,n,!1,null,null,null),u=c.exports,d=(a("d3b7"),a("8c4f")),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},g=h,C=(a("935b"),Object(o["a"])(g,f,p,!1,null,"71451e76",null)),b=C.exports,_={name:"Home",components:{HelloWorld:b}},y=_,k=Object(o["a"])(y,v,m,!1,null,null,null),x=k.exports;s["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],j=new d["a"]({routes:w}),P=j,I=a("1157"),E=a.n(I);a("4989"),a("6a5c"),a("f9e3"),a("5fc5"),a("7f10"),s["a"].prototype.jquery=E.a,s["a"].config.productionTip=!1,new s["a"]({router:P,el:"#app",render:function(t){return t(u)}})},"85ec":function(t,e,a){},"935b":function(t,e,a){"use strict";var s=a("ebdd"),i=a.n(s);i.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},ebdd:function(t,e,a){}});
//# sourceMappingURL=app.8479f616.js.map