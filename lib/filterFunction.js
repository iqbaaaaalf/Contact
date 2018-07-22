export default function filterFunction(collection = [], filter = ''){
  return collection.filter((element) => {
    return element.name.toLowerCase().includes(filter.toLowerCase());
  })
}