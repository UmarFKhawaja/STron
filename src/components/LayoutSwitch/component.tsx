import { IconLayoutGrid, IconLayoutList, IconTable as IconLayoutTable } from '@tabler/icons-react';
import { useSettings } from '../../providers';
import { ActionButton } from '../ActionButton';

export function LayoutSwitch() {
  const { layout, setGridLayout, setTableLayout, setListLayout } = useSettings();

  return (
    <>
      <ActionButton c={layout === 'GRID' ? 'blue' : 'gray'} onClick={setGridLayout}>
        <IconLayoutGrid/>
      </ActionButton>
      <ActionButton c={layout === 'TABLE' ? 'blue' : 'gray'} onClick={setTableLayout}>
        <IconLayoutTable/>
      </ActionButton>
      <ActionButton c={layout === 'LIST' ? 'blue' : 'gray'} onClick={setListLayout}>
        <IconLayoutList/>
      </ActionButton>
    </>
  );
}
