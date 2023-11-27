const brands = {
    toyota: {
        carModels: ["Camry", "Corolla", "RAV4"],
        engines: {
            Camry: ["2.5L I4", "3.5L V6"],
            Corolla: ["1.8L I4"],
            RAV4: ["2.5L I4", "2.5L Hybrid"]
        }
    },
    honda: {
        carModels: ["Civic", "Accord", "CRV"],
        engines: {
            Civic: ["1.5L Turbo", "2.0L N/A"],
            Accord: ["1.5L Turbo", "2.0L Hybrid"],
            CRV: ["1.5L Turbo", "2.0L Hybrid"]
        }
    }
};
const brandSelect = document.getElementById("brand");
const carModelSelect = document.getElementById("carModel");
const engineSelect = document.getElementById("engine");
brandSelect.addEventListener("change", function () {
    const selectedBrand = this.value;
    const carModels = brands[selectedBrand].carModels;
    carModelSelect.innerHTML = "";
    engineSelect.innerHTML = "";
    carModels.forEach(carModel => {
        const option = document.createElement("option");
        option.value = carModel;
        option.textContent = carModel;
        carModelSelect.appendChild(option);
    });
});
carModelSelect.addEventListener("change", function () {
    const selectedBrand = brandSelect.value;
    const selectedCarModel = this.value;
    const engines = brands[selectedBrand].engines[selectedCarModel];
    engineSelect.innerHTML = "";
    engines.forEach(engine => {
        const option = document.createElement("option");
        option.value = engine;
        option.textContent = engine;
        engineSelect.appendChild(option);
    });
});