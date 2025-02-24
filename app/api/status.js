export default function handler(req, res) {
  console.log("Payment callback received:", req.body);
  res.status(200).end();
}
