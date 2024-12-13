document.addEventListener("DOMContentLoaded", () => {
    fetch("https://bibilomo-project.onrender.com/flight/package")
      .then((response) => response.json())
      .then((data) => {
        const container = document.querySelector(".row");
        container.innerHTML = ""; // Clear static content
        data.forEach((flight) => {
          const card = `
            <div class="col-lg-4 responsive-column">
              <div class="card-item flight-card flight--card">
                <div class="card-img">
                  <img src="${flight.imageUrl}" alt="${flight.destination}" />
                </div>
                <div class="card-body">
                  <div class="card-top-title d-flex justify-content-between">
                    <div>
                      <h3 class="card-title font-size-17">${flight.destination}</h3>
                      <p class="card-meta font-size-14">${flight.flightType}</p>
                    </div>
                    <div>
                      <div class="text-end">
                        <span class="font-weight-regular font-size-14 d-block">avg/person</span>
                        <h6 class="font-weight-bold color-text">$${flight.price}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="flight-details py-3">
                    <p class="font-size-14 text-center">
                      <span class="color-text-2 me-1">Total Time:</span>${flight.totalTime}
                    </p>
                  </div>
                  <div class="btn-box text-center">
                    <a href="flight-single.html" class="theme-btn theme-btn-small w-100">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          `;
          container.innerHTML += card;
        });
      })
      .catch((error) => console.error("Error fetching flights:", error));
  });
