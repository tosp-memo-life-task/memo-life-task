import { DataSource as DefaultDataSource } from 'typeorm';

import ormConfig from './ormconfig';

export const DataSource = new DefaultDataSource(ormConfig);
