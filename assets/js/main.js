async function loadComponent(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");
loadComponent("cta", "/components/cta.html");
loadComponent("banner", "/components/banner.html");
// loadComponent("contact", "/components/contact.html");