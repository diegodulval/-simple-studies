#ifndef ALUNOPESQUISADOR_H
#define ALUNOPESQUISADOR_H

#include <iostream>
#include <string>
#include <Aluno.h>

using namespace std;

class AlunoPesquisador : public Aluno
{

  private:
	string orientador;
	string linha;
	double bolsa;

  public:
	//Construtor
	AlunoPesquisador(string nome);
	//Destrutor
	~AlunoPesquisador();

	//Getters
	double getBolsa();
	string getLinha();
	string getOrientador();

	//Setters
	void setBolsa(double bolsa);
	void setLinha(string linha);
	void setOrientador(string orientador);
};

#endif /* ALUNOPESQUISADOR_H */
