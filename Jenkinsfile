pipeline {
    agent any

    environment {
        DOCKERHUB_CREDS = credentials('dockerhub-creds')
    }

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                git 'https://github.com/Lakshmanan1996/techjourney_portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t portfolio-site .'
                }
            }
        }

        stage('Docker Login') {
            steps {
                sh '''
                echo $DOCKERHUB_CREDS_PSW | docker login \
                -u $DOCKERHUB_CREDS_USR --password-stdin
                '''
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                sh '''
                docker tag portfolio-site lakshmanan1996/portfolio-site:latest
                docker push lakshmanan1996/portfolio-site:latest
                '''
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ec2-user@YOUR_EC2_IP "
                        sudo docker pull lakshmanan1996/portfolio-site:latest &&
                        sudo docker stop portfolio || true &&
                        sudo docker rm portfolio || true &&
                        sudo docker run -d --name portfolio -p 80:80 lakshmanan1996/portfolio-site:latest
                    "
                    '''
                }
            }
        }
    }
}
