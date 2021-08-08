import { useState } from 'react';

export function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return { toggle, isVisible };
}
