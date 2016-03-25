/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var courses = {
    'id':'',
    'fname':'',
    'courses': '' [
    {'courseID' : '',
        'grade' : '',
         'year' : '',
         'semester' : '',
         'credits' : ''
} 
    ],
    calcGPA: function(){
        var gpa = 0;
       for (var i = 0; i<this.courses.length; i++ ) {
        gpa +=this.courses[i].grade;}
       
    gpa /=this.courses[i].length;
    return gpa ;
    }
};
var c1 =courses;
c1['ID'] = '210';
c1['fname'];'Temel Analiz';
c1['courses'];'mbg';
c1['firstname'];'unknown';
c1['lastname'];'unknown';
    for(var i = 0; i<5; i++ ) 
        c1['courses'][i] = {'courseID':'210'+i , 'grade':Math.random()*100+1 };
    
    var gpa = c1.calcGPA();
    
    function courses(dep, code, creditsigrade, year, semester) {
        this.dep = dep;
        this.id = id;
        this.grade = grade;
        this.year = year;
        this.semester = semester;
        this.getCourseCode = function() {
                return this.dep+ this.id;
               
        };
    };
    var c1 = new Course("MBG","101",2,3.5,2015,"Fall");
var c2 = new Course("CS","102",3,3,2016,"Spring");


var c1GPA = s1.calcGPA();
c1GPA;