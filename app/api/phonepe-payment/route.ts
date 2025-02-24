import { NextResponse } from "next/server";
import axios from "axios";
import CryptoJS from "crypto-js";

export async function POST(request: Request) {
  try {
    const { amount, transactionId, userId } = await request.json();

    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID,
      merchantTransactionId: transactionId,
      merchantUserId: userId || "DONOR" + Date.now(),
      amount: amount * 100, // Convert to paise
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/success?amount=${amount}&transactionId=${transactionId}`,
      redirectMode: "REDIRECT",
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/status`,
      paymentInstrument: { type: "PAY_PAGE" },
    };

    const payloadString = JSON.stringify(payload);
    const payloadBase64 = Buffer.from(payloadString).toString("base64");
    const stringToHash = payloadBase64 + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY;
    const sha256 = CryptoJS.SHA256(stringToHash).toString();
    const checksum = `${sha256}###${process.env.PHONEPE_SALT_INDEX}`;

    const response = await axios.post(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
      { request: payloadBase64 },
      {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
          accept: "application/json",
        },
      }
    );

    return NextResponse.json({
      redirectUrl: response.data.data.instrumentResponse.redirectInfo.url,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}