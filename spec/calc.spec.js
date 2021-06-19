const script = require('../lesson8/Calc');
const sum = script.sum;
const sub = script.sub;
const div = script.div;
const mult = script.mult;

describe('Функция sum()', () => {
    it('должна возвращать 9 при аргументах (4, 5)', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('должна возвращать null при аргументах (null, 2)', () => {
        expect(sum(null, 2)).toBeNull();
      })
    it('должна возвращать null при аргументах (2, null)', () => {
        expect(sum(2, null)).toBeNull();
      })
    it('должна возвращать ErrorCode 1 при аргументах ("", 2)', () => {
        expect(sum("", 2)).toBe("Error Code 1");
      })
    it('должна возвращать ErrorCode 1 при аргументах (2, "")', () => {
        expect(sum(2, "")).toBe("Error Code 1");
      })
    it('должна возвращать Null при аргументах (undefined, 2)', () => {
        expect(sum(undefined, 2)).toBeNull();
      })
    it('должна возвращать Null при аргументах (2, undefined)', () => {
        expect(sum(2, undefined)).toBeNull();
      })

  });

  describe('Функция sub()', () => {
    it('должна возвращать -1 при аргументах (4, 5)', () => {
        expect(sub(4, 5)).toBe(-1);
    })
    it('должна возвращать null при аргументах (null, 2)', () => {
        expect(sub(null, 2)).toBeNull();
      })

    it('должна возвращать null при аргументах (2, null)', () => {
        expect(sub(2, null)).toBeNull();
      })
      it('должна возвращать ErrorCode 1 при аргументах ("", 2)', () => {
        expect(sub("", 2)).toBe("Error Code 1");
      })
    it('должна возвращать ErrorCode 1 при аргументах (2, "")', () => {
        expect(sub(2, "")).toBe("Error Code 1");
      })
    it('должна возвращать Null при аргументах (undefined, 2)', () => {
        expect(sub(undefined, 2)).toBeNull();
      })
    it('должна возвращать Null при аргументах (2, undefined)', () => {
        expect(sub(2, undefined)).toBeNull();
      })
  });

  describe('Функция div()', () => {
    it('должна возвращать 2 при аргументах (10, 5)', () => {
        expect(div(10, 5)).toBe(2);
    })
    it('должна возвращать null при аргументах (null, 5)', () => {
        expect(div(null, 5)).toBeNull();
      })
    it('должна возвращать null при аргументах (5, null)', () => {
        expect(div(5, null)).toBeNull();
      })
    it('должна возвращать 0 при аргументах (0, 5)', () => {
        expect(div(0, 5)).toBe(0);
      })
    it('должна возвращать 0 при аргументах (10, 0)', () => {
        expect(div(10, 0)).toBe(0);
      })

    it('должна возвращать 0 при аргументах ("", 5)', () => {
        expect(div("", 5)).toBe(0);
      })
    it('должна возвращать 0 при аргументах (5, "")', () => {
        expect(div(5, "")).toBe(0);
      })
    it('должна возвращать Null при аргументах (undefined, 5)', () => {
        expect(div(undefined, 5)).toBeNull();
      })
    it('должна возвращать Null при аргументах (5, undefined)', () => {
        expect(div(5, undefined)).toBeNull();
      })

  });

  describe('Функция mult()', () => {
    it('должна возвращать 50 при аргументах (10, 5)', () => {
        expect(mult(10, 5)).toBe(50);
    })
    it('должна возвращать null при аргументах (null, 5)', () => {
        expect(mult(null, 5)).toBeNull();
      })
    it('должна возвращать null при аргументах (5, null)', () => {
        expect(mult(5, null)).toBeNull();
      })
    it('должна возвращать 0 при аргументах (0, 5)', () => {
        expect(mult(0, 5)).toBe(0);
      })
    it('должна возвращать 0 при аргументах (10, 0)', () => {
        expect(mult(10, 0)).toBe(0);
      })

    it('должна возвращать 0 при аргументах ("", 5)', () => {
        expect(mult("", 5)).toBe(0);
      })
    it('должна возвращать 0 при аргументах (10, "")', () => {
        expect(mult(10, "")).toBe(0);
      })
    it('должна возвращать Null при аргументах (undefined, 5)', () => {
        expect(mult(undefined, 5)).toBeNull();
      })
    it('должна возвращать Null при аргументах (10, undefined)', () => {
        expect(mult(10, undefined)).toBeNull();
      })

  });