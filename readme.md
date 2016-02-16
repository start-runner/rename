# start-rename

[![npm](https://img.shields.io/npm/v/start-rename.svg?style=flat-square)](https://www.npmjs.com/package/start-rename)
[![linux build](https://img.shields.io/travis/start-runner/rename.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/rename)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/rename.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/rename)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/rename.svg?style=flat-square)](https://codecov.io/github/start-runner/rename)
[![deps](https://img.shields.io/gemnasium/start-runner/rename.svg?style=flat-square)](https://gemnasium.com/start-runner/rename)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

Rename task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-rename
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import less from 'start-less';
import rename from 'start-rename';
import write from 'start-write';

export function build() {
    return start(reporter())(
        files('build/'),
        clean(),
        files('lib/**/*.less'),
        less(),
        rename(file => file.replace(/\.less$/, '.css')),
        write('build/')
    );
}
```

This task relies on `[{ path, data, map }]` input and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`rename(callback)`

* `callback(file)` – function called with an absolute file path. Must return new (modified) absolute file path or a Promise with it.
