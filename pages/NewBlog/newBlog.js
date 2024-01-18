import "@fontsource/firago/400.css";
import "@fontsource/firago/500.css";
import "@fontsource/firago/600.css";

// js to trigger the file input when the text is clicked
function triggerFileInput() {
  document.getElementById("img").click();
}

// actual date placeholder for publish date input
let today = new Date().toISOString().split("T")[0];
document.getElementById("todayDate").setAttribute("value", today);
