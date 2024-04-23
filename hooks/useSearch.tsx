import React, { createContext, useDeferredValue, useState } from 'react';

export function useSearch() {
  const [_search, setSearch] = useState('');

  const search = useDeferredValue(_search);

  return { search, setSearch };
}

const SearchContext = createContext<ReturnType<typeof useSearch>>(
  {} as ReturnType<typeof useSearch>
);
export const SearchContextProvider = SearchContext.Provider;

export const useSearchContext = () => {
  const context = React.useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchContext should be used within SearchContextProvider.');
  }
  return context;
};
