import{d as y,r as t,u as R,n as B,o as C,c as n,l as N,g as s,w as u,A as p,f as S,k as U,i as _,h as f}from"./app-43e21385.js";const A=f("div",{class:"mb-6"},[f("h2",{class:"text-xl"},"ویرایش نوع تمرین")],-1),$=y({__name:"edit",setup(D){const m=t(!1),d=t(null),o=t({name:null}),c=t(!1),b=t([a=>a?!0:"نام نوع تمرین  الزامی می باشد"]),x=R(),v=B(),V=async a=>{const{valid:e}=await d.value.validate();if(e){m.value=!0;const l=new FormData;l.append("name",o.value.name);const{data:r}=await p.put(`/api/panel/exercises/${v.params.id}`,l);r.success&&(c.value=!0,x.push({name:"panel-exercises-index"}))}},g=async()=>{const{data:a}=await p.get(`/api/panel/exercises/${v.params.id}`);o.value.name=a.data.name};return C(()=>{g()}),(a,e)=>{const l=n("v-text-field"),r=n("v-btn"),h=n("v-form"),k=n("v-sheet"),w=n("v-snackbar");return S(),N("div",null,[s(k,null,{default:u(()=>[A,s(h,{ref_key:"formRef",ref:d,"validate-on":"submit",onSubmit:U(V,["prevent"])},{default:u(()=>[s(l,{modelValue:o.value.name,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value.name=i),rules:b.value,label:"نام",density:"compact","single-line":"",variant:"solo"},null,8,["modelValue","rules"]),s(r,{loading:m.value,color:"light-blue-accent-4",type:"submit",block:"",class:"mt-2"},{default:u(()=>[_("ویرایش")]),_:1},8,["loading"])]),_:1},8,["onSubmit"])]),_:1}),s(w,{absolute:"",modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=i=>c.value=i),timeout:2e4},{default:u(()=>[_(" نوع تمرین با موفقیت ویرایش شد. ")]),_:1},8,["modelValue"])])}}});export{$ as default};
