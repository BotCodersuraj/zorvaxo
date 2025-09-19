export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "ZFF Info API working 🚀",
    owner: "Suraj bhai"
  });
}