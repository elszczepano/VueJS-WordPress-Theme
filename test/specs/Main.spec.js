import Main from '../../src/Components/Main.vue';

describe('Main component test', () => {
    it('Check if default Main component data is set properly', () => {
        const defaultData = Main.data();
        const category = {name: 'Frontend', id: 3};
        expect(defaultData.promotedCategories).toContainEqual(category);
    });
});