const base = window.location.hostname === "127.0.0.1"
    ? 'http://127.0.0.1:5500'
    : 'https://github.com/KenSumang/Kenaniah-Sumang-Portfolio.git';

// async function loadComponent(id, file) {
//     // console.log(`${base}${file}`);
//     const response = await fetch(file);
//     const data = await response.text();
//     console.log(response);
//     document.getElementById(id).innerHTML = data;
// }

async function loadComponent(selector, file) {
    console.log(window.location.hostname);
    console.log(`${base}${file}`);
    let response = null;

    if (base === "127.0.0.1") {  
        response = await fetch(file);
    } else {
        response = await fetch(`${base}${file}`);
    }
    // const response = await fetch('${base}${file}');
    console.log(response);
    const html = await response.text();
    document.getElementById(selector).innerHTML = html;
}

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");
loadComponent("cta", "/components/cta.html");
loadComponent("banner", "/components/banner.html");
// loadComponent("contact", "/components/contact.html");http://127.0.0.1:5500