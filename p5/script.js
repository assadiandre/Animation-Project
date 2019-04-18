

function preload() {
  teacher_talk_sheet = loadSpriteSheet("sheetx3.png", 1000,1328,2);
  teacher_idle_sheet = loadSpriteSheet("sheetx3.png", 1000,1328,1);

  student_talk_sheet = loadSpriteSheet("bbq_sheet5.png", 1000,1686,2);
  student_idle_sheet = loadSpriteSheet("bbq_sheet5.png", 1000,1686,1);

  progressive_talk_sheet = loadSpriteSheet("progressive_sheet.png", 1000,1544,2);
  progressive_idle_sheet = loadSpriteSheet("progressive_sheet.png", 1000,1544,1);
}


function setup() {
  var canvas = createCanvas(windowWidth, 600);
  var x = (windowWidth - width) / 2;
  canvas.position(x, 100);

  teacherX = (width/2) - (width/3);
  studentX = width/2;
  progressiveX = (width/2) + (width/3);

  teacher = new Teacher(teacherX,250,1000,1328,0.3);
  teacher.configureSprite(teacher_talk_sheet, teacher_idle_sheet);

  student = new Student(studentX,250,1000,1686,0.3);
  student.configureSprite(student_talk_sheet, student_idle_sheet);

  progressive = new Progressive(progressiveX,250,1000,1544,0.3);
  progressive.configureSprite(progressive_talk_sheet, progressive_idle_sheet);

}

function mousePressed() {
  teacher.click();
  student.click();
  progressive.click();
}

function draw() {
  fill(90,90,90);
  textAlign(CENTER);
  textSize(20);
  textFont('Lato');
  smooth();
  text('"Teacher"', teacherX - 15, (teacher.sprite.height/2) + 280);
  text('"BBQ Club Student"', studentX + 5, (student.sprite.height/2) + 280);
  text('"Berkeley Progressive"', progressiveX + 15, (progressive.sprite.height/2) + 280);


  teacher.display();
  student.display();
  progressive.display();


}


function windowResized() {
  resizeCanvas(windowWidth, 600);
}
