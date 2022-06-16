export default async function handler(req, res) {
  try {
    const events_raw = await fetch(
      "https://ar-museum-test.azurewebsites.net/api/session/activate"
    );
    const events = await events_raw.json();
    res.status(200).json({ events });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
