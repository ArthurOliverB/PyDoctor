
**Curso Algoritmos: Fundamentos**
====
## **Fundamentos**

Seja bem vindo ao primeiro capítulo do nosso curso, **fundamentos**! Nesse primeiro momento buscamos apresentar os conceitos chaves ligados a programação através da linguagem Python, dentre eles:

* Algoritmos
* Aspectos de linguagens de programação
* Variáveis & Tipos
* Estruturas de decisão
* Funções

Vamos lá?

## **Algoritmos**

> _Trata-se de um processo ou conjunto de regras a serem seguidas em cálculos ou outras operações voltadas para solução de problemas_[...]
> 
> – Oxford Lexico


Como a definção bem disse, algoritmos são 
basicamente uma série de instruções para resolução de problemas, não necessáriamente computacionais. Ou seja, se preparar para sair de casa de manhã, pode ser caracterizada como um algoritmo, veja:

1. Levantar-se
2. Tomar um banho
3. Vestir-se
4. Calçar o sapato
5. Pegar itens essênciais(Chave, carteira etc)
6. Comer
7. Escovar os dentes
8. Pegar a mochila
9. Sair de casa

Que tal tentar identificar e tentar escrever alguns algoritmos que você usa diariamente?


> ### 🤔 **Exercício**
>
> Tente identificar algoritmos que você utiliza no seu dia-a-dia. **Identifique pelo menos 3**!



## **Meu primeiro programa**


O próximo exercício representa o nosso primeiro programa em Python!


`primeiro_programa.py`
```python
print("Olá python!") //(1)

# Resultado:
# Olá python!

```
1. O método `print` nos permite imprimir algum valor no terminal. No caso imprimimos _Olá python!_
<!-- [REVIEW] QUEBRAR LINHA OU NÃO-->
> ✅ **DICA** Python também é possível quebrar a sentença em múltiplas linhas


`.primeiro_programa.py`
```python
print("Olá python!")

print(
    "Olá Python!"
)
```
----
## **Variáveis e constantes**
Para armazenar dados mutáveis como idade de uma pessoa, quilometragem de um carro, utilizamos variáveis, veja:

`.variaveis_e_constantes.py`
```python
modelo = "Uno"
fabricado_por = "Fiat"
print("Modelo: " + modelo)
print("Marca: " + fabricado_por)
```


Já para armazenar dados imutáveis como tipo sanguíneo, polegada de uma tv utilizamos de constantes. 

`.variaveis_e_constantes_2.js`

```javascript
const tipoSanguineo = "O+" // (1)

// Erro!
tipoSanguineo = "B+"
```
1. `const` sinaliza que é uma constante
[IMPORTANT]


> 🔥 **IMPORTANTE** 
>
>É imporante ressaltar que python não suporta constantes! Os desenvolvedores convencionaram que variáveis declaradas em caixa alta são "constantes" e não podem ser alteradas


`variaveis_e_constantes.py`
```python
ANO = 2019
print(ANO)
ANO = 2020
print(ANO)
```

Outro recurso importante de toda linguagem de programação são comentários. Os comentários servem para apresentar em forma de texto uma informação adicional que talvez não esteja explicita no código. 

`variaveis_e_constantes.py`
```python
idade = 20
# idade = 22 #(1)
print(idade)
```
1. Como está comentado, nada acotece com a variável idade

> ⚠️ **CUIDADO!** 1. Evite criar comentários desnecessários!

Para comentar várias linhas utilize um `#` para cada linha

`variaveis_e_constantes.py`
```python
# comentário de 
# multiplas linhas
```
É comum ver na internet a sugestão de outro tipo, ver exercício abaixo:

`variaveis_e_constantes.py`
```python
"""
    comentários de
    multiplas linhas
"""
```
> 🔥 **IMPORTANTE** 
>
> Não é recomendado pois o interpretador passa por cada linha, enquanto o comentário feito com `#` é ignorado
----

## **Tipos básicos**
No mundo real usamos letras para expressar nomes, palavras para expressar textos e numeros para representar valores e com isso em mente as linguagens de programação possuem alguns tipos básicos para podermos traduzir isso para linguagem de máquina, dentre eles: 

.Tipos básicos
| **Tipo**    |   **Uso**         |
| ----------- | ----------------  |
| Char        | Letras            | 
| Strings     | Palavras          | 
| Inteiros    | Numeros           | 
| Floats      | Decimais          | 
| Boolean     | Expressões lógicas| 


> 🔥 **IMPORTANTE!**
> Python une letras e palavras em __Strings__ ao invés de separar em __Char__ e __String__

O exemplo abaixo apresenta um uso prático para esses tipos básicos veja: 

`tipos_basicos.py`
```python
titulo = "Pulp Fiction"
ano_lancamento = 1994
avalicao = 4.6
favorito = True

print(
    titulo,
    "foi lançado em",
    ano_lancamento,
    "e tem nota",
    avalicao
)
```
----


## **Tipagem fraca Vs Tipagem forte**
A tipagem de uma linguagem de programação representa a capacidade de uma variável alterar seu tipo. Uma tipagem fraca também conhecida como dinâmica, permite que uma variável possa ser alterar de tipo sem apresentar erros. Já a tipagem forte ou estática representa o contrário, uma vez com seu tipo definido não pode ser mais alterado. 


