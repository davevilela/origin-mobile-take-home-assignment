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

export function mergeRefs<T = any>(
  refs: (React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null)[]
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
