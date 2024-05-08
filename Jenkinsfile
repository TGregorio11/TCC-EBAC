pipeline {

<<<<<<< HEAD
    stages {
        stage('Setup'){
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/TGregorio11/Exercicio-Aula-Cypress-2.git'
                bat 'npm install'
            }
        }
        stage('Instalar dependencias'){
        stage('Instalar dependencias') {
            steps {
                bat'npm install'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat'npm test'
                bat 'npm test'
            }
        }
        stage ('Executar Testes') {
            steps{
                bat '''npm run cy:run'''
            }
       }
    }
=======
  agent any

  stages {

    stage('Setup'){


      steps {

        git branch: 'main', url: 'https://github.com/TGregorio11/Exercicio-Aula-Cypress-2.git'

        bat 'npm install'

      }

    }

    stage('Instalar dependencias'){

      steps {

        bat'npm install'

      }

    }

    stage('Test') {

      steps {

        bat'npm test'


      }

    }

    stage ('Executar Testes') {

      steps{

        bat '''npm run cy:run'''

      }

    }

  }

>>>>>>> 69ed3b617f4163d76722df7dca7bce387307d42a
}
