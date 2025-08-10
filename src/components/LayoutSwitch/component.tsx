import { ActionIcon } from '@mantine/core';
import { IconLayoutGrid, IconLayoutList, IconTable as IconLayoutTable } from '@tabler/icons-react';
import { useSettings } from '../../providers';

export function LayoutSwitch() {
  const { layout, setGridLayout, setTableLayout, setListLayout } = useSettings();

  return (
    <>
      <ActionIcon variant="transparent" c={layout === 'GRID' ? 'blue' : 'gray'} onClick={setGridLayout}>
        <IconLayoutGrid/>
      </ActionIcon>
      <ActionIcon variant="transparent" c={layout === 'TABLE' ? 'blue' : 'gray'} onClick={setTableLayout}>
        <IconLayoutTable/>
      </ActionIcon>
      <ActionIcon variant="transparent" c={layout === 'LIST' ? 'blue' : 'gray'} onClick={setListLayout}>
        <IconLayoutList/>
      </ActionIcon>
    </>
  );
}
