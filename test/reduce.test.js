import { expect, it } from 'vitest';
import { getMaxByUser } from '../src/reduceExercises';
import usersWithUuids from './fixtures/usersWithUuids.json';
import expectedUsersWithUuids from './expected/usersWithUuids.json';
// Edit an assertion and save to see HMR in action

it('should getMaxByUser', () => {
  expect(getMaxByUser(usersWithUuids)).toStrictEqual(expectedUsersWithUuids);
});
