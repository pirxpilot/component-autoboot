function plugin(builder) {
  // appending autoboot
  builder.append("require('boot');");
}

module.exports = plugin;