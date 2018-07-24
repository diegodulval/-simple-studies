#ifndef CARRO_H
#define CARRO_H

#include <string>

using namespace std;

class Carro
{
//Atributos que somente poderão ser acessados dentro do escopo da classe.
private:
  string marca;
  int ano;
  string cor;

//Atributos e métodos que podem ser acessados publicamente, sem ser necessario estar no escopo da classe.
public:
  Carro();
  Carro(string marca, int ano);
  ~Carro();
  void setMarca(string marca);
  void setAno(int ano);
  int getAno();
  string getMarca();

  //Atributo da classe e não do objeto que instancia a classe.
  static int pneus;
};

#endif