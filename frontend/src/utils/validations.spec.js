import { validateCPF, validateCNPJ } from './validations';

test("validateCPF should return false for invalid CPF with incorrect checksums", () => {
  expect(validateCPF("123.456.789-01")).toBe(false); 
  expect(validateCPF("111.111.111-11")).toBe(false);
  expect(validateCPF("000.000.000-00")).toBe(false);
  expect(validateCPF("12345678901")).toBe(false);
  expect(validateCPF("123.456.789-00")).toBe(false);
});

test('validateCNPJ returns false for non-numeric input', () => {
  expect(validateCNPJ('123a4567890123')).toBe(false);
  expect(validateCNPJ('123.456.789/0001-23')).toBe(false);
  expect(validateCNPJ('12345678901234')).toBe(false);
  expect(validateCNPJ('1234567890123')).toBe(false);
  expect(validateCNPJ('123456789012345')).toBe(false);
});