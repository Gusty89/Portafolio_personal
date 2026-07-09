import { useEffect, useRef, useState } from 'react';

function ReadSection({ title, text, ariaLabel, audioSrc, preferTTS = false }) {
  const [speaking, setSpeaking] = useState(false);
  const [voice, setVoice] = useState(null);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const audioRef = useRef(null);
  const utteranceRef = useRef(null);

  const selectSpanishVoice = (voices) => {
    if (!voices || voices.length === 0) return null;
    const spanishVoices = voices.filter((v) => /es|spanish/i.test(v.lang) || /spanish/i.test(v.name));
    const priority = ['es-419', 'es-AR', 'es-MX', 'es-ES', 'es'];
    for (const code of priority) {
      const match = spanishVoices.find((voice) => voice.lang.toLowerCase().startsWith(code.toLowerCase()));
      if (match) return match;
    }
    if (spanishVoices.length > 0) return spanishVoices[0];
    return null;
  };

  useEffect(() => {
    if (!supported) return;

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const selected = selectSpanishVoice(voices);
      setVoice(selected || null);
    };

    updateVoices();
    const voicesChangedListener = () => updateVoices();
    window.speechSynthesis.addEventListener('voiceschanged', voicesChangedListener);

    const delayedCheck = setTimeout(updateVoices, 500);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', voicesChangedListener);
      clearTimeout(delayedCheck);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, [supported]);

  const handleSpeak = async () => {
    if (!supported) return;

    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
    }

    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = selectSpanishVoice(voices) || voice;
    const fallbackSpeech = () => {
      if (!supported) return;
      const content = text;
      const utterance = new SpeechSynthesisUtterance(content);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang || 'es-419';
      } else {
        utterance.lang = 'es-419';
      }
      utterance.volume = 1;
      utterance.rate = 1;
      utterance.pitch = 1;
      utteranceRef.current = utterance;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => {
        setSpeaking(false);
        utteranceRef.current = null;
      };
      utterance.onerror = () => {
        setSpeaking(false);
        utteranceRef.current = null;
      };

      window.speechSynthesis.speak(utterance);
    };

    if (audioSrc && !preferTTS) {
      try {
        if (!audioRef.current) {
          audioRef.current = new Audio(audioSrc);
          audioRef.current.crossOrigin = 'anonymous';
          audioRef.current.addEventListener('ended', () => setSpeaking(false));
          audioRef.current.addEventListener('error', () => {
            setSpeaking(false);
            fallbackSpeech();
          });
        }
        await audioRef.current.play();
        setSpeaking(true);
        return;
      } catch (err) {
        fallbackSpeech();
        return;
      }
    }

    fallbackSpeech();
  };

  const handleStop = () => {
    let stopped = false;

    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      stopped = true;
    }

    if (supported && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
      stopped = true;
    }

    if (stopped) {
      setSpeaking(false);
    }
  };

  return (
    <div className="speech-controls" aria-label={ariaLabel}>
      <button
        type="button"
        className="button button-secondary speech-button"
        onClick={handleSpeak}
        aria-label={title ? `Escuchar ${title}` : 'Escuchar texto'}
        data-tooltip="Escuchar"
        disabled={!supported && !audioSrc}
      >
        <span aria-hidden="true">🔊</span>
      </button>
      <button
        type="button"
        className={`button button-secondary speech-button ${speaking ? 'speech-button-active' : ''}`}
        onClick={handleStop}
        aria-label={title ? `Detener lectura de ${title}` : 'Detener lectura'}
        data-tooltip="Detener"
        disabled={!speaking}
      >
        <span aria-hidden="true">⏹</span>
      </button>
    </div>
  );
}

export default ReadSection;
