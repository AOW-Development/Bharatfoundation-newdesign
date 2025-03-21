import GooglePayButton from "@google-pay/button-react";

const GooglePay = ({ inputAmount }: { inputAmount: string }) => {
  return (
    <div>
      <GooglePayButton
        environment="TEST"
        buttonType="donate" // Ensures "G Pay" label
        buttonColor="white" // Keeps default Google styling
        // style={{ width: "150px", height: "40px", backgroundColor: "#B8EA80" }} // Adjust padding/size
        buttonSizeMode="static"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["VISA", "MASTERCARD"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example", // Replace with actual payment gateway
                  gatewayMerchantId: "exampleMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "5549694309", // Replace with your Merchant ID
            merchantName: "Bharat Sports Foundation",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPrice: inputAmount, // Replace with the actual amount
            currencyCode: "INR",
          },
        }}
        onLoadPaymentData={(paymentData) => {
          console.log("Payment Successful:", paymentData);
        }}
      />
    </div>
  );
};

export default GooglePay;
