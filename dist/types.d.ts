/**
 * Function that will opens a bootstrap modal
 * @param modalId - HTML ID of the bootstrap modal
 */
export const showBootstrapModal: (modalId: string) => void;
/**
 * Function that will close a bootstrap modal
 * @param modalId - HTML ID of the bootstrap modal
 */
export const hideBootstrapModal: (modalId: string) => void;
/**
 * Function that will toggle the show hide state of bootstrap modal
 * @param modalId - HTML ID of the bootstrap modal
 */
export const toggleBootstrapMoal: (modalId: string) => void;
/**
 * Function that returns all query parameters as an object.
 * @example
 * Query String: ?first_name=John&last_name=Doe
 * Return Object:
 * \{
 *    first_name: 'John',
 *    last_name: 'Doe'
 * \}
 * @returns An object generated from query string where key is param name and value is param value
 */
export const getAllQueryParams: () => {};
/**
 * Function that return value of the specified paramter in the query string
 * @example
 * Query String: ?first_name=John&last_name=Doe
 * getQueryParamValue('first_name') will return 'John'
 * @param paramName - Parameter for which value is required
 * @returns Value of the paramter
 */
export const getQueryParamValue: (paramName: string) => string;
/**
 * Function that will capitalize first letter of each sentence in a string.
 * @example
 * To format string: hi i am john doe. i am a developer.'
 * capitalizeFirstLetter('hi i am john doe. i am a developer.')
 * returns Hi i am john doe. I am a developer.
 * @param str - String that has to be formatted
 * @returns Formatted String
 */
export const capitalizeFirstLetter: (str: string) => string;
/**
 * Function that will captialize first letter of each word in a string
 * @example
 * To format string: hi i am john doe.
 * capitalizeString('hi i am john doe.')
 * returns Hi I Am John Doe
 * @param str String that has to be formatted
 * @returns
 */
export const getCapitalizedString: (str: string) => string;
/**
 * Function that captialize each entry of input array and return a string by joining all enteries
 * @example
 * getCaptializedStringFromArray(['hi', 'i', 'am', 'john', 'doe'])
 * returns Hi I Am John Doe
 * @param strArray Array of string which has to be formatted
 * @returns String where each array element is capitalized
 */
export const getCaptializedStringFromArray: (strArray: string[]) => string;
/**
 * Function that transforms Data URL into the file
 * @param dataURL - Data URL from which the file has to be generated
 * @param fileName - Name of file that you require in generated file object
 * @returns File
 */
export const getFileFromDataURL: (dataURL: string, fileName?: string) => File;

//# sourceMappingURL=types.d.ts.map
