// document.addEventListener("click", function (e) {
 
//   const variantBtn = e.target.closest(".product-variant");
//   if (!variantBtn) return;
 
//   // ❌ disabled variant ignore
//   if (variantBtn.hasAttribute("disabled")) return;
 
//   // 🎯 nearest card
//   const card = variantBtn.closest(".card__content") || variantBtn.closest(".card");
//   if (!card) return;
 
//   // 🔁 active class (only inside this card)
//   card.querySelectorAll(".product-variant").forEach(btn => {
//     btn.classList.remove("active");
//   });
//   variantBtn.classList.add("active");
 
//   // 🎯 selected variant id
//   const selectedVariantId = variantBtn.dataset.variantId;
 
//   // 🎯 hidden input inside same card form
//   const variantInput = card.querySelector(".product-variant-id");
 
//   if (variantInput) {
//     variantInput.value = selectedVariantId;
//   }
 
// });
 