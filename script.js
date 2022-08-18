/* Первое задание */

const data = {
    color: 'red',
    width: 400,
    height: 500
};

function func(options) {
    let [color, width, height] = options
    console.log(color, width, height);
}

func(data)

/* Второе задание */

const data2 = ['Иван','Иванов', 'Отдел разработки']

function func(emp) {
    let [name, surname, department] = emp;

    let position;
    if(position !== undefined) {
        position = emp[3]
    }else(
        posoition = 'Junior'
    )

    console.log(name, surname, department, position);
}

func(data)