export default function initialize(properties) {
    function circular(model) {
        return model.reduce((acc, curr) => {
            if (curr.type === 'iterable-group') {
                return { ...acc, [curr.name]: [circular(curr.model)] };
            }
            else if (curr.type === 'group') {
                return { ...acc, [curr.name]: circular(curr.model) };
            }
            else {
                return { ...acc, [curr.name]: curr?.defaultValue ?? "" };
            }
        }, {});
    }
    return circular(properties);
}
