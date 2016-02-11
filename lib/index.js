export default (callback) => (input) => {
    return function rename(log) {
        return Promise.all(
            input.map(file => {
                return Promise.resolve(callback(file.path)).then(newPath => {
                    log(newPath);

                    return {
                        path: newPath,
                        data: file.data
                    };
                });
            })
        );
    };
};
