(this["webpackJsonprevision-simplified"]=this["webpackJsonprevision-simplified"]||[]).push([[0],{15:function(e,t,l){},19:function(e,t,l){e.exports=l(31)},24:function(e,t,l){},30:function(e,t,l){},31:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(16),c=l.n(r),i=(l(24),l(6)),u=l(1),m=l(9),s=Object(a.createContext)(),o=function(e){var t=e.children,l=Object(a.useState)(null),r=Object(m.a)(l,2),c=r[0],i=r[1];return n.a.createElement("div",null,n.a.createElement(s.Provider,{value:{getCurrentSubject:function(){return c},setCurrentSubject:function(e){i(e)}}},t))},E=l(17),h=function(e){return n.a.createElement(E.NavHashLink,{to:"#"+e.id,activeClassName:null,smooth:!0},e.name)},d=(l(30),function(e){var t=null!==Object(a.useContext)(s).getCurrentSubject(),l=Object(a.useState)(!1),r=Object(m.a)(l,2),c=r[0],u=r[1],o=function(){u(!c);var e=document.querySelector("nav ul li a span").classList;c?e.remove("rotated"):e.add("rotated")};return n.a.createElement("nav",null,n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Revision Simplified")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(i.NavLink,{to:"/home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"subjects",onClick:o},"Subjects",n.a.createElement("span",{className:"fas fa-caret-down"})),c?n.a.createElement("ul",{className:"subject-dropdown"},n.a.createElement("li",null,n.a.createElement(i.NavLink,{to:"/subjects/GCSE_RE",onClick:o},"RE")),n.a.createElement("li",null,n.a.createElement(i.NavLink,{to:"/subjects/GCSE_CS",onClick:o},"Computing"))):null),n.a.createElement("li",null,n.a.createElement(i.NavLink,{to:"/about"},"About me")),t?n.a.createElement("span",{className:"barrier"}):null,t?n.a.createElement("li",null,n.a.createElement(h,{id:"spec",name:"Spec."})):null,t?n.a.createElement("li",null,n.a.createElement(h,{id:"res",name:"Resources"})," "):null,t?n.a.createElement("li",null,n.a.createElement(h,{id:"notes",name:"Notes"})):null))}),p=function(e){return Object(a.useContext)(s).setCurrentSubject(null),n.a.createElement("div",{className:"home"},n.a.createElement("h1",null,"Welcome to Revision Simplified"),n.a.createElement("h3",null,n.a.createElement("em",null,"Good revision ---\x3e Good results")),n.a.createElement("p",null,"The aim of this website is to help you get the best results possible in your exams, I will be using my revision notes to make revision content for all to use. However, because these are based on my revision notes, the content will be specific to the specifications of the exam boards I was doing exams for, once I have completed the final exams."),n.a.createElement("h2",null,"Current subjects covered"),n.a.createElement("h3",null,"GCSE"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Subject"),n.a.createElement("th",null,"Spec. code"),n.a.createElement("th",null,"GCSE grade"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"RE"),n.a.createElement("td",null,"Edexcel B 2016 (ZB - 1C, 2B)"),n.a.createElement("td",null,"Coming 20-Aug-2020")),n.a.createElement("tr",null,n.a.createElement("td",null,"Computer Science"),n.a.createElement("td",null,"OCR (J726)"),n.a.createElement("td",null,"Coming 20-Aug-2020")))),n.a.createElement("h2",null,"Future subjects ",n.a.createElement("em",null,"(that will have revision notes)")),n.a.createElement("h3",null,"GCSE"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Subject"),n.a.createElement("th",null,"Spec. code"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Biology"),n.a.createElement("td",null,"AQA (8641)")),n.a.createElement("tr",null,n.a.createElement("td",null,"Chemistry"),n.a.createElement("td",null,"AQA (8642)")),n.a.createElement("tr",null,n.a.createElement("td",null,"Physics"),n.a.createElement("td",null,"AQA (8643)")),n.a.createElement("tr",null,n.a.createElement("td",null,"Geography"),n.a.createElement("td",null,"AQA (8035)")),n.a.createElement("tr",null,n.a.createElement("td",null,"History"),n.a.createElement("td",null,"Edexcel 2016 - EJ (11, 2J, 30)")),n.a.createElement("tr",null,n.a.createElement("td",null,"(possibly) English Literature"),n.a.createElement("td",null,"AQA (8702)")),n.a.createElement("tr",null,n.a.createElement("td",null,"(possibly) Spanish"),n.a.createElement("td",null,"AQA (8698)")))),n.a.createElement("h3",null,"A-level"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Subject"),n.a.createElement("th",null,"Possibility"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Maths"),n.a.createElement("td",null,"Certain")),n.a.createElement("tr",null,n.a.createElement("td",null,"Further Maths"),n.a.createElement("td",null,"Certain")),n.a.createElement("tr",null,n.a.createElement("td",null,"Computer Science"),n.a.createElement("td",null,"Certain")),n.a.createElement("tr",null,n.a.createElement("td",null,"Physics"),n.a.createElement("td",null,"Maybe")))))},b=function(e){return Object(a.useContext)(s).setCurrentSubject(null),n.a.createElement("div",{className:"about"},n.a.createElement("h1",null,"About me"),n.a.createElement("p",null,"Hi! I am Harry Davis, a year 10 student currently studying for my GCSEs. I have aspirations to go to the University of Oxford to study computer science."),n.a.createElement("h2",null,"GCSEs"),n.a.createElement("p",null,"I took 2 GCSEs early - RE and computer science - due to Covid-19 these results will be based on predicted grades."),n.a.createElement("h2",null,"A-Levels"),n.a.createElement("p",null,"I currently am thinkings of taking: Maths, Further maths & Computer science."))},g=function(e){return Object(a.useContext)(s).setCurrentSubject(null),n.a.createElement("div",{className:"unknown"},n.a.createElement("h1",null,"Error 404: Page not found"))},C=function(){return n.a.createElement("div",{id:"islam1",className:"topic"},n.a.createElement("h4",null,"Islam - Belief in Allah"),n.a.createElement("p",{className:"heading"},"Key Words"),n.a.createElement("ul",null,n.a.createElement("li",null,"TERM - definition")),n.a.createElement("p",{className:"heading"},"SUBTOPIC"),n.a.createElement("ul",null,n.a.createElement("li",null,"BLANK")))},f=(l(15),function(e){return e.setSubject("GCSE_RE"),n.a.createElement("div",{className:"subject"},n.a.createElement("h1",null,"GCSE RE"),n.a.createElement("h3",null,"Edexcel B 2016 (1RB0 - ZB)"),n.a.createElement("div",{id:"spec"},n.a.createElement("h2",null,"Specification at a glance"),n.a.createElement("h3",null,"Paper 1 - 1hr 45mins [102 marks]"),n.a.createElement("em",null,"Islam (1C)"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(h,{id:"islam1",name:"1a"})," - Belief in Allah"),n.a.createElement("li",null,"1b - Marriage & the Family"),n.a.createElement("li",null,"1c - Living the Muslim Life"),n.a.createElement("li",null,"1d - Matters of Life & Death")),n.a.createElement("br",null),n.a.createElement("h3",null,"Paper 2 - 1hr 45mins [102 marks]"),n.a.createElement("em",null,"Christianity (2B)"),n.a.createElement("ul",null,n.a.createElement("li",null,"2a - Belief in God"),n.a.createElement("li",null,"2b - Crime & Punishment"),n.a.createElement("li",null,"2c - Living the Christian Life"),n.a.createElement("li",null,"2d - Peace & Conflict"))),n.a.createElement("div",{id:"res"},n.a.createElement("h2",null,"Resources"),n.a.createElement("p",null,"I mainly used my exercise book, just summarised my notes but..."),n.a.createElement("p",null,"Books I used:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.pearsonschoolsandfecolleges.co.uk/secondary/ReligiousEducationandCitizenship/14-16forEdexcel/EdexcelGCSE91ReligiousStudiesSpecB/ISBN/Revision/ReviseEdexcelGCSE91ReligiousStudiesChristianityIslamRevisionGuide.aspx",target:"__blank",el:"noopener noreferrer"},"Pearson revision guide ")," (contains all possible topics so can ignore around half!)")),n.a.createElement("p",null,"Websites I used:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.bbc.co.uk/bitesize/examspecs/zm9pd6f",target:"__blank",el:"noopener noreferrer"},"BBC Bitesize")," (of some use)"))),n.a.createElement("div",{id:"notes"},n.a.createElement("h2",null,"My Revision Notes"),n.a.createElement(C,null),n.a.createElement("h4",null,"Islam - Marriage & the Family"),n.a.createElement("h4",null,"Islam - Living the Muslim Life"),n.a.createElement("h4",null,"Islam - Matters of Life & Death"),n.a.createElement("h4",null,"Christianity - Belief in God"),n.a.createElement("h4",null,"Christianity - Crime & Punishment"),n.a.createElement("h4",null,"Christianity - Living the Christian Life"),n.a.createElement("h4",null,"Christianity - Peace & Conflict")))}),y=function(){return n.a.createElement("div",{id:"comp1_1",className:"topic"},n.a.createElement("h4",null,"Component 1.1 - System architecture (CPU)"),n.a.createElement("p",{className:"heading"},"Key Words"),n.a.createElement("ul",null,n.a.createElement("li",null,"Address - each memory location is identified by a unique one of these"),n.a.createElement("li",null,"Architecture - a term that describes the content & layout of a processor e.g. Von Neumann or Harvard"),n.a.createElement("li",null,"FDE cycle - this is repeated by a computer in order to carry out tasks")),n.a.createElement("p",{className:"heading"},"Purpose of the CPU"),n.a.createElement("ul",null,n.a.createElement("li",null,"Processing data"),n.a.createElement("li",null,"Carrying out instructions")),n.a.createElement("p",{className:"heading"},"Von-Neumann Architecture"),n.a.createElement("ul",null,n.a.createElement("li",null,"In the Von-Neumann architecture both instructions & data are stored in the same memory"),n.a.createElement("li",null,"Registers are high-speed, low-capacity storage locations, which can be special or general purpose, rapid read/write"),n.a.createElement("li",null,"General purpose registers"),n.a.createElement("ul",null,n.a.createElement("li",{className:"sub-heading"},"Memory address register (MAR)"),n.a.createElement("ul",null,n.a.createElement("li",null,"The address of the data/instruction being accessed is temporarily stored here"),n.a.createElement("li",null,"Then the address is passed to the RAM via. the address bus")),n.a.createElement("li",{className:"sub-heading"},"Memory data register (MDR)"),n.a.createElement("ul",null,n.a.createElement("li",null,"During the FDE cycle the data/instruction from the RAM is temporarily stored in the MDR"),n.a.createElement("li",null,"Data travels bi-directionally via. the data bus "),n.a.createElement("li",null,"Instructions only travel away from RAM via. the data bus"))),n.a.createElement("li",{className:"sub-heading"},"Program counter (PC)"),n.a.createElement("ul",null,n.a.createElement("li",null,"A register that holds the memory address of the next instruction then passes it to the MAR as the first step of the FDE cycle"),n.a.createElement("li",null,"All data & instructions in memory (RAM/cache) have a unique & specific address")),n.a.createElement("li",{className:"sub-heading"},"Accumulator (ACC)"),n.a.createElement("ul",null,n.a.createElement("li",null,"A register that stores the immediate result of calculations from the ALU (within the ALU)")),n.a.createElement("li",{className:"sub-heading"},"Current instruction register (CIR)"),n.a.createElement("ul",null,n.a.createElement("li",null,"Splits the instruction received from RAM "),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"sub-heading"},"Opcode"),": the function e.g. add, minus"),n.a.createElement("li",null,n.a.createElement("span",{className:"sub-heading"},"Operand"),": the data e.g. 6, 14")),n.a.createElement("li",null,"Sends calculations & logic to the ALU"),n.a.createElement("li",null,"Sends instructions e.g. input/output to the CU"))),n.a.createElement("p",{className:"heading"},"Buses"),n.a.createElement("ul",null,n.a.createElement("li",null,"The system bus contains 3 buses:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",{className:"sub-heading"},"Data")," \u2013 transports data & instructions, RAM to CPU"),n.a.createElement("li",null,n.a.createElement("span",{className:"sub-heading"},"Address")," \u2013 transports the address of instructions, from CPU to RAM"),n.a.createElement("li",null,n.a.createElement("span",{className:"sub-heading"},"Control")," \u2013 controls communication with other parts of the device"))))},v=function(e){return e.setSubject("GCSE_CS"),n.a.createElement("div",{className:"subject"},n.a.createElement("h1",null,"GCSE Computer Science"),n.a.createElement("h3",null,"OCR (J726)"),n.a.createElement("div",{id:"spec"},n.a.createElement("h2",null,"Specification at a glance"),n.a.createElement("h3",null,"Paper 1 - 1hr 30mins [80 marks]"),n.a.createElement("em",null,"Computer Systems (Component 1)"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(h,{id:"comp1_1",name:"1.1"})," - System architecture (CPU)"),n.a.createElement("li",null,"1.2 - Memory"),n.a.createElement("li",null,"1.3 - Storage"),n.a.createElement("li",null,"1.4 - Wired & wireless networks"),n.a.createElement("li",null,"1.5 - Network topologies, protocols & layers"),n.a.createElement("li",null,"1.6 - System security"),n.a.createElement("li",null,"1.7 - System software"),n.a.createElement("li",null,"1.8 - Ethical, legal, cultural & environmental concerns")),n.a.createElement("br",null),n.a.createElement("h3",null,"Paper 2 - 1hr 30mins [80 marks]"),n.a.createElement("em",null,"Computational thinking, algorithms and programming (Component 2)"),n.a.createElement("ul",null,n.a.createElement("li",null,"2.1 - Algorithms"),n.a.createElement("li",null,"2.2 - Programming techniques"),n.a.createElement("li",null,"2.3 - Building robust programs"),n.a.createElement("li",null,"2.4 - Computational logic"),n.a.createElement("li",null,"2.5 - Translators & facilites"),n.a.createElement("li",null,"2.6 - Data representation"))),n.a.createElement("div",{id:"res"},n.a.createElement("h2",null,"Resources"),n.a.createElement("p",null,"Books I used:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.cgpbooks.co.uk/secondary-books/gcse/computer-science/cor41-gcse-computer-science-ocr-revision-guide",target:"__blank",el:"noopener noreferrer"},"CGP revision guide")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.cgpbooks.co.uk/secondary-books/gcse/computer-science/coq41-gcse-computer-science-ocr-exam-practice-wo",target:"__blank",el:"noopener noreferrer"},"CGP practice exam questions"))),n.a.createElement("p",null,"Websites I used:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"http://www.teach-ict.co.uk/2016/GCSE_Computing/OCR_J276/OCR_J276_home.html",target:"__blank",el:"noopener noreferrer"},"Teach-ICT")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.bbc.co.uk/bitesize/examspecs/zmtchbk",target:"__blank",el:"noopener noreferrer"},"BBC Bitesize")))),n.a.createElement("div",{id:"notes"},n.a.createElement("h2",null,"My Revision Notes"),n.a.createElement(y,null),n.a.createElement("h4",null,"Component 1.2 - Memory"),n.a.createElement("h4",null,"Component 1.3 - Storage"),n.a.createElement("h4",null,"Component 1.4 - Wired & wireless networks"),n.a.createElement("h4",null,"Component 1.5 - Network topologies, protocols & layers"),n.a.createElement("h4",null,"Component 1.6 - System security"),n.a.createElement("h4",null,"Component 1.7 - System software"),n.a.createElement("h4",null,"Component 1.8 - Ethical, legal, cultural & environmental concerns"),n.a.createElement("h4",null,"Component 2.1 - Algorithms"),n.a.createElement("h4",null,"Component 2.2 - Programming techniques"),n.a.createElement("h4",null,"Component 2.3 - Building robust programs"),n.a.createElement("h4",null,"Component 2.4 - Computational logic"),n.a.createElement("h4",null,"Component 2.5 - Translators & facilites"),n.a.createElement("h4",null,"Component 2.6 - Data representation")))},S=function(){var e=Object(a.useContext)(s),t=function(t){e.setCurrentSubject(t)};return n.a.createElement(i.HashRouter,null,n.a.createElement(d,null),n.a.createElement("main",null,n.a.createElement(u.g,null,n.a.createElement(u.c,{from:"/",to:"/home",exact:!0}),n.a.createElement(u.d,{exact:!0,path:"/home",component:p}),n.a.createElement(u.d,{exact:!0,path:"/about",component:b}),n.a.createElement(u.d,{exact:!0,path:"/subjects/GCSE_RE",component:function(){return n.a.createElement(f,{setSubject:t})}}),n.a.createElement(u.d,{exact:!0,path:"/subjects/GCSE_CS",component:function(){return n.a.createElement(v,{setSubject:t})}}),n.a.createElement(u.d,{component:g}))))};c.a.render(n.a.createElement(o,null,n.a.createElement(S,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0fadd2c3.chunk.js.map