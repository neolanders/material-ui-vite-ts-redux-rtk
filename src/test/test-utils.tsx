import type { RootState } from '@/store';
import store from '@/store';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

interface RenderOptions {
  preloadedState?: Partial<RootState>;
  store?: typeof store;
}

function render(
  ui: React.ReactElement,
  { preloadedState = {}, store: customStore = store, ...renderOptions }: RenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={customStore}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
