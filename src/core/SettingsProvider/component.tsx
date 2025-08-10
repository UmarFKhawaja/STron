import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { type Layout } from '../../types';
import { DEFAULT_LAYOUT, INITIAL_STATE } from './constants';
import { SettingsContext } from './context';
import { reduce } from './methods';
import { type SettingsProviderProps } from './props';
import { type SettingsValue } from './types';

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [layout, setLayout] = useLocalStorage<Layout>({
    key: 'providers:SettingsProvider:settings:layout',
    defaultValue: DEFAULT_LAYOUT
  });

  const [state, dispatch] = useReducer(reduce, INITIAL_STATE);

  const setSpecificLayout = useCallback((layout: Layout) => {
    dispatch({
      type: 'SET_LAYOUT',
      layout
    });

    setLayout(layout);
  }, [setLayout]);

  const value: SettingsValue = {
    ...state,
    setGridLayout: (): void => setSpecificLayout('GRID'),
    setTableLayout: (): void => setSpecificLayout('TABLE'),
    setTileLayout: (): void => setSpecificLayout('TILE')
  };

  useEffect(() => {
    dispatch({
      type: 'SET_LAYOUT',
      layout
    });
  }, [layout, setSpecificLayout]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
