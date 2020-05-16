import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
  it('should shorten the length of a string down to 10 characters or less', () => {
    const pipe = new ShortenPipe();
    const testStr = '01234567890123456789';
    const resultStr = pipe.transform(testStr);
    expect(resultStr.length).toBeLessThanOrEqual(10);
  });
});
