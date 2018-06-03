import Search from '../../src/Components/Search.vue';

describe('Search component test', () => {
    const defaultData = Search.data();
    it('Check if postCount is set properly', () => {
        expect(defaultData.postsCount).toBe(0);
    });
    it('Check if postCount is a number', () => {
        expect(typeof defaultData.postsCount).toBe('number');
    });
    it('Check if articles is set properly', () => {
        expect(defaultData.articles).toEqual([]);
    });
});