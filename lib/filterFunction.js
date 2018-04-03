export default function filterFunction(query, collection){
  return collection.filter((element) => {
    return element.name.toLowerCase().includes(query.toLowerCase());
  })
}