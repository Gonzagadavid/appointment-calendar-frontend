import React, { PropsWithChildren, ReactNode, useMemo } from 'react';
import TaskContext from './TaskContext';

function TaskProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;

  const context = {

  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <TaskContext.Provider value={contextMemo}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
