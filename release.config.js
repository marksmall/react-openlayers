module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
  preset: 'angular',
  branches: ['main'],
};
