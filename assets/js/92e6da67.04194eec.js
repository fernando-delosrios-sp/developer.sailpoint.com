"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[82538],{63035:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var n=s(87462),r=(s(67294),s(3905)),i=s(52991),o=s(53438);const a={id:"custom-password-instructions",title:"Custom Password Instructions",description:"Custom Password Instructions",custom_edit_url:null},c=void 0,u={unversionedId:"api/beta/custom-password-instructions",id:"api/beta/custom-password-instructions",title:"Custom Password Instructions",description:"Custom Password Instructions",source:"@site/products/idn/api/beta/custom-password-instructions.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/custom-password-instructions",permalink:"/idn/api/beta/custom-password-instructions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"custom-password-instructions",title:"Custom Password Instructions",description:"Custom Password Instructions",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"List predefined select options.",permalink:"/idn/api/beta/search-pre-defined-select-options"},next:{title:"Create Custom Password Instructions",permalink:"/idn/api/beta/create-custom-password-instructions"}},l={},m=[],p={toc:m};function d(t){let{components:e,...s}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement custom password instruction functionality.\nWith this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.\nThis allows administrators to emphasize password policies or provide organization-specific instructions."),(0,r.kt)("p",null,"Administrators must first use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/beta/update-password-org-config"},"Update Password Org Config")," to set ",(0,r.kt)("inlineCode",{parentName:"p"},"customInstructionsEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Once they have enabled custom instructions, they can use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/beta/create-custom-password-instructions"},"Create Custom Password Instructions")," to create custom page content for the specific pageId they select."),(0,r.kt)("p",null,"For example, an administrator can use the pageId forget-username:user-email to set the custom text for the case when users forget their usernames and must enter their emails."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text"},"Creating Custom Instruction Text")," for more information about creating custom password instructions."),(0,r.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0},52991:(t,e,s)=>{s.d(e,{Z:()=>k});var n=s(67294),r=s(86010),i=s(53438),o=s(39960),a=s(13919),c=s(95999);const u="cardContainer_fWXF",l="cardTitle_rnsV",m="cardDescription_PWke";function p(t){let{href:e,children:s}=t;return n.createElement(o.Z,{href:e,className:(0,r.Z)("card padding--lg",u)},s)}function d(t){let{href:e,icon:s,title:i,description:o}=t;return n.createElement(p,{href:e},n.createElement("h2",{className:(0,r.Z)("text--truncate",l),title:i},s," ",i),o&&n.createElement("p",{className:(0,r.Z)("text--truncate",m),title:o},o))}function h(t){let{item:e}=t;const s=(0,i.Wl)(e);return s?n.createElement(d,{href:s,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const s=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(e.docId??void 0);return n.createElement(d,{href:e.href,icon:s,title:e.label,description:r?.description})}function w(t){let{item:e}=t;switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const s=(0,i.jA)();return n.createElement(k,{items:s.items,className:e})}function k(t){const{items:e,className:s}=t;if(!e)return n.createElement(g,t);const o=(0,i.MN)(e);return n.createElement("section",{className:(0,r.Z)("row",s)},o.map(((t,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(w,{item:t})))))}}}]);