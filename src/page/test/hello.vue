<template>
  <div class="hello">
    <h1>{{ msg }}
      <span>red</span>
    </h1>
    <h2 class="cc">Essential Links++++++</h2>
  </div>
</template>

<script>
class Pointsome {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.k = "--";
    }
    toString() {
        this.k = "tostring";
        return `=( ${this.x}, ${this.y} )=${this.k}`;
    }
    toValue() {
        return this.x + this.y + this.k;
    }
    get gsss() {
        return "geeter";
    }
    set gsss(value) {
        console.log("prop", value);
    }
}

export default {
    name: "HelloWorld",
    data() {
        return {
            // pp: new Pointsome(8, 9),
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted() {
        // console.log("==>class");
        //  this.pp.hasOwnProperty("x");
        let pp = new Pointsome(8, 9);
        console.log(
            "aaa===>",
            pp,
            "/",
            pp.toValue(),
            "/1/",
            pp.toString(),
            "/",
            pp.toValue(),
            "/",
            pp.hasOwnProperty("x"),
            "/",
            pp.hasOwnProperty("y")
        );
        // prop
        pp.gsss = 123;
        // get
        console.log(pp.gsss);

        // // //////////////
        let person2 = new class {
            constructor(name) {
                this.name = name;
            }
            sayName() {
                console.log(this.name);
            }
        }("张三");

        person2.sayName();
        /////////////////////////////////
        let Person = {
            name: "es6",
            sex: "mm",
            age: 16
        };
        let person = new Proxy(Person, {
            get(target, key) {
                return target[key];
            },
            set(target, key, value) {
                if (key !== "sex") {
                    target[key] = value;
                } else {
                    console.log("aaaaa");
                }
            }
        });
        try {
            person.name = "stephen";
            person.sex = "gg";
            person.age = 50;
        } catch (e) {
            console.log(e);
        }
        console.table({ name: person.name, sex: person.sex, age: person.age });
    }
};
</script>
<style lang="scss" scoped>
h1 {
    font-size: 48px;
}
h2 {
    font-size: 26px;
}
a {
    color: #42b983;
}
</style>
