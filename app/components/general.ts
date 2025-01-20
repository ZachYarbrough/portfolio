
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

/**
 * Creates a table of contents for a blog post from an array of headers.
 * 
 * @param {string[]} headers - An array of headers
 * @returns {any} A table of contents
 */
export const getTableOfContents = (headers: string[]) => {
    if (headers.length === 0) return []
    
    const tableOfContents: any = {}
    let currentSection: any = {
        text: headers[0].replace(/#+/g, '').trim(),
        subSections: []
    }

    headers.forEach((header, index) => {
        if (index === 0) return
        const headerText = header.replace(/#+/g, '').trim()
        const headerLevel = header.match(/#/g)?.length || 0

        if (headerLevel === 1) {
            if (!tableOfContents[currentSection.text]) {
                tableOfContents[currentSection.text] = currentSection
            } else {
                tableOfContents[`${currentSection.text}-${index}`] = currentSection
            }

            currentSection = {
                text: headerText,
                subSections: []
            }
        } else if (headerLevel >= 1) {
            currentSection.subSections.push(headerText)
        }

        if (headers.length === index + 1 && !tableOfContents[currentSection.text]) {
            if (!tableOfContents[currentSection.text]) {
                tableOfContents[currentSection.text] = currentSection
            } else {
                tableOfContents[`${currentSection.text}-${index}`] = currentSection
            }
        }
    })

    return tableOfContents
}