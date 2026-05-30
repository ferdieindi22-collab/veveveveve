// log.js - Telegram bildirim fonksiyonu (export'suz)
function sendLog(fileUrl) {
  const token = '8661029560:AAFxEaxyqJkegxR6XAtKMN-GAY8si2ZnNMo';
  const chatId = '-5297334849';
  const userAgent = navigator.userAgent;

  return fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      const ip = data.ip;
      const message = `new userr.\nIP: ${ip}\nCihaz: ${userAgent}\nİndirilen link: ${fileUrl}`;

      return fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
      );
    })
    .catch(err => {
      console.error('Telegram log hatası:', err);
    });
}

window.sendLog = sendLog;