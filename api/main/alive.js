export default async function handler(req, res) {
  const { uid } = req.query; // sirf uid chahiye
  const key = "ZORVAXOxINFO"; // default key set

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/zffinfo?uid=8080519000"
    });
  }

  try {
    // External API call with default key
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${key}`);
    const data = await response.json();

    // "api" field ko hata do
    const { api, ...filteredData } = data;

    // Apni API ka response
    res.status(200).json({
      success: true,
      message: "ZFF Info API working 🚀",
      owner: "Suraj bhai",
      yourQuery: { uid },
      externalData: filteredData  // "api" field nahi dikhega
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Error fetching external API",
      error: error.message
    });
  }
}