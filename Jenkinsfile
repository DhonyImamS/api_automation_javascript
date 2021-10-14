pipeline {
    agent {
        label 'jenkins-slave1'
    }
    stages{
        stage('Install Dependencies'){
            steps{
                sh "npm install"
            }
        }

        stage('Running Test'){
            steps{
                sh "npm run test-api"
            }
        }
    }
    post{
        always{
            echo "Finish"
        }
    }
}