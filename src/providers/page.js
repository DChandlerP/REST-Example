exports['PROVIDER page'] = () => {

    return function page(params) {
        const DEFAULT_PAGE_SIZE = 10;
        const MAX_PAGE_SIZE = 100;

        return {
            before: params.before,
            after: params.after,
            limit: Math.min(parseInt(params.limit) || DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE),
        };
    }

};