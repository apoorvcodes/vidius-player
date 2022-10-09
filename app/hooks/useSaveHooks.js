import {
    documentDirectory,
    writeAsStringAsync,
    readAsStringAsync,
    deleteAsync,
    readDirectoryAsync
  } from 'expo-file-system';
  
  export const docFolder = `${documentDirectory}`;
  
  export async function setKey(key, value) {
    const writtenContents = await writeAsStringAsync(`${docFolder}${key}`, value);
    return writtenContents;
  }
  
  export async function getKey(key) {
    try {
      const value = await readAsStringAsync(`${docFolder}${key}`);
      return value;
    } catch (error) {
      return null;
    }
  }
  
  export async function removeKey(key) {
    await deleteAsync(
      `${docFolder}${key}`,
      { idempotent: true } // don't throw an error if there is no file or directory at this URI
    );
  }
  
  export async function getAllKey() {
    const keys = await readDirectoryAsync(`${docFolder}`);
    return keys;
  }