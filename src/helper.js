function assertEnvironment(vars) {
  let stop = false;
  for (const varname of vars) {
    if (!process.env[varname]) {
      console.error(`Missing envvar ${varname}`);
      stop = true;
    }
  }
  if (stop) {
    process.exit(-1);
  }
}
module.exports = { assertEnvironment };
