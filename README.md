# יצירת חתימת מייל דינמית - ספירה לאחור לחתונה

פרויקט זה מייצר תמונה דינמית (SVG) המציגה ספירה לאחור לחתונה של **שמואל & מירי** בתאריך **11.06.26**.
התמונה מתעדכנת בכל פעם שהיא נטענת, ולכן מתאימה כחתימת מייל.

## 1. הרצה מקומית (Local Development)

1.  ודא שמותקן **Node.js** במחשב.
2.  פתח טרמינל בתיקיית הפרויקט והרץ:
    ```bash
    npm install
    npm run dev
    ```
3.  פתח את הדפדפן בכתובת: [http://localhost:3000/api/countdown](http://localhost:3000/api/countdown)
    תראה את תמונת ה-SVG.

## 2. פריסה ל-Vercel (Deployment)

הדרך הקלה ביותר לפריסה היא דרך **Vercel**:

1.  העלה את הפרויקט ל-GitHub (או GitLab/Bitbucket).
2.  התחבר ל-[Vercel](https://vercel.com/) וצור פרויקט חדש (Add New -> Project).
3.  בחר את ה-Repository שלך ולחץ על **Deploy**.
    (ההגדרות האוטומטיות של Next.js יעבדו מצוין).
4.  לאחר הסיום, תקבל דומיין (למשל: `https://wedding-countdown-shmuel-miri.vercel.app`).
5.  הכתובת לתמונה שלך תהיה:
    `https://[YOUR-DOMAIN].vercel.app/api/countdown`

## 3. הטמעה בחתימת המייל (Gmail / Outlook)

### אפשרות א' - העתק הדבק ויזואלי (הכי פשוט):
1.  פתח את הכתובת `http://localhost:3000` (או הכתובת ב-Vercel).
2.  תראה תצוגה מקדימה של החתימה המלאה.
3.  סמן את כל החתימה בעכבר -> העתק (`Ctrl+C`).
4.  הדבק בהגדרות החתימה במייל (`Ctrl+V`).

### אפשרות ב' - עריכת HTML ישירה:
השתמש בקוד הבא, אך החלף את ה-URL בכתובת ה-Vercel שלך:

```html
<div style="font-family: Arial, sans-serif; direction: rtl; text-align: center;">
    <p style="margin: 0; padding: 0;">בברכה,</p>
    <p style="margin: 5px 0 15px 0; font-weight: bold;">שמואל ומירי</p>
    
    <a href="#" style="text-decoration: none;">
        <img src="https://[YOUR-VERCEL-DOMAIN]/api/countdown" 
             alt="ספירה לאחור לחתונה" 
             width="650" 
             height="200" 
             style="display: block; border: 0; max-width: 100%; height: auto;">
    </a>
</div>
```

## דוגמה לבדיקה
לאחר הפריסה, ה-URL ייראה בערך כך:
`https://wedding-countdown.vercel.app/api/countdown`
ולחיצה עליו תציג תמונה עדכנית בכל רגע.
