import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        displayText: "It's hot in topeka.",
        iconName: 'sun'
    },
    winter: {
        displayText: 'Snow showers in Spocahn.',
        iconName: 'snowflake'
    }
    // ^^^these keywrods should match our season definition in line 17
};  

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
        // ^^^ "if we are in the summer months (month>2 %% month<9), and we are in the northern hemisphere (lat>0), then return summer if true and winter if false"
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {displayText, iconName } = seasonConfig[season];
    
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1 className='text'>{displayText}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
     </div>
     // ^^^this reason we are doing this complicated syntax is because
    // the icon image depends on what season it is, and the logic is defined in the function definition above
    );
};

export default SeasonDisplay