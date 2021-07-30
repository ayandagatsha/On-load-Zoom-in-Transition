window.onload = function() {
    document.body.className += " loaded";
}

let div = document.createElement("div");   // Create a <button> element
// btn.innerHTML = "CLICK ME";                   // Insert text
document.body.appendChild(div);               // Append <button> to <body>
div.id="container"


{/* <div >
<div id="content">
  This content div is centered within it's containing div
  <a href="https://css-tricks.com/transitions-only-after-page-load/">Make sure transitions occur only after the page loads, click me.</a>
</div>
</div> */}

let div2 = document.createElement("div");   // Create a <button> element
 div2.innerHTML = "On load Zoom in Transition test, passed";                   // Insert text
div.appendChild(div2);  

div2.id="content";
