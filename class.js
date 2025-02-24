class Person {
    constructor(emri , mbiemri ,pesha , gjatsia) {
        this.emri = emri;
        this.mbiemri = mbiemri;
        this.pesha = pesha;
        this.gjatesia = gjatesia;
    }

    bmi() {
        let gjejBmi = this.pesha * this.gjatesia;
        return gjejBmi;
    }


}

Denisa = new Person("Denisa", "Hoxhalli", 54 ,167);

document.write("BMI e Denises eshte " + Denisa.bmi() + "<br>");