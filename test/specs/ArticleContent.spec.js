import ArticleContent from '../../src/Components/ArticleContent.vue';

describe('ArticleContent component test', () => {
    const defaultData = ArticleContent.data();
    it('Check if default ArticleContent component data is set properly', () => {
        expect(defaultData.content).toBe('');
    });
    it('Check if default ArticleContent component data is a string', () => {
        expect(typeof defaultData.content).toBe('string');
    });
});