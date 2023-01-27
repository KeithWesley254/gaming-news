import { Box } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';

const NewsTicker = ({newsItems}) => {
  const [animationDistance, setAnimationDistance] = useState(0);
  const tickerRef = useRef(null);

  useEffect(() => {
    let totalWidth = 0;
    const tickerElements = tickerRef.current.children;
    for (let i = 0; i < tickerElements.length; i++) {
      totalWidth += tickerElements[i].offsetWidth;
    }
    setAnimationDistance(-totalWidth);
  }, [newsItems]);

  const items = [...newsItems, newsItems[0]];

  return (
    <Box sx={{my: 2}}>
        <div className="wrapper">
            <div
                className="inner moving"
                style={{
                '--animationDuration': `${newsItems.length * 10}s`,
                '--animationDistance': animationDistance + 'px',
                }}
                ref={tickerRef}
            >
                {items.map((item, index) => (
                <div key={index} className="element">
                    {item.title}
                </div>
                ))}
            </div>
        </div>
    </Box>
  );
}

export default NewsTicker;
