H.util.eval("var Hk={};function Ik(a){var b=a.ownerDocument,b=b.documentElement||b.body.parentNode||b.body,c;try{c=a.getBoundingClientRect()}catch(d){c={top:0,right:0,bottom:0,left:0,height:0,width:0}}return{x:c.left+(\"number\"===typeof window.pageXOffset?window.pageXOffset:b.scrollLeft),y:c.top+(\"number\"===typeof window.pageYOffset?window.pageYOffset:b.scrollTop)}}var Jk=/Edge\\/\\d+/.test(navigator.appVersion),Kk=Function(\"return this\")();function Lk(a,b,c,d,e,f,g){Lk.v.constructor.call(this,a);this.pointers=b;this.changedPointers=c;this.targetPointers=d;this.currentPointer=e;this.originalEvent=g;this.target=f}v(Lk,sc);q(\"H.mapevents.Event\",Lk);function Mk(a,b,c,d,e,f){if(isNaN(a))throw Error(\"x needs to be a number\");if(isNaN(b))throw Error(\"y needs to be a number\");if(isNaN(c))throw Error(\"pointer must have an id\");this.viewportX=a;this.viewportY=b;this.target=null;this.id=c;this.type=d;this.dragTarget=null;this.a=this.button=e!==A?e:-1;this.buttons=f!==A?f:0}q(\"H.mapevents.Pointer\",Mk);\nfunction Nk(a,b,c){if(isNaN(b))throw Error(\"x needs to be a number\");if(isNaN(c))throw Error(\"y needs to be a number\");a.viewportX=b;a.viewportY=c}Mk.prototype.c=function(){return this.a};Mk.prototype.getLastChangedButton=Mk.prototype.c;function Ok(a,b){a.a=b;a.buttons|=Mk.prototype.b[+b]||0}function Pk(a,b){a.a=b;a.buttons&=~(Mk.prototype.b[+b]||0)}Mk.prototype.b=[1,4,2];var Qk={NONE:-1,LEFT:0,MIDDLE:1,RIGHT:2};Mk.Button=Qk;function Rk(a){this.a=a instanceof Array?a.slice(0):[]}p=Rk.prototype;p.clear=function(){this.a.splice(0,this.a.length)};p.length=function(){return this.a.length};p.indexOf=function(a){for(var b=this.a.length;b--;)if(this.a[b].id===a)return b;return-1};function Sk(a,b){var c=a.indexOf(b);return-1!==c?a.a[c]:null}p.remove=function(a){a=this.indexOf(a);return-1!==a?this.a.splice(a,1)[0]:null};function Tk(a,b){for(var c=a.a.length,d=[];c--;)a.a[c].type!==b&&d.push(a.a[c]);a.a=d}\nfunction Uk(a,b){for(var c=a.a.length;c--;)if(a.a[c].dragTarget===b)return!0;return!1}p.push=function(a){if(a instanceof Mk)return this.a.push(a);throw Error(\"list needs a pointer\");};p.clone=function(){return new Rk(this.a)};function Vk(a,b,c){c=c||{};if(!(a instanceof R))throw Error(\"events: map instance required\");if(!(b instanceof Array))throw Error(\"events: map array required\");oc.call(this);this.F=c.Vh||300;this.L=c.Uh||50;this.da=c.Yh||50;this.T=c.Zh||500;this.I=c.Xh||900;this.O=c.Wh||50;this.map=a;this.l=this.map.ra;this.i=this.l.element;this.A=b;this.a=new Rk;this.c=new Rk;this.j={};this.f=null;this.s=!0;this.u={};this.o={};this.m=null;this.Gc=z(this.Gc,this);this.M={pointerdown:this.Qg,pointermove:this.Rg,pointerup:this.Sg,\npointercancel:this.Pg};Wk(this)}v(Vk,oc);function Wk(a,b){for(var c,d,e=0,f=a.A.length,e=0;e<f;e++)d=a.A[e],c=d.listener,\"function\"===typeof c&&(b?(d.target||a.i).removeEventListener(d.Da,c):(d.target||a.i).addEventListener(d.Da,c))}\nfunction Xk(a,b,c){var d,e=a.M[b],f,g;if(\"function\"===typeof e)for(\"pointermove\"!==b&&(a.s=!0),f=0,g=a.c.length();f<g;f++)b=a.c.a[f],a.i.contains(c.target)?(d=a,d=d.f===b?b.target:0<=b.viewportX&&b.viewportX<d.l.width&&0<=b.viewportY&&b.viewportY<d.l.height?d.map.s(b.viewportX,b.viewportY)||d.map:null):d=null,Yk(b.id,a.u),e.call(a,b,d,c);a.c.clear()}p=Vk.prototype;\np.Sg=function(a,b,c){a.target=b;Zk(this,a,c);$k(this,b,\"pointerup\",c,a);\"mouse\"!==a.type&&$k(this,b,\"pointerleave\",c,a);b=this.j[a.id];var d={x:a.viewportX,y:a.viewportY},e=c.timeStamp,f=a.target,g=this.m;b&&b.target===f&&b.$d.distance(d)<this.da&&e-b.We<this.T?($k(this,f,\"tap\",c,a),g&&g.target===f&&e-g.We<this.F?g.$d.distance({x:a.viewportX,y:a.viewportY})<this.L&&($k(this,f,\"dbltap\",c,a),this.m=null):this.m={target:f,$d:new L(a.viewportX,a.viewportY),We:c.timeStamp}):this.m=null;this.j={};Yk(a.id,\nthis.o)};function Zk(a,b,c){b===a.f&&($k(a,b.dragTarget,\"dragend\",c,b),a.f=null,Yk(b.id,a.u));b.dragTarget=null}p.Gc=function(a,b){var c=this;$k(this,a.dragTarget,\"drag\",b,a);Yk(a.id,this.u);this.u[a.id]=setTimeout(function(){c.Gc(a,b)},150)};function Yk(a,b){b[a]&&(clearTimeout(b[a]),delete b[a])}\nfunction al(a,b,c){var d=b.target,e=new L(b.viewportX,b.viewportY),f=b.id;Yk(f,a.o);a.o[f]=setTimeout(function(){d&&d===b.target&&e.distance({x:b.viewportX,y:b.viewportY})<a.O&&($k(a,d,\"longpress\",c,b),delete a.j[b.id])},a.I)}\np.Rg=function(a,b,c){var d=a.dragTarget,e=a.id,f;f=a.target;a.target=b;f!==b&&($k(this,f,\"pointerleave\",c,a),$k(this,b,\"pointerenter\",c,a));d?this.f?this.Gc(a,c):this.s?this.s=!1:(this.f=a,$k(this,d,\"dragstart\",c,a),this.Gc(a,c),delete this.j[e],this.s=!0):(!this.f||this.f&&this.f.dragTarget!==b&&this.f.dragTarget!==this.map)&&$k(this,b,\"pointermove\",c,a)};\np.Qg=function(a,b,c){var d=!(/^(?:mouse|pen)$/.test(a.type)&&0!==c.button),e;b&&(a.target=b,this.j[a.id]={$d:new L(a.viewportX,a.viewportY),target:a.target,We:c.timeStamp},\"mouse\"!==a.type&&$k(this,b,\"pointerenter\",c,a),e=$k(this,b,\"pointerdown\",c,a),!this.f&&d&&(b.draggable&&!Uk(this.a,b)?a.dragTarget=b:!this.map.draggable||e.defaultPrevented||Uk(this.a,this.map)||(a.dragTarget=this.map)),al(this,a,c))};\np.Pg=function(a,b,c){a.target=null;b?($k(this,b,\"pointerleave\",c,a),$k(this,b,\"pointercancel\",c,a)):$k(this,this.map,\"pointercancel\",c,a);Zk(this,a,c);this.j={};Yk(a.id,this.o)};function $k(a,b,c,d,e){var f;if(b&&\"function\"===typeof b.dispatchEvent){f=Lk;var g=a.a.a,h=a.c.a;a=a.a;var k,l=a.a.length,m=[];for(k=0;k<l;k++)a.a[k].target===b&&m.push(a.a[k]);f=new f(c,g,h,m,e,b,d);e.button=/^(?:longpress|(?:dbl)?tap|pointer(?:down|up))$/.test(c)?e.a:Qk.NONE;b.dispatchEvent(f)}return f}\np.D=function(){Wk(this,!0);this.a.clear();this.c.clear();var a=this.u,b;for(b in a)Yk(b,a);var a=this.o,c;for(c in a)Yk(c,a);this.f=this.j=this.m=this.map=this.c=this.a=this.A=this.b=null;oc.prototype.D.call(this)};function bl(a){this.g=z(this.g,this);Vk.call(this,a,[{Da:\"touchstart\",listener:this.g},{Da:\"touchmove\",listener:this.g},{Da:\"touchend\",listener:this.g},{Da:\"touchcancel\",listener:this.g}]);this.C={touchstart:\"pointerdown\",touchmove:\"pointermove\",touchend:\"pointerup\",touchcancel:\"pointercancel\"};this.B=(a=(a=a.l)?a.b:null)?Array.prototype.slice.call(a.querySelectorAll(\"a\"),0):[]}v(bl,Vk);\nbl.prototype.g=function(a){var b=a.touches,c=this.a.length(),d;if(\"touchstart\"===a.type&&c>=b.length){c=this.a.clone();for(d=b.length;d--;)c.remove(b[d].identifier);for(d=c.length();d--;)this.a.remove(c.a[d].id);this.c=c;Xk(this,\"pointercancel\",a);this.c.clear()}if(this.C[a.type]){b=Ik(this.l.element);c=a.type;d=a.changedTouches;var e=d.length,f,g,h,k,l,m;this.c.clear();for(m=0;m<e;m++)if(h=d[m],l=Sk(this.a,h.identifier),f=h.pageX-b.x,g=h.pageY-b.y,l)if(\"touchmove\"===c){if(h=Math.abs(l.viewportX-\nf),k=Math.abs(l.viewportY-g),1<h||1<k||1===h&&1===k)Nk(l,f,g),this.c.push(l)}else\"touchend\"===c&&(this.a.remove(l.id),this.c.push(l),Pk(l,Qk.LEFT));else l=new Mk(f,g,h.identifier,\"touch\",Qk.LEFT,1),this.a.push(l),this.c.push(l);Xk(this,this.C[a.type],a);-1===this.B.indexOf(a.target)&&a.preventDefault()}};bl.prototype.D=function(){this.B=null;Vk.prototype.D.call(this)};function cl(a){var b=[],b=dl(this);(navigator.pointerEnabled||navigator.msPointerEnabled)&&b.push({Da:\"MSHoldVisual\",listener:\"prevent\"});Vk.call(this,a,b)}v(cl,Vk);function dl(a){var b=navigator.pointerEnabled,c,d,e=[];a.g=z(a.g,a);\"MSPointerDown MSPointerMove MSPointerUp MSPointerCancel MSPointerOut MSPointerOver\".split(\" \").forEach(function(f){c=f.toLowerCase().replace(/ms/g,\"\");d=b?c:f;e.push({Da:d,listener:a.g,target:\"MSPointerUp\"===f||\"MSPointerMove\"===f?window:null})});return e}\nvar el={2:\"touch\",3:\"pen\",4:\"mouse\"};\ncl.prototype.g=function(a){var b=navigator.th?a.type:a.type.toLowerCase().replace(/ms/g,\"\"),c=Ik(this.i),d=Sk(this.a,a.pointerId),e=a.pageX-c.x,c=a.pageY-c.y,f=el[a.pointerType]||a.pointerType;Jk&&\"rtl\"===w.getComputedStyle(this.l.element).direction&&(e-=(w.devicePixelRatio-1)*this.l.width);if(!(d||b in{pointerup:1,pointerout:1,pointercancel:1}||\"touch\"===f&&\"pointerdown\"!==b)){var d={x:e,y:c},g=a.pointerType;\"number\"===typeof g&&(g=el[g]);d=new Mk(d.x,d.y,a.pointerId,g,a.button,a.buttons);this.a.push(d)}d&&\n(b in{pointerup:1,pointercancel:1}?(\"touch\"===f&&this.a.remove(d.id),Pk(d,a.button)):\"pointerdown\"===b&&(\"touch\"===a.pointerType&&(Tk(this.a,\"mouse\"),Tk(this.a,\"pen\")),Ok(d,a.button)),this.c.push(d),\"pointermove\"!==b?(Nk(d,e,c),Xk(this,\"pointerout\"===b||\"pointerover\"===b?\"pointermove\":b,a)):d.viewportX===e&&d.viewportY===c||a.target===document.documentElement||(Nk(d,e,c),Xk(this,b,a)));this.c.clear()};function fl(a,b,c,d){fl.v.constructor.call(this,\"contextmenu\");this.items=[];this.viewportX=a;this.viewportY=b;this.target=c;this.originalEvent=d}v(fl,sc);q(\"H.mapevents.ContextMenuEvent\",fl);function gl(a){this.je=z(this.je,this);this.le=z(this.le,this);this.ke=z(this.ke,this);this.B=!1;this.g=-1;this.C=0;gl.v.constructor.call(this,a,[{Da:\"contextmenu\",listener:this.je},{target:a,Da:\"longpress\",listener:this.le},{target:a,Da:\"dbltap\",listener:this.ke}])}v(gl,Vk);p=gl.prototype;p.le=function(a){var b=a.currentPointer;\"touch\"===b.type&&1===a.pointers.length&&hl(this,b.viewportX,b.viewportY,a.originalEvent,a.target)};p.ke=function(a){\"touch\"===a.currentPointer.type&&(this.C=Date.now())};\np.je=function(a){var b=this;-1===this.g?this.g=setTimeout(function(){var c=Ik(b.i),d=a.pageX-c.x,c=a.pageY-c.y;b.g=-1;hl(b,d,c,a)},this.F):(clearInterval(this.g),this.g=-1);a.preventDefault()};function hl(a,b,c,d,e){var f=a.map;e=e||f.s(b,c)||f;var g=Date.now()-a.C;!a.B&&g>a.I&&(a.B=!0,e.dispatchEvent(new fl(b,c,e,d)),Kh(f.b,a.ef,a.uf,!1,a))}p.ef=[\"mousedown\",\"touchstart\",\"pointerdown\",\"wheel\"];p.uf=function(){this.B&&(this.B=!1,this.map.dispatchEvent(new sc(\"contextmenuclose\",this.map)))};\np.D=function(){var a=this.map.b;clearInterval(this.g);a&&Mh(a,this.ef,this.uf,!1,this);Vk.prototype.D.call(this)};function il(a,b,c,d,e){il.v.constructor.call(this,\"wheel\");this.delta=a;this.viewportX=b;this.viewportY=c;this.target=d;this.originalEvent=e}v(il,sc);q(\"H.mapevents.WheelEvent\",il);function jl(a){var b=\"onwheel\"in document;this.G=b;this.C=(b?\"d\":\"wheelD\")+\"elta\";this.g=z(this.g,this);jl.v.constructor.call(this,a,[{Da:(b?\"\":\"mouse\")+\"wheel\",listener:this.g}]);this.B=this.map.ra}v(jl,Vk);\njl.prototype.g=function(a){var b=Ik(this.i),c;c=a.pageX-b.x;var b=a.pageY-b.y,d=this.C,e=a[d+(d+\"Y\"in a?\"Y\":\"\")],f,g,h;Jk&&\"rtl\"===w.getComputedStyle(this.B.element).direction&&(c-=(w.devicePixelRatio-1)*this.B.width);e&&(h=Math.abs,f=h(e),e=(!(g=a[d+\"X\"])||3<=f/h(g))&&(!(g=a[d+\"Z\"])||3<=f/h(g))?((0<e)-(0>e))*(this.G?1:-1):0);a=new il(e,c,b,null,a);a.delta&&((a.target=c=this.map.Ea(a.viewportX,a.viewportY)[0])&&ra(c.dispatchEvent)&&c.dispatchEvent(a),a.defaultPrevented||this.map.dispatchEvent(a))};function kl(a){var b=window;this.g=z(this.g,this);Vk.call(this,a,[{Da:\"mousedown\",listener:this.g},{Da:\"mousemove\",listener:this.g,target:b},{Da:\"mouseup\",listener:this.g,target:b},{Da:\"mouseover\",listener:this.g},{Da:\"mouseout\",listener:this.g},{Da:\"dragstart\",listener:this.B}])}v(kl,Vk);\nkl.prototype.g=function(a){var b=a.type,c=Ik(this.i),c={x:a.pageX-c.x,y:a.pageY-c.y},d;(d=this.a.a[0])||(d=new Mk(c.x,c.y,1,\"mouse\"),this.a.push(d));this.c.push(d);Nk(d,c.x,c.y);/^mouse(?:move|over|out)$/.test(b)?Xk(this,\"pointermove\",a):(/^mouse(down|up)$/.test(b)&&(c=a.which-1,\"up\"===Kk.RegExp.$1?Pk(d,c):Ok(d,c)),Xk(this,b.replace(\"mouse\",\"pointer\"),a));this.c.clear()};kl.prototype.B=function(a){a.preventDefault()};function ll(a){var b=a.ra.element.style;if(-1!==ml.indexOf(a))throw Error(\"InvalidArgument: map is already in use\");this.a=a;ml.push(a);b.msTouchAction=b.touchAction=\"none\";this.f=this.g=this.b=this.c=null;navigator.msPointerEnabled||navigator.pointerEnabled?this.c=new cl(this.a):(this.c=new bl(this.a),this.b=new kl(this.a));this.g=new jl(this.a);this.f=new gl(this.a);this.a.ub(this.J,this);oc.call(this)}v(ll,oc);q(\"H.mapevents.MapEvents\",ll);var ml=[];\nll.prototype.J=function(){this.a=null;this.c.J();this.g.J();this.f.J();this.b&&this.b.J();ml.splice(ml.indexOf(this.a),1);oc.prototype.J.call(this)};ll.prototype.dispose=ll.prototype.J;ll.prototype.j=function(){return this.a};ll.prototype.getAttachedMap=ll.prototype.j;function nl(a,b){if(-1!==ol.indexOf(a))throw new C(nl,0,\"events are already used\");var c=b||{},d;oc.call(this);this.a=d=a.a;this.m=a;ol.push(a);d.draggable=!0;this.j=c.kinetics||{duration:600,ee:Ri};this.i=7;this.enable(c.enabled||this.i);c=R.EngineType;this.c=d.ra;this.f=this.c.element;this.l=c.P2D;d.addEventListener(\"dragstart\",this.Mf,!1,this);d.addEventListener(\"drag\",this.cg,!1,this);d.addEventListener(\"dragend\",this.dg,!1,this);d.addEventListener(\"wheel\",this.fg,!1,this);d.addEventListener(\"dbltap\",\nthis.bg,!1,this);d.addEventListener(\"tap\",this.eg,!1,this);d.addEventListener(\"pointermove\",this.jg,!1,this);Lh(this.f,\"contextmenu\",this.ag,!1,this);a.ub(this.J,this)}v(nl,oc);q(\"H.mapevents.Behavior\",nl);var ol=[];nl.prototype.b=0;nl.DRAGGING=1;nl.WHEELZOOM=2;nl.DBLTAPZOOM=4;p=nl.prototype;\np.Mf=function(a){var b=a.pointers,c=this.c;a=b[0];b=b[1]||{};if(this.b&1&&(c.startInteraction(17,this.j),c.interaction(a.viewportX,a.viewportY,b.viewportX,b.viewportY),this.b&2)){c=a.viewportX;a=a.viewportY;var d;this.g&&(b=this.a.getZoom(),d=Math[0>this.g?\"ceil\":\"floor\"](b),b!==d&&(this.g=null,this.zoom(b,d,c,a)))}};p.cg=function(a){var b=a.pointers[0],c=a.pointers[1]||Hk;this.b&1&&(this.c.interaction(b.viewportX,b.viewportY,c.viewportX,c.viewportY),a.originalEvent.preventDefault())};\np.dg=function(){this.b&1&&this.c.endInteraction(!this.j)};p.zoom=function(a,b,c,d){var e=this.a.c;if(isNaN(+a))throw Error(\"start zoom needs to be a number\");if(isNaN(+b))throw Error(\"to zoom needs to be a number\");0!==+b-+a&&(e.startControl(null,c,d),e.control(0,0,.006),e.endControl(!0,function(a){a.zoom=b}))};\np.fg=function(a){var b,c,d,e;this.b&2&&(b=a.delta,c=this.a.getZoom(),e=Math[0>b?\"ceil\":\"floor\"](c-b),d=this.a,d.g().type===this.l?(this.zoom(c,e,a.viewportX,a.viewportY),this.g=b):(c=this.a.c.qb(),c.fov+=16*b,d.c.yb(c)),a.originalEvent.preventDefault())};p.eg=function(a){a=a.currentPointer;this.a.g().type===Xh&&(a=this.a.Na(a.viewportX,a.viewportY),this.a.c.yb(a))};p.jg=function(a){a=a.currentPointer;this.a.g().oa(a.viewportX,a.viewportY)};\np.bg=function(a){var b=a.currentPointer,c=this.a.getZoom(),d=a.currentPointer.type;this.l===this.a.g().type&&(a=\"mouse\"===d?0===a.originalEvent.button?-1:1:0<a.pointers.length?1:-1,a=Math[0>a?\"ceil\":\"floor\"](c-a),this.b&4&&this.zoom(c,a,b.viewportX,b.viewportY))};p.ag=function(a){return this.b&4?(a.preventDefault(),!1):!0};\np.J=function(){var a=this.a;a&&(a.draggable=!1,a.removeEventListener(\"dragstart\",this.Mf,!1,this),a.removeEventListener(\"drag\",this.cg,!1,this),a.removeEventListener(\"dragend\",this.dg,!1,this),a.removeEventListener(\"wheel\",this.fg,!1,this),a.removeEventListener(\"tap\",this.eg,!1,this),a.removeEventListener(\"dbltap\",this.bg,!1,this),a.removeEventListener(\"pointermove\",this.jg,!1,this),this.a=null);this.f&&(this.f.style.msTouchAction=\"\",Mh(this.f,\"contextmenu\",this.ag,!1,this),this.f=null);this.j=this.c=\nnull;ol.splice(ol.indexOf(this.m),1);oc.prototype.J.call(this)};nl.prototype.dispose=nl.prototype.J;nl.prototype.disable=function(a){this.c.endInteraction(!0);a?this.b&a&&(this.b-=a,a&1&&(this.a.draggable=!1)):(this.b=0,this.a.draggable=!1)};nl.prototype.disable=nl.prototype.disable;nl.prototype.enable=function(a){a?this.b&a||(this.b+=a,a&1&&(this.a.draggable=!0)):(this.b=this.i,this.a.draggable=!0)};nl.prototype.enable=nl.prototype.enable;\nnl.prototype.o=function(a){if(isNaN(a))throw Error(\"behavior: number required\");return!!(this.b&a)};nl.prototype.isEnabled=nl.prototype.o;q(\"H.mapevents.buildInfo\",function(){return Tg(\"mapsjs-mapevents\",\"0.13.1\",\"ea9cf99\")});\n");