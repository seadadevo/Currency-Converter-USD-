fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2329f856815043c79d7c553b921699e4")
  .then((response) => response.json())
  .then((currencyData) => {
    const amountInput = document.querySelector(".amount");
    const egpPrice = document.querySelector(".egp span");
    const sarPrice = document.querySelector(".sar span");

    // Update prices when the amount changes
    amountInput.addEventListener("input", () => {
      const amount = parseFloat(amountInput.value) || 0; // Get the input value and handle empty or invalid values
      const egpRate = parseFloat(currencyData.rates["EGP"]);
      const sarRate = parseFloat(currencyData.rates["SAR"]);

      // Update the displayed prices
      egpPrice.innerHTML = (amount * egpRate).toFixed(2); // Multiply amount by EGP rate and format to 2 decimal places
      sarPrice.innerHTML = (amount * sarRate).toFixed(2); // Multiply amount by SAR rate and format to 2 decimal places
    });
  })
  .catch((error) => {
    console.error("Error fetching currency rates:", error);
  });