export const replaceCamelCaseWithSpaces = (str: string): string => {
  return str.replace(/\B([A-Z])\B/g, " $1");
};
