import React from 'react';
import './Session.scss';
import Moment from 'react-moment';
import 'moment-timezone';
import Button from '../Button/Button.js';

const Session = () => {

    const image = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        title = 'משחקים',
        description = 'קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. ',
        start_date = '1976-04-19T12:59-0500',
        end_date = new Date(),
        capacity = '120',
        session_url = '';

    return (
        <div className='Session'>
            <div className='Session__img'
                style={{backgroundImage: `url("${ image }")`}} />
            <div className='Session__content'>
                <div className='Session__header'>
                    <div>
                        <h1 className='Session__header--title'> { title } </h1>
                        <div className='Session__header--info'>
                            <div className='Session__header--text'>
                                 ביום <Moment format='DD/MM/YYYY'>{ start_date }</Moment>
                            </div>
                            <div className='Session__header--text'>
                                בין השעות
                                <Moment format= ' hh:mm '>{ start_date }</Moment>
                                -
                                <Moment format= ' hh:mm '>{ end_date }</Moment>
                            </div>
                            <div className='Session__header--text'>
                                { capacity
                                    ? <p>עד { capacity } משתתפים</p>
                                    : <p>אין הגבלת משתתפים</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='Session__header--action'>
                        { session_url 
                            ? <a target= '_blank' href={ session_url }>
                                <Button label='לצפייה במפגש' className='Button__black '/>
                            </a>
                            : <Button label='לצפייה במפגש' className='Button__disabled ' disabled/>
                        }
                    </div>
                </div>
                <div className='Session__description'>
                    <p className='Session__description--text'>
                    { description }
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Session;