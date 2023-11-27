const select = document.getElementById("year");
const currentYear = new Date().getFullYear();
for (let i = 0; i < 30; i++) {
    const year = currentYear - i;
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
}