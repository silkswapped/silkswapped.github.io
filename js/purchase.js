var stripe = Stripe('pk_live_mfV8c96dxDFhaoLklXv95jXQ00sJQsEgi0');
//var stripe = Stripe('pk_test_RaHBGeycEJdiCKknKNRnUli200I87DPVwB');

var checkoutButton = document.querySelector('.purchase-button');

checkoutButton.addEventListener('click', makePurchase);

function makePurchase(e) {
    console.log('hi');
    info = e.target.id.split("-");
    unique_sku = info[0];
    garment = info[1];
    console.log(unique_sku);
    console.log(garment);

    analytics.track(garment + "_Purchase", {

    });

    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{sku: unique_sku, quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//silkswap.com/pages/Success.html?session_id={CHECKOUT_SESSION_ID}&garment=' + garment,
      cancelUrl: window.location.protocol + '//silkswap.com',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
}
