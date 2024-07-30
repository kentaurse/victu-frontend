export const createDefaultAvatar = (name: string) => {
  const firstLetterOfName = name.charAt(0);
  return firstLetterOfName.toUpperCase();
};
