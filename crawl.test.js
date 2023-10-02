const { normalizeURL, getURLsFromHTML } = require('./crawl')
const { test, expect } = require('@jest/globals')

//url tests❤️
test('normalizeURL strip protocol', () => {
    const input = 'https://underrated/courses'
    const actual = normalizeURL(input)
    const expected = 'underrated/courses'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://underrated/courses'
    const actual = normalizeURL(input)
    const expected = 'underrated/courses'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://underrated/courses'
    const actual = normalizeURL(input)
    const expected = 'underrated/courses'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
    const input = 'https://underrated/courses'
    const actual = normalizeURL(input)
    const expected = 'underrated/courses'
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://underrated/courses/">Courses</a>
        </body>
    </html>
    `

    const inputBaseURL = 'https://underrated/courses'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ['https://underrated/courses/']
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/level">levels</a>
        </body>
    </html>
    `

    const inputBaseURL = 'https://underrated/courses'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ['https://underrated/courses/level']
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML invalid', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="Invalid">Invalid URL</a>
        </body>
    </html>
    `

    const inputBaseURL = 'https://underrated/courses'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})