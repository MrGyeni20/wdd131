const yearSpan = document.getElementById("currentyear");
const modifiedPara = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedPara.textContent = `Last Modified: ${document.lastModified}`;
