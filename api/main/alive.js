export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "❌ Please provide uid in query params",
      example: "/api/main/alive?uid=8080519000&key=ZORVAXOxINFO"
    });
  }

  // Always use the correct external API key internally
  const validKey = "DANGERxINFO";

  try {
    // Fetch data from external API
    const response = await fetch(`https://danger-info-alpha.vercel.app/accinfo?uid=${uid}&key=${validKey}`);
    const data = await response.json();

    // Modify JSON according to your required format
    const modifiedJson = {
      success: true,
      credits: "@Zorvaxo",
      yourQuery: {
        uid: uid,
        keyProvided: key || "ZORVAXOxINFO"
      },
      externalData: {
        basicInfo: data.externalData.basicInfo,
        clanBasicInfo: data.externalData.clanBasicInfo,
        creditScoreInfo: data.externalData.creditScoreInfo,
        credits: data.externalData.credits,
        diamondCostRes: data.externalData.diamondCostRes,
        petInfo: data.externalData.petInfo,
        profileInfo: data.externalData.profileInfo,
        region: data.externalData.region,
        socialInfo: {
          ...data.externalData.socialInfo,
          id_privacy: data.externalData.socialInfo.privacy,
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