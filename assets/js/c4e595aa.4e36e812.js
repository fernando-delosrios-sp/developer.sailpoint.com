"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[85550],{32623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));a(65488),a(85162);const i={id:"authorization",title:"Authorization",pagination_label:"Authorization",sidebar_label:"Authorization",sidebar_position:3,sidebar_class_name:"authorization",keywords:["authorization","scope","permission"],description:"A guide on how to restrict an API token's level of access.",slug:"/api/authorization",tags:["Authorization","Scopes","Permissions"]},o=void 0,r={unversionedId:"api/authorization",id:"api/authorization",title:"Authorization",description:"A guide on how to restrict an API token's level of access.",source:"@site/products/idn/api/authorization.md",sourceDirName:"api",slug:"/api/authorization",permalink:"/idn/api/authorization",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/api/authorization.md",tags:[{label:"Authorization",permalink:"/idn/tags/authorization"},{label:"Scopes",permalink:"/idn/tags/scopes"},{label:"Permissions",permalink:"/idn/tags/permissions"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1697052743,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:3,frontMatter:{id:"authorization",title:"Authorization",pagination_label:"Authorization",sidebar_label:"Authorization",sidebar_position:3,sidebar_class_name:"authorization",keywords:["authorization","scope","permission"],description:"A guide on how to restrict an API token's level of access.",slug:"/api/authorization",tags:["Authorization","Scopes","Permissions"]},sidebar:"openApiSidebar",previous:{title:"Authentication",permalink:"/idn/api/authentication"},next:{title:"Service Accounts",permalink:"/idn/api/service-accounts"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"User Level Permissions",id:"user-level-permissions",level:2},{value:"Scopes",id:"scopes",level:2},{value:"Identifying Necessary Authorization for an Endpoint",id:"identifying-necessary-authorization-for-an-endpoint",level:2},{value:"Assigning Scopes with the UI",id:"assigning-scopes-with-the-ui",level:2},{value:"Assigning Scopes with the API",id:"assigning-scopes-with-the-api",level:2}],c={toc:p};function h(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Authorization and authentication are two related concepts that help secure APIs. Authentication is the act of verifying a user's identity. Authorization is the act of validating the user's permission to access a given resource. When a user sends an API request, the server authenticates the user by checking the validity of the access token sent with the request. If the token is valid, the server checks whether the user is authorized to perform the desired operation on the resource. If the user is both authenticated and authorized, the server fulfills the request."),(0,s.kt)("div",{align:"center"},(0,s.kt)("mermaid",{value:"sequenceDiagram\n    autonumber\n    participant H as HTTP Client\n    participant I as IdentityNow\n\n    H->>I: Request to delete a source\n    I->>I: Authenticate access token\n    opt token fails authentication\n      I->>H: Return a 401 response code\n    end\n    I->>I: Authorize user to delete source\n    opt user fails authorization\n      I->>H: Return a 403 response code\n    end\n    I->>H: Delete source and return success"})),(0,s.kt)("h2",{id:"user-level-permissions"},"User Level Permissions"),(0,s.kt)("p",null,"When managing a user's access to the API, you must first assign the target user an appropriate ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html"},"user level"),'.  It is important to choose the correct user level as it will place a boundary on which APIs a user can call, which also affects the areas and functions of the UI they have access to.  For example, if a user is in charge of creating reports for auditing requirements, consider granting them the "Report Admin" user level.'),(0,s.kt)("p",null,"User levels are typically granted through the UI, ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/users/grant_remove_user_levels.html"},"following the procedures from this document"),"."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"There is an ",(0,s.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/t/assign-identitynow-admin-roles-via-api/1874/4"},"API that can set an identity's user level"),", but it is a V1 API with no guaranteed support. Use it at your own risk!")),(0,s.kt)("p",null,"User levels act as the first line of defense by applying a rigid boundary around the APIs that a user can call.  The next section introduces scopes, which allow users to apply granular controls on the APIs an access token can call."),(0,s.kt)("h2",{id:"scopes"},"Scopes"),(0,s.kt)("p",null,"Scopes are granular permissions you can add to personal access tokens (PATs) to create tokens with the least privilege necessary to fulfill their functions. User levels place a broad border around the APIs a token has access to, while scopes can further limit the set of endpoints a token can call.  Scopes allow an API user to have multiple tokens with different privileges that support unique use cases and software applications. Using scopes is beneficial to security - if a bad actor compromises any one of the tokens, the bad actor can only perform the limited set of operations defined by the token's scopes, significantly reducing the potential damage that can be done.  Therefore, it is recommended that all users apply scopes to each PAT they create in order to reduce the impact of stolen credentials."),(0,s.kt)("p",null,"Scopes contain one or more rights, which are low level permissions that grant access to individual endpoints. This means that a single scope, like ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:access-request:manage"),", can grant access to multiple API endpoints. To determine which scopes a PAT needs, you must first identify which endpoints the PAT needs to invoke. Each endpoint's API specification indicates which scope is necessary to call the endpoint. You can use this approach to curate a list of scopes that must be applied to the credential to call the necessary endpoints.  ",(0,s.kt)("a",{parentName:"p",href:"#identifying-necessary-authorization-for-an-endpoint"},"Learn more about how to find an API's required scopes here"),"."),(0,s.kt)("p",null,"By default, each PAT has the scope, ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all"),", which grants access to all the rights appropriate for the ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html"},"user level"),". For example, a user with the ",(0,s.kt)("strong",{parentName:"p"},"Admin")," user level has access to all APIs, so ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," grants ",(0,s.kt)("strong",{parentName:"p"},"Admin")," users access to all APIs. A user with the ",(0,s.kt)("strong",{parentName:"p"},"Cert Admin")," user level, however, has access to only a subset of APIs necessary to perform their role, most notably the certification APIs, so ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," grants ",(0,s.kt)("strong",{parentName:"p"},"Cert Admin")," users access to only that subset of APIs."),(0,s.kt)("p",null,"Alternatively, ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:default")," is the least privileged scope that only grants access to endpoints that require no authorization at all, such as ",(0,s.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/get-public-identities"},"list public identities"),"."),(0,s.kt)("p",null,"Scopes are additive, which means the final right set is the intersection of all the rights granted by the scopes assigned to a PAT, excluding any rights that fall outside of the user level. Each scope added to an PAT builds up the credential's permission set, incrementally increasing access to the API.  If a PAT has ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," granted, then any additional scope is ignored because ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," already contains the complete set of rights available to the user level."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If the API requirements for the personal access token exceed the scopes allowed by the user's assigned user level, then the following options may be considered."),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Re-evaluate the user's responsibilities compared to their user level.  It is possible that their user level is no longer appropriate for the functions they need to perform, and a more permissive user level may be necessary."),(0,s.kt)("li",{parentName:"ul"},"If the required access is a one-off need for a specific use case, then consider generating a PAT with the required scopes from a different user and sharing the credentials.  This could be a dedicated service account designated for one-off applications.  The downside of this approach is that it becomes more difficult to attribute an API call to a specific user, as the user now has a PAT that is not tied to their user account."))),(0,s.kt)("h2",{id:"identifying-necessary-authorization-for-an-endpoint"},"Identifying Necessary Authorization for an Endpoint"),(0,s.kt)("p",null,"Each endpoint document specifies how to authorize with the endpoint in the ",(0,s.kt)("strong",{parentName:"p"},"Authorization")," dropdown, which is located on the right side column below the endpoint path. Selecting ",(0,s.kt)("strong",{parentName:"p"},"Authorization")," expands the dropdown menu showing the details of how to authorize with the endpoint. The following image shows the authorization details of the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/beta/list-access-profiles"},"List Access Profiles")," endpoint."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Authorization Dropdown",src:a(23122).Z,width:"1648",height:"359"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"type"),": The type of authorization method supported for this endpoint. SailPoint uses the ",(0,s.kt)("a",{parentName:"li",href:"/idn/api/authentication#oauth-20"},"OAuth2 standard")," for all the V3/Beta APIs."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"flow"),": One or more OAuth flows supported by the endpoint. A token only needs to be generated by one flow to be valid. Refer to ",(0,s.kt)("a",{parentName:"li",href:"/idn/api/authentication#authentication-details"},"Authentication Details")," for more information about the available flows."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"scopes"),": A list of scopes necessary to access the endpoint. A token only needs one of the scopes to authorize with the endpoint. When possible, choose the least privileged scope. Scopes ending in ",(0,s.kt)("inlineCode",{parentName:"li"},"read")," can only retrieve data. Scopes ending in ",(0,s.kt)("inlineCode",{parentName:"li"},"manage")," can retrieve, modify, and delete data.")),(0,s.kt)("p",null,"You may also notice that many API descriptions will indicate the user level(s) required to call the API endpoint.  In the screenshot above, the list access profiles endpoint requires the user to have one of the following user levels: ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN.  This means the PAT must have one of those user level ",(0,s.kt)("strong",{parentName:"p"},"in addition to")," the ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:access-profile:read")," scope in order to call the endpoint."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"SailPoint is working to define scopes for every endpoint, but you may encounter a scenario where you need access to an endpoint that does not yet have a scope defined. Until a scope is defined for the endpoint, you can assign ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," to ensure that your credentials can access the necessary endpoints. Once all of the endpoints necessary for your use case have scopes defined, you can update or create a new PAT with the appropriate scopes in place.")),(0,s.kt)("h2",{id:"assigning-scopes-with-the-ui"},"Assigning Scopes with the UI"),(0,s.kt)("p",null,"When you create a PAT in the UI, you can apply scopes to the token. More information on how to do this will be added in the near future."),(0,s.kt)("h2",{id:"assigning-scopes-with-the-api"},"Assigning Scopes with the API"),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/create-personal-access-token"},"create PATs")," programmatically with the API. The request body for the endpoint allows the caller to specify a list of scopes to be applied to the PAT. If the ",(0,s.kt)("inlineCode",{parentName:"p"},"scope")," property is omitted from the request body, then ",(0,s.kt)("inlineCode",{parentName:"p"},"sp:scopes:all")," is granted to the credentials. The following example shows how to generate a PAT with the ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:access-request:manage")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"idn:nelm:manage")," scopes."),(0,s.kt)("p",null,"POST ",(0,s.kt)("a",{parentName:"p",href:"https://%7Btenant%7D.api.identitynow.com/v3/personal-access-tokens"},"https://{tenant}.api.identitynow.com/v3/personal-access-tokens")),(0,s.kt)("p",null,"Request Body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Access Request and NELM Management",\n    "scope": [\n        "idn:access-request:manage",\n        "idn:nelm:manage"\n    ]\n}\n')),(0,s.kt)("p",null,"This request produces the following response, indicating that the scopes were successfully applied to the PAT."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "86286c0c456e4b03a8ccb1f892dd456d",\n    "name": "Access Request and NELM Management",\n    "secret": "********",\n    "scope": [\n        "idn:access-request:manage",\n        "idn:nelm:manage"\n    ],\n    "created": "2023-01-04T18:58:17.486584Z",\n    "owner": {\n        "name": "jane.doe",\n        "id": "2c9180ab7624cbd7017642d8c8c81a73",\n        "type": "IDENTITY"\n    }\n}\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If you attempt to add a scope that is outside the permissions of the ",(0,s.kt)("a",{parentName:"p",href:"#user-level-permissions"},"target user's level"),", the request will still succeed and include the invalid scope in the credentials. However, any token generated with these credentials will ",(0,s.kt)("strong",{parentName:"p"},"not")," include the rights of the invalid scope.  This is not an issue when you apply scopes with the UI - the UI only shows scopes available to the current user.")))}h.isMDXComponent=!0},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),s=a(67294),i=a(86010),o=a(72389),r=a(67392),l=a(7094),p=a(12466);const c="tabList__CuJ",h="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:u,className:m}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,r.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,l.U)(),[w,A]=(0,s.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=u){const e=y[u];null!=e&&e!==w&&g.some((t=>t.value===e))&&A(e)}const P=e=>{const t=e.currentTarget,a=N.indexOf(t),n=g[a].value;n!==w&&(I(t),A(n),null!=u&&b(u,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:T,onClick:P},o,{className:(0,i.Z)("tabs__item",h,o?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,s.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,o.Z)();return s.createElement(d,(0,n.Z)({key:String(t)},e))}},23122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/authorization-dropdown-0610111d9fd2842fe8e4bfbe505b2477.png"}}]);