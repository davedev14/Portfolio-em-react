import React, { useEffect, useState } from 'react'

// as estrelas teram: id, size, x, y, opacity, animationDuration

const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
       generateStars();
       generateMeteors();
    }, []);

    const generateStars = () => {
        const numberStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

    const newStars = []  
    
    for (let i = 0; i < numberStars; i++) {
        newStars.push({
            id:i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration:  Math.random() * 4 + 2,
        })
    }

    setStars(newStars)
    }

    const generateMeteors = () => {
        const numberMeteors = 5

    const newMeteors = []  
    
    for (let i = 0; i < numberMeteors; i++) {
        newMeteors.push({
            id:i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration:  Math.random() * 3 + 3,
        })
    }

    setMeteors(newMeteors);
    }

  return (
    <div className="fized inset-0 overflow-hidden poiter-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className='star animate-pulse-subtle' style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        ))}

        {meteors.map((meteors) => (
            <div key={meteors.id} className='meteor animate-meteor' style={{
                width: meteors.size + "px",
                height: meteors.size + "px",
                left: meteors.x + "%",
                top: meteors.y + "%",
                animationDelay: meteors.opacity,
                animationDuration: meteors.animationDuration + "s",
            }}/>
        ))}
    </div>
  )
}

export default StarBackground