export const getTitleById = (id: string): string => {
  const title = id.split('-').join(' ');
  return title.charAt(0).toUpperCase() + title.slice(1);
};
