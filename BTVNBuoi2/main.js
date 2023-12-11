const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

// 1.  Viết function tính thứ hạng trung bình của cả lớp
function avage(grades){
    let sum = 0 ;
    for(let i = 0 ; i<grades.length ; i++){
        let obj = grades[i];
        sum += obj.grade
    }
    let ave = sum/grades.length
    return ave
}

console.log(avage(grades))
// 2. Viết function tính thứ hạng trung bình của nam trong lớp
function avageM(grades){
    let sum = 0 ;
    let count = 0;
    for(let i = 0 ; i<grades.length ; i++){
        let obj = grades[i];
       if(obj.sex == 'M'){
        count ++ ;
        sum += obj.grade
       }
    }
    let ave = sum/count
    return ave;
}

console.log(avageM(grades))
// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
function avageF(grades){
    let sum = 0 ;
    let count = 0;
    for(let i = 0 ; i<grades.length ; i++){
        let obj = grades[i];
       if(obj.sex =='F'){
        count ++ ;
        sum += obj.grade
       }
    }
    let ave = sum/count
    return ave;
}

console.log(avageF(grades))
//4.  Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function searchM(grades){
  let max = 100;
  let res = {};
  for(let i = 0 ; i<grades.length ; i++){
    if(grades[i].sex=="M" && max>grades[i].grade){
        res=grades[i];
        max = grades[i].grade
    }
  }
  return res;
}
console.log(searchM(grades))
//5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function searchF(grades){
    let max = 100;
    let res = {};
    for(let i = 0 ; i<grades.length ; i++){
      if(grades[i].sex=="F" && max>grades[i].grade){
          res=grades[i];
          max = grades[i].grade
      }
    }
    return res;
  }
  console.log(searchF(grades))
// Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function searchMin(grades){
    let max = 0;
    let res = {};
    for(let i = 0 ; i<grades.length ; i++){
      if(grades[i].sex=="M" && max<grades[i].grade){
          res=grades[i];
          max = grades[i].grade
      }
    }
    return res;
  }
  console.log(searchMin(grades))
// Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function searchF(grades){
    let max = 0;
    let res = {};
    for(let i = 0 ; i<grades.length ; i++){
      if(grades[i].sex=="F" && max<grades[i].grade){
          res=grades[i];
          max = grades[i].grade
      }
    }
    return res;
  }
  console.log(searchF(grades))
// Viết function thứ hạng cao nhất của cả lớp\
function searchClass(grades){
    let max = 100;
    let res = {};
    for(let i = 0 ; i<grades.length ; i++){
      if( max>grades[i].grade){
          res=grades[i];
          max = grades[i].grade
      }
    }
    return res;
  }
  console.log(searchClass(grades))
// Viết function thứ hạng thấp nhất của cả lớp
function searchMinClass(grades){
    let max = 0;
    let res = {};
    for(let i = 0 ; i<grades.length ; i++){
      if( max<grades[i].grade){
          res=grades[i];
          max = grades[i].grade
      }
    }
    return res;
  }
  console.log(searchMinClass(grades))
// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function searchFale(grades){
    for(let i = 0 ; i<grades.length ; i++){
      if(grades[i].sex == 'F'){
        console.log(grades[i])
      }
    }
  }
  console.log(searchFale(grades))


// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortByName(arr){
    let newGrades = [];
    newGrades = arr.sort(function(a, b){
        return a.name.localeCompare(b.name);
    });
    return newGrades;
}
console.log(sortByName(grades))
// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortByGrade(arr){
    let newGrades = [];
    newGrades = arr.sort(function(a, b){
        return a.grade - (b.grade);
    });
    return newGrades;
}
console.log( sortByGrade(grades));
// Viết function lấy rgra học viên Nữ có tên bắt đầu bằng “J”
function sortByGrade(arr){
    let newGrades = [];
    newGrades = arr.sort(function(a, b){
        return a.grade - (b.grade);
    });
    return newGrades;
}
console.log(findName_J(grades));
// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function top_5_Grade(arr){
    let newGrades = [];
    newGrades = arr.sort(function(a, b){
        return a.grade - (b.grade);
    });
    return newGrades.slice(0,5);
}
console.log( top_5_Grade(grades));
