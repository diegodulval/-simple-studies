#ifndef ALUNO_H
#define ALUNO_H

#include <iostream>
#include <string>

using namespace std;

class Aluno
{
  private:
	int codigo;
	string nome;
	float notas[2] = {0.0, 0.0};
	static int proxCodigo;

  public:
	//Construtor parametrizado
	Aluno(string nome);
	//Construtor de cópia
	Aluno(const Aluno &a);
	//Destrutor da classe
	~Aluno();

	//GETTERS - metodo de acesso
	int getCodigo();
	string getNome();
	float *getNotas();

	//SETTERS - metodo de mudança
	void setCodigo(int codigo);
	void setNome(string nome);
	void setNotas(float notas[]);
	float calculaMedia();

	//Função estática
	static int getProxCodigo();
};

#endif /* ALUNO_H_ */
