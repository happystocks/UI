(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8SS5":function(e,t,r){"use strict";r.r(t),r.d(t,"AlertModule",(function(){return R}));var n=r("tyNb"),o=r("LvDl"),l=r("l5mm"),i=r("fXoL"),c=r("tk/3"),a=r("z6cu"),s=r("lJxs"),b=r("vkgz"),d=r("JIr8"),u=r("AytR");class p{}const m={headers:new c.d({"Content-Type":"application/json"})};let h=(()=>{class e{constructor(e){this.http=e,this.alertUrl=u.a.pvtApiUrl+"/alert"}getAll(){return this.http.get(this.alertUrl+"/all").pipe(Object(s.a)(e=>class{static mapAlertAttributes(e){let t=new p;return e&&(t.id=e._id,t.userId=e.user_id,t.userEmail=e.username,t.name=e.name,t.strikePrice=e.strike_price,t.symbol=e.symbol,t.companyName=e.name_of_company,t.status=e.status,t.condition=e.condition,t.lastUpdated=e.last_updated),t}static mapAlertList(e){let t=[];return e&&e.length>0&&e.forEach(e=>{t.push(this.mapAlertAttributes(e))}),t}}.mapAlertList(e)),Object(b.a)(e=>console.log(e)),Object(d.a)(e=>Object(a.a)(e)))}createAlert(e){const t=this.alertUrl+"/create",r=JSON.stringify({name:e.name,symbol:e.symbol,name_of_company:e.companyName,condition:e.condition,strike_price:e.strikePrice});return this.http.post(t,r,m).pipe(Object(b.a)(()=>console.log("Alert created successfully"),Object(d.a)(e=>Object(a.a)(e))))}updateAlert(e){const t=this.alertUrl+"/update",r=JSON.stringify({id:e.id,name:e.name,symbol:e.symbol,name_of_company:e.companyName,condition:e.condition,status:e.status,strike_price:e.strikePrice});return this.http.post(t,r,m).pipe(Object(b.a)(()=>console.log("Alert updated successfully"),Object(d.a)(e=>Object(a.a)(e))))}deleteAlert(e){const t=this.alertUrl+"/remove",r=JSON.stringify({id:e.id});return this.http.post(t,r,m).pipe(Object(b.a)(()=>console.log("watchlist removed successfully"),Object(d.a)(e=>Object(a.a)(e))))}handleError(){return e=>(ErrorEvent,Object(a.a)(e))}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(c.b))},e.\u0275prov=i.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=r("8hSh"),f=r("7ch9"),y=r("Jqv5"),v=r("ofXK"),k=r("3Pt+");const J=function(e,t,r){return{"bg-success":e,"bg-secondary":t,"brand-color-primary":r}};let K=(()=>{class e{constructor(){}ngOnChanges(e){this.alert&&this.ltpRecords&&(this.ltp=this.ltpRecords[this.alert.symbol][0].ltp,this.changePrcnt=this.ltpRecords[this.alert.symbol][0].change_prcnt)}ngOnInit(){console.log(this.alert),this.alert&&(this.alert.lastUpdated=new Date(this.alert.lastUpdated).toLocaleString())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Bb({type:e,selectors:[["app-alert-card"]],inputs:{alert:"alert",ltpRecords:"ltpRecords"},features:[i.vb],decls:25,vars:20,consts:[[1,"row","border","rounded","shadow"],[1,"col-md-1","py-4","px-3","text-white","d-flex","justify-content-center","align-items-center","status-container",3,"ngClass"],[1,"fs-5"],[1,"col-md-11","alert-details"],[1,"d-flex","flex-row","justify-content-between"],[1,"m-0","px-2","py-4","align-items-center"],[1,"fw-bold","grayed"],[1,"my-0","py-0","grayed"],[1,"m-0","px-2","py-4","text-center","align-items-center"],[1,"fs-4","grayed"],[1,"m-0","py-4","ltp-container"],[1,"mb-1","fs-5","fw-bold","grayed"],[1,"grayed"],[1,"fw-bold",3,"ngClass"]],template:function(e,t){1&e&&(i.Kb(0,"div",0),i.Kb(1,"div",1),i.Kb(2,"span",2),i.kc(3),i.Jb(),i.Jb(),i.Kb(4,"div",3),i.Kb(5,"div",4),i.Kb(6,"div",5),i.Kb(7,"h3",6),i.kc(8),i.Jb(),i.Kb(9,"p",7),i.kc(10),i.Jb(),i.Jb(),i.Kb(11,"div",8),i.Kb(12,"strong",9),i.kc(13),i.Jb(),i.Kb(14,"p"),i.kc(15),i.Jb(),i.Jb(),i.Kb(16,"div",10),i.Kb(17,"p",11),i.kc(18),i.Ub(19,"currency"),i.Jb(),i.Kb(20,"small",12),i.kc(21,"LTP : "),i.Kb(22,"span",13),i.kc(23),i.Ub(24,"currency"),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb()),2&e&&(i.xb(1),i.Xb("ngClass",i.cc(16,J,"Active"===t.alert.status,"Expired"===t.alert.status,"Hit"===t.alert.status)),i.xb(2),i.lc(t.alert.status),i.xb(5),i.lc(t.alert.name),i.xb(2),i.mc("Created on ",t.alert.lastUpdated,""),i.xb(3),i.lc(t.alert.symbol),i.xb(2),i.lc(t.alert.companyName),i.xb(3),i.nc("LTP ",t.alert.condition," ",i.Wb(19,10,t.alert.strikePrice,"INR"),""),i.xb(4),i.Xb("ngClass",t.changePrcnt>=0?"profit":"loss"),i.xb(1),i.lc(i.Wb(24,13,t.ltp,"INR")))},directives:[v.l],pipes:[v.c],styles:[".grayed[_ngcontent-%COMP%]{color:var(--primary-gray)}.ltp-container[_ngcontent-%COMP%]{border:2px solid var(--brand-color-secondary);border-radius:0 .25rem .25rem 0;box-shadow:0 0 2px var(--brand-color-secondary);padding-right:3rem;padding-left:1rem}.alert-details[_ngcontent-%COMP%]{padding-right:0}.brand-color-primary[_ngcontent-%COMP%]{background-color:var(--brand-color-primary)}.status-container[_ngcontent-%COMP%]{border-radius:.25rem 0 0 .25rem}.profit[_ngcontent-%COMP%]{color:#0c0}.loss[_ngcontent-%COMP%]{color:red}"]}),e})();var C=r("C+F7");let A=(()=>{class e{constructor(){}ngOnInit(){console.log(this.alert)}mapSymbolFromAutoComplete(e){this.alert.symbol=e.symbol}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Bb({type:e,selectors:[["app-edit-alert"]],inputs:{alert:"alert"},decls:24,vars:5,consts:[[1,"container"],[1,"mb-3"],["for","alert-name",1,"form-label"],["type","text","name","alert-name","id","alert-name","aria-describedby","alert-name",1,"form-control",3,"ngModel","ngModelChange"],["for","instrument",1,"form-label"],[3,"value","selectSymbol"],["for","priceComparator",1,"form-label"],[1,"form-check"],["type","radio","name","priceComparator","id","above","value","Above",1,"form-check-input",3,"ngModel","ngModelChange"],["for","above",1,"form-check-label"],["type","radio","name","priceComparator","id","below","value","Below",1,"form-check-input",3,"ngModel","ngModelChange"],["for","below",1,"form-check-label"],["type","number","id","price-input","name","price",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(i.Kb(0,"div",0),i.Kb(1,"form"),i.Kb(2,"div",1),i.Kb(3,"label",2),i.kc(4,"Name"),i.Jb(),i.Kb(5,"input",3),i.Rb("ngModelChange",(function(e){return t.alert.name=e})),i.Jb(),i.Jb(),i.Kb(6,"div",1),i.Kb(7,"label",4),i.kc(8,"Instrument"),i.Jb(),i.Kb(9,"app-stock-auto-input",5),i.Rb("selectSymbol",(function(e){return t.mapSymbolFromAutoComplete(e)})),i.Jb(),i.Jb(),i.Kb(10,"div"),i.Kb(11,"label",6),i.kc(12,"Alert me when LTP is:"),i.Jb(),i.Jb(),i.Kb(13,"div",1),i.Kb(14,"div",7),i.Kb(15,"input",8),i.Rb("ngModelChange",(function(e){return t.alert.condition=e})),i.Jb(),i.Kb(16,"label",9),i.kc(17,"Above"),i.Jb(),i.Jb(),i.Kb(18,"div",7),i.Kb(19,"input",10),i.Rb("ngModelChange",(function(e){return t.alert.condition=e})),i.Jb(),i.Kb(20,"label",11),i.kc(21,"Below"),i.Jb(),i.Jb(),i.Kb(22,"div"),i.Kb(23,"input",12),i.Rb("ngModelChange",(function(e){return t.alert.strikePrice=e})),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb()),2&e&&(i.xb(5),i.Xb("ngModel",t.alert.name),i.xb(4),i.Xb("value",t.alert.symbol),i.xb(6),i.Xb("ngModel",t.alert.condition),i.xb(4),i.Xb("ngModel",t.alert.condition),i.xb(4),i.Xb("ngModel",t.alert.strikePrice))},directives:[k.o,k.e,k.f,k.b,k.d,k.g,C.a,k.k,k.i],styles:[""]}),e})();function M(e,t){if(1&e){const e=i.Lb();i.Kb(0,"div"),i.Kb(1,"div",23),i.Kb(2,"input",24),i.Rb("ngModelChange",(function(r){return i.gc(e),t.$implicit.isChecked=r}))("change",(function(){return i.gc(e),i.Tb().changeSelection()})),i.Jb(),i.Kb(3,"label",25),i.kc(4),i.Jb(),i.Jb(),i.Jb()}if(2&e){const e=t.$implicit;i.xb(2),i.Yb("id",e.label),i.Xb("ngModel",e.isChecked),i.xb(1),i.Yb("for",e.label),i.xb(1),i.mc(" ",e.label," ")}}function x(e,t){if(1&e){const e=i.Lb();i.Kb(0,"div",26),i.Kb(1,"p",27),i.Kb(2,"a",28),i.Rb("click",(function(r){i.gc(e);const n=t.$implicit;return i.Tb().markCurrentAlert(r,n)})),i.Ib(3,"ion-icon",29),i.Jb(),i.Kb(4,"a",30),i.Rb("click",(function(r){i.gc(e);const n=t.$implicit;return i.Tb().markCurrentAlert(r,n)})),i.Ib(5,"ion-icon",31),i.Jb(),i.Jb(),i.Ib(6,"app-alert-card",32),i.Jb()}if(2&e){const e=t.$implicit,r=i.Tb();i.xb(6),i.Xb("alert",e)("ltpRecords",r.ltpRecords)}}function w(e,t){if(1&e&&(i.Kb(0,"div",13),i.Ib(1,"app-edit-alert",33),i.Jb()),2&e){const e=i.Tb();i.xb(1),i.Xb("alert",e.currentAlertClone)}}let O=(()=>{class e{constructor(e,t,r){this.alertService=e,this.stockService=t,this.loadingService=r,this.stockNames=[],this.checkedIDs=[],this.selectedItemsList=[],this.checkboxFilters=[{id:1,label:"Hit",isChecked:!1},{id:2,label:"Active",isChecked:!1},{id:3,label:"LTP",isChecked:!1},{id:4,label:"P&L",isChecked:!1}]}ngOnDestroy(){this.ltpSubscription&&this.ltpSubscription.unsubscribe()}ngOnInit(){this.getAlerts()}changeSelection(){this.fetchCheckedIDs(),this.fetchSelectedItems()}getAlerts(){this.loadingService.show(),this.alertService.getAll().subscribe(e=>{this.loadingService.hide(),this.alerts=e,e.forEach(e=>{this.stockNames.includes(e.symbol)||this.stockNames.push(e.symbol)}),this.ltpSubscription=Object(l.a)(3e3).subscribe(e=>{this.getLTP()}),this.getLTP(),this.selectedItemsList=e})}getLTP(){this.stockNames&&this.stockService.getLTP(this.stockNames).subscribe(e=>{console.log(e),this.ltpRecords=o.groupBy(e,"name")})}markCurrentAlert(e,t){e.preventDefault(),this.currentAlert=t,this.currentAlertClone=Object.assign({},this.currentAlert)}deleteAlert(){this.loadingService.show(),this.alertService.deleteAlert(this.currentAlert).subscribe(e=>{this.loadingService.hide(),console.log("Alert deleted succesfully."),this.currentAlert=null,this.currentAlertClone=null,this.getAlerts()})}updateAlert(){this.loadingService.show(),console.log(this.currentAlertClone),this.alertService.updateAlert(this.currentAlertClone).subscribe(e=>{this.loadingService.hide(),console.log("Alert updated successfully."),this.currentAlert=null,this.currentAlertClone=null,this.getAlerts()})}cancelSelection(){this.currentAlert=null,this.currentAlertClone=null}fetchCheckedIDs(){this.checkedIDs=[],this.checkboxFilters.forEach((e,t)=>{e.isChecked&&this.checkedIDs.push(e.label)})}fetchSelectedItems(){0!=this.checkedIDs.length?(this.selectedItemsList=[],this.alerts.forEach(e=>{this.checkedIDs.includes(e.status)&&this.selectedItemsList.push(e)})):this.selectedItemsList=this.alerts}}return e.\u0275fac=function(t){return new(t||e)(i.Hb(h),i.Hb(g.a),i.Hb(f.a))},e.\u0275cmp=i.Bb({type:e,selectors:[["app-alert"]],decls:41,vars:4,consts:[[1,"container","mt-4","left-panel"],["routerLink","/alert/create",1,"btn","btn-primary","btn-lg","btn-login","mt-5"],[1,"d-flex","align-items-center"],["name","add-circle-outline"],[1,"btn-title","mx-2"],[1,"d-flex","flex-row","justify-content-end"],[4,"ngFor","ngForOf"],["class","py-3",4,"ngFor","ngForOf"],[1,"container-fluid","text-center","my-4"],["routerLink","/alert/create",1,"btn","btn-primary","btn-lg","btn-login"],["id","deleteModal","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","deleteModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"],["id","editModal","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","deleteModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["class","modal-body",4,"ngIf"],[1,"form-check"],["type","checkbox","value","",1,"form-check-input",3,"ngModel","id","ngModelChange","change"],[1,"form-check-label","grayed",3,"for"],[1,"py-3"],[1,"action-grp","text-end","mb-0","mt-2"],["href","#","title","Edit","data-bs-toggle","modal","data-bs-target","#editModal",1,"mx-1",3,"click"],["name","create-outline"],["href","#","title","Remove","data-bs-toggle","modal","data-bs-target","#deleteModal",3,"click"],["name","trash-outline"],[3,"alert","ltpRecords"],[3,"alert"]],template:function(e,t){1&e&&(i.Kb(0,"div",0),i.Ib(1,"app-navbar"),i.Kb(2,"button",1),i.Kb(3,"div",2),i.Ib(4,"ion-icon",3),i.Kb(5,"div",4),i.kc(6,"Add Alert"),i.Jb(),i.Jb(),i.Jb(),i.Kb(7,"div",5),i.jc(8,M,5,4,"div",6),i.Jb(),i.jc(9,x,7,2,"div",7),i.Kb(10,"div",8),i.Kb(11,"button",9),i.Kb(12,"div",2),i.Ib(13,"ion-icon",3),i.Kb(14,"div",4),i.kc(15,"Add Alert"),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Kb(16,"div",10),i.Kb(17,"div",11),i.Kb(18,"div",12),i.Kb(19,"div",13),i.kc(20," Are you sure to delete the notofication for "),i.Kb(21,"strong"),i.kc(22),i.Jb(),i.Jb(),i.Kb(23,"div",14),i.Kb(24,"button",15),i.Rb("click",(function(){return t.cancelSelection()})),i.kc(25,"Cancel"),i.Jb(),i.Kb(26,"button",16),i.Rb("click",(function(){return t.deleteAlert()})),i.kc(27,"Yes, Delete"),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Kb(28,"div",17),i.Kb(29,"div",18),i.Kb(30,"div",12),i.Kb(31,"div",19),i.Kb(32,"h5",20),i.kc(33," Edit Alert"),i.Jb(),i.Ib(34,"button",21),i.Jb(),i.jc(35,w,2,1,"div",22),i.Kb(36,"div",14),i.Kb(37,"button",15),i.Rb("click",(function(){return t.cancelSelection()})),i.kc(38,"Cancel"),i.Jb(),i.Kb(39,"button",16),i.Rb("click",(function(){return t.updateAlert()})),i.kc(40," Update Alert"),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb()),2&e&&(i.xb(8),i.Xb("ngForOf",t.checkboxFilters),i.xb(1),i.Xb("ngForOf",t.selectedItemsList),i.xb(13),i.mc("",null==t.currentAlert?null:t.currentAlert.symbol,"?"),i.xb(13),i.Xb("ngIf",t.currentAlertClone))},directives:[y.a,n.c,v.m,v.n,k.a,k.d,k.g,K,A],styles:["#quick-view[_ngcontent-%COMP%]{height:100vh;background-color:var(--brand-color-primary);width:0;transition:width .5s}#quick-view.open[_ngcontent-%COMP%]{width:25%}.quick-view-close[_ngcontent-%COMP%]{position:relative;left:90%;top:2%;zoom:2;color:#fff;cursor:pointer}.container.left-panel[_ngcontent-%COMP%]{width:80%}.action-grp[_ngcontent-%COMP%]{zoom:1.5}.action-grp[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--brand-color-primary);pointer-events:none}.btn[_ngcontent-%COMP%]{padding:.3rem .7rem;border-radius:5px}.btn.btn-primary[_ngcontent-%COMP%]{background-color:var(--brand-color-secondary);border:var(--brand-color-secondary)}.btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;zoom:1.4}.form-check[_ngcontent-%COMP%]{margin-left:2rem;font-weight:600}.form-check-input[_ngcontent-%COMP%]{border:2px solid var(--brand-color-secondary)}.form-check-input[_ngcontent-%COMP%]:focus{box-shadow:0 0 2px var(--brand-color-secondary)}input[type=checkbox][_ngcontent-%COMP%]:checked{color:#fff;background-color:var(--brand-color-secondary)}"]}),e})();var P=r("ej43");function S(e,t){if(1&e&&(i.Kb(0,"p",16),i.kc(1),i.Ub(2,"currency"),i.Jb()),2&e){const e=i.Tb();i.xb(1),i.mc("LTP: ",i.Wb(2,1,e.ltp,"INR"),"")}}const I=[{path:"",component:O},{path:"create",component:(()=>{class e{constructor(e,t,r,n,o){this.alertService=e,this.loadingService=t,this.authService=r,this.stockService=n,this.router=o}ngOnInit(){this.alert=new p}ngOnDestroy(){this.ltpSubscription&&this.ltpSubscription.unsubscribe()}addAlert(){console.log(this.alert),this.alert.userEmail=this.authService.getCurrentUser().email,this.loadingService.show(),this.alertService.createAlert(this.alert).subscribe(e=>{console.log("alert created successfully."),this.loadingService.hide(),this.closeCreateWindow()})}closeCreateWindow(){this.router.navigate(["alert"])}mapSymbolFromAutoComplete(e){this.alert.symbol=e.name,this.alert.companyName=e.name_of_company,this.ltpSubscription=Object(l.a)(5e3).subscribe(e=>{this.getLTP(this.alert.symbol)}),this.getLTP(this.alert.symbol)}getLTP(e){this.stockService.getLTP([e]).subscribe(e=>{this.ltp=e[0].ltp})}}return e.\u0275fac=function(t){return new(t||e)(i.Hb(h),i.Hb(f.a),i.Hb(P.a),i.Hb(g.a),i.Hb(n.b))},e.\u0275cmp=i.Bb({type:e,selectors:[["app-create-alert"]],decls:31,vars:5,consts:[[1,"container"],[1,"mb-3"],["for","alert-name",1,"form-label"],["type","text","name","alert-name","id","alert-name","aria-describedby","alert-name",1,"form-control",3,"ngModel","ngModelChange"],["for","instrument",1,"form-label"],[3,"selectSymbol"],["class","m-0 fs-6",4,"ngIf"],["for","priceComparator",1,"form-label"],[1,"form-check"],["type","radio","name","priceComparator","id","above","value","Above",1,"form-check-input",3,"ngModel","ngModelChange"],["for","above",1,"form-check-label"],["type","radio","name","priceComparator","id","below","value","Below",1,"form-check-input",3,"ngModel","ngModelChange"],["for","below",1,"form-check-label"],["type","number","id","price-input","name","price",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-primary","me-2",3,"click"],["type","button",1,"btn","btn-primary","ms-2",3,"click"],[1,"m-0","fs-6"]],template:function(e,t){1&e&&(i.Kb(0,"div",0),i.Kb(1,"h2"),i.kc(2,"Add Alert"),i.Jb(),i.Kb(3,"form"),i.Kb(4,"div",1),i.Kb(5,"label",2),i.kc(6,"Name"),i.Jb(),i.Kb(7,"input",3),i.Rb("ngModelChange",(function(e){return t.alert.name=e})),i.Jb(),i.Jb(),i.Kb(8,"div",1),i.Kb(9,"label",4),i.kc(10,"Instrument"),i.Jb(),i.Kb(11,"app-stock-auto-input",5),i.Rb("selectSymbol",(function(e){return t.mapSymbolFromAutoComplete(e)})),i.Jb(),i.jc(12,S,3,4,"p",6),i.Jb(),i.Kb(13,"div"),i.Kb(14,"label",7),i.kc(15,"Alert me when LTP is:"),i.Jb(),i.Jb(),i.Kb(16,"div",1),i.Kb(17,"div",8),i.Kb(18,"input",9),i.Rb("ngModelChange",(function(e){return t.alert.condition=e})),i.Jb(),i.Kb(19,"label",10),i.kc(20,"Above"),i.Jb(),i.Jb(),i.Kb(21,"div",8),i.Kb(22,"input",11),i.Rb("ngModelChange",(function(e){return t.alert.condition=e})),i.Jb(),i.Kb(23,"label",12),i.kc(24,"Below"),i.Jb(),i.Jb(),i.Kb(25,"div"),i.Kb(26,"input",13),i.Rb("ngModelChange",(function(e){return t.alert.strikePrice=e})),i.Jb(),i.Jb(),i.Jb(),i.Kb(27,"button",14),i.Rb("click",(function(){return t.closeCreateWindow()})),i.kc(28,"Cancel"),i.Jb(),i.Kb(29,"button",15),i.Rb("click",(function(){return t.addAlert()})),i.kc(30,"Create Alert"),i.Jb(),i.Jb(),i.Jb()),2&e&&(i.xb(7),i.Xb("ngModel",t.alert.name),i.xb(5),i.Xb("ngIf",t.ltp),i.xb(6),i.Xb("ngModel",t.alert.condition),i.xb(4),i.Xb("ngModel",t.alert.condition),i.xb(4),i.Xb("ngModel",t.alert.strikePrice))},directives:[k.o,k.e,k.f,k.b,k.d,k.g,C.a,v.n,k.k,k.i],pipes:[v.c],styles:[".container[_ngcontent-%COMP%]{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]}),e})()}];let _=(()=>{class e{}return e.\u0275mod=i.Fb({type:e}),e.\u0275inj=i.Eb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(I)],n.e]}),e})();var L=r("PCNd");let R=(()=>{class e{}return e.\u0275mod=i.Fb({type:e}),e.\u0275inj=i.Eb({factory:function(t){return new(t||e)},imports:[[L.a,_]]}),e})()}}]);