const users = [
  {
    name: "Manshad",
    age: 1,
  },
  {
    name: "Manshad3",
    age: 10,
  },
  {
    name: "Manshad5",
    age: 2,
  },
  {
    name: "Manshad4",
    age: 45,
  },
];

const sortUsers = () => {
  return users.sort((a, b) => a.age - b.age);
};

console.log(sortUsers());

module.exports = sortUsers;
