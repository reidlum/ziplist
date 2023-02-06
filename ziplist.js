const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
function zipList(first, second) {
  const list = [];
  for (let i = 0; i < first.length; i++) {
    list.push(first[i], second[i]);
  }
  return list;
}
const zipListTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));
console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
