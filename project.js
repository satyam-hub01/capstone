let search = document.getElementById('searchBox');
let sugg = document.getElementById('suggestions');

search.addEventListener('input', function() {
    sugg.innerHTML = `
    <li>Result for "${search.value}" 1</li>
    <li>Result for "${search.value}" 2</li>
    `;
});



let themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", function() {
    if (themeSelect.value === "Dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});


let searchBox = document.getElementById("searchbox");
let suggestions = document.getElementById("suggestions");

searchBox.addEventListener("input", function() {

    if (searchBox.value === "") {
        suggestions.innerHTML = "";
        return;
    }

  
    suggestions.innerHTML = `
        <li>Result for "${searchBox.value}" 1</li>
        <li>Result for "${searchBox.value}" 2</li>
    `;
});


