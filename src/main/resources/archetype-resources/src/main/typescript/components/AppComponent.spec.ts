import AppComponent from './AppComponent';

describe('AppComponent', () => {
    let component;

    beforeEach(() => {
        component = new AppComponent();
    });

    it('a le hook `created`', () => {
        expect(typeof component.created).toBe('function')
    });

    it('a le hook `mounted`', () => {
        expect(typeof component.mounted).toBe('function')
    });
});