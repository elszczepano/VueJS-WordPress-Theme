const sliceText = {
    filters: {
        sliceText: function(value, size) {
            let desc = value.slice(3, size);
            const length = desc.length;
            for(let i = length; i>=0; i--) {
                if(desc[i-1] === " ") {
                    desc = desc.slice(0, i-1);
                    if([',','.'].includes(desc[i-2])) desc = desc.slice(0, i-2);
                    return desc;
                }
                desc = desc.slice(0, i-1);
            }
        }
    }
};
export default sliceText;