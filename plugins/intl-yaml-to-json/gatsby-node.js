const path = require('path');
const fs = require('fs-extra');
const yaml = require('js-yaml');

exports.onPreBootstrap = (_, { languages, sourcePath, destinationPath }) => {
  const translations = loadTranslationObject(sourcePath, languages);

  // Create directory structure
  fs.ensureDirSync(destinationPath);

  // Save bundled translation files
  for (const languageCode of languages) {
    fs.writeJsonSync(
      path.join(destinationPath, `${languageCode}.json`),
      translations[languageCode]
    );
  }
};

const loadTranslationObject = (sourcePath, languages) =>
  languages.reduce((acc, languageCode) => {
    const srcPath = path.join(sourcePath, languageCode);
    const translationObjects = fs.readdirSync(srcPath).map(file => {
      const filename = path.basename(file, path.extname(file));

      return {
        [filename]: yaml.load(fs.readFileSync(path.join(srcPath, file)), { encoding: 'utf-8' }),
      };
    });

    return Object.assign(acc, { [languageCode]: Object.assign({}, ...translationObjects) });
  }, {});
