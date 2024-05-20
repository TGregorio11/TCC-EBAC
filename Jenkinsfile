pipeline {

  agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/TGregorio11/TCC-EBAC.git'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm install'
            }
        }
    }
}