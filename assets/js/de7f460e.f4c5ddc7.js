"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Introducing v0.8.1: Enhanced Prompt Macro and New Conversational Chain Type",p={permalink:"/blog/2023/04/27/index",editUrl:"https://github.com/sobelio/llm-chain/tree/main/blog/blog/2023-04-27/index.md",source:"@site/blog/2023-04-27/index.md",title:"Introducing v0.8.1: Enhanced Prompt Macro and New Conversational Chain Type",description:"We are excited to announce the release of version 0.8.1, which brings two major improvements to our Large Language Model (LLM) library: an enhanced prompt! macro and a new Conversational chain type. These updates make it even easier for developers to create rich and interactive applications powered by LLMs.",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[],readingTime:2.305,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Introducing LLM-chain v0.8.0 - Expanding the prompt system",permalink:"/blog/introducing-llm-chain-v080"}},s={authorsImageUrls:[]},l=[{value:"Enhanced Prompt Macro with Prefixes",id:"enhanced-prompt-macro-with-prefixes",level:2},{value:"New Conversational Chain Type",id:"new-conversational-chain-type",level:2},{value:"Upgrade Today",id:"upgrade-today",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are excited to announce the release of version 0.8.1, which brings two major improvements to our Large Language Model (LLM) library: an enhanced ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt!")," macro and a new Conversational chain type. These updates make it even easier for developers to create rich and interactive applications powered by LLMs."),(0,r.kt)("h2",{id:"enhanced-prompt-macro-with-prefixes"},"Enhanced Prompt Macro with Prefixes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt!")," macro has been updated to support prefixes, making it more expressive and convenient to use. With this new feature, you can now create chat prompts by simply prefixing them with ",(0,r.kt)("inlineCode",{parentName:"p"},"user:"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assistant:"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"system:"),". Here's an example of how to use the new syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'\nlet user_prompt = prompt!(user: "Hello, Mr Bot, help me figure out what to do next");\nlet system_prompt = prompt!(system: "You are a clever assistant that");\n')),(0,r.kt)("p",null,"By using these prefixes, you can create more complex and interactive prompts for various use cases, such as building chatbots, automating tasks, or generating text."),(0,r.kt)("h2",{id:"new-conversational-chain-type"},"New Conversational Chain Type"),(0,r.kt)("p",null,"We're also introducing the Conversational chain type, which enables you to have ongoing conversations with LLMs. Conversational chains manage the conversation history and context, ensuring that the LLM's responses remain relevant and coherent throughout the interaction. This new chain type is particularly useful for chatbot applications, multi-step interactions, and any scenario where context is essential."),(0,r.kt)("p",null,"Here's a quick example of a Conversational chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use llm_chain::{\n    chains::conversation::Chain, executor, output::Output, parameters, prompt, step::Step,\n};\nuse tokio;\n\n#[tokio::main(flavor = "current_thread")]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    // Create a new ChatGPT executor.\n    let exec = executor!()?;\n\n    // Create a new Chain with the executor.\n    let mut chain = Chain::new(\n        prompt!(system: "You are a robot assistant for making personalized greetings."),\n    )?;\n\n    // Define the conversation steps.\n    let step1 = Step::for_prompt_template(prompt!(user: "Make a personalized greeting for Joe."));\n    let step2 =\n        Step::for_prompt_template(prompt!(user: "Now, create a personalized greeting for Jane."));\n    let step3 = Step::for_prompt_template(\n        prompt!(user: "Finally, create a personalized greeting for Alice."),\n    );\n\n    let step4 = Step::for_prompt_template(prompt!(user: "Remind me who did we just greet."));\n\n    // Execute the conversation steps.\n    let res1 = chain.send_message(step1, &parameters!(), &exec).await?;\n    println!("Step 1: {}", res1.primary_textual_output().await.unwrap());\n\n    let res2 = chain.send_message(step2, &parameters!(), &exec).await?;\n    println!("Step 2: {}", res2.primary_textual_output().await.unwrap());\n\n    let res3 = chain.send_message(step3, &parameters!(), &exec).await?;\n    println!("Step 3: {}", res3.primary_textual_output().await.unwrap());\n\n    let res4 = chain.send_message(step4, &parameters!(), &exec).await?;\n    println!("Step 4: {}", res4.primary_textual_output().await.unwrap());\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"With the Conversational chain, you can now easily send multiple messages and manage the conversation context without having to worry about manual context management."),(0,r.kt)("h2",{id:"upgrade-today"},"Upgrade Today"),(0,r.kt)("p",null,"We encourage you to upgrade to version 0.8.1 and take advantage of these new features. The enhanced ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt!")," macro and the new Conversational chain type will make your LLM-powered applications even more interactive and engaging."),(0,r.kt)("p",null,"As always, we appreciate your feedback and suggestions. Feel free to reach out to our team for any questions or concerns. Happy coding!"))}m.isMDXComponent=!0}}]);