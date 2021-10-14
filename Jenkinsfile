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

                publishHTML target : [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'report',
                    reportFiles: 'api_automation_report.html',
                    reportName: 'API Automation Report',
                    reportTitles: 'API TEST REPORT'
                ]      
            }
        }
    }
    post{
        always{
            echo "Finish"
        }
    }
}