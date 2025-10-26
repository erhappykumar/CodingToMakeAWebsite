//import * as p from "./data.js";
 
    

const body = document.querySelector("body");
body.innerHTML += `<nav class="nav">
        <div class="nav_html"><a href="../HTML_page/Introduction.html"><div class="nav_a_div">html</div></a></div>
        
        <div class="nav_css"><a href="../CSS_page/Introduction to CSS.html"><div class="nav_a_div">css</div></a></div>


        <div class="nav_js"><a href="../JS_page/Introduction.html"><div class="nav_a_div">js</div></a></div>
    </nav>

    <div class="section_head">
        <div class="section_left"></div>
        <div class="section_right"></div>
    </div>
`;




//


















/*
    const section_left_html_array = [
        "Introduction",
        "HTML Basic Structure", 
        "HTML Elements",
        "Text Formatting",
        "Links & Anchors",
        "Images & Multimedia",
        "Lists",
        "Tables",
        "Forms & Input",
        "Semantic HTML",
        "HTML Entities & Symbols",
        "Inline Frames",
        "HTML5 APIs & Advanced Features",
        "Global Attributes & Data- Attributes",
        "Best Practices",
        "HTML & CSS/JS Integration",
        "Deprecated & Obsolete Tags",
        "References & Resources"
      ];
      const section_left_css_array = [
        "Introduction to CSS",
        "Selectors & Combinators",
        "Colors & Units",
        "Typography & Fonts",
        "Box Model",
        "Backgrounds & Borders",
        "Margin, Padding, and Spacing",
        "Positioning & Display",
        "Flexbox",
        "Grid Layout",
        "Float & Clear",
        "Responsive Design & Media Queries",
        "Transitions & Animations",
        "Transforms",
        "Custom Properties (CSS Variables)",
        "Pseudo-classes & Pseudo-elements",
        "Specificity & Inheritance",
        "Shadows & Effects",
        "Browser Prefixes & Compatibility",
        "Best Practices & Optimization",
        "Advanced CSS (Filters, Masks, Clip-Path)",
        "CSS Functions (calc(), var(), etc.)",
        "Print Styles",
        "Debugging CSS",
        "References & Resources"
      ];
      const section_left_javascript_array= [
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
      
    
   
    
      let section_left_html;
      section_left_html_array.forEach((headline,i)=>{ section_left_html+= `
        <div class="article_left_">
          <div class="article_left_">
            <a class="article_left_a" href="/HTML/${headline}.html">${headline}</a>
          </div>
        </div>`;
      
       })

      
      
       
      
      let section_left_css;
      section_left_css_array.forEach((headline) => {
        section_left_css += `
      
        <div class="article_left_">
          <a class="section_left_a" href="/CSS/${headline}.html">${headline}</a>
        </div>
    `;
      });
      
     
     
    //<div class="article_left_">  </div>
      let section_left_javascript;
      section_left_javascript_array.forEach((headline, index) => {
        section_left_javascript += `
      <div class="article_left_">
        <div class="article_left_">
          <a class="article_left_a" href="/JS/${headline}.html">${headline}</a>
        </div>
      </div>`;
      });
       
      
      const s_l_h=section_left_html;
      const s_l_c=section_left_css;
      const s_l_j=section_left_javascript;
      
      
 
const body = document.querySelector("body");
body.innerHTML += `<nav class="nav">
        <div class="nav_html">html</div>
        <div class="nav_css">css</div>
        <div class="nav_js">js</div>
    </nav>
    <div class="section_head">
        <div class="section_left"></div>
        <div class="section_right"></div>
    </div>
`;
const nav = document.querySelector(".nav");
const nav_html = document.querySelector(".nav_html");
const nav_css = document.querySelector(".nav_css");
const nav_js = document.querySelector(".nav_js");
const section_left = document.querySelector(".section_left");
const section_right = document.querySelector(".section_right");





nav.addEventListener("click",(e)=>{ if (e.target.innerText === "html") {


    nav_html.style.background="green";
    nav_css.style.background="";
     nav_js.style.background="";
    
  }

   else if (e.target.innerText === "css") {

  nav_html.style.background="";
    nav_css.style.background="green"
     nav_js.style.background=""
     

     


  }

  else if (e.target.innerText === "js") {
    nav_html.style.background="";
    nav_css.style.background=""
     nav_js.style.background="green";
    
  } })





/*

nav.addEventListener("click", (e) => {
  if (e.target.innerText === "html") {

    nav_html.style.background="green";
    nav_css.style.background="";
     nav_js.style.background="";
    section_left.innerHTML = `${s_l_h} `;
  }

   else if (e.target.innerText === "css") {

  nav_html.style.background="";
    nav_css.style.background="green"
     nav_js.style.background=""
    section_left.innerHTML = `${s_l_c} `;

     


  }

  else if (e.target.innerText === "js") {
    nav_html.style.background="";
    nav_css.style.background=""
     nav_js.style.background="green";
    section_left.innerHTML = `${s_l_j} `;
  }
});
 

/*
 
*/


// import {js_array_innerHtml} from "./data.js";
//  console.log(js_array_innerHtml)

// section_left.addEventListener("click",(e)=>{if(e.target.innerText=="border"){  section_right.innerHTML=js_array_innerHtml}
// })

//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 
//       the end       #            the end 

//section_left.style.zIndex='o3'

// <div class="">border</div> <div class=""><a href="CSS/color.html">color</a></div>
//<div class="array" >array</div> <div class="">string</div>
//console.log(localStorage.getItem("array_innerHTML"));

// let  array_js=["string","array","border","color"];
// section_left.addEventListener("click",(e)=>{
//     array_js.forEach((item,i)=>{  if(e.target.innerText==`${item}` ){

//         section_right.innerHTML=`${localStorage.getItem(`${item}_innerHtml`)}` } })

// })
