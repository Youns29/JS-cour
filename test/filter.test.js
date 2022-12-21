import { expect, it } from 'vitest';
import { filterByAge, filterByFullName } from '../src/filterExercises';
import users from './fixtures/users.json';

it('should filter users by age', () => {
  const filteredUsersByAge = filterByAge(users, 18);
  expect(filteredUsersByAge.every((user) => user.age >= 18)).toBeTruthy();
});

it('should filter users by searchString', () => {
  const searchString = 'Ri';
  const filteredUsersByName = filterByFullName(users, searchString);
  expect(
    filteredUsersByName.every(({ name: userName, firstName: userFirstName }) =>
      `${userName} ${userFirstName}`.includes(searchString)
    )
  ).toBeTruthy();
});
