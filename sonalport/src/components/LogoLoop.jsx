import React, { useEffect, useRef } from 'react';

const LogoLoop = ({
    logos = [],
    speed = 30,
    direction = 'left',
    fade = true,
    scaleOnHover = true,
    gap = 32,
    logoHeight = 28
}) => {
    const trackRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let position = 0;
        const trackWidth = track.scrollWidth / 2;

        const animate = () => {
            if (direction === 'left') {
                position -= speed / 60;
                if (Math.abs(position) >= trackWidth) {
                    position = 0;
                }
            } else {
                position += speed / 60;
                if (position >= 0) {
                    position = -trackWidth;
                }
            }
            track.style.transform = `translate3d(${position}px, 0, 0)`;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [speed, direction]);

    const containerClasses = [
        'logoloop',
        fade && 'logoloop--fade',
        scaleOnHover && 'logoloop--scale-hover'
    ].filter(Boolean).join(' ');

    const style = {
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        '--logoloop-fadeColor': '#0a0a1a'
    };

    return (
        <div className={containerClasses} style={style}>
            <div className="logoloop__track" ref={trackRef}>
                {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="logoloop__list">
                        {logos.map((logo, index) => (
                            <div key={`${setIndex}-${index}`} className="logoloop__item">
                                <div className="logoloop__node">
                                    {typeof logo === 'string' ? (
                                        <img src={logo} alt={`Logo ${index + 1}`} />
                                    ) : (
                                        logo
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;
