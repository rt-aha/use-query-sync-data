import inquirer from 'inquirer';
import sh from 'shelljs';
import chalk from 'chalk';

class Version {
  constructor() {
    this.versionType = '';
    this.specifyVersion = '';
    this.updateFor = '';
  }

  validVersion(ver) {
    const versionRegExp = /^[0-9]{0,4}\.[0-9]{0,2}\.[0-9]{0,2}$/;
    return versionRegExp.test(ver);
  }

  async run() {
    await this.askType();
    const isSpecify = this.versionType === 'specify';

    if (isSpecify) {
      await this.askSpecifyVersion();
      const isValid = this.validVersion(this.specifyVersion);

      if (!isValid) {
        console.log(chalk.red.bold('Error: You entry an invalid version number.'));
        return;
      }
    }

    await this.askUpdateContent();
    const ver = isSpecify ? this.specifyVersion : this.versionType;
    await this.updateVersion(ver);
  }

  async askType() {
    const ans = await inquirer.prompt([
      {
        type: 'rawlist',
        name: 'versionType',
        message: 'Please select update version type:',
        choices: ['patch', 'minor', 'major', 'specify'],
      },
    ]);

    const { versionType } = ans;
    this.versionType = versionType;
  }

  async askSpecifyVersion() {
    const ans = await inquirer.prompt([
      {
        type: 'input',
        name: 'specifyVersion',
        message: 'Please entry the specify version:',
      },
    ]);

    const { specifyVersion } = ans;
    this.specifyVersion = specifyVersion;
  }

  async askUpdateContent() {
    const ans = await inquirer.prompt([
      {
        type: 'input',
        name: 'updateContent',
        message: 'What does you update for ?',
      },
    ]);

    const { updateContent } = ans;
    this.updateContent = updateContent;
  }

  handleGitTag(ver) {
    sh.exec(`git tag -m "${this.updateContent}" -a ${ver}`);
    sh.exec('git push origin --tag');
    sh.exec('git push github --tag');
  }

  handleGitCommit(ver) {
    sh.exec('git add .');
    sh.exec(`git commit -m ":tada: ${ver} ${this.updateContent}"`);
    sh.exec('pnpm tui');
  }

  updateVersion(ver) {
    const child = sh.exec(`npm version ${ver} --git-tag-version=false`, { async: true });

    child.stdout.on('data', (updatedVersion) => {
      this.handleGitCommit(updatedVersion);
      this.handleGitTag(updatedVersion);
    });
  }
}

const version = new Version();
version.run();
