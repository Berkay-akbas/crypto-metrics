import React, { useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { searchCoins } from '../redux/cryptos';

const appId = '0be42614-7a5f-4c15-bf29-83511ccc7e4b';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn`&apos;`t support speech recognition.</span>;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCoins(transcript));
  });

  const mouseUp = (e) => {
    SpeechRecognition.stopListening();
    if (e.target.classList.contains('btnDown')) {
      e.target.classList.remove('btnDown');
    } else {
      e.target.classList.add('btnDown');
    }
  };
  const startEnd = (e) => {
    resetTranscript();
    startListening();
    if (e.target.classList.contains('btnDown')) {
      e.target.classList.remove('btnDown');
    } else {
      e.target.classList.add('btnDown');
    }
  };
  return (
    <div className="dictaphone">
      <FontAwesomeIcon
        onTouchStart={(e) => startEnd(e)}
        onMouseDown={(e) => startEnd(e)}
        onTouchEnd={(e) => mouseUp(e)}
        onMouseUp={(e) => mouseUp(e)}
        type="button"
        icon={faMicrophone}
        className="fontawesome"
      />
    </div>
  );
};
export default Dictaphone;
