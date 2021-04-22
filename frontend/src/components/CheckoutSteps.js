const CheckoutSteps = {
  render: (props) => {
    return `
    <div class="checkout-steps">
      <div class="${props.step1 ? 'active' : ''}">Signin</div>
      <div class="${props.step2 ? 'active' : ''}">Payment</div>
      <div class="${props.step3 ? 'active' : ''}">Place Order</div>
    </div>
    `;
  },
};
export default CheckoutSteps;