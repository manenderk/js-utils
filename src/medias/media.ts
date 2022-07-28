/**
 * Function that transforms Data URL into the file
 * @param dataURL - Data URL from which the file has to be generated
 * @param fileName - Name of file that you require in generated file object
 * @returns File
 */
export const getFileFromDataURL = (dataURL: string, fileName = 'image'): File => {
  const base64 = dataURL.split('.')[1];
  const mimeType = dataURL.split('.')[0].split(':')[1].split(';')[0];
  const fileExt = mimeType.split('/')[1];
  if (fileName.indexOf(fileExt) == -1) {
    fileName += `.${fileExt}`;
  }
  const file = new File([base64], fileName, {type: mimeType});
  return file;
}