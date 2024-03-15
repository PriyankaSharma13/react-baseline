import { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay, infinite }) => {
 const [currentText, setCurrentText] = useState('');
 const [currentIndex, setCurrentIndex] = useState(0);
 const [currentTextIndex, setCurrentTextIndex] = useState(0);

 useEffect(() => {
  console.log(texts)
    let timeout;

    const typeText = () => {
      if (currentTextIndex < texts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + texts[currentIndex][currentTextIndex]);
          setCurrentTextIndex(prevIndex => prevIndex + 1);
        }, delay);
      } else {
        // Move to the next text or reset if all texts have been displayed
        if (currentIndex < texts.length - 1) {
          setCurrentIndex(prevIndex => prevIndex + 1);
          setCurrentTextIndex(0);
          setCurrentText('');
        } else if (infinite) {
          setCurrentIndex(0);
          setCurrentTextIndex(0);
          setCurrentText('');
        }
      }
    };

    typeText();

    return () => clearTimeout(timeout);
 }, [currentIndex, currentTextIndex, delay, infinite, texts]);

 return <span style={{color: "#F1D625"}}>{currentText}</span>;
};

export default Typewriter;
