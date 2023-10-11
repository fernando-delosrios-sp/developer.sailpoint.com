"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[10082],{23259:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"temporary-password",title:"Generate Temporary Password",pagination_label:"Generate Temporary Password",sidebar_label:"Generate Temporary Password",sidebar_class_name:"generateTemporaryPassword",keywords:["transforms","guides","password"],description:"Generate a temporary password for all users.",sidebar_position:2,slug:"/docs/transforms/guides/temporary-password",tags:["Transforms","Guides","Password"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/guides/temporary-password",id:"docs/identity-now/transforms/guides/temporary-password",title:"Generate Temporary Password",description:"Generate a temporary password for all users.",source:"@site/products/idn/docs/identity-now/transforms/guides/temporary-password.md",sourceDirName:"docs/identity-now/transforms/guides",slug:"/docs/transforms/guides/temporary-password",permalink:"/idn/docs/transforms/guides/temporary-password",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/guides/temporary-password.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Guides",permalink:"/idn/tags/guides"},{label:"Password",permalink:"/idn/tags/password"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1697052743,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:2,frontMatter:{id:"temporary-password",title:"Generate Temporary Password",pagination_label:"Generate Temporary Password",sidebar_label:"Generate Temporary Password",sidebar_class_name:"generateTemporaryPassword",keywords:["transforms","guides","password"],description:"Generate a temporary password for all users.",sidebar_position:2,slug:"/docs/transforms/guides/temporary-password",tags:["Transforms","Guides","Password"]},sidebar:"idnDocs",previous:{title:"Your First Transform",permalink:"/idn/docs/transforms/guides/your-first-transform"},next:{title:"Transforms in Provisioning Policies",permalink:"/idn/docs/transforms/guides/transforms-in-provisioning-policies"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Create the Example Source from a delimited file",id:"create-the-example-source-from-a-delimited-file",level:2},{value:"Upload Schema and Accounts",id:"upload-schema-and-accounts",level:2},{value:"Create an Identity Profile for the Source",id:"create-an-identity-profile-for-the-source",level:2},{value:"Create the Transform",id:"create-the-transform",level:2},{value:"The First Character is the User&#39;s First Initial in Lowercase",id:"the-first-character-is-the-users-first-initial-in-lowercase",level:3},{value:"The User&#39;s Last Name Comes Next with the First Character in Uppercase",id:"the-users-last-name-comes-next-with-the-first-character-in-uppercase",level:3},{value:"The User&#39;s Two-Digit Start Month Comes Next, Taken from the Hire_Date",id:"the-users-two-digit-start-month-comes-next-taken-from-the-hire_date",level:3},{value:"The Last Part of the Password is a Static String: &quot;RstP*!7&quot;",id:"the-last-part-of-the-password-is-a-static-string-rstp7",level:3},{value:"Completed Transform",id:"completed-transform",level:2},{value:"Verify the Transform",id:"verify-the-transform",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this guide, you will learn how to create a nested transform in order to generate a temporary password from a user's attributes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The authoritative source's data feed includes both a first_name and a last_name field for every worker.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A hire date is provided within the authoritative source data feed: the hire_date field is provided for every worker and is in the format of YYYY-MM-DD."))),(0,r.kt)("p",null,"For an initial (temporary) password, set a static value driven off a formula that can be communicated to the new hire by email. This is the formula:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first character is the user's first initial in lowercase."),(0,r.kt)("li",{parentName:"ul"},"The user's last name comes next with the first character in uppercase."),(0,r.kt)("li",{parentName:"ul"},"The user's two-digit start month comes next (from the user's hire date)."),(0,r.kt)("li",{parentName:"ul"},'The last part of the password is a static string: "RstP',"*",'!7".')),(0,r.kt)("h2",{id:"create-the-example-source-from-a-delimited-file"},"Create the Example Source from a delimited file"),(0,r.kt)("p",null,"This is the CSV file you will upload to create your source for testing this transform:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"email"),(0,r.kt)("th",{parentName:"tr",align:null},"first_name"),(0,r.kt)("th",{parentName:"tr",align:null},"last_name"),(0,r.kt)("th",{parentName:"tr",align:null},"hire_date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100010"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:lewis.hamilton@sailpoint.com"},"lewis.hamilton@sailpoint.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Lewis"),(0,r.kt)("td",{parentName:"tr",align:null},"hamilton"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-12-12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100011"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:frank.williams@sailpoint.com"},"frank.williams@sailpoint.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Frank"),(0,r.kt)("td",{parentName:"tr",align:null},"Williams"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-07-10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100012"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:paddy.lowe@sailpoint.com"},"paddy.lowe@sailpoint.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Paddy"),(0,r.kt)("td",{parentName:"tr",align:null},"Lowe"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-09-20")))),(0,r.kt)("p",null,"To upload your CSV source, go to ",(0,r.kt)("strong",{parentName:"p"},"Admin")," > ",(0,r.kt)("strong",{parentName:"p"},"Connections")," > ",(0,r.kt)("strong",{parentName:"p"},"Sources")," and select ",(0,r.kt)("strong",{parentName:"p"},"Create New"),"."),(0,r.kt)("p",null,"Fill in the form to create a source:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Source",src:a(42661).Z,width:"1204",height:"1016"})),(0,r.kt)("p",null,"The source configuration workflow will appear. Keep all the default settings and under ",(0,r.kt)("strong",{parentName:"p"},"Review and Finish")," on the left hand side, select ",(0,r.kt)("strong",{parentName:"p"},"Exit Configuration"),"."),(0,r.kt)("h2",{id:"upload-schema-and-accounts"},"Upload Schema and Accounts"),(0,r.kt)("p",null,"In your newly created source, go to ",(0,r.kt)("strong",{parentName:"p"},"Import Data")," > ",(0,r.kt)("strong",{parentName:"p"},"Account Schema"),". Under ",(0,r.kt)("strong",{parentName:"p"},"Options"),", select ",(0,r.kt)("strong",{parentName:"p"},"Upload Schema"),". Locate the CSV file from earlier in this document."),(0,r.kt)("p",null,"Once your account schema is uploaded, you will see your available attributes to use within the transform."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Source",src:a(35332).Z,width:"3536",height:"1018"})),(0,r.kt)("p",null,"Now you can upload your accounts. Go to ",(0,r.kt)("strong",{parentName:"p"},"Import Data")," > ",(0,r.kt)("strong",{parentName:"p"},"Import Accounts")," > ",(0,r.kt)("strong",{parentName:"p"},"Import Data"),". Locate the CSV file from earlier in this document."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Account Summary",src:a(50026).Z,width:"3536",height:"778"})),(0,r.kt)("h2",{id:"create-an-identity-profile-for-the-source"},"Create an Identity Profile for the Source"),(0,r.kt)("p",null,"Create an identity profile for your source. Go to ",(0,r.kt)("strong",{parentName:"p"},"Admin")," > ",(0,r.kt)("strong",{parentName:"p"},"Identities")," > ",(0,r.kt)("strong",{parentName:"p"},"Identity Profiles")," and select ",(0,r.kt)("strong",{parentName:"p"},"New"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity Profile",src:a(50026).Z,width:"3536",height:"778"})),(0,r.kt)("p",null,"Fill out the form and select the source you created earlier."),(0,r.kt)("h2",{id:"create-the-transform"},"Create the Transform"),(0,r.kt)("p",null,"To create the transform for generating the user's temporary password, you will use multiple different operations. You are going to break it out into pieces and then put it all together at the end. The ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/static"},"static transform")," will be your main transform. You will use nested transforms to create each part of the password and then use those variables created in the final value."),(0,r.kt)("h3",{id:"the-first-character-is-the-users-first-initial-in-lowercase"},"The First Character is the User's First Initial in Lowercase"),(0,r.kt)("p",null,"The first part of the password is the user's first intitial in lowercase. You can create that attribute by using the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/substring"},"substring operation")," to get the first initial and then passing that attribute as input into the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/lower"},"lower operation"),". In this example, the variable is ",(0,r.kt)("inlineCode",{parentName:"p"},"firstInitialLowercase"),", and you will use it later in your static string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"First Initial Variable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"firstInitialLowercase": {\n      "type": "lower",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "first_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Temporary Password Transform",\n  "type": "static",\n  "attributes": {\n    "firstInitialLowercase": {\n      "type": "lower",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "first_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "value": "$firstInitialLowercase"\n  }\n}\n')),(0,r.kt)("h3",{id:"the-users-last-name-comes-next-with-the-first-character-in-uppercase"},"The User's Last Name Comes Next with the First Character in Uppercase"),(0,r.kt)("p",null,"Adding to the transform, you can create a variable for the first character of the last name. You can do so by using the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/substring"},"substring operation")," and the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/upper"},"upper operation"),". Once you have the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"lastInitialUppercase")," created, you can add that variable to the end of the static string in the value key."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Last Initial Variable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"lastInitialUppercase": {\n      "type": "upper",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "last_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Temporary Password Transform",\n  "type": "static",\n  "attributes": {\n    "firstInitialLowercase": {\n      "type": "lower",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "first_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "lastInitialUppercase": {\n      "type": "upper",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "last_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "value": "$firstInitialLowercase$lastInitialUppercase"\n  }\n}\n')),(0,r.kt)("p",null,"You also need the end of the last name without the first character you already have capitalized from the last step. You can get that by using the substring method and providing only the begin key, which will return everything after the index you specify."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Last Name Variable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "endOfLastName": {\n      "type": "substring",\n      "attributes": {\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "last_name",\n            "sourceName": "Example CSV Source"\n          }\n        },\n        "begin": 1\n      }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Temporary Password Transform",\n  "type": "static",\n  "attributes": {\n    "firstInitialLowercase": {\n      "type": "lower",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "first_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "lastInitialUppercase": {\n      "type": "upper",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "last_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "endOfLastName": {\n      "type": "substring",\n      "attributes": {\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "last_name",\n            "sourceName": "Example CSV Source"\n          }\n        },\n        "begin": 1\n      }\n    },\n    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName"\n  }\n}\n')),(0,r.kt)("h3",{id:"the-users-two-digit-start-month-comes-next-taken-from-the-hire_date"},"The User's Two-Digit Start Month Comes Next, Taken from the Hire_Date"),(0,r.kt)("p",null,"To get the two-digit start month, use the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/split"},"split operation"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"hire_date")," is in the format of ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),". To to get the month, split on ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," and set the index to return as 1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hire Date Month Variable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"hireDateMonth": {\n      "type": "split",\n      "attributes": {\n        "delimiter": "-",\n        "index": "1",\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "hire_date",\n            "sourceName": "Example CSV Source"\n          }\n        }\n      }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Temporary Password Transform",\n  "type": "static",\n  "attributes": {\n    "firstInitialLowercase": {\n      "type": "lower",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "first_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "lastInitialUppercase": {\n      "type": "upper",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "last_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "endOfLastName": {\n      "type": "substring",\n      "attributes": {\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "last_name",\n            "sourceName": "Example CSV Source"\n          }\n        },\n        "begin": 1\n      }\n    },\n    "hireDateMonth": {\n      "type": "split",\n      "attributes": {\n        "delimiter": "-",\n        "index": "1",\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "hire_date",\n            "sourceName": "Example CSV Source"\n          }\n        }\n      }\n    },\n    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName$hireDateMonth"\n  }\n}\n')),(0,r.kt)("h3",{id:"the-last-part-of-the-password-is-a-static-string-rstp7"},'The Last Part of the Password is a Static String: "RstP',"*",'!7"'),(0,r.kt)("p",null,"To add the final part of the password, which is the static string ",(0,r.kt)("inlineCode",{parentName:"p"},"RstP\\*!7"),", use the static operation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Static String Variable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"staticString": {\n      "type": "static",\n      "attributes": {\n        "value": "RstP*!7"\n      }\n    }\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"completed-transform"},"Completed Transform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Temporary Password Transform",\n  "type": "static",\n  "attributes": {\n    "firstInitialLowercase": {\n      "type": "lower",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "first_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "lastInitialUppercase": {\n      "type": "upper",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "last_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "endOfLastName": {\n      "type": "substring",\n      "attributes": {\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "last_name",\n            "sourceName": "Example CSV Source"\n          }\n        },\n        "begin": 1\n      }\n    },\n    "hireDateMonth": {\n      "type": "split",\n      "attributes": {\n        "delimiter": "-",\n        "index": "1",\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "hire_date",\n            "sourceName": "Example CSV Source"\n          }\n        }\n      }\n    },\n    "staticString": {\n      "type": "static",\n      "attributes": {\n        "value": "RstP*!7"\n      }\n    },\n    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName$hireDateMonth$staticString"\n  }\n}\n')),(0,r.kt)("h2",{id:"verify-the-transform"},"Verify the Transform"),(0,r.kt)("p",null,"To verify your transform is working, create the transfrom through the REST API."),(0,r.kt)("p",null,"To call the APIs for transforms, you need a personal access token and your tenant's name to provide with the request. For more information about how to get a personal access token, see ",(0,r.kt)("a",{parentName:"p",href:"/idn/api/authentication#personal-access-tokens"},"Personal Access Tokens"),". For more information about how to get the name of your tenant, see ",(0,r.kt)("a",{parentName:"p",href:"/idn/api/getting-started#find-your-tenant-name"},"Finding Your Organization Tenant Name"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://{tenant}.api.identitynow.com/v3/transforms\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {token}\' \\\n--data-raw \'{\n  "name": "Temporary Password Transform",\n  "type": "static",\n  "attributes": {\n    "firstInitialLowercase": {\n      "type": "lower",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "first_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "lastInitialUppercase": {\n      "type": "upper",\n      "attributes": {\n        "input": {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "attributeName": "last_name",\n                "sourceName": "Example CSV Source"\n              }\n            },\n            "begin": 0,\n            "end": 1\n          }\n        }\n      }\n    },\n    "endOfLastName": {\n      "type": "substring",\n      "attributes": {\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "last_name",\n            "sourceName": "Example CSV Source"\n          }\n        },\n        "begin": 1\n      }\n    },\n    "hireDateMonth": {\n      "type": "split",\n      "attributes": {\n        "delimiter": "-",\n        "index": "1",\n        "input": {\n          "type": "accountAttribute",\n          "attributes": {\n            "attributeName": "hire_date",\n            "sourceName": "Example CSV Source"\n          }\n        }\n      }\n    },\n    "staticString": {\n      "type": "static",\n      "attributes": {\n        "value": "RstP*!7"\n      }\n    },\n    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName$hireDateMonth$staticString"\n  }\n}\'\n')),(0,r.kt)("p",null,"Once you have created the transform successfully, you can apply the new transform and preview what the password will look like for each user."),(0,r.kt)("p",null,"Log in to your IdentityNow tenant and go to ",(0,r.kt)("strong",{parentName:"p"},"Admin")," > ",(0,r.kt)("strong",{parentName:"p"},"Identities")," > ",(0,r.kt)("strong",{parentName:"p"},"Identity Profiles"),". Select the name of the profile you created earlier, Transform Example. Select the ",(0,r.kt)("strong",{parentName:"p"},"Mappings")," tab, scroll to the bottom and select ",(0,r.kt)("strong",{parentName:"p"},"Add New Attribute"),". Name the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"Temporary Password"),". To save the new mappings, you must fill out the id, email, first name and last name mappings."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Attribute Mapping",src:a(36999).Z,width:"1874",height:"330"})),(0,r.kt)("p",null,"Once you have saved the mappings, select ",(0,r.kt)("strong",{parentName:"p"},"Preview")," in the upper right of the page and select the Lewis Hamilton identity under ",(0,r.kt)("strong",{parentName:"p"},"Identity to Preview"),". The temporaryPassword shows up as ",(0,r.kt)("inlineCode",{parentName:"p"},"lHamilton12RstP*!7"),"."),(0,r.kt)("p",null,"This is an example table of values with the temporary password for each user:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id"),(0,r.kt)("th",{parentName:"tr",align:null},"email"),(0,r.kt)("th",{parentName:"tr",align:null},"first_name"),(0,r.kt)("th",{parentName:"tr",align:null},"last_name"),(0,r.kt)("th",{parentName:"tr",align:null},"hire_date"),(0,r.kt)("th",{parentName:"tr",align:null},"temporaryPassword"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100010"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:lewis.hamilton@sailpoint.com"},"lewis.hamilton@sailpoint.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Lewis"),(0,r.kt)("td",{parentName:"tr",align:null},"hamilton"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-12-12"),(0,r.kt)("td",{parentName:"tr",align:null},"lHamilton12RstP","*","!7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100011"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:frank.williams@sailpoint.com"},"frank.williams@sailpoint.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Frank"),(0,r.kt)("td",{parentName:"tr",align:null},"Williams"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-07-10"),(0,r.kt)("td",{parentName:"tr",align:null},"fWilliams07RstP","*","!7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100012"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:paddy.lowe@sailpoint.com"},"paddy.lowe@sailpoint.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Paddy"),(0,r.kt)("td",{parentName:"tr",align:null},"Lowe"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-09-20"),(0,r.kt)("td",{parentName:"tr",align:null},"pLowe09RstP","*","!7")))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Looking for more examples or having trouble with one of your complex transforms? Reach out in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/"},"Developer Community Forum"),"."))}m.isMDXComponent=!0},35332:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/account_schema-64ba17961b71c06f0decbf2ae642ae7e.png"},50026:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/account_summary-e700848c8b316903008dbadede3f87b5.png"},42661:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create_source-54635ec362775e5aeba50acef6799cae.png"},36999:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/temporary_password_attribute_mapping-f33e278cb57379bb737cb38c65b81a83.png"}}]);