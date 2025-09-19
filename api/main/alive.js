export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/region?uid=8080519000&key=ZORVAXOxRG"
    });
  }

  // Agar user key ZORVAXOxRG de, internally DANGERxREGION use karenge
  const validKey = key === "ZORVAXOxRG" ? "DANGERxREGION" : "DANGERxREGION";

  try {
    const response = await fetch(`https://danger-region-check.vercel.app/region?uid=${uid}&key=${validKey}`);
    const data = await response.json();

    // Credits change kar do
    const modifiedJson = {
      ...data,
      credits: "t.me/zorvaxo"
    };

    res.status(200).json(modifiedJson);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Error fetching external API",
      error: error.message
    });
  }
}