export const paginate = (property) => {
  const itemPerPages = 9;
  const pages = Math.ceil(property.length / itemPerPages);

  const newProperties = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPages;

    return property.slice(start, start + itemPerPages);
  });

  return newProperties;
};
