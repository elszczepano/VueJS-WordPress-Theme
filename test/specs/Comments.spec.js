import Comments from '../../src/Components/Comments.vue';

describe('Comments component test', () => {
    const defaultData = Comments.data();
    it('Check if default Comments component data is set properly', () => {
        expect(defaultData.identifier).toBe('');
    });
    it('Check if default Comments component data is a string', () => {
        expect(typeof defaultData.identifier).toBe('string');
    });
});