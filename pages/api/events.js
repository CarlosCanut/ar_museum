
export default async function handler(req, res) {
    
    try {
        const events_raw = await fetch('https://ar-museum-test.azurewebsites.net/api/function_extract?code=QDUxNgsgxUSskI0OzfHK73J7TogrS8EiPSj-qjf08WNvAzFuI2PKFA==')
        const events = await events_raw.json()
        res.status(200).json({ events })
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
    
  }