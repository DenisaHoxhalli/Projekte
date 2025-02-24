class Car {
    constructor(name, year,cmimi,sasia) {
        this.name = name;
        this.year = year;
        this.cmimi = cmimi;
        this.sasia = sasia;
    }

    vlera() {
       let vleraTotale = this.cmimi * this.sasia;
       return vleraTotale;
    }

    vjetersia() {
        let currentYear = new Date().getFullYear();
        let vjetersiMakines = currentYear - this.year;
        return vjetersiMakines;
    }
}



Audi = new Car("Audi",2025,250,5);
Mercedes = new Car("Mercedes", 2015, 200, 3);
Toyota = new Car("Toyota",2018 ,100,4);
Hyundai = new Car("Hyundai",2020 ,200, 6);

document.write("Vlera e makines " + Audi.name + " eshte " + Audi.vlera() + " vjetersia eshte " + Audi.vjetersia() + "<br>"); 
document.write("Vlera e makines " + Mercedes.name + " eshte " + Mercedes.vlera() + " vjetersia eshte " + Mercedes.vjetersia() + "<br>");
document.write("Vlera e makines " + Toyota.name + " eshte " + Toyota.vlera() + " vjetersia eshte " + Toyota.vjetersia() + "<br>");
document.write("Vlera e makines " + Hyundai.name + " eshte " + Hyundai.vlera() + " vjetersia eshte " + Hyundai.vjetersia());


