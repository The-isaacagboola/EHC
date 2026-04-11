const formatStudent = (student) => {
  return `Name: ${student.name} | Track: ${student.track} | Score:
${student.score}`;
};

module.exports = { formatStudent };