Python por exemplo é uma linguagem com uma tipagem fraca, dessa forma permitindo que uma mesma variável possa ser atribuida com tipos diferentes, veja:

`tipagem_estatica_vs_tipagem_dinamica.py`
```python
valor = 'Palavra'
print(valor)

valor = 3
print(valor)
```

Já se tentassemos traduzir o exemplo acima para a linguagem Dart, que possui uma tipagem forte, geraria um erro, veja: 

`tipagem_estatica.dart`
```dart
main() {
  String valor = 'Palavra';
  print(valor);
  //  Erro!
  valor = 3;
  print(valor);

  dynamic outro = 'oito';
  print(outro);
  outro = 9.8;
  print(x);
}
```

> 💡**NOTA**
> 
> `dynamic` é uma palavra chave da linguagem Dart que habilita a tipagem dinâmica para a variável `outro`. Dessa forma podendo alterar seu tipo mesmo trantando de uma linguagem com tipagem forte.
----
## **Funções**
<!-- [REVIEW] poderia ter colocado aqui a definição de função
[REVIEW] Faz sentido apresentar as funções internas depois de apresentar funções criadas pelo programador -->

Para definir funções em python utilizamos a palavra reservada ``def``

### **Criando suas próprias funções**
`algoritmo_funcao.py`
```python
def saudar():
    print("Olá! Sejam bem vindos!")

saudar()
```

### **Parâmetros**
Parâmetros são valores a serem passados para a função, para fazer isso basta definir dentro do parêntesis da função declarada

`algoritmo_funcao.py`
```python
def saudar_pessoa(nome):
    print("Ola " + nome + "! Seja bem vindo!")

saudar_pessoa("João")
````
Podemos também passar **mais de um parâmetro** para uma função, separando-os por virgulas

`algoritmo_funcao.py`

```python
def somar(numero1, numero2): # (1)
    print(numero1 + numero2)

somar(1, 3) # (2)
```
1. Para separar a declaração parâmetros utilizamos virgulas 
2. . O mesmo vale para a invocação



### **Funções que retornam**
O retorno de uma função é basicamente o valor que a função gera quando é invocada. Podendo ser armazenado em uma variável ou diretamente utilizado para uma outra operação

`algoritmo_funcao.py`

```python
def dividir(divisor, dividendo):
    resultado = divisor / dividendo
    return resultado

dividir(10, 5) # (1)
print(dividir(10, 5)) # (2)

resultado_divisao = dividir(10, 5) # (3)
print(resultado_divisao)
```
1. Somente chamar a função não irá aparecer nada
2. Precisamos invocar a função dentro de um ``print`` para aparacer algum resultado
3. Ou podemos armazenar em uma variável como em ``resultado_divisão```


### **Funções internas do Python**
O python possui suas próprias funções interas, que estão presentes desde o início do curso, como a função ``print``

`algoritmo_funcao_2.py`
```python
nome = "Bulano"
print(nome)
```
Além das formas apresentadas acima, existem outras formas de se invocar uma função, dentre elas


`algoritmo_funcao_2.py`
```python
nome = "Bulano"
print(nome)

# Invocação com um parâmetro
len(nome)

# Invocação com dois parâmetros e através da notação ponto
nome.replace("B", "F") # (1)
print(nome)

nome = nome.replace("B", "F") # (2)
print(nome)
# Invocação através de um tipo literal
print("nome".upper()) # (3)
```
1. Métodos internos do pyhton não alteram diretamente variáveis. Para alterá-las precisa reatribuir a variável(__ver bullet 2__)
2. Reatribuição para alterar o valor da variável
3. Tipos em python possuem seus próprios métodos, o que possibilita esse tipo de invocação



Existem também as funções que só podem ser acessadas uma vez que forem importadas


`algoritmo_funcao_2.py`
```python  
import datetime

hoje = datetime.datetime.now()
print (hoje.day, hoje.month, hoje.year)
print (hoje.hour, hoje.minute, hoje.second)
```  


Podemos também importar apenas uma função da seguinte forma:

`algoritmo_funcao_2.py`
```python
import datetime from datetime

hoje = datetime.now()
print (hoje.day, hoje.month, hoje.year)
print (hoje.hour, hoje.minute, hoje.second)
```
----
## **Pratique**
> ### 🤔 **Exercício**
>
> 1. Escolha um objeto no seu arredor e tente identificar pelo menos 3 características
> 2. Armazene as caracteristicas em variáveis identificando os tipos básicos corretos para cada característica(ex.: palavra = String)
> 3. Declare uma função para imprimir as características do objeto escolhido

> ### 💡 **Solução**
> `desafio_algoritmo_resposta.py`
>```python
> nome = "Violão"
> modelo = "Lag"
> qtd_cordas = 6
>
> def descrever_violao(nome, modelo, qtd_cordas):
>    print("O", nome, modelo, "possui", qtd_cordas, "cordas")
> 
> descrever_violao(nome, modelo, qtd_cordas)
> ```