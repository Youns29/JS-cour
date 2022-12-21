const userData = [
  {
    name: 'Considine',
    firstName: 'Christopher',
    age: 18,
  },
  {
    name: 'Fay',
    firstName: 'Leona',
    age: 13,
  },
  {
    name: 'Pollich',
    firstName: 'Harry',
    age: 14,
  },
  {
    name: 'Homenick',
    firstName: 'Angel',
    age: 18,
  },
  {
    name: 'Chiakh',
    firstName: 'Walid',
    age: 20,
    statut: 'absent',
  },
];

/**
 * It should only return > n or == n years old users
 */
export const filterByAge = (users, n) => {
  return users.filter(function (user, index) {
    return user.age >= n;
  });
};

/**
 * It should only return users whose names contains the string passed
 */
export const filterByFullName = (users, searchString) => {
  return users.filter(function (user, index) {
    return `${user.firstName} ${user.name}`.includes(searchString);
  });
};

console.log(filterByAge(userData, 18));
/**
 * Expected output:
  [
    { name: 'Considine', firstName: 'Christopher', age: 18 },
    { name: 'Homenick', firstName: 'Angel', age: 18 }
  ]
*/

console.log(filterByFullName(userData, 'W'));
/**
 * Expected output:
 [
   { name: 'Considine', firstName: 'Christopher', age: 18 },
   { name: 'Pollich', firstName: 'Harry', age: 14 },
   { name: 'Homenick', firstName: 'Angel', age: 18 }
 ]
*/
