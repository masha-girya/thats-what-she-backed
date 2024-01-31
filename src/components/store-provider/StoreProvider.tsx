'use client';

import { AppStore, makeStore } from '@/store';
import { loadCartState } from '@/store/slices/favorites.slice';
import { useRef } from 'react';
import { Provider } from 'react-redux';

interface IProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: IProps) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(loadCartState());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
