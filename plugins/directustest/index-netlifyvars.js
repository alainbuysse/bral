module.exports = {
  onPreBuild: ({ constants,packageJson, netlifyConfig }) => {
    console.log(constants);
    console.log(packageJson);
    console.log(netlifyConfig);
  },
}
