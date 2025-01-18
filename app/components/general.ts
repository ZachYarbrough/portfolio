
/**
 * Formats a date object to a string in the format 'MMM D, YYYY'
 * i.e. 'Jan 1, 2025', 'Feb 2, 2025', 'Mar 3, 2025'
 * 
 * @param {Date} date - The date object to format
 * @returns {string} The formatted date string
 */
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-EN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

/**
 * Copies text to the clipboard
 * 
 * @param {string} text - The text to copy
 */
export const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
}