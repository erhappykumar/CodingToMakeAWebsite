
const section_left_js_array= [
    "Introduction",
    "Basics & Syntax", 
    "Strings",
    "Numbers & Math",
    "Arrays",
    "Objects",
    "Functions",
    "Control Flow",
    "Scope & Hoisting",
    "Error Handling",
    "Events (Browser)",
    "DOM Manipulation",
    "BOM (Browser Object Model)",
    "JSON",
    "Asynchronous JavaScript",
    "Modules",
    "Regular Expressions",
    "Advanced Topics",
    "Web APIs & Fetch",
    "New ES Features (ES6+)",
    "Debugging & Tools"
  ];
  

  const body = document.querySelector("body");
  body.innerHTML += `<nav class="nav">
          <div class="nav_html"><a href="../HTML_page/Introduction.html" class="nav_a"><div class="nav_a_div">html</div></a></div>
          
          <div class="nav_css"><a href="../CSS_page/Introduction to CSS.html" class="nav_a"><div class="nav_a_div">css</div></a></div>
  
  
          <div class="nav_js"><a href="../JS_page/Introduction.html" class="nav_a"><div class="nav_a_div">js</div></a></div>
      </nav>
  
      <div class="section_head">
          <div class="section_left"></div>
          <div class="section_right"></div>
      </div>
  `;
 let section_left=document.querySelector(".section_left ")
const nav_js=document.querySelector(".nav_js");
const nav_a_div=document.querySelectorAll(".nav_a_div");
nav_a_div[2].style.background=`var(--bgc)`
 
 


 


 
section_left_js_array.forEach((headline,i)=>{ section_left.innerHTML+= `
  <div class="section_left_A ${i}">
    <div class="section_left_a">
      <a class="section_left_" href="/JS_page/${headline}.html"> <div class="section_left_a_div">${headline}</div></a>
    </div>
  </div>`;
 


 });

 const section_left_A=document.querySelectorAll(".section_left_A")
      const section_left_a=document.querySelectorAll(".section_left_a")

   
 