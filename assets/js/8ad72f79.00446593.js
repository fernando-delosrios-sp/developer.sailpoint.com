"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86937],{24804:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var n=t(87462),c=(t(67294),t(3905));const a={id:"connector-spec-card",title:"Card",pagination_label:"Card",sidebar_label:"Card",keywords:["connectivity","connectors","connector-spec","card"],description:"Details on using the card item",slug:"/docs/saas-connectivity/connector-spec/card",tags:["Connectivity","Connector Spec"]},o=void 0,d={unversionedId:"docs/identity-now/saas-connectivity/connector-spec/connector-spec-card",id:"docs/identity-now/saas-connectivity/connector-spec/connector-spec-card",title:"Card",description:"Details on using the card item",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-spec/card.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-spec",slug:"/docs/saas-connectivity/connector-spec/card",permalink:"/idn/docs/saas-connectivity/connector-spec/card",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-spec/card.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Spec",permalink:"/idn/tags/connector-spec"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1697052743,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"connector-spec-card",title:"Card",pagination_label:"Card",sidebar_label:"Card",keywords:["connectivity","connectors","connector-spec","card"],description:"Details on using the card item",slug:"/docs/saas-connectivity/connector-spec/card",tags:["Connectivity","Connector Spec"]},sidebar:"idnDocs",previous:{title:"Connector Spec File",permalink:"/idn/docs/saas-connectivity/connector-spec"},next:{title:"Key Value",permalink:"/idn/docs/saas-connectivity/connector-spec/key-value"}},s={},i=[{value:"How to use the card type in the connector spec",id:"how-to-use-the-card-type-in-the-connector-spec",level:2},{value:"Example card item type",id:"example-card-item-type",level:3}],r={toc:i};function l(A){let{components:e,...a}=A;return(0,c.kt)("wrapper",(0,n.Z)({},r,a,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"how-to-use-the-card-type-in-the-connector-spec"},"How to use the card type in the connector spec"),(0,c.kt)("p",null,"You can use the ",(0,c.kt)("inlineCode",{parentName:"p"},"card")," type to specify cards that allow users to add/copy/delete and enter a subMenu to make changes to more card details."),(0,c.kt)("p",null,"When you create a card, you must specify the fields the cardSubMenu will use to generate the title and subtitle, as shown in the following example. "),(0,c.kt)("p",null,"In this example, clicking the ",(0,c.kt)("inlineCode",{parentName:"p"},"Add table")," button opens a dialog, and the values entered for the ",(0,c.kt)("inlineCode",{parentName:"p"},"Table Information")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"Airtable Id")," will populate the cards ",(0,c.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"subtitle"),"."),(0,c.kt)("h3",{id:"example-card-item-type"},"Example card item type"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": "tableParameters",\n    "label": "AddTable",\n    "titleKey": "tableName",\n    "subtitleKey": "tableId",\n    "indexKey": "sequenceNumberForTable",\n    "dragNDropEnabled": true,\n    "deleteButton": true,\n    "editButton": true,\n    "addButton": true,\n    "copyButton": true,\n    "buttonLabel": "Add Table",\n    "type": "cardList",\n    "subMenus": [\n        {\n            "label": "Table Information",\n            "items": [\n                {\n                    "key": "tableName",\n                    "label": "Airtable Name",\n                    "type": "text",\n                    "required": true,\n                    "helpKey": "Must be a unique name"\n                },\n                {\n                    "key": "tableId",\n                    "label": "Airtable Id",\n                    "type": "text",\n                    "required": true,\n                    "helpKey": "Must be a unique name"\n                },\n                {\n                    "key": "tableType",\n                    "type": "radio",\n                    "label": "Table data type",\n                    "required": true,\n                    "options": [\n                        {\n                            "label": "Accounts",\n                            "value": "accounts"\n                        },\n                        {\n                            "label": "Entitlements",\n                            "value": "entitlements"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"card input type",src:t(84341).Z,width:"740",height:"313"})),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"card menu input type",src:t(92283).Z,width:"1246",height:"465"})))}l.isMDXComponent=!0},84341:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},92283:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/cardMenu-0ed5b314ffdcb988cf122014e603e90c.png"}}]);