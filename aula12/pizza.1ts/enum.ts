//desnevola um sistema para uma pizzaria em typescript, você deve definir um enum chamado saborpizzaria que representara os sabores disponiveis de pizzas

import {Pizza} from "./class.ts"

enum saborPizza {
    sabor1 = `4 queijos`,
    sabor2 = `napolitana`,
    sabor3 = `alho e olho`
}

const Pizza1 = new Pizza(saborPizza.sabor1, `grande`, 90)
Pizza1.descricao()
const Pizza2 = new Pizza(saborPizza.sabor2, `medio`, 60)
Pizza2.descricao()
const Pizza3 = new Pizza(saborPizza.sabor3, `pequeno`, 30)
Pizza3.descricao()