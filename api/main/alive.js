// pages/api/myregion.js
export default async function handler(req, res) {
  const { uid, key } = req.query;

  if (!uid || !key) {
    return res.status(400).json({ success: false, message: "Provide uid and key" });
  }

  try {
    // External API call
    const response = await fetch(`https://danger-region-check.vercel.app/region?uid=${uid}&key=${key}`);
    
    if (!response.ok) {
      return res.status(400).json({ success: false, message: "External API error" });
    }

    const data = await response.json();

    // Apni format me convert
    const formattedData = {
      Channel: "@Suraj_Official_1",
      api_credits: "@Zorvaxo",
      id_level: data.level || null,
      id_likes: data.likes || null,
      id_nickname: data.nickname || null,
      id_region: data.region || null,
      uid: data.uid || uid
    };

    res.status(200).json(formattedData);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}