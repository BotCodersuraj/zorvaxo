export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/main/alive?uid=8080519000&key=ZORVAXOxINFO"
    });
  }

  // Agar user key me ZORVAXOxINFO likhe, automatically DANGERxINFO set kar do
  let validKey = "DANGERxINFO";
  if (key && key === "ZORVAXOxINFO") {
    validKey = "DANGERxINFO";
  }

  try {
    // External API call with the correct key
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${validKey}`);
    const data = await response.json();

    // "api" field hatao
    const { api, ...filteredData } = data;

    res.status(200).json({
      success: true,
      message: "ZFF Info API working 🚀",
      owner: "Suraj bhai",
      yourQuery: { uid, keyProvided: key || validKey },
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