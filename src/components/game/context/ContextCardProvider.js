import React, {useState} from 'react';
import { ContextCard } from './ContextCard';

export default function ContextCardProvider({children, ...props}) {
  const [flipKeys, setFlipKeys] = useState([]);
  const [flipIds, setFlipIds] = useState([]);
  const [match, setMatch] = useState(null);
  const [timerRef, setTimerRef] = useState(false);

  return (
    <ContextCard.Provider value={[
      {flipIds, setFlipIds },
      {flipKeys, setFlipKeys },
      {match, setMatch},
      {timerRef, setTimerRef}
    ]}>
      {children}
    </ContextCard.Provider>
  )
}

export { ContextCardProvider };
  