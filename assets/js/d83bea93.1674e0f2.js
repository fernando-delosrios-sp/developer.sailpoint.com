"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37710],{90851:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var i=t(87462),r=(t(67294),t(3905)),s=t(56405);const n={id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/docs/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},c="Secure Data Share Audit ER Diagram",d={unversionedId:"docs/identity-now/secure-data-share/secure-data-share-audit-er-diagram",id:"docs/identity-now/secure-data-share/secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",description:"Secure Data Share Audit ER Diagram",source:"@site/products/idn/docs/identity-now/secure-data-share/audit-er-diagram.md",sourceDirName:"docs/identity-now/secure-data-share",slug:"/docs/sds-audit-er-diagram",permalink:"/idn/docs/sds-audit-er-diagram",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/secure-data-share/audit-er-diagram.md",tags:[{label:"SecureDataShare",permalink:"/idn/tags/secure-data-share"},{label:"SDS",permalink:"/idn/tags/sds"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1697052743,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:2,frontMatter:{id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/docs/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},sidebar:"idnDocs",previous:{title:"Secure Data Share ER Diagram",permalink:"/idn/docs/sds-er-diagram"}},o={},u=[],l={toc:u};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"secure-data-share-audit-er-diagram"},"Secure Data Share Audit ER Diagram"),(0,r.kt)(s.Z,{diagram:'erDiagram AUDIT_EVENTS { text TENANT_ID "Unique Id for an Organization tenant" text ID PK "Unique Id of the event" timestamp_ntz CREATED "Date When the event happened" text ACTION "action taken related to the Audit Event" text TYPE "type of Audit Event,Ex: Auth, SSO, ROLE, ACCESS_REQUEST, PROVISIONING, USER_MANAGEMENT, etc." text ACTOR_NAME "Who/what performed the action, this can be an Identity or a Service name" text TARGET_NAME "Who/what the action was performed on, this can be an Identity or a Service name" text STACK "Which internal service was associated with the Audit Event" text SOURCE_NAME "Name of the Source associated with the Audit Event" text ACCOUNT_NAME "Name of Account associated with the Audit Event" text INFO "Any additional info that might be available" text SOURCE_ID "ID of the source associated with the Audit Event" text OPERATION "Operation happened examples include EMAIL, FORWARD, UPDATE, REQUEST, etc." text STATUS "What was the status of the Audit Event, examples include PASSED, FAILED, TERMINATED, etc." timestamp_ntz SYNC_DATE "Date Audit Event Synced" }',mdxType:"MermaidViewer"}))}m.isMDXComponent=!0},56405:(e,a,t)=>{t.d(a,{Z:()=>d});var i=t(67294),r=t(57273),s=t(44996);const n="zoomIn_Zi5X",c="mermaidContainer_KO9S";function d(e){let{children:a,diagram:t}=e;r.Z.contentLoaded();const[d,o]=i.useState(0),[u,l]=i.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[m,h]=i.useState({x:0,y:0}),[g,p]=i.useState(!1);function E(e){e.screenX?(l({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:m.x,offsetY:m.y}),h({x:m.x,y:m.y})):(l({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:m.x,offsetY:m.y}),h({x:m.x,y:m.y}))}function S(e){l({cursor:"grab",clickX:0,clickY:0})}function f(e){"grabbing"===u.cursor&&(e.screenX?h({x:u.clickX-e.screenX+u.offsetX,y:u.clickY-e.screenY+u.offsetY}):h({x:u.clickX-e.changedTouches[0].screenX+u.offsetX,y:u.clickY-e.changedTouches[0].screenY+u.offsetY}))}let D,A;return i.useEffect((()=>{let e=!1;return setTimeout((()=>{e||p(!0)}),100),()=>{e=!0}})),!0===g?(A=i.createElement("div",null),D=i.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-m.y+"px",left:-m.x+"px",width:"calc(100% + "+d+"px)",maxHeight:"1000px"}},t)):(A=i.createElement("div",null,"Diagram Loading ..."),D=i.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-m.y+"px",left:-m.x+"px",width:"calc(100% + "+d+"px)",maxHeight:"1000px"}},t)),i.createElement("div",null,i.createElement("img",{className:n,onClick:e=>{o(d+300)},src:(0,s.Z)("/icons/magnifying-glass-plus-regular.svg")}),i.createElement("img",{className:n,onClick:e=>function(e){o(0),l({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),h({x:0,y:0})}(e),src:(0,s.Z)("/icons/house-regular.svg")}),i.createElement("img",{className:n,onClick:e=>{o(d-300)},src:(0,s.Z)("/icons/magnifying-glass-minus-regular.svg")}),i.createElement("div",{style:{cursor:u.cursor},className:c,onMouseMove:e=>f(e),onTouchMove:e=>f(e),onMouseDown:e=>E(e),onTouchStart:e=>E(e),onMouseUp:e=>S(),onTouchEnd:e=>S(),onMouseLeave:e=>S()},A,D))}}}]);