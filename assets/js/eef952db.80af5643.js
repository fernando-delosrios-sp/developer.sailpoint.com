"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99146],{49616:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const a={id:"identity-created",title:"Identity Created",pagination_label:"Identity Created",sidebar_label:"Identity Created",sidebar_class_name:"identityCreated",keywords:["event","trigger","identity","created","available"],description:"Fires after an identity is created.",slug:"/docs/event-triggers/triggers/identity-created",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},d=void 0,s={unversionedId:"docs/identity-now/event-triggers/available/identity-created",id:"docs/identity-now/event-triggers/available/identity-created",title:"Identity Created",description:"Fires after an identity is created.",source:"@site/products/idn/docs/identity-now/event-triggers/available/identity-created.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/identity-created",permalink:"/idn/docs/event-triggers/triggers/identity-created",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/identity-created.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1697052743,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"identity-created",title:"Identity Created",pagination_label:"Identity Created",sidebar_label:"Identity Created",sidebar_class_name:"identityCreated",keywords:["event","trigger","identity","created","available"],description:"Fires after an identity is created.",slug:"/docs/event-triggers/triggers/identity-created",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Identity Attributes Changed",permalink:"/idn/docs/event-triggers/triggers/identity-attribute-changed"},next:{title:"Native Change Account Created",permalink:"/idn/docs/event-triggers/triggers/native-change-account-created"}},o={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],g={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"event-context"},"Event Context"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flow",src:i(97953).Z,width:"1192",height:"259"})),(0,r.kt)("p",null,"Identity Created events occur when a new identity is detected during an aggregration and refresh from an authoritative source. New identities are detected when an account from the authoritative source is not correlated to an existing identity. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045"},"Configuring Correlation"),". The Identity Created event contains all of the identity attributes as they are configured in the identity profile. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877"},"Mapping Identity Profiles"),"."),(0,r.kt)("p",null,"This event trigger provides a flexible way to extend Joiner-Mover-Leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization."),(0,r.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Notify an administrator or system to take the appropriate birthright provisioning actions as part of the Joiner workflow."),(0,r.kt)("li",{parentName:"ul"},"Notify a third party system to trigger another action (e.g. create an onboarding experience for a new hire).")),(0,r.kt)("p",null,"This is an example input from this trigger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "identity": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "attributes": {\n    "firstname": "John"\n  }\n}\n')),(0,r.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,r.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}c.isMDXComponent=!0},97953:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/identity-created-path-32c957dde079bd8f96ffe51446232596.png"}}]);