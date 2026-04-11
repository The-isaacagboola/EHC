// Sync and Async
const fs = require("fs").promises;
const path = require("path");

const { formatStudent } = require("./utils/formatter");

async function readStudents() {
  try {
    const filePath = path.join(__dirname, "data", "students.json");
    console.log(filePath);

    const data = await fs.readFile(filePath, "utf8");

    const students = JSON.parse(data);

    // students.map((s) => console.log(`${s.name}: ${s.score}`));
    students.map((s) => {
      const studentInfo = formatStudent(s);
      console.log(studentInfo);
    });
  } catch (error) {
    console.error("An error occured", error.message);
  }
}

readStudents();
