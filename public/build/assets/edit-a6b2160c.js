import{d as T,r as h,n as q,u as G,x as H,o as J,c as A,l,g as k,w as z,A as $,f as a,h as s,e as j,v as y,i as E,F as p,m as _,t as n}from"./app-43e21385.js";import{_ as K,a as P,b as Q,c as W}from"./Pyramidal.vue_vue_type_script_setup_true_lang-55b286fe.js";const X=s("div",{class:"mb-6"},[s("h2",{class:"text-xl"},"مدیریت تمرینات")],-1),Y={class:"grid grid-cols-12 gap-2"},Z={class:"col-span-12"},ee={class:"col-span-12 xl:col-span-4 lg:col-span-4"},se={class:"col-span-12 xl:col-span-8 lg:col-span-8 px-4"},ae={class:"grid grid-cols-12 gap-2"},te={class:"col-span-10 lg:col-span-11"},le={class:"bg-gray-200 px-3 py-3 mb-2 rounded-lg"},ne={key:0,class:"flex items-center justify-between"},oe={class:"flex items-center"},ue={class:"mr-1 text-gray-500"},ve={class:"text-sm"},ce=s("span",null,"x",-1),re={class:"text-sm"},pe={key:1,class:"text-sm"},de={class:"text-sm"},me=s("span",null,"x",-1),ie={class:"text-sm"},_e={key:1,class:"flex items-center justify-between"},xe={class:"flex items-center"},ye={class:"text-sm text-gray-600"},he={class:"mr-1 text-gray-500"},fe={class:"mr-1 text-gray-800 font-bold"},ge={key:0,class:"mx-2"},ke={class:"flex items-center mr-2"},be={class:"flex flex-col items-center"},Ve={class:"ml-1 text-gray-800 font-bold"},we={key:0,class:"flex items-center"},Ce=s("span",{class:"mx-1"},"x",-1),$e={key:1,class:"text-sm"},je={key:1,class:"flex items-center"},Me=s("span",{class:"mx-1"},"x",-1),Ae={key:2,class:"flex items-center justify-between"},ze={class:"text-sm text-gray-600"},Be={class:"mr-1 text-gray-500"},De={class:"flex flex-col items-center"},Ne=s("span",{class:"mx-1"},"x",-1),Se={class:"text-sm"},Ee={key:3,class:"flex items-center justify-between"},Fe={class:"text-sm text-gray-600"},Re={class:"mr-1 text-gray-500"},Ue=s("span",{class:"mx-2 divider-value"},"/",-1),Ie={class:"text-sm flex flex-col items-center"},Le={class:"border-b-2"},Oe={class:"col-span-2 lg:col-span-1"},Te={key:1,class:"text-center"},qe={class:"col-span-12 mt-8"},Ke=T({__name:"edit",setup(Ge){const M=h(!1),b=h([]),V=h([]),C=q(),F=G(),x=h([]),B=h([{state:"عادی",value:"1"},{state:"سوپر ست",value:"2"},{state:" دراپ ست",value:"3"},{state:" هرمی",value:"4"}]),D=h([{state:"A",value:"1"},{state:"B",value:"2"},{state:"C",value:"3"},{state:"D",value:"4"}]),d=h({class:{state:"A",value:"1"},type:{state:"عادی",value:"1"}}),i=h([{value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]}]),R=(c,m)=>{x.value.splice(m,1)},U=()=>{x.value.push({movement:i.value,type:d.value.type}),i.value=[{value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]}]},N=c=>{switch(d.value.type.value){case"4":case"3":c.values.push({value:"",repeat:""});break}},S=c=>{c.row.values.splice(c.index,1)};H(()=>d.value.type,c=>{switch(i.value=[],c.value){case"1":i.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break;case"2":i.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]},{value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break;case"3":i.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break;case"4":i.value.push({value:"",repeat:"",practise:0,title:"",movement_type:null,movement:null,values:[{value:"",repeat:""}]});break}});const I=c=>{i.value[c].values.forEach(m=>{m.value="",m.repeat=""})},L=async()=>{const{data:c}=await $.get("/api/panel/exercises");b.value=c.data;const{data:m}=await $.get("/api/panel/movements");V.value=m.data;const{data:g}=await $.get(`/api/panel/form/${C.params.id}/programs/${C.params.exercise}`);console.log("program",g);const w=D.value.find((o,v)=>o.value==g.data.class);d.value.class=w,g.data.movements.map((o,v)=>{let f=B.value.find((t,u)=>t.value==o.type),e={type:f,movement:[]};f.value=="1"?(o.programs.map((t,u)=>{e.movement.push({movement:t.movement,movement_type:t.exercise,value:t.value,repeat:t.repeat,practise:t.practise,title:t.title})}),x.value.push(e)):f.value=="2"?(o.programs.map((t,u)=>{e.movement.push({movement:t.movement,movement_type:t.exercise,value:t.value,repeat:t.repeat,practise:t.practise,title:t.title})}),x.value.push(e)):f.value=="3"?(e.movement.push({movement:o.programs[0].movement,movement_type:o.programs[0].exercise,value:o.programs[0].value,repeat:o.programs[0].repeat,practise:o.programs[0].practise,title:o.programs[0].title,values:[]}),o.programs.map((t,u)=>{e.movement[0].values.push({repeat:t.repeat,value:t.value})}),x.value.push(e)):f.value=="4"&&(e.movement.push({movement:o.programs[0].movement,movement_type:o.programs[0].exercise,value:o.programs[0].value,repeat:o.programs[0].repeat,practise:o.programs[0].practise,title:o.programs[0].title,values:[]}),o.programs.map((t,u)=>{e.movement[0].values.push({repeat:t.repeat,value:t.value})}),x.value.push(e))})},O=async()=>{try{M.value=!0;const c={class:d.value.class.value,programs:x.value},{data:m}=await $.put(`/api/panel/form/${C.params.id}/programs/${C.params.exercise}`,c);M.value=!1,m.success&&F.push({name:"panel-forms-exercises-index"})}catch{}};return J(()=>{L()}),(c,m)=>{const g=A("v-select"),w=A("v-btn"),o=A("v-sheet");return a(),l("div",null,[k(o,null,{default:z(()=>[X,s("div",Y,[s("div",Z,[k(g,{modelValue:d.value.class,"onUpdate:modelValue":m[0]||(m[0]=v=>d.value.class=v),label:"انتخاب  کلاس تمرین",items:D.value,"item-title":"state","item-value":"value","return-object":"","single-line":"",variant:"solo-filled"},null,8,["modelValue","items"])]),s("div",ee,[k(g,{modelValue:d.value.type,"onUpdate:modelValue":m[1]||(m[1]=v=>d.value.type=v),label:"انتخاب نوع ست",items:B.value,"item-title":"state","item-value":"value","return-object":"","single-line":"",variant:"solo-filled"},null,8,["modelValue","items"]),d.value.type.value=="1"?(a(),j(K,{key:0,"movement-values":i.value,"movement-data":V.value,"exercise-data":b.value,onChangeMovement:I},null,8,["movement-values","movement-data","exercise-data"])):y("",!0),d.value.type.value=="2"?(a(),j(P,{key:1,"movement-values":i.value,"movement-data":V.value,"exercise-data":b.value},null,8,["movement-values","movement-data","exercise-data"])):y("",!0),d.value.type.value=="3"?(a(),j(Q,{key:2,"movement-values":i.value,"movement-data":V.value,"exercise-data":b.value,onAddValue:N,onDeleteValue:S},null,8,["movement-values","movement-data","exercise-data"])):y("",!0),d.value.type.value=="4"?(a(),j(W,{key:3,"movement-values":i.value,"movement-data":V.value,"exercise-data":b.value,onAddValue:N,onDeleteValue:S},null,8,["movement-values","movement-data","exercise-data"])):y("",!0),s("div",null,[k(w,{onClick:U,color:"light-blue-accent-4",block:"",class:"mt-2"},{default:z(()=>[E("اضافه کردن تمرین")]),_:1})])]),s("div",se,[x.value.length>=1?(a(!0),l(p,{key:0},_(x.value,(v,f)=>(a(),l("div",ae,[s("div",te,[s("div",le,[v.type.value=="1"?(a(),l("div",ne,[s("div",oe,[(a(!0),l(p,null,_(v.movement,(e,t)=>{var u,r;return a(),l("div",{class:"text-sm text-gray-600",key:t},[s("span",null,n((u=e==null?void 0:e.movement)==null?void 0:u.name),1),s("span",ue,"("+n((r=e==null?void 0:e.movement_type)==null?void 0:r.name)+")",1)])}),128))]),(a(!0),l(p,null,_(v.movement,(e,t)=>(a(),l("div",{class:"flex items-center mr-2",key:t},[e.movement.is_aerobic?(a(),l(p,{key:0},[e.movement.is_repeater?(a(),l(p,{key:0},[s("div",ve,n(e==null?void 0:e.value)+" ثانیه ",1),ce,s("div",re,n(e==null?void 0:e.repeat),1)],64)):(a(),l("div",pe,n(e==null?void 0:e.value)+" ثانیه ",1))],64)):(a(),l(p,{key:1},[s("div",de,n(e==null?void 0:e.value),1),me,s("div",ie,n(e==null?void 0:e.repeat),1)],64))]))),128))])):y("",!0),v.type.value=="2"?(a(),l("div",_e,[s("div",xe,[(a(!0),l(p,null,_(v.movement,(e,t)=>{var u,r;return a(),l("div",{class:"flex items-center",key:t},[s("div",ye,[s("span",null,n((u=e.movement)==null?void 0:u.name),1),s("span",he,"( "+n((r=e==null?void 0:e.movement_type)==null?void 0:r.name)+")",1),s("span",fe,"("+n(t+1)+")",1)]),t==0?(a(),l("span",ge,"x")):y("",!0)])}),128))]),s("div",ke,[s("div",be,[(a(!0),l(p,null,_(v.movement,(e,t)=>(a(),l("div",{class:"flex items-center text-sm border-b-2",key:t},[s("span",Ve,"("+n(t+1)+")",1),e.movement.is_aerobic?(a(),l(p,{key:0},[e.movement.is_repeater?(a(),l("span",we,[s("span",null,n(e==null?void 0:e.value)+" ثانیه",1),Ce,s("span",null,n(e==null?void 0:e.repeat),1)])):(a(),l("div",$e,n(e==null?void 0:e.value)+" ثانیه ",1))],64)):(a(),l("span",je,[s("span",null,n(e==null?void 0:e.value),1),Me,s("span",null,n(e==null?void 0:e.repeat),1)]))]))),128))])])])):y("",!0),v.type.value=="3"?(a(),l("div",Ae,[(a(!0),l(p,null,_(v.movement,(e,t)=>{var u,r;return a(),l("div",{class:"flex items-center",key:t},[s("div",ze,[s("span",null,n((u=e.movement)==null?void 0:u.name),1),s("span",Be,"("+n((r=e==null?void 0:e.movement_type)==null?void 0:r.name)+")",1)])])}),128)),(a(!0),l(p,null,_(v.movement,(e,t)=>(a(),l("div",{class:"flex items-center mr-2",key:t},[s("div",De,[(a(!0),l(p,null,_(e.values,(u,r)=>(a(),l("div",{class:"flex items-center text-sm border-b-2",key:r},[s("span",null,n(u.value),1)]))),128))]),Ne,s("div",Se,n(e.repeat),1)]))),128))])):y("",!0),v.type.value=="4"?(a(),l("div",Ee,[(a(!0),l(p,null,_(v.movement,(e,t)=>{var u,r;return a(),l("div",{class:"flex items-center",key:t},[s("div",Fe,[s("span",null,n((u=e.movement)==null?void 0:u.name),1),s("span",Re,"( "+n((r=e==null?void 0:e.movement_type)==null?void 0:r.name)+")",1)])])}),128)),(a(!0),l(p,null,_(v.movement,(e,t)=>(a(),l("div",{class:"flex items-center mr-2 dir-ltr",key:t},[(a(!0),l(p,null,_(e.values,(u,r)=>(a(),l("div",{key:r,class:"flex items-center zzz"},[Ue,s("div",Ie,[s("span",Le,n(u.value),1),s("span",null,n(u.repeat),1)])]))),128))]))),128))])):y("",!0)])]),s("div",Oe,[k(w,{onClick:e=>R(v,f),size:"small",density:"default",icon:"mdi-trash-can-outline"},null,8,["onClick"])])]))),256)):(a(),l("div",Te,"تمرینی اضافه نشده است"))]),s("div",qe,[s("div",null,[k(w,{loading:M.value,onClick:O,size:"large",block:"",class:"mt-2"},{default:z(()=>[E("ذخیره تغییرات")]),_:1},8,["loading"])])])])]),_:1})])}}});export{Ke as default};