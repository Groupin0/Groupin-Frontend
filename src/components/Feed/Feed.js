import React from "react";
import './Feed.scss';
import Login from "../Auth/Login/login";
import Sessions from './Sessions'

const Feed = () => {
    const sessionsData=[
        {"id":1,"name":"יוסי גבני","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":2,"name":"אינפקטד משרום","description":"הקורונה לא תעבור לעולם הבידוד לא יעזור המצב יגמר אולי עוד שנה","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":3,"name":"עמי ותמי","description":"לא הבנתי למה צריך לעשות איג'קט על כל שינוי קטן .אי אפשר לשים תמונות בפובליק ואי אפשר להתקין טייפסקריפט בלי איגקט","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":4,"name":"פרונט אנד שולטים","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":5,"name":"גראפ קיו אל מעפן","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":6,"name":"לא נספיק את הכל בשבועיים","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":7,"name":"עכשיו מחכים 3 שעות","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":8,"name":"שיאשארו לי את הפול ריקווסט","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":9,"name":"צריך גם לטפל במקרה של טקסט באנגלית","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
        {"id":10,"name":"This is english text","description":"יוסי גבני מספר על עולם הסטארטאפ ועל מקרים אמיתיים שמבוססים על העולם האמיתי","img_id":"https://www.srugim.co.il/i/wp-content/uploads/2017/07/%D7%92%D7%91%D7%A0%D7%992__w650h331q80.jpg","start_date":"20:20:20 3/3/2020"},
    ];
    return (
        <div className='Feed'>
        <Login></Login>
        <Sessions sessionsData={sessionsData}></Sessions>
            <h1>דף הבית</h1>
        </div>
    )
};

export default Feed;