"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[96873],{42314:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={id:"account-list",title:"Account List",pagination_label:"Account List",sidebar_label:"Account List",keywords:["connectivity","connectors","account list"],description:"Aggregate all accounts from the source into IdentityNow.",slug:"/docs/saas-connectivity/commands/account-list",tags:["Connectivity","Connector Command"]},s=void 0,c={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/account-list",id:"docs/identity-now/saas-connectivity/connector-commands/account-list",title:"Account List",description:"Aggregate all accounts from the source into IdentityNow.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-list.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/account-list",permalink:"/idn/docs/saas-connectivity/commands/account-list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-list.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1697052743,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"account-list",title:"Account List",pagination_label:"Account List",sidebar_label:"Account List",keywords:["connectivity","connectors","account list"],description:"Aggregate all accounts from the source into IdentityNow.",slug:"/docs/saas-connectivity/commands/account-list",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Enable",permalink:"/idn/docs/saas-connectivity/commands/account-enable"},next:{title:"Account Read",permalink:"/idn/docs/saas-connectivity/commands/account-read"}},r={},l=[{value:"Example StdAccountListInput",id:"example-stdaccountlistinput",level:3},{value:"Example StdAccountListOutput",id:"example-stdaccountlistoutput",level:3},{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Delta Aggregation (State)",id:"delta-aggregation-state",level:2}],d={toc:l};function u(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountListInput")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountListOutput")))),(0,o.kt)("h3",{id:"example-stdaccountlistinput"},"Example StdAccountListInput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"state": {"date": "1686341338871"},\n"stateful": true\n')),(0,o.kt)("h3",{id:"example-stdaccountlistoutput"},"Example StdAccountListOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The account list command aggregates all accounts from the target source into IdentityNow. IDN calls this command during a manual or scheduled account aggregation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account List",src:n(9145).Z,width:"2500",height:"846"})),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"For you to be able to implement this endpoint, the web service must expose an API for listing user accounts and entitlements (i.e. roles or groups). Sometimes, a target source\u2019s API has a single endpoint providing all the attributes and entitlements a source account contains. However, some APIs may break these attributes and entitlements into separate API endpoints, requiring you to make multiple calls to gather all an account's necessary data. The following code from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts")," shows the necessary steps to create a complete account from the various endpoints the API offers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"async getAllAccounts(): Promise<AirtableAccount[]> {\n    return this.airTableBase('Users').select({\n        view: 'Grid view'\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray\n    }).catch(err => {\n        throw new ConnectorError('error while getting accounts: ' + err)\n    })\n}\n")),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"IDN will throw a connection timeout error if your connector doesn't respond within 3 minutes, and there are memory limitations involved with aggregating data. To prevent large memory utilization or timeout errors, you should set up your connectors to send data to IDN as it's retrieved from your source system. For more details and an example, refer to ",(0,o.kt)("a",{parentName:"p",href:"/idn/docs/saas-connectivity/in-depth/connector-timeouts"},"Connector Timeouts"),".")),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"IDN supports ",(0,o.kt)("a",{parentName:"p",href:"#delta-aggregation-state"},"delta aggregation"),". If your source has a large number of accounts that will be syncronized with IDN, then it is highly recommended to utilize ",(0,o.kt)("a",{parentName:"p",href:"#delta-aggregation-state"},"delta aggregation")," for the source. ")),(0,o.kt)("p",null,"The following code snippet from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts")," shows how to register the account list command on the connector object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK or implement own client as necessary to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n        .stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {\n            const accounts = await airtable.getAllAccounts()\n\n            for (const account of accounts) {\n                res.send(account.toStdAccountListOutput())\n            }\n        })\n...\n")),(0,o.kt)("p",null,"IDN expects each user in the target source to be converted into a format IDN understands. The specific attributes the web service returns depend on what your source provides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"public toStdAccountListOutput(): StdAccountListOutput {\n    return this.buildStandardObject();\n}\n\nprivate buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {\n    return {\n        key: SimpleKey(this.id),\n        disabled: !this.enabled,\n        locked: this.locked,\n        attributes: {\n            id: this.id,\n            displayName: this.displayName,\n            department: this.department,\n            firstName: this.firstName,\n            lastName: this.lastName,\n            email: this.email,\n            entitlements: this.entitlments,\n        },\n    }\n}\n")),(0,o.kt)("p",null,"The result of the account list command is not an array of objects but several individual objects. This is the format IDN expects, so if you see something like the following result while testing, it is normal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "department": "sailpoint admins",\n        "firstName": "John",\n        "lastName": "Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n{\n    "key": {\n        "simple": {\n            "id": "john"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john",\n        "displayName": "John Doe External",\n        "department": "external",\n        "firstName": "John",\n        "lastName": "Doe",\n        "email": "example@gmail.com",\n        "entitlements": [\n            "administrator"\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"delta-aggregation-state"},"Delta Aggregation (State)"),(0,o.kt)("p",null,"If your source can keep track of changes to the data in some way, then delta aggregation can be performed on a source. In order to implement, there are a few things that need to be configured"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your connector-spec.json file, the feature needs to be enabled by adding the following key: ",(0,o.kt)("inlineCode",{parentName:"li"},'"supportsStatefulCommands": true,')," and in the sourceConfig section, a checkbox needs to be added to enable state with the key ",(0,o.kt)("inlineCode",{parentName:"li"},"spConnEnableStatefulCommands"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"supportsStatefulCommands": true,\n...\n{\n    "key": "spConnEnableStatefulCommands",\n    "label": "Stateful",\n    "required": true,\n    "type": "checkbox"\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"stdAccountList")," command, when you are done sending accounts, you need to also send the state to IDN so it knows where to start the next time it sends a list request:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const state = {"data": Date.now().toString()}\n...\nres.saveState(state)\n')),(0,o.kt)("p",null,"In the above example, I am capturing the date, but you can use any value you want to store the state"),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The state that you send using the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveState")," command MUST be a json object, and it is recommend to only save strings to ensure proper serialization/deserialization of the data. You cannot send a simple string or number or it will not properly save the state.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"stdAccountList")," command, you need to properly handle the state object. Something like below checks the stateful boolean as well as the state object and fetches accounts accordingly:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'.stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {\n    let accounts = []\n    const state = {"data": Date.now().toString()}\n    if (!input.state && input.stateful) {\n        logger.info(input, "No state provided, fetching all accounts")\n        accounts = await airtable.getAllAccounts()\n    } else if (input.state && input.stateful) {\n        logger.info(input ,"Current state provided, only fetching accounts after that state")\n        accounts = await airtable.getAllStatefulAccounts(new Date(Number(input.state?.data)))\n    } else {\n        logger.info(input.state ,"Source is not stateful, getting all acounts")\n        accounts = await airtable.getAllAccounts()\n    }\n    logger.info(accounts, "fetched the following accounts from Airtable")\n    for (const account of accounts) {\n        res.send(account.toStdAccountListOutput())\n    }\n    res.saveState(state)\n})\n')))}u.isMDXComponent=!0},9145:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/account_list_idn-85ebe702c2bd034283e898d73b72e7fe.png"}}]);