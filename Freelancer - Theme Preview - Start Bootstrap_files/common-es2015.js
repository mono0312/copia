(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/5Qy":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("mrSG"),s=n("Hb8o");function r(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(s.a)(e,Object(i.a)({delimiter:"."},t))}(e,Object(i.a)({delimiter:"-"},t))}},"/75N":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var i=n("/5Qy"),s=n("8Y7J"),r=n("gNCb");let c=(()=>{class e{constructor(e,t,n){this.utilityService=e,this._elRef=t,this.scrollSpyService=n,this.inViewportOptions={rootMargin:"-93px 0px -93px 0px"},this._elRef.nativeElement.style.display="block",this.hasIntersectionObserver=this.intersectionObserverFeatureDetection()}ngOnInit(){this.hasIntersectionObserver||(this.inViewport=!0,console.log("### INFO: Unable to find IntersectionObserver"))}ngAfterViewInit(){this.hasIntersectionObserver&&(this.observer=new(0,this.utilityService.window.IntersectionObserver)(this.intersectionObserverCallback.bind(this),Object.assign(Object.assign({},this.inViewportOptions),{root:this.utilityService.window.document.querySelector("#layoutSidenav_content")})),this.observer.observe(this._elRef.nativeElement))}ngOnDestroy(){this.observer&&this.observer.unobserve(this._elRef.nativeElement)}get tocID(){return Object(i.a)(this.itemIdentifier)}intersectionObserverCallback(e){e.forEach(e=>{this.inViewport!==e.isIntersecting&&(this.inViewport=e.isIntersecting,this.scrollSpyService.upsertItem({identifier:this.itemIdentifier,parentIdentifier:this.parentItemIdentifier,level:this.level,top:e.boundingClientRect.top,inViewport:this.inViewport}))})}intersectionObserverFeatureDetection(){return"IntersectionObserver"in this.utilityService.window&&"IntersectionObserverEntry"in this.utilityService.window&&("isIntersecting"in this.utilityService.window.IntersectionObserverEntry.prototype||Object.defineProperty(this.utilityService.window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0)}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(r.s),s.Kb(s.l),s.Kb(r.p))},e.\u0275dir=s.Fb({type:e,selectors:[["","sbwScrollSpy",""]],hostVars:1,hostBindings:function(e,t){2&e&&s.zb("id",t.tocID)},inputs:{itemIdentifier:["sbwScrollSpy","itemIdentifier"],parentItemIdentifier:"parentItemIdentifier",level:"level",inViewportOptions:"inViewportOptions"}}),e})()},"1U9P":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var i=n("8Y7J"),s=n("gNCb"),r=n("cUpR");let c=(()=>{class e{constructor(e,t,n){this.markedService=e,this.sanitizer=t,this.changeDetectorRef=n}ngOnInit(){const e=this.markedService.compile(this.md);this.safeHTML=this.sanitizer.bypassSecurityTrustHtml(e)}ngOnChanges(e){if(e.md.firstChange)return;const t=this.markedService.compile(this.md);this.safeHTML=this.sanitizer.bypassSecurityTrustHtml(t),this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(s.j),i.Kb(r.b),i.Kb(i.h))},e.\u0275cmp=i.Eb({type:e,selectors:[["sbw-markdown-html"]],inputs:{md:"md"},features:[i.wb],decls:1,vars:1,consts:[[3,"innerHtml"]],template:function(e,t){1&e&&i.Lb(0,"div",0),2&e&&i.mc("innerHtml",t.safeHTML,i.xc)},styles:[""],changeDetection:0}),e})()},Hb8o:function(e,t,n){"use strict";function i(e){return e.toLowerCase()}n.d(t,"a",function(){return c});var s=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function c(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,c=t.stripRegexp,a=void 0===c?r:c,l=t.transform,u=void 0===l?i:l,b=t.delimiter,d=void 0===b?" ":b,h=o(o(e,void 0===n?s:n,"$1\0$2"),a,"\0"),f=0,p=h.length;"\0"===h.charAt(f);)f++;for(;"\0"===h.charAt(p-1);)p--;return h.slice(f,p).split("\0").map(u).join(d)}function o(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(e,t){return e.replace(t,n)},e)}},Qywx:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("8Y7J"),s=n("gNCb");let r=(()=>{class e{constructor(e,t){this.scriptService=e,this.utilityService=t}ngOnInit(){this.scriptService.loadScript("disqus").then(e=>{if(!e)return;let t=this.utilityService.window.location.pathname;t=t.replace(/^\/theme/,"/themes"),t=t.replace(/^\/template/,"/templates"),this.utilityService.window.DISQUS.reset({reload:!0,config(){this.page.identifier=t,this.page.url=`https://startbootstrap.com${t}/`}})})}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(s.o),i.Kb(s.s))},e.\u0275cmp=i.Eb({type:e,selectors:[["sbw-disqus"]],decls:6,vars:0,consts:[[1,"disqus-comments"],["id","disqus_thread"],["href","https://disqus.com/?ref_noscript"]],template:function(e,t){1&e&&(i.Qb(0,"div",0),i.Lb(1,"div",1),i.Qb(2,"noscript"),i.Ec(3,"Please enable JavaScript to view the "),i.Qb(4,"a",2),i.Ec(5,"comments powered by Disqus."),i.Pb(),i.Pb(),i.Pb())},styles:[""],changeDetection:0}),e})()},XUou:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var i=n("s7LF"),s=n("8Y7J"),r=n("SVse"),c=n("Nv++");function o(e,t){1&e&&(s.Qb(0,"label",8),s.Ec(1,"Leave some stars!"),s.Pb())}const a=function(e){return{filled:e}},l=function(){return["fas","star"]};let u=(()=>{class e{constructor(){this.selectionOff=!1,this.selectedStars=0,this.shownStars=0}ngOnInit(){void 0!==this.reviewedStars&&(this.selectionOff=!0,this.shownStars=this.reviewedStars)}mouseLeave(){this.selectionOff||(this.shownStars=this.selectedStars)}mouseEnterStar(e){this.selectionOff||(this.shownStars=e+1)}starSelected(e){this.selectionOff||(this.selectedStars=e+1,this.onChange(this.selectedStars))}writeValue(e){this.selectedStars=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["sbw-rating-stars"]],inputs:{reviewedStars:"reviewedStars"},features:[s.xb([{provide:i.j,useExisting:e,multi:!0}])],decls:8,vars:26,consts:[["class","mb-1 small","for","ratingStars",4,"ngIf"],["id","ratingStars",1,"rating-stars"],[1,"hover-zone",3,"mouseleave"],["data-cy","1Star",1,"star",3,"ngClass","icon","mouseenter","click"],["data-cy","2Stars",1,"star",3,"ngClass","icon","mouseenter","click"],["data-cy","3Stars",1,"star",3,"ngClass","icon","mouseenter","click"],["data-cy","4Stars",1,"star",3,"ngClass","icon","mouseenter","click"],["data-cy","5Stars",1,"star",3,"ngClass","icon","mouseenter","click"],["for","ratingStars",1,"mb-1","small"]],template:function(e,t){1&e&&(s.Cc(0,o,2,0,"label",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.ac("mouseleave",function(){return t.mouseLeave()}),s.Qb(3,"fa-icon",3),s.ac("mouseenter",function(){return t.mouseEnterStar(0)})("click",function(){return t.starSelected(0)}),s.Pb(),s.Qb(4,"fa-icon",4),s.ac("mouseenter",function(){return t.mouseEnterStar(1)})("click",function(){return t.starSelected(1)}),s.Pb(),s.Qb(5,"fa-icon",5),s.ac("mouseenter",function(){return t.mouseEnterStar(2)})("click",function(){return t.starSelected(2)}),s.Pb(),s.Qb(6,"fa-icon",6),s.ac("mouseenter",function(){return t.mouseEnterStar(3)})("click",function(){return t.starSelected(3)}),s.Pb(),s.Qb(7,"fa-icon",7),s.ac("mouseenter",function(){return t.mouseEnterStar(4)})("click",function(){return t.starSelected(4)}),s.Pb(),s.Pb(),s.Pb()),2&e&&(s.mc("ngIf",!t.selectionOff),s.yb(3),s.mc("ngClass",s.qc(11,a,t.shownStars>0))("icon",s.pc(13,l)),s.yb(1),s.mc("ngClass",s.qc(14,a,t.shownStars>1))("icon",s.pc(16,l)),s.yb(1),s.mc("ngClass",s.qc(17,a,t.shownStars>2))("icon",s.pc(19,l)),s.yb(1),s.mc("ngClass",s.qc(20,a,t.shownStars>3))("icon",s.pc(22,l)),s.yb(1),s.mc("ngClass",s.qc(23,a,t.shownStars>4))("icon",s.pc(25,l)))},directives:[r.q,c.a,r.o],styles:[".rating-stars[_ngcontent-%COMP%]{cursor:pointer}.rating-stars[_ngcontent-%COMP%]   .hover-zone[_ngcontent-%COMP%]{display:inline-block}.rating-stars[_ngcontent-%COMP%]   .hover-zone[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{color:#d4dae3}.rating-stars[_ngcontent-%COMP%]   .hover-zone[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%]{color:#f4a100}"],changeDetection:0}),e})()},ZcrQ:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("8Y7J"),s=n("gNCb");let r=(()=>{class e{constructor(e,t){this.scriptService=e,this.utilityService=t}ngOnInit(){this.scriptService.loadScript("buysellads").then(e=>{e&&void 0!==this.utilityService.window._bsa&&this.utilityService.window._bsa&&this.utilityService.window._bsa.init("custom","CE7DV2JN","placement:startbootstrapcom",{target:".native-standard",template:'\n<a href="##link##" class="native-banner" style="background: linear-gradient(-30deg, ##backgroundColor##E5, ##backgroundColor##E5 45%, ##backgroundColor## 45%) #fff;">\n    <div class="native-main">\n        <img class="native-img" src="##logo##">\n        <div class="native-details" style="color: ##textColor##">\n            <span class="native-company">Sponsored by ##company##</span>\n            <span class="native-desc">##description##</span>\n        </div>\n        <span class="native-cta" style="color: ##ctaTextColor##; background-color: ##ctaBackgroundColor##;">##callToAction##</span>\n    </div>\n</a>\n<a class="native-via" href="##adViaLink##">Ads via BuySellAds</a>\n'})})}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(s.o),i.Kb(s.s))},e.\u0275dir=i.Fb({type:e,selectors:[["","sbwNativeStandard",""]]}),e})()},aTeN:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("GS7A");Object(i.j)("inOutAnimation",[Object(i.i)(":enter",[Object(i.h)({height:0,opacity:0}),Object(i.e)(".2s ease-out",Object(i.h)({height:"*",opacity:1}))]),Object(i.i)(":leave",[Object(i.h)({height:"*",opacity:1}),Object(i.e)(".2s ease-in",Object(i.h)({height:0,opacity:0}))])]),Object(i.j)("subMenuAnimation",[Object(i.g)("main",Object(i.h)({left:0})),Object(i.g)("sub",Object(i.h)({left:"-100%"})),Object(i.g)("sub2",Object(i.h)({left:"-200%"})),Object(i.i)("main => sub",[Object(i.e)(".2s ease-in")]),Object(i.i)("sub => main",[Object(i.e)(".2s ease-out")]),Object(i.i)("sub => sub2",[Object(i.e)(".2s ease-in")]),Object(i.i)("sub2 => sub",[Object(i.e)(".2s ease-out")])]),Object(i.j)("subMenuFadeAnimation",[Object(i.i)(":leave",[Object(i.h)({opacity:1}),Object(i.e)(".2s ease-in",Object(i.h)({opacity:0}))]),Object(i.i)(":enter",[Object(i.h)({opacity:0}),Object(i.e)(".2s ease-out",Object(i.h)({opacity:1}))])]);const s=Object(i.j)("fadeInOut",[Object(i.g)("void",Object(i.h)({opacity:0})),Object(i.i)(":enter",Object(i.e)("0.3s ease-in")),Object(i.i)(":leave",Object(i.e)("0.3s ease-out"))]);Object(i.j)("slideInOut",[Object(i.g)("flyIn",Object(i.h)({transform:"translateX(0)"})),Object(i.i)(":enter",[Object(i.h)({transform:"translateX(-100%)"}),Object(i.e)("0.3s ease-in")]),Object(i.i)(":leave",[Object(i.e)("0.3s ease-out",Object(i.h)({transform:"translateX(100%)"}))])])},uDCc:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var i=n("8Y7J"),s=n("SVse");function r(e,t){1&e&&i.Mb(0)}function c(e,t){if(1&e&&(i.Ob(0),i.Qb(1,"div",2),i.Qb(2,"div",3),i.Cc(3,r,1,0,"ng-container",4),i.Pb(),i.Pb(),i.Nb()),2&e){i.ec();const e=i.uc(4);i.yb(3),i.mc("ngTemplateOutlet",e)}}function o(e,t){1&e&&i.Mb(0)}function a(e,t){if(1&e&&(i.Ob(0),i.Qb(1,"div",5),i.Qb(2,"div",3),i.Cc(3,o,1,0,"ng-container",4),i.Pb(),i.Pb(),i.Nb()),2&e){i.ec();const e=i.uc(4);i.yb(3),i.mc("ngTemplateOutlet",e)}}function l(e,t){1&e&&i.Mb(0)}function u(e,t){if(1&e&&(i.Ob(0),i.Qb(1,"div",6),i.Qb(2,"div",3),i.Cc(3,l,1,0,"ng-container",4),i.Pb(),i.Pb(),i.Nb()),2&e){i.ec();const e=i.uc(4);i.yb(3),i.mc("ngTemplateOutlet",e)}}function b(e,t){1&e&&i.kc(0)}const d=["*"];let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["sbpro-page-card"]],inputs:{size:"size"},ngContentSelectors:d,decls:5,vars:3,consts:[[4,"ngIf"],["content",""],[1,"col-xl-5","col-lg-6","col-md-8","col-sm-11"],[1,"card","border","my-5"],[4,"ngTemplateOutlet"],[1,"col-xl-8","col-lg-9"],[1,"col-xl-10","col-lg-12"]],template:function(e,t){1&e&&(i.lc(),i.Cc(0,c,4,1,"ng-container",0),i.Cc(1,a,4,1,"ng-container",0),i.Cc(2,u,4,1,"ng-container",0),i.Cc(3,b,1,0,"ng-template",null,1,i.Dc)),2&e&&(i.mc("ngIf","small"===t.size),i.yb(1),i.mc("ngIf","medium"===t.size),i.yb(1),i.mc("ngIf","large"===t.size))},directives:[s.q,s.u],styles:["[_nghost-%COMP%]{display:contents}"],changeDetection:0}),e})()}}]);
//# sourceMappingURL=common-es2015.b97e5caf419f37597b7f.js.map