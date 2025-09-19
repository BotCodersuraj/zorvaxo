export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/main/alive?uid=8080519000&key=ZORVAXOxINFO"
    });
  }

  const validKey = "DANGERxINFO";

  try {
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${validKey}`);
    const data = await response.json();

    // Agar externalData exist nahi karta to empty object use karo
    const extData = data.externalData || {};

    const modifiedJson = {
      success: true,
      credits: "@Zorvaxo",
      yourQuery: {
        uid: uid,
        keyProvided: key || "ZORVAXOxINFO"
      },
      externalData: {
        basicInfo: extData.basicInfo || {},
        clanBasicInfo: extData.clanBasicInfo || {},
        creditScoreInfo: extData.creditScoreInfo || {},
        credits: extData.credits || "",
        diamondCostRes: extData.diamondCostRes || {},
        petInfo: extData.petInfo || {},
        profileInfo: extData.profileInfo || {},
        region: extData.region || "",
        socialInfo: {
          ...(extData.socialInfo || {}),
          id_privacy: extData.socialInfo?.privacy || "",
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