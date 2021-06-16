import React from 'react';

const getSeason = (lat, month) =>{
 if (month >2 && month <9){
    return lat > 0? 'summer':'winter';
 }
 else {
     return lat >0? 'winter':'summer';
 }
}

const Season = props => {
    const seas = getSeason(props.lat, new Date().getMonth());
      const text = seas === 'winter'? 'Burr, it is cjilly':'Lets hit the beach';

    return (
    <div>
        {text}
    </div>
    );
}

export default Season;