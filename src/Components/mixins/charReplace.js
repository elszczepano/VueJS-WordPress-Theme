const charReplace = {
    filters: {
        charReplace: function(value) {
            let desc = value;
            const toReplace = {
                '&#8211;': '–',
                '&#8221;': '"',
                '&#8222;': '"',
                '&#8217;': "'",
                '&nbsp;': '',
            };
            for (const entity of Object.keys(toReplace)) {
                desc = desc.replace(new RegExp(entity, 'g'), toReplace[entity]);
            }
            return desc;
        }
    },
};
export default charReplace;