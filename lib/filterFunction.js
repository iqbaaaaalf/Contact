export default function filterFunction(collection = [], filter = ''){
  console.log(filter);
  return collection.filter((element) => {
    return element.name.toLowerCase().includes(filter.toLowerCase());
  })
}