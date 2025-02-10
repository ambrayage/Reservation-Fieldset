document.addEventListener("DOMContentLoaded", function () {
    const datesToDisplay = [
        { value: "2024-01-06" },
        { value: "2024-01-13" },
        { value: "2024-01-20" },
        { value: "2024-01-27" }
    ];

    function populateDateSelect(selectElement) {
        datesToDisplay.forEach(dateObj => {
            const option = document.createElement("option");
            option.value = dateObj.value;
            option.textContent = dateObj.value;
            selectElement.appendChild(option);
        });
    }

    function addReservationFieldset() {
        const form = document.querySelector("form");
        const fieldset = document.querySelector("fieldset");
        const newFieldset = fieldset.cloneNode(true);

        newFieldset.querySelector(".date").innerHTML = "";
        populateDateSelect(newFieldset.querySelector(".date"));

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Supprimer";
        removeBtn.classList.add("btn", "btn-danger", "remove");
        removeBtn.addEventListener("click", function () {
            if (document.querySelectorAll("fieldset").length > 1) {
                newFieldset.remove();
            }
        });
        newFieldset.appendChild(removeBtn);

        form.insertBefore(newFieldset, document.querySelector("#add"));
    }

    document.querySelector("#add").addEventListener("click", function (e) {
        e.preventDefault();
        addReservationFieldset();
    });

    populateDateSelect(document.querySelector(".date"));
});
