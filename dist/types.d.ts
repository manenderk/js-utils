export const SayHello: (name: string) => string;
export const showBootstrapModal: (elementId: string) => void;
export const hideBootstrapModal: (elementId: string) => void;
export const toggleBootstrapMoal: (elementId: string) => void;
/**
 * Function that returns all query parameters as an object.
 * Example:
 * Query String: ?first_name=John&last_name=Doe
 * Return Object:
 * {
 *    first_name: 'John',
 *    last_name: 'Doe'
 * }
 * @returns An object generated from query string where key is param name and value is param value
 */
export const getAllQueryParams: () => {};
/**
 * Function that return value of the specified paramter in the query string
 * Example:
 * Query String: ?first_name=John&last_name=Doe
 * getQueryParamValue('first_name') will return 'John'
 * @param { string } paramName - Parameter for which value is required
 * @returns {string} - Value of the paramter
 */
export const getQueryParamValue: (paramName: string) => string;
export const capitalizeFirstLetter: (str: string) => string;

//# sourceMappingURL=types.d.ts.map
