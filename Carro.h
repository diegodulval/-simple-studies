#ifndef CARRO_H
#define CARRO_H

#include <string>

using namespace std;

class Carro
{
  private:
    string marca;
    int ano;
    string cor;

  public:
    Carro();
    Carro(string marca, int ano);
    ~Carro();
    void setMarca(string marca);
    void setAno(int ano);
    int getAno();
    string getMarca();
    static int pneus;
};

#endif