export default (callback) => (input) => {
  return function rename(log) {
    const path = require('path');

    return Promise.all(
      input.map((file) => {
        return Promise.resolve(callback(file.path))
          .then((newPath) => {
            if (file.path === newPath) {
              return file;
            }

            log(newPath);

            if (file.map !== null) {
              file.map.file = path.basename(newPath);
            }

            return {
              path: newPath,
              data: file.data,
              map: file.map
            };
          });
      })
    );
  };
};
