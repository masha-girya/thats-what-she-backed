export const formatText = (text: string) => {
  const arrText = text.split(' ');
  const res = [];

  for(const text of arrText) {
    if(text.toUpperCase() === text.toUpperCase()) {
      res.push(`<bold>${text}<bold/>`);
    } else if(text.includes('[')) {
      const rawText = text.slice(1, -2);
    }
  }
}