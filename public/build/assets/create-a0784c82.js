import{d as T,r as x,n as q,u as G,x as H,o as J,c as w,l as t,g as y,w as C,A as M,f as a,h as s,e as g,v as m,i as D,F as r,m as i,t as l}from"./app-43e21385.js";import{_ as K,a as P,b as Q,c as W}from"./Pyramidal.vue_vue_type_script_setup_true_lang-55b286fe.js";const X=s("div",{class:"mb-6"},[s("h2",{class:"text-xl"},"مدیریت تمرینات")],-1),Y={class:"grid grid-cols-12 gap-2"},Z={class:"col-span-12"},ee={class:"col-span-12 xl:col-span-4 lg:col-span-4"},se={class:"col-span-12 xl:col-span-8 lg:col-span-8 px-4"},ae={class:"grid grid-cols-12 gap-2"},te={class:"col-span-10 lg:col-span-11"},le={class:"bg-gray-200 px-3 py-3 mb-2 rounded-lg"},ne={key:0,class:"flex items-center justify-between"},oe={class:"flex items-center"},ce={class:"mr-1 text-gray-500"},ue={class:"text-sm"},ve=s("span",null,"x",-1),re={class:"text-sm"},de={key:1,class:"text-sm"},_e={class:"text-sm"},pe=s("span",null,"x",-1),ie={class:"text-sm"},me={key:1,class:"flex items-center justify-between"},xe={class:"flex items-center"},ye={class:"text-sm text-gray-600"},he={class:"mr-1 text-gray-500"},fe={class:"mr-1 text-gray-800 font-bold"},ke={key:0,class:"mx-2"},ge={class:"flex items-center mr-2"},be={class:"flex flex-col items-center"},Ve={class:"ml-1 text-gray-800 font-bold"},we={key:0,class:"flex items-center"},Ce=s("span",{class:"mx-1"},"x",-1),Me={key:1,class:"text-sm"},Ae={key:1,class:"flex items-center"},ze=s("span",{class:"mx-1"},"x",-1),Be={key:2,class:"flex items-center justify-between"},De={class:"text-sm text-gray-600"},$e={class:"mr-1 text-gray-500"},Ne={class:"flex flex-col items-center"},Se=s("span",{class:"mx-1"},"x",-1),je={class:"text-sm"},Ee={key:3,class:"flex items-center justify-between"},Fe={class:"text-sm text-gray-600"},Re={class:"mr-1 text-gray-500"},Ue=s("span",{class:"mx-2 divider-value"},"/",-1),Ie={class:"text-sm flex flex-col items-center"},Le={class:"border-b-2"},Oe={class:"col-span-2 lg:col-span-1"},Te={key:1,class:"text-center"},qe={class:"col-span-12 mt-8"},Ke=T({__name:"create",setup(Ge){const b=x(!1),h=x([]),f=x([]),$=q(),N=G(),k=x([]),S=x([{state:"عادی",value:"1"},{state:"سوپر ست",value:"2"},{state:" دراپ ست",value:"3"},{state:" هرمی",value:"4"}]),j=x([{state:"A",value:"1"},{state:"B",value:"2"},{state:"C",value:"3"},{state:"D",value:"4"}]),_=x({class:{state:"A",value:"1"},type:{state:"عادی",value:"1"}}),p=x([{value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]}]),E=(u,d)=>{k.value.splice(d,1)},F=()=>{k.value.push({movement:p.value,type:_.value.type}),p.value=[{value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]}]},A=u=>{switch(_.value.type.value){case"4":case"3":u.values.push({value:"",repeat:""});break}},z=u=>{u.row.values.splice(u.index,1)};H(()=>_.value.type,u=>{switch(p.value=[],u.value){case"1":p.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break;case"2":p.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]},{value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break;case"3":p.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break;case"4":p.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break}});const R=u=>{p.value[u].values.forEach(d=>{d.value="",d.repeat=""})},U=async()=>{const{data:u}=await M.get("/api/panel/exercises");h.value=u.data;const{data:d}=await M.get("/api/panel/movements");f.value=d.data},I=async()=>{try{b.value=!0;const u={class:_.value.class.value,form_id:$.params.id,programs:k.value},{data:d}=await M.post("/api/panel/form/1/programs",u);b.value=!1,d.success&&N.push({name:"panel-forms-exercises-index"})}catch{}};return J(()=>{U()}),(u,d)=>{const B=w("v-select"),V=w("v-btn"),L=w("v-sheet");return a(),t("div",null,[y(L,null,{default:C(()=>[X,s("div",Y,[s("div",Z,[y(B,{modelValue:_.value.class,"onUpdate:modelValue":d[0]||(d[0]=o=>_.value.class=o),label:"انتخاب  کلاس تمرین",items:j.value,"item-title":"state","item-value":"value","return-object":"","single-line":"",variant:"solo-filled"},null,8,["modelValue","items"])]),s("div",ee,[y(B,{modelValue:_.value.type,"onUpdate:modelValue":d[1]||(d[1]=o=>_.value.type=o),label:"انتخاب نوع ست",items:S.value,"item-title":"state","item-value":"value","return-object":"","single-line":"",variant:"solo-filled"},null,8,["modelValue","items"]),_.value.type.value=="1"?(a(),g(K,{key:0,"movement-values":p.value,"movement-data":f.value,"exercise-data":h.value,onChangeMovement:R},null,8,["movement-values","movement-data","exercise-data"])):m("",!0),_.value.type.value=="2"?(a(),g(P,{key:1,"movement-values":p.value,"movement-data":f.value,"exercise-data":h.value},null,8,["movement-values","movement-data","exercise-data"])):m("",!0),_.value.type.value=="3"?(a(),g(Q,{key:2,"movement-values":p.value,"movement-data":f.value,"exercise-data":h.value,onAddValue:A,onDeleteValue:z},null,8,["movement-values","movement-data","exercise-data"])):m("",!0),_.value.type.value=="4"?(a(),g(W,{key:3,"movement-values":p.value,"movement-data":f.value,"exercise-data":h.value,onAddValue:A,onDeleteValue:z},null,8,["movement-values","movement-data","exercise-data"])):m("",!0),s("div",null,[y(V,{onClick:F,color:"light-blue-accent-4",block:"",class:"mt-2"},{default:C(()=>[D("اضافه کردن تمرین")]),_:1})])]),s("div",se,[k.value.length>=1?(a(!0),t(r,{key:0},i(k.value,(o,O)=>(a(),t("div",ae,[s("div",te,[s("div",le,[o.type.value=="1"?(a(),t("div",ne,[s("div",oe,[(a(!0),t(r,null,i(o.movement,(e,n)=>{var c,v;return a(),t("div",{class:"text-sm text-gray-600",key:n},[s("span",null,l((c=e==null?void 0:e.movement)==null?void 0:c.name),1),s("span",ce,"("+l((v=e==null?void 0:e.movement_type)==null?void 0:v.name)+")",1)])}),128))]),(a(!0),t(r,null,i(o.movement,(e,n)=>(a(),t("div",{class:"flex items-center mr-2",key:n},[e.movement.is_aerobic?(a(),t(r,{key:0},[e.movement.is_repeater?(a(),t(r,{key:0},[s("div",ue,l(e==null?void 0:e.value)+" ثانیه ",1),ve,s("div",re,l(e==null?void 0:e.repeat),1)],64)):(a(),t("div",de,l(e==null?void 0:e.value)+" ثانیه ",1))],64)):(a(),t(r,{key:1},[s("div",_e,l(e==null?void 0:e.value),1),pe,s("div",ie,l(e==null?void 0:e.repeat),1)],64))]))),128))])):m("",!0),o.type.value=="2"?(a(),t("div",me,[s("div",xe,[(a(!0),t(r,null,i(o.movement,(e,n)=>{var c,v;return a(),t("div",{class:"flex items-center",key:n},[s("div",ye,[s("span",null,l((c=e.movement)==null?void 0:c.name),1),s("span",he,"( "+l((v=e==null?void 0:e.movement_type)==null?void 0:v.name)+")",1),s("span",fe,"("+l(n+1)+")",1)]),n==0?(a(),t("span",ke,"x")):m("",!0)])}),128))]),s("div",ge,[s("div",be,[(a(!0),t(r,null,i(o.movement,(e,n)=>(a(),t("div",{class:"flex items-center text-sm border-b-2",key:n},[s("span",Ve,"("+l(n+1)+")",1),e.movement.is_aerobic?(a(),t(r,{key:0},[e.movement.is_repeater?(a(),t("span",we,[s("span",null,l(e==null?void 0:e.value)+" ثانیه",1),Ce,s("span",null,l(e==null?void 0:e.repeat),1)])):(a(),t("div",Me,l(e==null?void 0:e.value)+" ثانیه ",1))],64)):(a(),t("span",Ae,[s("span",null,l(e==null?void 0:e.value),1),ze,s("span",null,l(e==null?void 0:e.repeat),1)]))]))),128))])])])):m("",!0),o.type.value=="3"?(a(),t("div",Be,[(a(!0),t(r,null,i(o.movement,(e,n)=>{var c,v;return a(),t("div",{class:"flex items-center",key:n},[s("div",De,[s("span",null,l((c=e.movement)==null?void 0:c.name),1),s("span",$e,"("+l((v=e==null?void 0:e.movement_type)==null?void 0:v.name)+")",1)])])}),128)),(a(!0),t(r,null,i(o.movement,(e,n)=>(a(),t("div",{class:"flex items-center mr-2",key:n},[s("div",Ne,[(a(!0),t(r,null,i(e.values,(c,v)=>(a(),t("div",{class:"flex items-center text-sm border-b-2",key:v},[s("span",null,l(c.value),1)]))),128))]),Se,s("div",je,l(e.repeat),1)]))),128))])):m("",!0),o.type.value=="4"?(a(),t("div",Ee,[(a(!0),t(r,null,i(o.movement,(e,n)=>{var c,v;return a(),t("div",{class:"flex items-center",key:n},[s("div",Fe,[s("span",null,l((c=e.movement)==null?void 0:c.name),1),s("span",Re,"( "+l((v=e==null?void 0:e.movement_type)==null?void 0:v.name)+")",1)])])}),128)),(a(!0),t(r,null,i(o.movement,(e,n)=>(a(),t("div",{class:"flex items-center mr-2 dir-ltr",key:n},[(a(!0),t(r,null,i(e.values,(c,v)=>(a(),t("div",{key:v,class:"flex items-center zzz"},[Ue,s("div",Ie,[s("span",Le,l(c.value),1),s("span",null,l(c.repeat),1)])]))),128))]))),128))])):m("",!0)])]),s("div",Oe,[y(V,{onClick:e=>E(o,O),size:"small",density:"default",icon:"mdi-trash-can-outline"},null,8,["onClick"])])]))),256)):(a(),t("div",Te,"تمرینی اضافه نشده است"))]),s("div",qe,[s("div",null,[y(V,{loading:b.value,onClick:I,size:"large",block:"",class:"mt-2"},{default:C(()=>[D("ذخیره تغییرات")]),_:1},8,["loading"])])])])]),_:1})])}}});export{Ke as default};
