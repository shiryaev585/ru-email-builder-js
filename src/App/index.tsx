import React from 'react';

import { Stack } from '@mui/material';

import { useInspectorDrawerOpen } from '../documents/editor/EditorContext';

import InspectorDrawer, { INSPECTOR_DRAWER_WIDTH } from './InspectorDrawer';
import TemplatePanel from './TemplatePanel';

export default function App() {
  const inspectorDrawerOpen = useInspectorDrawerOpen();

  return (
    <>
      <InspectorDrawer />
      <Stack sx={{ marginRight: inspectorDrawerOpen ? `${INSPECTOR_DRAWER_WIDTH}px` : 0 }}>
        <TemplatePanel />
      </Stack>
    </>
  );
};
