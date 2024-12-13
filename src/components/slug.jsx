export const createSlug = (name) => {
    return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

export const Limit = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '..' : text;
  };
