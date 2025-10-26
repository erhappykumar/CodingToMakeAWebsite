//    
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
  
const a=document.querySelectorAll("a");
//console.log(a)
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
   export { section_left_html as s_l_h, section_left_css as s_l_c, section_left_javascript as s_l_j ,a as a }
   
  