import MainSiteCategoriesSample from '../../src/Components/MainSiteCategoriesSample.vue';

describe('MainSiteCategoriesSample component test', () => {
    const defaultData = MainSiteCategoriesSample.data();
    it('Check if articles is set properly', () => {
        expect(defaultData.articles).toEqual([]);
    });
});