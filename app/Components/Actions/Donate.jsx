// app/actions/donate.js
"use client";

export async function donate() {
  // server-side logic here
  
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }

}
