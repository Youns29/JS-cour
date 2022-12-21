import { expect, it } from 'vitest';
import { generateUserSlug } from '../src/mapExercises';
import users from './fixtures/users.json';
import usersWithGeneratedSlug from './expected/usersWithGeneratedSlug.json';

it('should generate slug for each user', () => {
  expect(generateUserSlug(users)).toStrictEqual(usersWithGeneratedSlug);
});
