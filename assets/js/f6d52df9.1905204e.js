"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[63137],{59498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(87462),i=(n(67294),n(3905)),a=n(52991),r=n(53438);const o={id:"segments",title:"Segments",description:"Segments",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/segments",id:"api/beta/segments",title:"Segments",description:"Segments",source:"@site/products/idn/api/beta/segments.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/segments",permalink:"/idn/api/beta/segments",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"segments",title:"Segments",description:"Segments",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update the details of a specific extended search attribute in IdentityNow.",permalink:"/idn/api/beta/patch-search-attribute-config"},next:{title:"Create Segment",permalink:"/idn/api/beta/create-segment"}},m={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use this API to implement and customize access request segment functionality.\nWith this functionality in place, administrators can create and manage access request segments.\nSegments provide organizations with a way to make the access their users have even more granular - this can simply the access request process for the organization's users and improves security by reducing the risk of overprovisoning access. "),(0,i.kt)("p",null,'Segments represent sets of identities, all grouped by specified identity attributes, who are only able to see and access the access items associated with their segments.\nFor example, administrators could group all their organization\'s London office employees into one segment, "London Office Employees," by their shared location.\nThe administrators could then define the access items the London employees would need, and the identities in the "London Office Employees" would then only be able to see and access those items.'),(0,i.kt)("p",null,"In IdentityNow, administrators can use the 'Access' drop-down menu and select 'Segments' to reach the 'Access Requests Segments' page.\nThis page lists all the existing access request segments, along with their statuses, enabled or disabled.\nAdministrators can use this page to create, edit, enable, disable, and delete segments.\nTo create a segment, an administrator must provide a name, define the identities grouped in the segment, and define the items the identities in the segment can access.\nThese items can be access profiles, roles, or entitlements. "),(0,i.kt)("p",null,"When administrators use the API to create and manage segments, they use a JSON expression in the ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityCriteria")," object to define the segment's identities and access items. "),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/requests/segments.html"},"Managing Access Request Segments")," for more information about segments in IdentityNow. "),(0,i.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(67294),i=n(86010),a=n(53438),r=n(39960),o=n(13919),c=n(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return s.createElement(r.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:a,description:r}=e;return s.createElement(u,{href:t},s.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:a},n," ",a),r&&s.createElement("p",{className:(0,i.Z)("text--truncate",d),title:r},r))}function h(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?s.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return s.createElement(p,{href:t.href,icon:n,title:t.label,description:i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(g,{item:t});case"category":return s.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.jA)();return s.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return s.createElement(b,e);const r=(0,a.MN)(t);return s.createElement("section",{className:(0,i.Z)("row",n)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(f,{item:e})))))}}}]);