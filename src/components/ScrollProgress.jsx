import { useEffect, useState } from 'react';
import gsap from 'gsap';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setProgress(progress);

            gsap.to(".scroll-progress", {
                width: `${progress}%`,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return <div className="scroll-progress" />;
};

export default ScrollProgress;
