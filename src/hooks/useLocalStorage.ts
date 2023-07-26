export default function useLocalStorage() {
  type Ttype = {
    id: string;
  };

  const createMock = (key: string, data: string) => {
    const exists = localStorage.getItem(key);
    if (exists) {
      return data;
    } else {
      return localStorage.setItem(key, data);
    }
  };

  const create = <T>(key: string, data: T): T => {
    const existingData = localStorage.getItem(key);
    if (existingData) {
      console.log("existing present");
      const arr = JSON.parse(existingData) as T[];
      arr.push(data);
      localStorage.setItem(key, JSON.stringify(arr));
      return data;
    }
    localStorage.setItem(key, JSON.stringify([data]));
    return data;
  };
  const read = (key: string): string | "" => {
    return localStorage.getItem(key) || "";
  };
  const update = <T extends Ttype>(key: string, data: T): T => {
    const existingData = localStorage.getItem(key);
    if (existingData) {
      const arr = JSON.parse(existingData) as T[];
      const index = arr.findIndex((item) => item.id === data.id);
      arr[index] = data;
      localStorage.setItem(key, JSON.stringify(arr));
    }
    return data;
  };
  const remove = (key: string, id: string) => {
    const existing = localStorage.getItem(key);
    if (existing) {
      const arr = JSON.parse(existing) as { id: string }[];
      const filtered = arr.filter((item) => item.id !== id);
      localStorage.setItem(key, JSON.stringify(filtered));
    } else return null;
  };
  return { create, read, update, remove, createMock };
}
