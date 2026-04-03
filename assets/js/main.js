// const base = window.location.hostname === "127.0.0.1"
//     ? 'http://127.0.0.1:5500'
//     : 'https://github.com/KenSumang/Kenaniah-Sumang-Portfolio';

// // async function loadComponent(id, file) {
// //     // console.log(`${base}${file}`);
// //     const response = await fetch(file);
// //     const data = await response.text();
// //     console.log(response);
// //     document.getElementById(id).innerHTML = data;
// // }

// async function loadComponent(selector, file) {
//     console.log(window.location.hostname);
//     console.log(`${base}/components/${file}`);
//     let response = null;

//     if (base === "127.0.0.1") {  
//         response = await fetch(file);
//     } else {
//         response = await fetch(`${base}/components/${file}`);
//     }
//     // const response = await fetch('${base}${file}');
//     // console.log(response);
//     // console.log(`${base}${file}`);
//     const html = await response.text();
//     console.log(html);
//     document.getElementById(selector).innerHTML = html;
// }

// loadComponent("header", "header.html");
// loadComponent("footer", "footer.html");
// loadComponent("cta", "cta.html");
// loadComponent("banner", "banner.html");
// // loadComponent("contact", "/components/contact.html");http://127.0.0.1:5500


const isLocal = window.location.hostname === "127.0.0.1" || 
                window.location.hostname === "localhost";

const base = isLocal
    ? ''
    : 'https://kensumang.github.io/Kenaniah-Sumang-Portfolio';  // your GitHub repo name

async function loadComponent(selector, file) {
    const response = await fetch(`${base}/components/${file}`);
    const html = await response.text();
    document.getElementById(selector).innerHTML = html;
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
loadComponent("cta", "cta.html");
loadComponent("banner", "banner.html");