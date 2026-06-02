import { useState } from 'react';
import { Add } from './Add';
import { Flex } from './Flex';
import { Grid } from './Grid';
import type { DisplayMode } from '../context/types';

export const UserList = () => {
  const [mode, setMode] = useState<DisplayMode>('flex');

  return (
    <div className="container my-4 row">
      <div className="col-12 d-flex align-items-center gap-2 mb-3">
        <button
          type="button"
          className={`btn btn-sm rounded-pill d-flex align-items-center px-3 ${mode === 'flex' ? 'btn-primary text-white' : 'btn-outline-primary'}`}
          aria-pressed={mode === 'flex'}
          onClick={() => setMode('flex')}
          title="Flex display"
        >
          Flex Mode
        </button>

        <button
          type="button"
          className={`btn btn-sm rounded-pill d-flex align-items-center px-3 ${mode === 'grid' ? 'btn-primary text-white' : 'btn-outline-primary'}`}
          aria-pressed={mode === 'grid'}
          onClick={() => setMode('grid')}
          title="Grid display"
        >
          Grid Mode
        </button>
      </div>

      <Add />
      {mode === 'flex' ? <Flex /> : <Grid />}
    </div>
  );
};
