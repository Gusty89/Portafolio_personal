import { useEffect, useState } from 'react';

function ReadSection({ text, ariaLabel }) {
  const [speaking, setSpeaking] = useState(false);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    return () => {
      if (supported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [supported]);

  const handleSpeak = () => {
    if (!supported) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div className="speech-controls" aria-label={ariaLabel}>
      <button
        type="button"
        className="button button-secondary speech-button"
        onClick={handleSpeak}
        aria-label="Escuchar texto"
        data-tooltip="Escuchar"
        disabled={!supported}
      >
        <span aria-hidden="true">🔊</span>
      </button>
      <button
        type="button"
        className={`button button-secondary speech-button ${speaking ? 'speech-button-active' : ''}`}
        onClick={handleStop}
        aria-label="Detener lectura"
        data-tooltip="Detener"
        disabled={!supported || !speaking}
      >
        <span aria-hidden="true">⏹</span>
      </button>
    </div>
  );
}

export default ReadSection;
