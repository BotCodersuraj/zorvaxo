export default async function handler(req, res) {
  const { uid, key } = req.query;

  const validKey = "ZORVAXOxINFO"; // fixed key

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/main/alive?uid=1234567890&key=ZORVAXOxINFO"
    });
  }

  if (key !== validKey) {
    return res.status(403).json({
      success: false,
      message: "❌ Invalid key"
    });
  }

  try {
    // External API call with the fixed key
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${validKey}`);
    const data = await response.json();

    // "api" field hata do
    const { api, ...filteredData } = data;

    res.status(200).json({
      success: true,
      message: "ZFF Info API working 🚀",
      owner: "Suraj bhai",
      yourQuery: { uid },
      externalData: filteredData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Error fetching external API",
      error: error.message
    });
  }
}