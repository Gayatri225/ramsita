# Ram & Sita — Tiny Tale Website

Ram & Sita — static site on AWS (EC2 + Docker + ECR)

A tiny static website served by nginx inside a Docker container on Amazon Linux 2023 (EC2).
Image is stored in a private Amazon ECR repository and pulled to EC2 for run.

What’s deployed

EC2: t3.micro (ap-south-1), Amazon Linux 2023
Docker: nginx serving the static site
ECR repo: ram-sita with image tag v1
Port mapping: host 80 → container 80

Screenshots of the project uploaded in aws-ECS Folder. Kindly check there. 


