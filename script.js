console.log(true + "a");
const arr = [
  { key: 5, value: "a" },
  { key: 2, value: "b" },
  { key: 3, value: "c" },
];

arr.sort((a, b) => {
  return a.key - b.key;
});

console.log(arr);
