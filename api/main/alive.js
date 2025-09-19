export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/main/alive?uid=8080519000&key=ZORVAXOxINFO"
    });
  }

  // Agar user ZORVAXOxINFO type kare, internally DANGERxINFO use karenge
  const validKey = key === "ZORVAXOxINFO" ? "DANGERxINFO" : "DANGERxINFO";

  try {
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${validKey}`);
    const data = await response.json();

    // JSON modify karna
    const modifiedJson = {
      success: true,
      credits: "@Zorvaxo",
      yourQuery: {
        uid: uid,
        keyProvided: key || "ZORVAXOxINFO"
      },
      externalData: {
        ...data.externalData,
        telegram: {
          channel: "@Suraj_Offiacl"
        }
      }
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