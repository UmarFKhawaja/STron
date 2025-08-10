import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }

    const tick = (): void => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id: NodeJS.Timeout = setInterval(tick, delay);

    return (): void => clearInterval(id);
  }, [delay]); // re-run when delay changes
}
