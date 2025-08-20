class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(Name) {
    if (typeof Name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = Name;	  
    }
  }

  set length(Length) {
    if (typeof Length !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = Length;
    }
  }

  set students(Students) {
    if (!Array.isArray(Students) || !Students.every((i) => typeof i === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = Students;
  }
}

export default HolbertonCourse;
