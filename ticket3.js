var form = document.getElementById("forex-converter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usdConversion = 1.27;
  let eurConversion = 1.17;
  let gbp = document.querySelector("#gbp").value;
  let forex = document.getElementById("fcurrency").value;

  if (forex === "usd") {
    let conversion = gbp * usdConversion;

    document.getElementById(
      "conversion"
    ).textContent = `£${gbp} = $${conversion}`;
  } else if (forex === "eur") {
    let conversion = gbp * eurConversion;

    document.getElementById(
      "conversion"
    ).textContent = `£${gbp} = €${conversion}`;
  }
});
