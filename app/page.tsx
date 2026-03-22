import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>טיימר ספירה לאחור לחתונה</h1>
      <p>למטה ניתן לראות את התמונה המעודכנת:</p>
      <div style={{ border: '1px solid #ccc', padding: '10px', display: 'inline-block' }}>
        <img src="/api/countdown?t=1" alt="Countdown Timer" width="650" height="200" />
      </div>
      <p style={{ marginTop: '20px' }}>
        <strong>הוראות התקנה:</strong>
      </p>
      <ol>
        <li>העתק את ה-URL של התמונה: <code>[Your-Domain]/api/countdown</code></li>
        <li>הוסף תמונה חדשה בחתימת המייל שלך (Gmail / Outlook).</li>
        <li>הדבק את ה-URL בתיבת ה-Source של התמונה.</li>
      </ol>
    </main>
  );
}
