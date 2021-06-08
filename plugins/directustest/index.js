module.exports = {
  onPreBuild: ({ constants,packageJson }) => {
    console.log(constants);
    console.log(packageJson);
  },
}
