pipeline {

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

}
