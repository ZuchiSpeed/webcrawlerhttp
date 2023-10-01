const { normalizeURL } = require('./crawl')
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