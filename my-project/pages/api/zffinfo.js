export default async function handler(req, res) {
  const { uid, key } = req.query; // query se uid aur key nikalenge

  if (!uid || !key) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid and key in query params",
      example: "/api/zffinfo?uid=8080519000&key=DANGERxINFO"
    });
  }

  try {
    // External API call with query
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${key}`);
    const data = await response.json();

    // Apni API ka response
    res.status(200).json({
      success: true,
      message: "ZFF Info API working 🚀",
      owner: "Suraj bhai",
      yourQuery: { uid, key },
      externalData: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Error fetching external API",
      error: error.message
    });
  }
}