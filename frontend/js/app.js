const districtContainer = document.getElementById("districtContainer");

fetch("/districts")
    .then(res => res.json())
    .then(result => {

        result.data.forEach(district => {

            districtContainer.innerHTML += `
                <div class="card">
                    <h2>${district.district_name}</h2>
                    <p>${district.province}</p>
                    <p>${district.description}</p>
                </div>
            `;

        });

    })
    .catch(err => {
        console.log(err);
    });