export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/main/alive?uid=8080519000&key=ZORVAXOxINFO"
    });
  }

  // Agar user key me ZORVAXOxINFO likhe, internally DANGERxINFO use karenge
  const validKey = "DANGERxINFO";

  try {
    // External API call
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${validKey}`);
    const data = await response.json();

    // JSON modify karna according to your desired format
    const modifiedJson = {
      success: true,
      credits: "@Zorvaxo",
      yourQuery: {
        uid: uid,
        keyProvided: key || "ZORVAXOxINFO"
      },
      externalData: {
        ...data.externalData,
        socialInfo: {
          ...data.externalData.socialInfo,
          id_privacy: data.externalData.socialInfo.privacy, // rename privacy → id_privacy
          privacy: undefined
        },
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