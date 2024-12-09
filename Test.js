let School = {
    name:"№ 24 Орта мектеп",
    phoneNumber: 87714643329,
    students: [
        {
            name: "Yernar",
            top: "A",
            progress: 95,
            lessons: 4
        },
        {
            name: "MAdi",
            top: "B",
            progress: "67",
            lessons: 4
        },
        {
            name: "Dimash",
            top: "A",
            progress: 100,
            lessons: 4
        },
        {
            name: "Annabel",
            top: "A",
            progress: 100,
            lessons: 4
        },
        {
            name: "Anyar",
            top: "C",
            progress: 34,
            lessons: 4
        }
    ],
    //2
    changeSchoolName: function(){
    let newName = prompt("Жаңа мектеп атын еңгізіңіз!")
    this.School.push({name})
    alert("AT Ozgerildi")
    console.log(this.School);
},
// 3
    changePhoneNumber:function(){
    let num = +prompt("Жаңа мектеп нөмірін еңгізіңіз!")
    this.School.push({phoneNumber})
    alert("AT Ozgerildi")
    console.log(this.School);
},
    // 5
    adamQos:function(){
        let name = prompt("Atyndy jaz")
        let top = +prompt("Jasyndy jaz")
        let progress = +prompt("Bagandy jaz")
        let lessons = +prompt("Oky pandedi jaz")
        this.students.push({name:name,top,progress,lessons}) 
        alert("Adam qosyldy!")
        console.log(this.students)
      },
}



