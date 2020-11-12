describe('Odd369Games', () => {
    it('3,6,9를 만나면 카운트가 올라간다.', () => {
        expect(odd369Games('93')).toBe(10);
    });
    it('333을 입력하면 13이 출력', () => {
        expect(odd369Games('333')).toBe(13);
    });
    it('4가 입력되면 1이 출력', () => {
        expect(odd369Games('4')).toBe(1);
    });
    it('44를 넣은값과 39를 넣은값이 같다.', () => {
        expect(odd369Games('44')).toBe(odd369Games('39'));
    });
    it('37를 입력하면 36을 넣었을 때와 값이 같다.', () => {
        expect(odd369Games('37')).toBe(odd369Games('36'));
    });
    it('22를 입력하면 9를 입력한 값과 같다.',() => {
        expect(odd369Games('22')).toBe(odd369Games('9'));
    });
    it('100를 입력하면 99를 입력한 값과 같다.',() => {
        expect(odd369Games('100')).toBe(odd369Games('99'));
    });
    it('300를 입력하면 99를 입력한 값과 같다.',() => {
        expect(odd369Games('300')).toBe(odd369Games('99'));
    });
})