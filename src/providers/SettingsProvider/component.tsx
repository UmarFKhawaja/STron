import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { type Layout } from '../../types';
import { DEFAULT_INTERVAL, DEFAULT_LAYOUT, INITIAL_STATE } from './constants';
import { SettingsContext } from './context';
import { getNextInterval, getPreviousInterval, reduce } from './methods';
import { type SettingsProviderProps } from './props';
import { type SettingsValue } from './types';

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [interval, setInterval] = useLocalStorage<number>({
    key: 'providers:SettingsProvider:settings:interval',
    defaultValue: DEFAULT_INTERVAL
  });

  const [layout, setLayout] = useLocalStorage<Layout>({
    key: 'providers:SettingsProvider:settings:layout',
    defaultValue: DEFAULT_LAYOUT
  });

  const [state, dispatch] = useReducer(reduce, INITIAL_STATE);

  const setSpecificInterval = useCallback((interval: number) => {
    dispatch({
      type: 'SET_INTERVAL',
      interval
    });

    setInterval(interval);
  }, [setInterval]);

  const setSpecificLayout = useCallback((layout: Layout) => {
    dispatch({
      type: 'SET_LAYOUT',
      layout
    });

    setLayout(layout);
  }, [setLayout]);

  const value: SettingsValue = {
    ...state,
    decreaseInterval: (): void => setSpecificInterval(getPreviousInterval(interval)),
    increaseInterval: (): void => setSpecificInterval(getNextInterval(interval)),
    setGridLayout: (): void => setSpecificLayout('GRID'),
    setTableLayout: (): void => setSpecificLayout('TABLE'),
    setListLayout: (): void => setSpecificLayout('LIST')
  };

  useEffect(() => {
    dispatch({
      type: 'SET_INTERVAL',
      interval
    });

    dispatch({
      type: 'SET_LAYOUT',
      layout
    });
  }, [interval, setSpecificInterval, layout, setSpecificLayout]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
