import { IconLayoutGrid, IconLayoutList, IconTable as IconLayoutTable } from '@tabler/icons-react';
import { useSettings } from '../../providers';
import { ActionButton } from '../ActionButton';

export function LayoutSwitch() {
  const { layout, setGridLayout, setTableLayout, setTileLayout } = useSettings();

  return (
    <>
      <ActionButton c={layout === 'GRID' ? 'blue' : 'gray'} onClick={setGridLayout}>
        <IconLayoutTable/>
      </ActionButton>
      <ActionButton c={layout === 'TABLE' ? 'blue' : 'gray'} onClick={setTableLayout}>
        <IconLayoutGrid/>
      </ActionButton>
      <ActionButton c={layout === 'TILE' ? 'blue' : 'gray'} onClick={setTileLayout}>
        <IconLayoutList/>
      </ActionButton>
    </>
  );
}
