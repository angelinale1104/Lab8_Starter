// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// 4 tests for isPhoneNumber function
test('Check if (760)123-4567 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(760) 123-4567')).toBe(true);
});

test('Check if 760-123-4567 is a valid phone number', () => {
    expect(functions.isPhoneNumber('760-123-4567')).toBe(true);
});

test('Check if 7601234567 is a valid phone number', () => {
    expect(functions.isPhoneNumber('7601234567')).toBe(false);
});

test('Check if 760-123-456 is a valid phone number', () => {
    expect(functions.isPhoneNumber('760-123-456')).toBe(false);
});

// 4 tests for isEmail function
test('Check if abc@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('abc@ucsd.edu')).toBe(true);
});

test('Check if abc@gmail.com is a valid email', () => {
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
});

test('Check if abc@@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('abc@@ucsd.edu')).toBe(false);
});

test('Check if abc is a valid email', () => {
    expect(functions.isEmail('abc')).toBe(false);
});

// 4 tests for isStrongPassword function
test('Check if cse110_fall21 is a strong password', () => {
    expect(functions.isStrongPassword('cse110_fall21')).toBe(true);
});

test('Check if cse110__is__fun is a strong password', () => {
    expect(functions.isStrongPassword('cse110__is__fun')).toBe(true);
});

test('Check if 1_plus_2_is_3 is a strong password', () => {
    expect(functions.isStrongPassword('1_plus_2_is_3')).toBe(false);
});

test('Check if cse110&fall21 is a strong password', () => {
    expect(functions.isStrongPassword('cse110&fall21')).toBe(false);
});

// 4 tests for isDate function
test('Check if 04/11/2000 is a valid date', () => {
    expect(functions.isDate('04/11/2000')).toBe(true);
});

test('Check if 1/1/1985 is a valid date', () => {
    expect(functions.isDate('1/1/1985')).toBe(true);
});

test('Check if 004/11/2000 is a valid date', () => {
    expect(functions.isDate('004/11/2000')).toBe(false);
});

test('Check if 1/1/193 is a valid date', () => {
    expect(functions.isDate('1/1/193')).toBe(false);
});

// 4 tests for isHexColor function
test('Check if #00FFFF is a valid hex color', () => {
    expect(functions.isHexColor('#00FFFF')).toBe(true);
});

test('Check if #fc9 is a valid hex color', () => {
    expect(functions.isHexColor('#fc9')).toBe(true);
});

test('Check if #1235679 is a valid hex color', () => {
    expect(functions.isHexColor('#1235679')).toBe(false);
});

test('Check if #xyz is a valid hex color', () => {
    expect(functions.isHexColor('#xyz')).toBe(false);
});




