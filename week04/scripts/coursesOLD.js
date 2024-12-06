const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T',
        },
        {
            sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A',
        },
    ],
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textCode = course.code;
}
//function that outputs the sections into the table identified as #section.
function sectionTemplate(section) {
    return <tr>
        <td>$section.sectionNum</td>
        <td>$section.roomNum</td>
        <td>$section.enrolled</td>
        <td>$section.days</td>
        <td>#section.instructor</td>
    </tr>
}
function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}
/*function enrollStudent(sectionNum) {
    //find the correct section
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
    }
}
function dropStudent(sectionNum) {
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
    }
} */
function changeEnrollment(sectionNum, add = true) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
        if (add) {
            this.sections[sectionIndex].enrolled++;
        } else {
            this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
    }
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    //aCourse.enrollStudent(sectionNum);
    aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    //aCourse.dropStudent(sectionNum);
    aCourse.changeEnrollment(sectionNum);
})
setCourseInfo(aCourse);
renderSections(aCourse.sections);
aCourse.enrollStudent(sectionNum);
