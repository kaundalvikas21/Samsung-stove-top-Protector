// Frequently Asked Questions (FAQs)_js
const accordionCards = document.querySelectorAll(".accordion_card");
accordionCards.forEach((card) => {
  card.addEventListener("click", () => {
    //  Check if the clicked card is already active
    if (card.classList.contains("active")) {
      // If it is, remove the 'active' class
      card.classList.remove("active");
    } else {
      // Otherwise, remove 'active' class from all cards
      accordionCards.forEach((otherCard) => {
        otherCard.classList.remove("active");
      });

      // Add 'active' class to the clicked card
      card.classList.add("active");
    }
  });
});
