import { useEffect, useRef } from 'react';

export const compose = (providers: React.FC<{ children: React.ReactNode }>[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => {
    const Provider = Prev ? (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    ) : (
      <Curr>{children}</Curr>
    );
    return Provider;
  });

export const useStableCallback = <T,>(callback: T) => {
  const ref = useRef<T>(callback);
  ref.current = callback;

  return ref.current;
};

export function usePrevious<T = any>(value: T) {
  const ref = useRef<T>(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current!;
}
