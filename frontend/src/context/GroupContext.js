import React, { createContext } from 'react';

import useGroups from './hooks/useGroups';

const GroupContext = createContext();

function GroupProvider({ children }) {
  const { groups, handleGetGroups } = useGroups()

  return (
    <GroupContext.Provider value={{ groups, handleGetGroups }}>
      {children}
    </GroupContext.Provider>
  );
}

export { GroupContext, GroupProvider };