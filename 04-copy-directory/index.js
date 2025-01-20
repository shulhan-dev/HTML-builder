const path = require('path');
const fs = require('fs/promises');
const copyDir = async (nameSrc, nameDist) => {
  const srcFolder = path.join(__dirname, `${nameSrc}`);
  const distFolder = path.join(__dirname, `${nameDist}`);
  const files = await fs.readdir(srcFolder, { withFileTypes: true });
  await fs.mkdir(distFolder, { recursive: true });
  for (let file of files) {
    await fs.copyFile(
      path.join(srcFolder, `${file.name}`),
      path.join(distFolder, `${file.name}`),
    );
  }
};
copyDir('files', 'files-copy');
