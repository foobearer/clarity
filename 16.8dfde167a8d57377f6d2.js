(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"Z+8F":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},o=u("zl1X"),i=u("pMnS"),a=[".signpost-default[_ngcontent-%COMP%], .signpost-positions[_ngcontent-%COMP%]{display:flex;padding:24px}.signpost-positions[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1 1}.signpost-positions[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]{flex:1 1;display:flex;justify-content:center;align-items:center}.signpost-triggers-wrapper[_ngcontent-%COMP%]{width:100%}.signpost-trigger-demo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;padding:24px;width:100%;border:1px #8b0000}.signpost-trigger-demo[_ngcontent-%COMP%]   .signpost-item[_ngcontent-%COMP%]{flex:1 0 200px;display:flex;flex-direction:column;align-items:center;margin-bottom:24px}"],s=u("KZfJ"),c=u("+Xo0"),r=u("0G9f"),g=u("QkwE"),p=u("vAyd"),d=u("mrSG"),h=u("N+3j"),b=function(l){function n(){var n=l.call(this,"signposts")||this;return n.openState=!1,n.code='\nimport {Component} from "@angular/core";\n\n@Component({\n    ...\n})\n\nexport class MyClass {\n    // Use *clrIfOpen directive to manage hide/show with the openState property.\n    public openState: boolean = false;\n}\n    ',n.html='\n<p>Signposts should be used when you want to show a small amount of contextual help\n    of information without taking the user out of the current context.\n     Use sparingly as a supplemental element and not as a primary method of adding detail.\n    <clr-signpost>\n        <clr-signpost-content *clrIfOpen="openState">\n            <h3 style="margin-top: 0">Inline signpost</h3>\n            <p>Position: <code class="clr-code">right-middle</code></p>\n        </clr-signpost-content>\n    </clr-signpost>\n</p>\n    ',n}return Object(d.b)(n,l),n}(h.a),m=t.Ma({encapsulation:2,styles:[],data:{}});function f(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,7,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,o.lb,o.M)),t.Na(1,8568832,null,0,s.kb,[t.p,[2,s.Ed],s.r],null,null),(l()(),t.Oa(2,0,null,0,1,"h3",[["style","margin-top: 0"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Inline signpost"])),(l()(),t.Oa(4,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Position: "])),(l()(),t.Oa(6,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["right-middle"]))],null,function(l,n){l(n,0,0,!0,t.Ya(n,1).isOffScreen)})}function O(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),t.Oa(1,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Signposts should be used when you want to show a small amount of contextual help of information without taking the user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding detail. "])),(l()(),t.Oa(3,0,null,null,6,"clr-signpost",[],[[2,"signpost",null]],null,null,o.mb,o.L)),t.db(6144,null,s.Ed,null,[t.k]),t.Na(5,49152,null,1,s.jb,[s.r],null,null),t.eb(335544320,1,{customTrigger:0}),t.db(512,null,s.ed,s.ed,[]),(l()(),t.Ga(16777216,null,0,1,null,f)),t.Na(9,147456,null,0,s.Ga,[s.ed,t.L,t.O],{open:[0,"open"]},null),(l()(),t.Oa(10,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),t.Na(11,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),t.Oa(12,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),t.Na(13,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,9,0,u.openState),l(n,11,0,u.html,"html"),l(n,13,0,u.code,"typescript")},function(l,n){l(n,3,0,!0)})}var w=u("gIcY"),v=u("Ip0R"),y=function(l){function n(){var n=l.call(this,"signposts")||this;return n.positions=["top-left","top-middle","top-right","right-top","right-middle","right-bottom","bottom-left","bottom-middle","bottom-right","left-top","left-middle","left-bottom"],n.position="right-middle",n.html='\n<select id="position_selector" [(ngModel)]="position" name="position" id="position">\n    <option *ngFor="let position of positions" [ngValue]="position">{{ position }}</option>\n</select>\n<clr-signpost>\n    <clr-signpost-content [clrPosition]="position" *clrIfOpen>\n        <h3 style="margin-top: 0">Position</h3>\n        <p><code class="clr-code">{{ position }}</code></p>\n    </clr-signpost-content>\n</clr-signpost>\n    ',n.code='\n@Component({\n    ...\n})\nexport class MyClass {\n    positions: string[] = [ "top-left", "top-middle", "top-right",\n                            "right-top", "right-middle", "right-bottom",\n                            "bottom-left", "bottom-middle", "bottom-right",\n                            "left-top", "left-middle", "left-bottom" ];\n    position: string = "right-middle";\n}\n',n}return Object(d.b)(n,l),n}(h.a),x=t.Ma({encapsulation:0,styles:[a],data:{}});function k(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,3,"option",[],null,null,null,null,null)),t.Na(1,147456,null,0,w.s,[t.k,t.D,[2,w.w]],{ngValue:[0,"ngValue"]},null),t.Na(2,147456,null,0,w.D,[t.k,t.D,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),t.gb(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function W(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,6,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,o.lb,o.M)),t.Na(1,8568832,null,0,s.kb,[t.p,[2,s.Ed],s.r],{position:[0,"position"]},null),(l()(),t.Oa(2,0,null,0,1,"h3",[["style","margin-top: 0"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Position"])),(l()(),t.Oa(4,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.Oa(5,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(6,null,["",""]))],function(l,n){l(n,1,0,n.component.position)},function(l,n){var u=n.component;l(n,0,0,!0,t.Ya(n,1).isOffScreen),l(n,6,0,u.position)})}function S(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,27,"div",[],null,null,null,null,null)),(l()(),t.Oa(1,0,null,null,22,"div",[["class","signpost-positions"]],null,null,null,null,null)),(l()(),t.Oa(2,0,null,null,13,"div",[["class","description"]],null,null,null,null,null)),(l()(),t.Oa(3,0,null,null,12,"section",[["class","form-block"]],null,null,null,null,null)),(l()(),t.Oa(4,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Oa(5,0,null,null,1,"label",[["for","position"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Select a position: "])),(l()(),t.Oa(7,0,null,null,8,"div",[["class","select"]],null,null,null,null,null)),(l()(),t.Oa(8,0,null,null,7,"select",[["id","position"],["name","position"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ya(l,9).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ya(l,9).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.position=u)&&e),e},null,null)),t.Na(9,16384,null,0,w.w,[t.D,t.k],null,null),t.db(1024,null,w.m,function(l){return[l]},[w.w]),t.Na(11,671744,null,0,w.r,[[8,null],[8,null],[8,null],[6,w.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.db(2048,null,w.n,null,[w.r]),t.Na(13,16384,null,0,w.o,[[4,w.n]],null,null),(l()(),t.Ga(16777216,null,null,1,null,k)),t.Na(15,278528,null,0,v.m,[t.O,t.L,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Oa(16,0,null,null,7,"div",[["class","demo"]],null,null,null,null,null)),(l()(),t.Oa(17,0,null,null,6,"clr-signpost",[],[[2,"signpost",null]],null,null,o.mb,o.L)),t.db(6144,null,s.Ed,null,[t.k]),t.Na(19,49152,null,1,s.jb,[s.r],null,null),t.eb(335544320,1,{customTrigger:0}),t.db(512,null,s.ed,s.ed,[]),(l()(),t.Ga(16777216,null,0,1,null,W)),t.Na(23,147456,null,0,s.Ga,[s.ed,t.L,t.O],{open:[0,"open"]},null),(l()(),t.Oa(24,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),t.Na(25,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),t.Oa(26,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),t.Na(27,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,11,0,"position",u.position),l(n,15,0,u.positions),l(n,23,0,null),l(n,25,0,u.html,"html"),l(n,27,0,u.code,"typescript")},function(l,n){l(n,8,0,t.Ya(n,13).ngClassUntouched,t.Ya(n,13).ngClassTouched,t.Ya(n,13).ngClassPristine,t.Ya(n,13).ngClassDirty,t.Ya(n,13).ngClassValid,t.Ya(n,13).ngClassInvalid,t.Ya(n,13).ngClassPending),l(n,17,0,!0)})}var M=function(l){function n(){var n=l.call(this,"signposts")||this;return n.html='\n<div class="signpost-triggers-wrapper">\n    <div class="signpost-trigger-demo">\n        <div class="signpost-item">\n            <h6>Clarity Icon</h6>\n            <clr-signpost>\n                <clr-icon shape="avatar" \n                          class="is-solid has-badge-info" \n                          clrSignpostTrigger>\n                </clr-icon>\n                <clr-signpost-content [clrPosition]="\'bottom-middle\'" *clrIfOpen>\n                    Lorem ipsum...\n                </clr-signpost-content>\n            </clr-signpost>\n        </div>\n        <div class="signpost-item">\n            <h6>Button Link</h6>\n            <div class="trigger-item">\n                <clr-signpost>\n                    <button class="btn btn-link" \n                            clrSignpostTrigger>\n                                Button Link Trigger\n                    </button>\n                    <clr-signpost-content [clrPosition]="\'top-middle\'" *clrIfOpen>\n                        Lorem ipsum...\n                    </clr-signpost-content>\n                </clr-signpost>\n            </div>\n        </div>\n        <div class="signpost-item">\n            <h6>Button Link w/ Clarity Icon</h6>\n            <div class="trigger-item">\n                <clr-signpost>\n                    <button class="btn btn-link" \n                            clrSignpostTrigger>\n                                Button Link \n                                <clr-icon shape="help-info"></clr-icon>\n                    </button>\n                    <clr-signpost-content [clrPosition]="\'bottom-middle\'" *clrIfOpen>\n                        Lorem ipsum...\n                    </clr-signpost-content>\n                </clr-signpost>\n            </div>\n        </div>\n    </div>\n</div>\n',n}return Object(d.b)(n,l),n}(h.a),N=t.Ma({encapsulation:0,styles:[a],data:{}});function C(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,2,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,o.lb,o.M)),t.Na(1,8568832,null,0,s.kb,[t.p,[2,s.Ed],s.r],{position:[0,"position"]},null),(l()(),t.gb(-1,0,[" Lorem ipsum... "]))],function(l,n){l(n,1,0,"bottom-middle")},function(l,n){l(n,0,0,!0,t.Ya(n,1).isOffScreen)})}function T(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,2,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,o.lb,o.M)),t.Na(1,8568832,null,0,s.kb,[t.p,[2,s.Ed],s.r],{position:[0,"position"]},null),(l()(),t.gb(-1,0,[" Lorem ipsum... "]))],function(l,n){l(n,1,0,"top-middle")},function(l,n){l(n,0,0,!0,t.Ya(n,1).isOffScreen)})}function D(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,2,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,o.lb,o.M)),t.Na(1,8568832,null,0,s.kb,[t.p,[2,s.Ed],s.r],{position:[0,"position"]},null),(l()(),t.gb(-1,0,[" Lorem ipsum... "]))],function(l,n){l(n,1,0,"bottom-middle")},function(l,n){l(n,0,0,!0,t.Ya(n,1).isOffScreen)})}function L(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,46,"div",[["class","signpost-triggers-wrapper"]],null,null,null,null,null)),(l()(),t.Oa(1,0,null,null,43,"div",[["class","signpost-trigger-demo"]],null,null,null,null,null)),(l()(),t.Oa(2,0,null,null,12,"div",[["class","signpost-item"]],null,null,null,null,null)),(l()(),t.Oa(3,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Clarity Icon"])),(l()(),t.Oa(5,0,null,null,9,"clr-signpost",[],[[2,"signpost",null]],null,null,o.mb,o.L)),t.db(6144,null,s.Ed,null,[t.k]),t.Na(7,49152,null,1,s.jb,[s.r],null,null),t.eb(335544320,1,{customTrigger:0}),t.db(512,null,s.ed,s.ed,[]),(l()(),t.Oa(10,0,null,0,2,"clr-icon",[["class","is-solid has-badge-info signpost-trigger"],["clrSignpostTrigger",""],["shape","avatar"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ya(l,12).onSignpostTriggerClick(u)&&e),e},null,null)),t.Na(11,16384,null,0,s.Ba,[],null,null),t.Na(12,147456,[[1,4]],0,s.mb,[s.ed,t.D,t.k],null,null),(l()(),t.Ga(16777216,null,0,1,null,C)),t.Na(14,147456,null,0,s.Ga,[s.ed,t.L,t.O],{open:[0,"open"]},null),(l()(),t.Oa(15,0,null,null,13,"div",[["class","signpost-item"]],null,null,null,null,null)),(l()(),t.Oa(16,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Button Link"])),(l()(),t.Oa(18,0,null,null,10,"div",[["class","trigger-item"]],null,null,null,null,null)),(l()(),t.Oa(19,0,null,null,9,"clr-signpost",[],[[2,"signpost",null]],null,null,o.mb,o.L)),t.db(6144,null,s.Ed,null,[t.k]),t.Na(21,49152,null,1,s.jb,[s.r],null,null),t.eb(335544320,2,{customTrigger:0}),t.db(512,null,s.ed,s.ed,[]),(l()(),t.Oa(24,0,null,0,2,"button",[["class","btn btn-link signpost-trigger"],["clrSignpostTrigger",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ya(l,25).onSignpostTriggerClick(u)&&e),e},null,null)),t.Na(25,147456,[[2,4]],0,s.mb,[s.ed,t.D,t.k],null,null),(l()(),t.gb(-1,null,[" Button Link Trigger "])),(l()(),t.Ga(16777216,null,0,1,null,T)),t.Na(28,147456,null,0,s.Ga,[s.ed,t.L,t.O],{open:[0,"open"]},null),(l()(),t.Oa(29,0,null,null,15,"div",[["class","signpost-item"]],null,null,null,null,null)),(l()(),t.Oa(30,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Button Link w/ Clarity Icon"])),(l()(),t.Oa(32,0,null,null,12,"div",[["class","trigger-item"]],null,null,null,null,null)),(l()(),t.Oa(33,0,null,null,11,"clr-signpost",[],[[2,"signpost",null]],null,null,o.mb,o.L)),t.db(6144,null,s.Ed,null,[t.k]),t.Na(35,49152,null,1,s.jb,[s.r],null,null),t.eb(335544320,3,{customTrigger:0}),t.db(512,null,s.ed,s.ed,[]),(l()(),t.Oa(38,0,null,0,4,"button",[["class","btn btn-link signpost-trigger"],["clrSignpostTrigger",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ya(l,39).onSignpostTriggerClick(u)&&e),e},null,null)),t.Na(39,147456,[[3,4]],0,s.mb,[s.ed,t.D,t.k],null,null),(l()(),t.gb(-1,null,[" Button Link "])),(l()(),t.Oa(41,0,null,null,1,"clr-icon",[["shape","help-info"]],null,null,null,null,null)),t.Na(42,16384,null,0,s.Ba,[],null,null),(l()(),t.Ga(16777216,null,0,1,null,D)),t.Na(44,147456,null,0,s.Ga,[s.ed,t.L,t.O],{open:[0,"open"]},null),(l()(),t.Oa(45,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),t.Na(46,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,14,0,null),l(n,28,0,null),l(n,44,0,null),l(n,46,0,u.html,"html")},function(l,n){l(n,5,0,!0),l(n,19,0,!0),l(n,33,0,!0)})}var P=function(l){function n(){var n=l.call(this,"signposts")||this;return n.openState=!1,n.html='\n<clr-signpost>\n    <clr-signpost-content *clrIfOpen>\n        <h3>Default Signpost</h3>\n        <p>Position: <code class="clr-code">right-middle</code></p>\n    </clr-signpost-content>\n</clr-signpost>\n    ',n}return Object(d.b)(n,l),n}(h.a),I=t.Ma({encapsulation:0,styles:[a],data:{}});function Y(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,7,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,o.lb,o.M)),t.Na(1,8568832,null,0,s.kb,[t.p,[2,s.Ed],s.r],null,null),(l()(),t.Oa(2,0,null,0,1,"h3",[["style","margin-top: 0"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Default Signpost"])),(l()(),t.Oa(4,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Position: "])),(l()(),t.Oa(6,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["right-middle"]))],null,function(l,n){l(n,0,0,!0,t.Ya(n,1).isOffScreen)})}function j(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,198,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),t.Na(1,49152,null,0,r.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),t.Oa(2,0,null,0,196,"article",[],null,null,null,null,null)),(l()(),t.Oa(3,0,null,null,1,"h5",[["class","component-summary"],["id","a-signpost-description"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["The signpost is a convenient, lightweight way to show contextual help of information without taking the user out of the current context."])),(l()(),t.Oa(5,0,null,null,71,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),t.Oa(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Examples"])),(l()(),t.Oa(8,0,null,null,3,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Oa(9,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),t.Oa(10,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),t.Oa(11,0,null,null,0,"img",[["alt","basic and pie chart"],["src","assets/images/documentation/signposts/basic-and-pie-chart.svg"]],null,null,null,null,null)),(l()(),t.Oa(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Description"])),(l()(),t.Oa(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["A signpost displays contextual help or information in a popover dialog. Like a tooltip, it has an arrow/pointer that extends out to the trigger element, but the dialog is larger to fit more content. Signposts are designed to show a relatively small amount of content which may include: a title, images, text links of image links. A vertical scrollbar (browser default) may be used if the content exceeds the maximum height of the dialog."])),(l()(),t.Oa(16,0,null,null,1,"h5",[["style","margin: 24px 0 12px;"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Size"])),(l()(),t.Oa(18,0,null,null,4,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Oa(19,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Min-width 216px; Min-height 84px"])),(l()(),t.Oa(21,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Max-width 360px; Max-height 504px"])),(l()(),t.Oa(23,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Usage"])),(l()(),t.Oa(25,0,null,null,1,"p",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Signposts should be used when you want to show a small amount of contextual help of information without taking the user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding detail."])),(l()(),t.Oa(27,0,null,null,6,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Oa(28,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["When the amount of content won't fit in a tooltip"])),(l()(),t.Oa(30,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["When you want to include a header, image or text/image links in the content"])),(l()(),t.Oa(32,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["When the information presented needs to stay in view at length (Unlike tooltips, signposts stay in view until the user interacts with another element) "])),(l()(),t.Oa(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Interaction"])),(l()(),t.Oa(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Clicking the icon triggers the signpost. It remains visible until the user clicks the close icon or clicks anywhere outside of the dialog to dismiss it. To keep the interface uncluttered, only one signpost is displayed at a time. When a dialog is visible, clicking an icon to open another one automatically dismisses the previous dialog."])),(l()(),t.Oa(38,0,null,null,3,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Oa(39,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),t.Oa(40,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),t.Oa(41,0,null,null,0,"img",[["alt",""],["src","assets/images/documentation/signposts/states.svg"]],null,null,null,null,null)),(l()(),t.Oa(42,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Trigger icon and dialog positioning"])),(l()(),t.Oa(44,0,null,null,6,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Oa(45,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),t.Oa(46,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),t.Oa(47,0,null,null,0,"img",[["alt",""],["src","assets/images/documentation/signposts/positioning.svg"]],null,null,null,null,null)),(l()(),t.Oa(48,0,null,null,2,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),t.Oa(49,0,null,null,1,"p",[["style","margin-top: 12px;"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Default postion for the dialog is 6px to the right of the trigger icon."])),(l()(),t.Oa(51,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Oa(52,0,null,null,5,"div",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),t.Oa(53,0,null,null,4,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Oa(54,0,null,null,0,"img",[["alt","Signposts inline alignment"],["class","clrweb-Img"],["src","assets/images/documentation/signposts/inline-alignment.svg"]],null,null,null,null,null)),(l()(),t.Oa(55,0,null,null,2,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),t.Oa(56,0,null,null,1,"p",[["style","margin-top: 12px;"]],null,null,null,null,null)),(l()(),t.gb(-1,null,[" Default position for the dialog is 6px from the end of the text "])),(l()(),t.Oa(58,0,null,null,5,"div",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),t.Oa(59,0,null,null,4,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Oa(60,0,null,null,0,"img",[["alt","Signpost in column alignment"],["class","clrweb-Img"],["src","assets/images/documentation/signposts/column-alignment.svg"]],null,null,null,null,null)),(l()(),t.Oa(61,0,null,null,2,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),t.Oa(62,0,null,null,1,"p",[["style","margin-top: 12px;"]],null,null,null,null,null)),(l()(),t.gb(-1,null,[" In tables, the icons may be aligned in a column "])),(l()(),t.Oa(64,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Recommendations"])),(l()(),t.Oa(66,0,null,null,10,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Oa(67,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["The popover should not be so large that it dominates the screen"])),(l()(),t.Oa(69,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Make sure that the popover doesn't obstruct other important information on the screen"])),(l()(),t.Oa(71,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["With the exception of text/image links, don't insert any actionable components, such as buttons, in the dialog "])),(l()(),t.Oa(73,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Don't rely on signposts as a primary method of displaying additional information - i.e. as a way to save space on a page "])),(l()(),t.Oa(75,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.gb(-1,null,[" Use sparingly as a device to add immediate, relevant information "])),(l()(),t.Oa(77,0,null,null,121,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),t.Oa(78,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Code & Examples"])),(l()(),t.Oa(80,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,[" The signpost component uses the "])),(l()(),t.Oa(82,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["*clrIfOpen"])),(l()(),t.gb(-1,null,[" structural directive (detailed documentation coming soon) on the signpost content to indicate clearly that said content is only present in the DOM when open. We heavily recommend using it for many reasons: better performance, making the intent clear in your own templates, and following a more natural lifecycle for any directives or components inside of the signpost. "])),(l()(),t.Oa(85,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,[" If for some reason this behavior was not the one you wanted, for instance if you want screenreaders to read the signpost inline as opposed to when the user activates the trigger, we also support the signpost content without a "])),(l()(),t.Oa(87,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["*clrIfOpen"])),(l()(),t.gb(-1,null,[" directive on it. It will be created eagerly when the signpost itself initializes, and will not be destroyed or recreated until the signpost itself is. Please make sure you know exactly why you are omitting this directive if you end up doing so. "])),(l()(),t.Oa(90,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["The default signpost is shown to the right of the trigger icon with the content centered vertically in the middle of the trigger. It opens with a click action. Once open its contents can be interacted with. The Signpost is closed when clicking on the "])),(l()(),t.Oa(92,0,null,null,1,"clr-icon",[["shape","close"]],null,null,null,null,null)),t.Na(93,16384,null,0,s.Ba,[],null,null),(l()(),t.gb(-1,null,[" icon or by clicking anywhere outside the "])),(l()(),t.Oa(95,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["clr-signpost-content"])),(l()(),t.gb(-1,null,[" element. "])),(l()(),t.Oa(98,0,null,null,7,"div",[["class","signpost-default"]],null,null,null,null,null)),(l()(),t.Oa(99,0,null,null,6,"clr-signpost",[],[[2,"signpost",null]],null,null,o.mb,o.L)),t.db(6144,null,s.Ed,null,[t.k]),t.Na(101,49152,null,1,s.jb,[s.r],null,null),t.eb(335544320,1,{customTrigger:0}),t.db(512,null,s.ed,s.ed,[]),(l()(),t.Ga(16777216,null,0,1,null,Y)),t.Na(105,147456,null,0,s.Ga,[s.ed,t.L,t.O],{open:[0,"open"]},null),(l()(),t.Oa(106,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),t.Na(107,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),t.Oa(108,0,null,null,1,"clr-signpost-paragraph-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,O,m)),t.Na(109,49152,null,0,b,[],null,null),(l()(),t.Oa(110,0,null,null,1,"h3",[["id","signposts-positions"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Signpost positions"])),(l()(),t.Oa(112,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,[" There are twelve signpost positions to help place the popover in an appropriate position when shown. You control the position and direction by declaring a position that orients your that Signpost content as you see fit. On a "])),(l()(),t.Oa(114,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["clr-signpost-content"])),(l()(),t.gb(-1,null,[" component add the input "])),(l()(),t.Oa(117,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["[clrPosition]=\"'position'\""])),(l()(),t.gb(-1,null,[" where position is one of the following: "])),(l()(),t.Oa(120,0,null,null,16,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Oa(121,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Oa(122,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["top-X: "])),(l()(),t.gb(-1,null,[" the arrow will point down and the popover will be above the trigger in the X position where X = left, middle or right "])),(l()(),t.Oa(125,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Oa(126,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["bottom-X: "])),(l()(),t.gb(-1,null,[" the arrow will point up and the popover will be below the trigger in the X position where X = left, middle or right "])),(l()(),t.Oa(129,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Oa(130,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["left-X: "])),(l()(),t.gb(-1,null,[" the arrow will point right and the popover will be left of the trigger in the X position where X = top, middle or bottom "])),(l()(),t.Oa(133,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Oa(134,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["right-X: "])),(l()(),t.gb(-1,null,[" the arrow will point left and the popover will be right of the trigger in the X position where X = top, middle or bottom "])),(l()(),t.Oa(137,0,null,null,1,"clr-signpost-positions-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,S,x)),t.Na(138,49152,null,0,y,[],null,null),(l()(),t.Oa(139,0,null,null,1,"h3",[["id","custom-triggers"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Custom Triggers"])),(l()(),t.Oa(141,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["We provide a default trigger but you can add one yourself. The signpost component provides the "])),(l()(),t.Oa(143,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["clrSignpostTrigger"])),(l()(),t.gb(-1,null,[" attribute directive that can be added to the "])),(l()(),t.Oa(146,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["clr-signpost-content"])),(l()(),t.gb(-1,null,[" child. To control the position of your signpost, add "])),(l()(),t.Oa(149,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,['[clrPosition]="position"'])),(l()(),t.gb(-1,null,[" so that it knows how the Signpost should point."])),(l()(),t.Oa(152,0,null,null,1,"clr-signpost-triggers-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,L,N)),t.Na(153,49152,null,0,M,[],null,null),(l()(),t.Oa(154,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Summary of Options"])),(l()(),t.Oa(156,0,null,null,42,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.Oa(157,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.Oa(158,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.Oa(159,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Input/Output"])),(l()(),t.Oa(161,0,null,null,1,"th",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Values"])),(l()(),t.Oa(163,0,null,null,1,"th",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Default"])),(l()(),t.Oa(165,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Effect"])),(l()(),t.Oa(167,0,null,null,31,"tbody",[],null,null,null,null,null)),(l()(),t.Oa(168,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.Oa(169,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.Oa(170,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["[clrPosition]"])),(l()(),t.Oa(172,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Type: string"])),(l()(),t.Oa(174,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Default: right-middle"])),(l()(),t.Oa(176,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["string"])),(l()(),t.Oa(178,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["right-middle"])),(l()(),t.Oa(180,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.gb(-1,null,[" Set the position of the "])),(l()(),t.Oa(182,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["clr-signpost-content"])),(l()(),t.gb(-1,null,[' popover: anchorPoint & popoverPosition. For example: "right-middle" (ANCHOR-POSITION) will anchor the clr-signpost-content popover and point to the icons middle on the right side. And, the popover itself will be positioned to the right of the trigger icon with the icon in the vertical middle of the popover. '])),(l()(),t.Oa(185,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t.Oa(186,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.Oa(187,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["clrSignpostTrigger"])),(l()(),t.Oa(189,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Type: SignpostTriggerDirective"])),(l()(),t.Oa(191,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Default: n/a"])),(l()(),t.Oa(193,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["SignpostTriggerDirective"])),(l()(),t.Oa(195,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["n/a"])),(l()(),t.Oa(197,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.gb(-1,null,[" The SignpostTriggerDirective is placed on the outer-most container element for a custom trigger. It overrides the default Signpost trigger with custom content. "]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,105,0,null),l(n,107,0,u.html,"html")},function(l,n){l(n,0,0,!0),l(n,99,0,!0),l(n,108,0,!0,!0),l(n,137,0,!0,!0),l(n,152,0,!0,!0)})}var X=t.Ka("clr-tooltips-demo",P,function(l){return t.ib(0,[(l()(),t.Oa(0,0,null,null,1,"clr-tooltips-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,j,I)),t.Na(1,49152,null,0,P,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),E=u("ZYCi"),G=u("XPsC"),B=u("JsA7");u.d(n,"SignpostDemoModuleNgFactory",function(){return F});var F=t.La(e,[],function(l){return t.Va([t.Wa(512,t.j,t.Ba,[[8,[o.Ib,o.a,o.b,o.c,o.d,o.e,o.f,o.g,o.Hb,i.a,X]],[3,t.j],t.v]),t.Wa(4608,v.p,v.o,[t.s,[2,v.H]]),t.Wa(4608,w.B,w.B,[]),t.Wa(4608,s.hc,s.hc,[]),t.Wa(5120,s.kd,s.ld,[[3,s.kd]]),t.Wa(1073742336,v.b,v.b,[]),t.Wa(1073742336,w.y,w.y,[]),t.Wa(1073742336,w.j,w.j,[]),t.Wa(1073742336,s.Ca,s.Ca,[]),t.Wa(1073742336,s.ic,s.ic,[]),t.Wa(1073742336,s.Fd,s.Fd,[]),t.Wa(1073742336,s.U,s.U,[]),t.Wa(1073742336,s.d,s.d,[]),t.Wa(1073742336,s.W,s.W,[]),t.Wa(1073742336,s.q,s.q,[]),t.Wa(1073742336,s.Pd,s.Pd,[]),t.Wa(1073742336,s.p,s.p,[]),t.Wa(1073742336,s.Rd,s.Rd,[]),t.Wa(1073742336,s.N,s.N,[]),t.Wa(1073742336,s.Ja,s.Ja,[]),t.Wa(1073742336,s.ab,s.ab,[]),t.Wa(1073742336,s.eb,s.eb,[]),t.Wa(1073742336,s.ib,s.ib,[]),t.Wa(1073742336,s.Cb,s.Cb,[]),t.Wa(1073742336,s.Z,s.Z,[]),t.Wa(1073742336,s.Pa,s.Pa,[]),t.Wa(1073742336,s.sc,s.sc,[]),t.Wa(1073742336,s.cd,s.cd,[]),t.Wa(1073742336,s.F,s.F,[]),t.Wa(1073742336,s.tb,s.tb,[]),t.Wa(1073742336,s.n,s.n,[]),t.Wa(1073742336,s.Y,s.Y,[]),t.Wa(1073742336,s.Ib,s.Ib,[]),t.Wa(1073742336,s.u,s.u,[]),t.Wa(1073742336,s.Ua,s.Ua,[]),t.Wa(1073742336,s.Oa,s.Oa,[]),t.Wa(1073742336,s.i,s.i,[]),t.Wa(1073742336,s.j,s.j,[]),t.Wa(1073742336,s.Sa,s.Sa,[]),t.Wa(1073742336,s.Xa,s.Xa,[]),t.Wa(1073742336,s.md,s.md,[]),t.Wa(1073742336,s.zb,s.zb,[]),t.Wa(1073742336,s.Ob,s.Ob,[]),t.Wa(1073742336,s.La,s.La,[]),t.Wa(1073742336,s.lb,s.lb,[]),t.Wa(1073742336,s.Fb,s.Fb,[]),t.Wa(1073742336,s.bb,s.bb,[]),t.Wa(1073742336,s.Tb,s.Tb,[]),t.Wa(1073742336,s.a,s.a,[]),t.Wa(1073742336,E.o,E.o,[[2,E.u],[2,E.l]]),t.Wa(1073742336,G.a,G.a,[]),t.Wa(1073742336,B.a,B.a,[]),t.Wa(1073742336,e,e,[]),t.Wa(1024,E.j,function(){return[[{path:"",component:P}]]},[])])})}}]);