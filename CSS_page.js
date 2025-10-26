
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
 let section_left=document.querySelector(".section_left ")
const nav_css=document.querySelector(".nav_css")
 nav_css.style.background="green" 
 





 
section_left_css_array.forEach((headline,i)=>{ section_left.innerHTML+= `
  <div class="section_left_A ${i}">
    <div class="section_left_a">
      <a class="section_left_" href="/CSS_page/${headline}.html"> <div class="section_left_a_div">${headline}</div></a>
    </div>
  </div>`;
 


 });

  const section_left_a=document.querySelectorAll(".section_left_a")

