// pages/api/sendMessage.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { chat_id, text } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chat_id, text }),
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Message sent successfully' });
      } else {
        return res.status(response.status).json({ message: 'Failed to send message' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
