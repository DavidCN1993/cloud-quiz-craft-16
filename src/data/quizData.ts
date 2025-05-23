
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeLimit: number; // in minutes
  questions: Question[];
}

export const awsCloudPractitionerQuiz: Quiz = {
  id: "aws-ccp-1",
  title: "AWS Certified Cloud Practitioner",
  description: "Practice Exam 1 - Test your knowledge of AWS Cloud concepts, services, and the AWS global infrastructure.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
      options: [
        { id: "A", text: "AWS CLI." },
        { id: "B", text: "AWS API." },
        { id: "C", text: "AWS SDK." },
        { id: "D", text: "AWS Management Console." }
      ],
      correctAnswer: "D",
      explanation: "The AWS Management Console is a web-based interface for accessing and managing AWS services."
    },
    {
      id: 2,
      text: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
      options: [
        { id: "A", text: "Replacing an existing EC2 instance with a larger, more powerful one." },
        { id: "B", text: "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application." },
        { id: "C", text: "Adding more RAM capacity to an EC2 instance." },
        { id: "D", text: "Adding more EC2 instances of the same size to handle an increase in traffic." }
      ],
      correctAnswer: "D",
      explanation: "Horizontal scaling involves adding more instances of the same size to distribute load, rather than increasing the size of existing instances (vertical scaling)."
    },
    {
      id: 3,
      text: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
      options: [
        { id: "A", text: "Amazon Inspector." },
        { id: "B", text: "AWS CloudTrail." },
        { id: "C", text: "AWS Trusted Advisor." },
        { id: "D", text: "EC2 Instance Usage Report." }
      ],
      correctAnswer: "B",
      explanation: "AWS CloudTrail tracks user activity and API usage, providing visibility into actions taken in your AWS account."
    },
    {
      id: 4,
      text: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
      options: [
        { id: "A", text: "Applying the principle of least privilege to all AWS resources." },
        { id: "B", text: "Automatically provisioning new resources to meet demand." },
        { id: "C", text: "All AWS services are considered Global Services, and this design helps customers serve their international users." },
        { id: "D", text: "Providing compensation to customers if issues occur." },
        { id: "E", text: "Ability to recover quickly from failures." }
      ],
      correctAnswer: "B,E",
      explanation: "Automatically provisioning resources to meet demand (B) and quick recovery from failures (E) are key aspects of AWS reliability."
    },
    {
      id: 5,
      text: "Which statement is true regarding the AWS Shared Responsibility Model?",
      options: [
        { id: "A", text: "Responsibilities vary depending on the services used." },
        { id: "B", text: "Security of the IaaS services is the responsibility of AWS." },
        { id: "C", text: "Patching the guest OS is always the responsibility of AWS." },
        { id: "D", text: "Security of the managed services is the responsibility of the customer." }
      ],
      correctAnswer: "A",
      explanation: "The division of responsibilities varies depending on the AWS services you use. Different services require different levels of management from customers."
    },
    {
      id: 6,
      text: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
      options: [
        { id: "A", text: "The Reserved Instance discounts can only be shared with the master account." },
        { id: "B", text: "All accounts can receive the hourly cost benefit of the Reserved Instances." },
        { id: "C", text: "The purchased instances will have better performance than On-demand instances." },
        { id: "D", text: "There are no cost benefits from using consolidated billing; It is for informational purposes only." }
      ],
      correctAnswer: "B",
      explanation: "With consolidated billing, unused Reserved Instance hours can be applied to usage by other accounts within the organization."
    },
    {
      id: 7,
      text: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
      options: [
        { id: "A", text: "Deploy the application across multiple Availability Zones and Edge locations." },
        { id: "B", text: "Deploy the application across multiple Availability Zones and subnets." },
        { id: "C", text: "Deploy the application across multiple Regions and Availability Zones." },
        { id: "D", text: "Deploy the application across multiple VPC's and subnets." }
      ],
      correctAnswer: "C",
      explanation: "For the highest availability, applications should be deployed across multiple regions and availability zones to protect against region-wide failures."
    },
    {
      id: 8,
      text: "What does AWS Snowball provide? (Choose TWO)",
      options: [
        { id: "A", text: "Built-in computing capabilities that allow customers to process data locally." },
        { id: "B", text: "A catalog of third-party software solutions that customers need to build solutions and run their businesses." },
        { id: "C", text: "A hybrid cloud storage between on-premises environments and the AWS Cloud." },
        { id: "D", text: "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS." },
        { id: "E", text: "Secure transfer of large amounts of data into and out of the AWS." }
      ],
      correctAnswer: "A,E",
      explanation: "AWS Snowball provides built-in computing capabilities for local data processing and secure transfer of large amounts of data to and from AWS."
    },
    {
      id: 9,
      text: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
      options: [
        { id: "A", text: "AWS Health Dashboard." },
        { id: "B", text: "AWS Support Concierge." },
        { id: "C", text: "AWS Customer Service." },
        { id: "D", text: "AWS Operations Support." }
      ],
      correctAnswer: "B",
      explanation: "AWS Support Concierge provides Enterprise Support customers with billing and account assistance."
    },
    {
      id: 10,
      text: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
      options: [
        { id: "A", text: "Applying the Amazon Connect latency-based routing policy." },
        { id: "B", text: "Registering a new US domain name to serve the users in the US." },
        { id: "C", text: "Building a new data center in the US and implementing a hybrid model." },
        { id: "D", text: "Deploying new Amazon EC2 instances in a Region located in the US." }
      ],
      correctAnswer: "D",
      explanation: "Deploying EC2 instances in a region closer to the US users will reduce latency by providing lower network latency for those users."
    },
    {
      id: 11,
      text: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
      options: [
        { id: "A", text: "IAM roles." },
        { id: "B", text: "IAM users." },
        { id: "C", text: "IAM user groups." },
        { id: "D", text: "AWS Organizations." }
      ],
      correctAnswer: "C",
      explanation: "IAM user groups are collections of IAM users, making it easier to manage permissions for multiple users."
    },
    {
      id: 12,
      text: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
      options: [
        { id: "A", text: "AWS OpsWorks." },
        { id: "B", text: "AWS Database Migration Service." },
        { id: "C", text: "AWS Server Migration Service." },
        { id: "D", text: "AWS Application Discovery Service." }
      ],
      correctAnswer: "B",
      explanation: "AWS Database Migration Service (DMS) helps migrate databases to AWS with minimal downtime and maintains continuous replication during migration."
    },
    {
      id: 13,
      text: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
      options: [
        { id: "A", text: "Build security in every layer." },
        { id: "B", text: "Parallelize tasks." },
        { id: "C", text: "Implement elasticity." },
        { id: "D", text: "Adopt monolithic architecture." }
      ],
      correctAnswer: "C",
      explanation: "Elasticity refers to the ability to automatically scale resources based on demand, which helps optimize costs."
    },
    {
      id: 14,
      text: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
      options: [
        { id: "A", text: "Increasing speed and agility." },
        { id: "B", text: "There is no need to worry about security." },
        { id: "C", text: "Gaining complete control over the physical infrastructure." },
        { id: "D", text: "Operating applications on behalf of customers." },
        { id: "E", text: "All of the physical security and most of the data/network security are taken care of for you." }
      ],
      correctAnswer: "A,E",
      explanation: "AWS provides increased speed and agility (A) and handles physical security and much of the data/network security (E)."
    },
    {
      id: 15,
      text: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
      options: [
        { id: "A", text: "Allows treating an application as a single, cohesive unit." },
        { id: "B", text: "Reduces inter-dependencies so that failures do not impact other components of the application." },
        { id: "C", text: "Allows updates of any monolithic application quickly and easily." },
        { id: "D", text: "Allows tracking of any API call made to any AWS service." }
      ],
      correctAnswer: "B",
      explanation: "Decoupling reduces dependencies between components, preventing failures from cascading through the entire application."
    },
    {
      id: 16,
      text: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
      options: [
        { id: "A", text: "AWS Budgets." },
        { id: "B", text: "AWS Pricing Calculator." },
        { id: "C", text: "AWS Systems Manager." },
        { id: "D", text: "AWS Cost & Usage Reports." }
      ],
      correctAnswer: "D",
      explanation: "AWS Cost & Usage Reports provide detailed information about your AWS spending and usage, including Amazon EC2 billing activity."
    },
    {
      id: 17,
      text: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
      options: [
        { id: "A", text: "AWS services' costs will be reduced to half the original price." },
        { id: "B", text: "The consolidated billing feature is just for organizational purpose." },
        { id: "C", text: "Each AWS account gets volume discounts." },
        { id: "D", text: "Each AWS account gets five times the free-tier services capacity." }
      ],
      correctAnswer: "C",
      explanation: "With consolidated billing, the combined usage across all accounts qualifies for volume discounts, potentially reducing costs."
    },
    {
      id: 18,
      text: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
      options: [
        { id: "A", text: "Regularly update firmware on EBS devices." },
        { id: "B", text: "Create EBS snapshots." },
        { id: "C", text: "Ensure that EBS data is encrypted at rest." },
        { id: "D", text: "Store a backup daily in an external drive." },
        { id: "E", text: "Prevent any unauthorized access to AWS data centers." }
      ],
      correctAnswer: "B,C",
      explanation: "Creating EBS snapshots (B) and encrypting data at rest (C) are recommended practices for keeping EBS data safe."
    },
    {
      id: 19,
      text: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
      options: [
        { id: "A", text: "By automatically scaling your on-premises resources based on changes in demand." },
        { id: "B", text: "By automatically scaling your AWS resources using an Elastic Load Balancer." },
        { id: "C", text: "By reducing interdependencies between application components wherever possible." },
        { id: "D", text: "By automatically provisioning the required AWS resources based on changes in demand." }
      ],
      correctAnswer: "D",
      explanation: "Elasticity improves architecture by automatically provisioning or deprovisioning resources in response to demand, optimizing costs and performance."
    },
    {
      id: 20,
      text: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
      options: [
        { id: "A", text: "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded." },
        { id: "B", text: "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis." },
        { id: "C", text: "Configure the AWS Budgets Service to alert the company when the threshold is exceeded." },
        { id: "D", text: "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded." },
        { id: "E", text: "Configure the Amazon Connect Service to alert the company when the threshold is exceeded." }
      ],
      correctAnswer: "A,C",
      explanation: "CloudWatch billing alarms (A) and AWS Budgets (C) can be configured to send notifications when billing thresholds are exceeded."
    },
    {
      id: 21,
      text: "What does Amazon CloudFront use to distribute content to global users with low latency?",
      options: [
        { id: "A", text: "AWS Global Accelerator." },
        { id: "B", text: "AWS Regions." },
        { id: "C", text: "AWS Edge Locations." },
        { id: "D", text: "AWS Availability Zones." }
      ],
      correctAnswer: "C",
      explanation: "CloudFront uses Edge Locations to cache content closer to end users, reducing latency for content delivery."
    },
    {
      id: 22,
      text: "What does the 'Principle of Least Privilege' refer to?",
      options: [
        { id: "A", text: "You should grant your users only the permissions they need when they need them and nothing more." },
        { id: "B", text: "All IAM users should have at least the necessary permissions to access the core AWS services." },
        { id: "C", text: "All trusted IAM users should have access to any AWS service in the respective AWS account." },
        { id: "D", text: "IAM users should not be granted any permissions; to keep your account safe." }
      ],
      correctAnswer: "A",
      explanation: "The Principle of Least Privilege means granting only the minimum permissions necessary to perform required tasks."
    },
    {
      id: 23,
      text: "Which of the following does NOT belong to the AWS Cloud Computing models?",
      options: [
        { id: "A", text: "Platform as a Service (PaaS)." },
        { id: "B", text: "Infrastructure as a Service (IaaS)." },
        { id: "C", text: "Software as a Service (SaaS)." },
        { id: "D", text: "Networking as a Service (NaaS)." }
      ],
      correctAnswer: "D",
      explanation: "Networking as a Service (NaaS) is not one of the standard AWS cloud computing models. The main models are IaaS, PaaS, and SaaS."
    },
    {
      id: 24,
      text: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
      options: [
        { id: "A", text: "S3 Intelligent-Tiering." },
        { id: "B", text: "AWS Marketplace." },
        { id: "C", text: "Amazon S3 Glacier Deep Archive." },
        { id: "D", text: "Amazon EBS." }
      ],
      correctAnswer: "C",
      explanation: "S3 Glacier Deep Archive is the most cost-effective option for long-term archival storage of data that is rarely accessed."
    },
    {
      id: 25,
      text: "Which service provides DNS in the AWS cloud?",
      options: [
        { id: "A", text: "Route 53." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon CloudFront." },
        { id: "D", text: "Amazon EMR." }
      ],
      correctAnswer: "A",
      explanation: "Amazon Route 53 is AWS's Domain Name System (DNS) web service."
    },
    {
      id: 26,
      text: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
      options: [
        { id: "A", text: "AWS Shield." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon Cognito." },
        { id: "D", text: "AWS WAF." },
        { id: "E", text: "AWS KMS." }
      ],
      correctAnswer: "A,D",
      explanation: "AWS Shield (A) provides DDoS protection and AWS WAF (D) helps protect web applications from common web exploits."
    },
    {
      id: 27,
      text: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
      options: [
        { id: "A", text: "AWS OpsWorks." },
        { id: "B", text: "AWS Storage Gateway." },
        { id: "C", text: "Amazon EBS volume." },
        { id: "D", text: "Amazon ElastiCache." }
      ],
      correctAnswer: "D",
      explanation: "Amazon ElastiCache provides in-memory caching for frequently accessed data, significantly improving response times."
    },
    {
      id: 28,
      text: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
      options: [
        { id: "A", text: "Reserved instances." },
        { id: "B", text: "Spot instances." },
        { id: "C", text: "Dedicated instances." },
        { id: "D", text: "On-demand instances." }
      ],
      correctAnswer: "D",
      explanation: "On-demand instances are ideal for short-term, unpredictable workloads that cannot be interrupted."
    },
    {
      id: 29,
      text: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
      options: [
        { id: "A", text: "Reserved Instances." },
        { id: "B", text: "On-demand Instances." },
        { id: "C", text: "Dedicated Instances." },
        { id: "D", text: "Spot Instances." }
      ],
      correctAnswer: "D",
      explanation: "Spot Instances offer the lowest cost for flexible, non-critical workloads that can handle interruptions."
    },
    {
      id: 30,
      text: "Which of the following can be described as a global content delivery network (CDN) service?",
      options: [
        { id: "A", text: "AWS VPN." },
        { id: "B", text: "AWS Direct Connect." },
        { id: "C", text: "AWS Regions." },
        { id: "D", text: "Amazon CloudFront." }
      ],
      correctAnswer: "D",
      explanation: "Amazon CloudFront is AWS's global content delivery network (CDN) service."
    },
    {
      id: 31,
      text: "Which of the following services allows customers to manage their agreements with AWS?",
      options: [
        { id: "A", text: "AWS Artifact." },
        { id: "B", text: "AWS Certificate Manager." },
        { id: "C", text: "AWS Systems Manager." },
        { id: "D", text: "AWS Organizations." }
      ],
      correctAnswer: "A",
      explanation: "AWS Artifact provides on-demand access to AWS security and compliance documents and agreements."
    },
    {
      id: 32,
      text: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon VPC." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon Elastic MapReduce." },
        { id: "D", text: "AWS IAM." },
        { id: "E", text: "Amazon Elastic Compute Cloud." }
      ],
      correctAnswer: "B,C",
      explanation: "DynamoDB (B) and Elastic MapReduce (C) are managed services where AWS handles the underlying infrastructure."
    },
    {
      id: 33,
      text: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
      options: [
        { id: "A", text: "Amazon Aurora." },
        { id: "B", text: "Amazon DynamoDB." },
        { id: "C", text: "Amazon Elastic Block Store." },
        { id: "D", text: "Amazon Redshift." }
      ],
      correctAnswer: "B",
      explanation: "Amazon DynamoDB is AWS's NoSQL database service."
    },
    {
      id: 34,
      text: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
      options: [
        { id: "A", text: "AWS Identity and Access Management (IAM) user." },
        { id: "B", text: "Infrastructure Event Management (IEM) engineer." },
        { id: "C", text: "AWS Consulting Partners." },
        { id: "D", text: "Technical Account Manager (TAM)." }
      ],
      correctAnswer: "D",
      explanation: "A Technical Account Manager (TAM) is the primary point of contact for Enterprise Support customers."
    },
    {
      id: 35,
      text: "How can you view the distribution of AWS spending in one of your AWS accounts?",
      options: [
        { id: "A", text: "By using Amazon VPC console." },
        { id: "B", text: "By contacting the AWS Support team." },
        { id: "C", text: "By using AWS Cost Explorer." },
        { id: "D", text: "By contacting the AWS Finance team." }
      ],
      correctAnswer: "C",
      explanation: "AWS Cost Explorer provides visualizations and analysis of your AWS costs and usage over time."
    },
    {
      id: 36,
      text: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
      options: [
        { id: "A", text: "Access keys." },
        { id: "B", text: "Secret token." },
        { id: "C", text: "UserID." },
        { id: "D", text: "User name and password." }
      ],
      correctAnswer: "A",
      explanation: "Access keys (consisting of an access key ID and secret access key) are required for programmatic access to AWS via the CLI."
    },
    {
      id: 37,
      text: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
      options: [
        { id: "A", text: "Contact the AWS Customer Service team." },
        { id: "B", text: "Contact the AWS Abuse team." },
        { id: "C", text: "Contact the AWS Concierge team." },
        { id: "D", text: "Contact the AWS Security team." }
      ],
      correctAnswer: "B",
      explanation: "The AWS Abuse team handles reports of malicious use of AWS resources, available to all AWS customers regardless of support plan."
    },
    {
      id: 38,
      text: "Select TWO examples of the AWS shared controls.",
      options: [
        { id: "A", text: "Patch Management." },
        { id: "B", text: "IAM Management." },
        { id: "C", text: "VPC Management." },
        { id: "D", text: "Configuration Management." },
        { id: "E", text: "Data Center operations." }
      ],
      correctAnswer: "A,D",
      explanation: "Patch Management (A) and Configuration Management (D) are shared controls, with both AWS and the customer having responsibilities."
    },
    {
      id: 39,
      text: "In order to implement best practices when dealing with a 'Single Point of Failure,' you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
      options: [
        { id: "A", text: "ELB." },
        { id: "B", text: "Auto Scaling." },
        { id: "C", text: "Amazon Athen." },
        { id: "D", text: "ECR." },
        { id: "E", text: "Amazon EC2." }
      ],
      correctAnswer: "A,B",
      explanation: "Elastic Load Balancing (A) distributes traffic across multiple instances, while Auto Scaling (B) automatically adjusts capacity."
    },
    {
      id: 40,
      text: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
      options: [
        { id: "A", text: "Amazon SNS." },
        { id: "B", text: "Amazon Kinesis Video Streams." },
        { id: "C", text: "AWS CloudFormation." },
        { id: "D", text: "Amazon CloudFront." }
      ],
      correctAnswer: "D",
      explanation: "Amazon CloudFront is a content delivery network that delivers content globally with low latency and high transfer speeds."
    },
    {
      id: 41,
      text: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
      options: [
        { id: "A", text: "A MySQL database installed on an EC2 instance." },
        { id: "B", text: "Amazon Aurora." },
        { id: "C", text: "Amazon DynamoDB." },
        { id: "D", text: "Amazon Neptune." }
      ],
      correctAnswer: "B",
      explanation: "Amazon Aurora is a MySQL-compatible database service that includes automated backups as a feature."
    },
    {
      id: 42,
      text: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
      options: [
        { id: "A", text: "AWS CloudFormation." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon SES." },
        { id: "D", text: "Amazon EMR." }
      ],
      correctAnswer: "A",
      explanation: "AWS CloudFormation allows you to define infrastructure as code, creating and managing AWS resources with templates."
    },
    {
      id: 43,
      text: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
      options: [
        { id: "A", text: "Client-side encryption." },
        { id: "B", text: "Configuring infrastructure devices." },
        { id: "C", text: "Server-side encryption." },
        { id: "D", text: "Filtering traffic with Security Groups." }
      ],
      correctAnswer: "B",
      explanation: "AWS is responsible for configuring the infrastructure devices that support AWS services."
    },
    {
      id: 44,
      text: "What does the AWS Health Dashboard provide? (Choose TWO)",
      options: [
        { id: "A", text: "Detailed troubleshooting guidance to address AWS events impacting your resources." },
        { id: "B", text: "Health checks for Auto Scaling instances." },
        { id: "C", text: "Recommendations for Cost Optimization." },
        { id: "D", text: "A dashboard detailing vulnerabilities in your applications." },
        { id: "E", text: "Personalized view of AWS service health." }
      ],
      correctAnswer: "A,E",
      explanation: "AWS Health Dashboard provides troubleshooting guidance (A) and a personalized view of AWS service health (E)."
    },
    {
      id: 45,
      text: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
      options: [
        { id: "A", text: "AWS Lambda." },
        { id: "B", text: "AWS Config." },
        { id: "C", text: "Amazon CloudWatch." },
        { id: "D", text: "AWS CloudTrail." }
      ],
      correctAnswer: "C",
      explanation: "Amazon CloudWatch monitors AWS resources and applications, providing insights into performance, health, and metrics."
    },
    {
      id: 46,
      text: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
      options: [
        { id: "A", text: "AWS Shield." },
        { id: "B", text: "AWS Management Console." },
        { id: "C", text: "AWS Secrets Manager." },
        { id: "D", text: "AWS Trusted Advisor." }
      ],
      correctAnswer: "D",
      explanation: "AWS Trusted Advisor provides recommendations to help optimize your AWS infrastructure, including security optimizations."
    },
    {
      id: 47,
      text: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
      options: [
        { id: "A", text: "Amazon S3 provides unlimited storage for any type of data." },
        { id: "B", text: "Amazon S3 can run any type of application or backend system." },
        { id: "C", text: "Amazon S3 stores any number of objects, but with object size limits." },
        { id: "D", text: "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere." },
        { id: "E", text: "Amazon S3 provides 99.999999999% (11 9's) of data durability." }
      ],
      correctAnswer: "B,D",
      explanation: "S3 cannot run applications (B) and scaling is automatic, not manual (D)."
    },
    {
      id: 48,
      text: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
      options: [
        { id: "A", text: "Disk disposal." },
        { id: "B", text: "Controlling physical access to compute resources." },
        { id: "C", text: "Patching the Network infrastructure." },
        { id: "D", text: "Filtering traffic with Security Groups." }
      ],
      correctAnswer: "B,D",
      explanation: "The customer is responsible for controlling physical access to compute resources (B) and filtering traffic with Security Groups (D)."
    },
    {
      id: 49,
      text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
      options: [
        { id: "A", text: "Amazon Rekognition" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "Amazon GuardDuty" },
        { id: "D", text: "Amazon CloudWatch" }
      ],
      correctAnswer: "C",
      explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads."
    },
    {
      id: 50,
      text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
      options: [
        { id: "A", text: "AWS Marketplace" },
        { id: "B", text: "AWS Partner Network (APN)" },
        { id: "C", text: "AWS Managed Services" },
        { id: "D", text: "AWS Service Catalog" }
      ],
      correctAnswer: "A",
      explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    }
  ]
};

export const awsCloudPractitionerQuiz2: Quiz = {
  id: "aws-ccp-2",
  title: "AWS Certified Cloud Practitioner - Practice Exam 2",
  description: "Practice Exam 2 - Test your knowledge of AWS Cloud concepts, services, and the AWS global infrastructure.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
      options: [
        { id: "A", text: "Amazon Rekognition" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "Amazon GuardDuty" },
        { id: "D", text: "Amazon CloudWatch" }
      ],
      correctAnswer: "C",
      explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads."
    },
    {
      id: 2,
      text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
      options: [
        { id: "A", text: "AWS Marketplace" },
        { id: "B", text: "AWS Partner Network (APN)" },
        { id: "C", text: "AWS Managed Services" },
        { id: "D", text: "AWS Service Catalog" }
      ],
      correctAnswer: "A",
      explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
      id: 3,
      text: "Which AWS service is a managed NoSQL database?",
      options: [
        { id: "A", text: "Amazon Redshift" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon Aurora" },
        { id: "D", text: "Amazon RDS for MariaDB" }
      ],
      correctAnswer: "B",
      explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable NoSQL database."
    },
    {
      id: 4,
      text: "Which AWS service should be used to create a billing alarm?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS CloudTrail" },
        { id: "C", text: "Amazon CloudWatch" },
        { id: "D", text: "Amazon QuickSight" }
      ],
      correctAnswer: "C",
      explanation: "Amazon CloudWatch can be used to create billing alarms that watch for estimated charges and send a notification when a specified threshold is exceeded."
    },
    {
      id: 5,
      text: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
      options: [
        { id: "A", text: "Scaling the web application and services developed with Docker" },
        { id: "B", text: "Provisioning or scheduling containers to run on clusters and maintain their availability" },
        { id: "C", text: "Performing hardware maintenance in the AWS facilities that run the AWS Cloud" },
        { id: "D", text: "Managing the guest operating system, including updates and security patches" }
      ],
      correctAnswer: "C",
      explanation: "Under the AWS shared responsibility model, AWS is responsible for the infrastructure that runs all of the services offered in the AWS Cloud, which includes hardware maintenance in AWS facilities."
    },
    {
      id: 6,
      text: "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
      options: [
        { id: "A", text: "Amazon CloudFront" },
        { id: "B", text: "AWS Direct Connect" },
        { id: "C", text: "Amazon EC2 Auto Scaling" },
        { id: "D", text: "AWS Transit Gateway" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudFront is a content delivery network service that speeds up distribution of your static and dynamic web content to end users by caching content at edge locations worldwide, resulting in reduced latency."
    },
    {
      id: 7,
      text: "Which actions represent best practices for using AWS IAM? (Choose two.)",
      options: [
        { id: "A", text: "Configure a strong password policy" },
        { id: "B", text: "Share the security credentials among users of AWS accounts who are in the same Region" },
        { id: "C", text: "Use access keys to log in to the AWS Management Console" },
        { id: "D", text: "Rotate access keys on a regular basis" },
        { id: "E", text: "Avoid using IAM roles to delegate permissions" }
      ],
      correctAnswer: "A,D",
      explanation: "Configuring a strong password policy (A) and rotating access keys regularly (D) are best practices for AWS IAM security."
    },
    {
      id: 8,
      text: "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
      options: [
        { id: "A", text: "AWS Config" },
        { id: "B", text: "VPC Flow Logs" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "AWS CloudTrail" }
      ],
      correctAnswer: "B",
      explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
    },
    {
      id: 9,
      text: "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
      options: [
        { id: "A", text: "Amazon Inspector" },
        { id: "B", text: "Amazon CloudWatch" },
        { id: "C", text: "AWS Global Accelerator" },
        { id: "D", text: "Amazon CloudFront" }
      ],
      correctAnswer: "C",
      explanation: "AWS Global Accelerator continuously monitors the health of your application endpoints and redirects traffic to healthy endpoints in less than 30 seconds."
    },
    {
      id: 10,
      text: "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
      options: [
        { id: "A", text: "Use AWS Config to generate an inventory of AWS resources" },
        { id: "B", text: "Use service limits to prevent users from creating or making changes to AWS resources" },
        { id: "C", text: "Use AWS CloudTrail to record AWS API calls into an auditable log file" },
        { id: "D", text: "Use AWS Certificate Manager to whitelist approved AWS resources and services" },
        { id: "E", text: "Use Amazon GuardDuty to validate configuration changes made to AWS resources" }
      ],
      correctAnswer: "A,C",
      explanation: "Using AWS Config to track resources (A) and AWS CloudTrail to record API calls (C) are key change management practices for reliability in the AWS Cloud."
    },
    {
      id: 11,
      text: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "AWS IAM" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch can be configured to monitor and send alerts for AWS account root user sign-in events."
    },
    {
      id: 12,
      text: "Which design principle should be considered when architecting in the AWS Cloud?",
      options: [
        { id: "A", text: "Think of servers as non-disposable resources" },
        { id: "B", text: "Use synchronous integration of services" },
        { id: "C", text: "Design loosely coupled components" },
        { id: "D", text: "Implement the least permissive rules for security groups" }
      ],
      correctAnswer: "C",
      explanation: "Designing loosely coupled components reduces interdependencies, making systems more resilient and easier to scale."
    },
    {
      id: 13,
      text: "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS Snowball" },
        { id: "B", text: "AWS Lambda" },
        { id: "C", text: "AWS ElastiCache" },
        { id: "D", text: "AWS Database Migration Service (AWS DMS)" },
        { id: "E", text: "Amazon API Gateway" }
      ],
      correctAnswer: "A,D",
      explanation: "AWS Snowball (A) is used for large-scale data transfers, while AWS DMS (D) helps migrate databases to AWS Cloud."
    },
    {
      id: 14,
      text: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
      options: [
        { id: "A", text: "Run the application on a bigger EC2 instance size." },
        { id: "B", text: "Switch to an EC2 instance family that better matches batch requirements." },
        { id: "C", text: "Distribute the application across multiple EC2 instances and run the workload in parallel." },
        { id: "D", text: "Run the application on a bare metal EC2 instance." }
      ],
      correctAnswer: "C",
      explanation: "Distributing the workload across multiple instances for parallel processing is the most effective way to handle consistently growing demand."
    },
    {
      id: 15,
      text: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
      options: [
        { id: "A", text: "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access." },
        { id: "B", text: "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join." },
        { id: "C", text: "Configure AWS Organizations in each of the existing accounts. Then link all accounts together." },
        { id: "D", text: "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts." }
      ],
      correctAnswer: "B",
      explanation: "AWS Organizations allows you to consolidate multiple AWS accounts into an organization that you can centrally manage."
    },
    {
      id: 16,
      text: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
      options: [
        { id: "A", text: "Economy of scale" },
        { id: "B", text: "Elasticity" },
        { id: "C", text: "High availability" },
        { id: "D", text: "Agility" }
      ],
      correctAnswer: "B",
      explanation: "Elasticity refers to the ability to scale resources up or down easily as demand changes."
    },
    {
      id: 17,
      text: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
      options: [
        { id: "A", text: "AWS CloudTrail" },
        { id: "B", text: "Amazon EC2 Auto Scaling" },
        { id: "C", text: "Amazon Forecast" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand."
    },
    {
      id: 18,
      text: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
      options: [
        { id: "A", text: "Amazon VPC peering" },
        { id: "B", text: "AWS Direct Connect" },
        { id: "C", text: "AWS VPN" },
        { id: "D", text: "Amazon Pinpoint" }
      ],
      correctAnswer: "C",
      explanation: "AWS VPN lets you establish a secure and private encrypted connection between your network and AWS over the public internet."
    },
    {
      id: 19,
      text: "Which tool is used to forecast AWS spending?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS Organizations" },
        { id: "C", text: "Cost Explorer" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "C",
      explanation: "Cost Explorer helps you visualize, understand, and manage your AWS costs and usage over time and provides forecasting capabilities."
    },
    {
      id: 20,
      text: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
      options: [
        { id: "A", text: "Amazon ElastiCache" },
        { id: "B", text: "Amazon CloudFront" },
        { id: "C", text: "Amazon Elastic File System (Amazon EFS)" },
        { id: "D", text: "Amazon Elastic Block Store (Amazon EBS)" }
      ],
      correctAnswer: "B",
      explanation: "Amazon CloudFront is a content delivery network that caches content at edge locations around the world to reduce latency for users."
    },
    {
      id: 21,
      text: "Which of the following is a component of the AWS Global Infrastructure?",
      options: [
        { id: "A", text: "Amazon Alexa" },
        { id: "B", text: "AWS Regions" },
        { id: "C", text: "Amazon Lightsail" },
        { id: "D", text: "AWS Organizations" }
      ],
      correctAnswer: "B",
      explanation: "AWS Regions are key components of the AWS Global Infrastructure, consisting of multiple Availability Zones."
    },
    {
      id: 22,
      text: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS CloudTrail" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch monitors resources and applications, providing metrics such as CPU utilization for EC2 instances."
    },
    {
      id: 23,
      text: "Why is it beneficial to use Elastic Load Balancers with applications?",
      options: [
        { id: "A", text: "They allow for the conversion from Application Load Balancers to Classic Load Balancers." },
        { id: "B", text: "They are capable of handling constant changes in network traffic patterns." },
        { id: "C", text: "They automatically adjust capacity." },
        { id: "D", text: "They are provided at no charge to users." }
      ],
      correctAnswer: "B",
      explanation: "Elastic Load Balancers distribute incoming application traffic across multiple targets to handle varying traffic patterns."
    },
    {
      id: 24,
      text: "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
      options: [
        { id: "A", text: "Infrastructure facilities access management" },
        { id: "B", text: "Cloud infrastructure hardware lifecycle management" },
        { id: "C", text: "Configuration management of user's applications" },
        { id: "D", text: "Networking infrastructure protection" },
        { id: "E", text: "Security groups configuration" }
      ],
      correctAnswer: "C,E",
      explanation: "Customers are responsible for security 'in' the cloud, including application configuration (C) and security group settings (E)."
    },
    {
      id: 25,
      text: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
      options: [
        { id: "A", text: "Scalability" },
        { id: "B", text: "Loose coupling" },
        { id: "C", text: "Automation" },
        { id: "D", text: "Automatic scaling" }
      ],
      correctAnswer: "B",
      explanation: "Loose coupling reduces interdependencies between components, enhancing resilience to failures."
    },
    {
      id: 26,
      text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS WAF" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "AWS Direct Connect" },
        { id: "D", text: "AWS Organizations" },
        { id: "E", text: "Network ACLs" }
      ],
      correctAnswer: "A,E",
      explanation: "AWS WAF (A) lets you monitor web requests and block specific IP ranges, while Network ACLs (E) act as firewalls at the subnet level."
    },
    {
      id: 27,
      text: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
      options: [
        { id: "A", text: "Amazon EBS" },
        { id: "B", text: "Amazon EFS" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "AWS Artifact" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EFS provides scalable file storage that can be accessed concurrently by multiple EC2 instances."
    },
    {
      id: 28,
      text: "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
      options: [
        { id: "A", text: "Running a virus scan on EC2 instances" },
        { id: "B", text: "Protecting against IP spoofing and packet sniffing" },
        { id: "C", text: "Installing the latest security patches on the RDS instance" },
        { id: "D", text: "Encrypting communication between the EC2 instances and the Elastic Load Balancer" },
        { id: "E", text: "Configuring a security group and a network access control list (NACL) for EC2" }
      ],
      correctAnswer: "B,C",
      explanation: "AWS handles network security (B) and patching for managed services like RDS (C)."
    },
    {
      id: 29,
      text: "What is the benefit of elasticity in the AWS Cloud?",
      options: [
        { id: "A", text: "Ensure web traffic is automatically spread across multiple AWS Regions." },
        { id: "B", text: "Minimize storage costs by automatically archiving log data." },
        { id: "C", text: "Enable AWS to automatically select the most cost-effective services." },
        { id: "D", text: "Automatically adjust the required compute capacity to maintain consistent performance." }
      ],
      correctAnswer: "D",
      explanation: "Elasticity allows automatic adjustment of resources to maintain performance as demand changes."
    },
    {
      id: 30,
      text: "The continual reduction of AWS Cloud pricing is due to:",
      options: [
        { id: "A", text: "pay-as-you go pricing" },
        { id: "B", text: "the AWS global infrastructure" },
        { id: "C", text: "economies of scale" },
        { id: "D", text: "reserved storage pricing" }
      ],
      correctAnswer: "C",
      explanation: "AWS passes on savings from economies of scale to customers through lower prices as their customer base grows."
    },
    {
      id: 31,
      text: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
      options: [
        { id: "A", text: "Enable S3 Block Public Access from the AWS Management Console." },
        { id: "B", text: "Hold a team meeting to discuss the importance if only uploading private S3 objects." },
        { id: "C", text: "Require all S3 objects to be manually approved before uploading." },
        { id: "D", text: "Create a service to monitor all S3 uploads and remove any public uploads." }
      ],
      correctAnswer: "A",
      explanation: "S3 Block Public Access prevents public access to objects regardless of bucket policies or object permissions."
    },
    {
      id: 32,
      text: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
      options: [
        { id: "A", text: "Open a detailed case related to billing and submit it to AWS Support for help." },
        { id: "B", text: "Upload data describing the issue to a new object in a private Amazon S3 bucket." },
        { id: "C", text: "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information." },
        { id: "D", text: "Proceed with creating a new dashboard in Amazon QuickSight." }
      ],
      correctAnswer: "A",
      explanation: "AWS Support can help resolve billing issues when contacted through the support portal."
    },
    {
      id: 33,
      text: "What does the AWS Simple Monthly Calculator do?",
      options: [
        { id: "A", text: "Compares on-premises costs to colocation environments" },
        { id: "B", text: "Estimates monthly billing based on projected usage" },
        { id: "C", text: "Estimates power consumption at existing data centers" },
        { id: "D", text: "Estimates CPU utilization" }
      ],
      correctAnswer: "B",
      explanation: "The AWS Simple Monthly Calculator helps estimate monthly AWS costs based on projected service usage."
    },
    {
      id: 34,
      text: "Who is responsible for patching the guest operating system for Amazon RDS?",
      options: [
        { id: "A", text: "The AWS Product team" },
        { id: "B", text: "The customer Database Administrator" },
        { id: "C", text: "Managed partners" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "A",
      explanation: "For Amazon RDS, AWS handles operating system patching as part of the managed database service."
    },
    {
      id: 35,
      text: "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
      options: [
        { id: "A", text: "Amazon EC2" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "Amazon Route 53" },
        { id: "E", text: "Amazon Redshift" }
      ],
      correctAnswer: "A,B",
      explanation: "AWS Auto Scaling can adjust capacity for EC2 instances (A) and DynamoDB tables (B) based on demand."
    },
    {
      id: 36,
      text: "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
      options: [
        { id: "A", text: "Reduced cost to run services on AWS" },
        { id: "B", text: "Improved availability of applications deployed on AWS" },
        { id: "C", text: "Higher durability of data stored on AWS" },
        { id: "D", text: "Decreased latency to reach applications deployed on AWS" },
        { id: "E", text: "Higher security of data stored on AWS" }
      ],
      correctAnswer: "B,D",
      explanation: "AWS Global Accelerator improves application availability (B) and reduces latency (D) by routing traffic through the AWS global network."
    },
    {
      id: 37,
      text: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
      options: [
        { id: "A", text: "the AWS Support forum" },
        { id: "B", text: "AWS Abuse" },
        { id: "C", text: "an AWS Solutions Architect" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "D",
      explanation: "AWS Support handles account and billing inquiries, including account reactivation."
    },
    {
      id: 38,
      text: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
      options: [
        { id: "A", text: "Provision capacity based on past usage and theoretical peaks" },
        { id: "B", text: "Dynamically and predictively scale to meet usage demands" },
        { id: "C", text: "Build the application and infrastructure in a data center that grants physical access" },
        { id: "D", text: "Break apart the application into loosely coupled components" }
      ],
      correctAnswer: "B",
      explanation: "Dynamically scaling resources based on demand leverages the cloud's elasticity to optimize performance and cost."
    },
    {
      id: 39,
      text: "Which method helps to optimize costs of users moving to the AWS Cloud?",
      options: [
        { id: "A", text: "Paying only for what is used" },
        { id: "B", text: "Purchasing hardware before it is needed" },
        { id: "C", text: "Manually provisioning cloud resources" },
        { id: "D", text: "Purchasing for the maximum possible load" }
      ],
      correctAnswer: "A",
      explanation: "The pay-as-you-go model allows customers to pay only for the resources they actually use, optimizing costs."
    },
    {
      id: 40,
      text: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
      options: [
        { id: "A", text: "Installing security patches for the Xen and KVM hypervisors" },
        { id: "B", text: "Installing operating system patches for Amazon DynamoDB" },
        { id: "C", text: "Installing operating system security patches for Amazon EC2 database instances" },
        { id: "D", text: "Installing operating system security patches for Amazon RDS database instances" }
      ],
      correctAnswer: "C",
      explanation: "Customers are responsible for patching the operating systems on EC2 instances, while AWS handles patching for managed services like RDS and DynamoDB."
    },
    {
      id: 41,
      text: "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
      options: [
        { id: "A", text: "Terminate all AWS resources automatically if budget thresholds are exceeded." },
        { id: "B", text: "Break down AWS costs by day, service, and linked AWS account." },
        { id: "C", text: "Create budgets and receive notifications if current of forecasted usage exceeds the budgets." },
        { id: "D", text: "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective." },
        { id: "E", text: "Move data stored in Amazon S3 to a more cost-effective storage class." }
      ],
      correctAnswer: "B,C",
      explanation: "AWS Cost Management tools let you analyze costs by various dimensions (B) and set up budgets with notifications (C)."
    },
    {
      id: 42,
      text: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
      options: [
        { id: "A", text: "AWS Support" },
        { id: "B", text: "the customer" },
        { id: "C", text: "AWS Systems Manager" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Customers are responsible for security 'in' the cloud, including guest operating system patching."
    },
    {
      id: 43,
      text: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
      options: [
        { id: "A", text: "AWS Direct Connect" },
        { id: "B", text: "Amazon Connect" },
        { id: "C", text: "AWS Identity and Access Management (IAM)" },
        { id: "D", text: "AWS Firewall Manager" }
      ],
      correctAnswer: "C",
      explanation: "AWS IAM enables you to securely control access to AWS services and resources at no additional charge."
    },
    {
      id: 44,
      text: "Which AWS service provides on-demand of AWS security and compliance documentation?",
      options: [
        { id: "A", text: "AWS Directory Service" },
        { id: "B", text: "AWS Artifact" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "B",
      explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements."
    },
    {
      id: 45,
      text: "Which AWS service can be used to turn text into life-like speech?",
      options: [
        { id: "A", text: "Amazon Polly" },
        { id: "B", text: "Amazon Transcribe" },
        { id: "C", text: "Amazon Rekognition" },
        { id: "D", text: "Amazon Lex" }
      ],
      correctAnswer: "A",
      explanation: "Amazon Polly is a service that turns text into lifelike speech, allowing applications to talk naturally."
    },
    {
      id: 46,
      text: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
      options: [
        { id: "A", text: "Design using a serverless architecture" },
        { id: "B", text: "Assume that all components within an application can fail" },
        { id: "C", text: "Design AWS Auto Scaling into every application" },
        { id: "D", text: "Design all components using open-source code" }
      ],
      correctAnswer: "B",
      explanation: "Designing for failure by assuming all components can fail is a core principle of high availability in the cloud."
    },
    {
      id: 47,
      text: "A user needs to generate a report that outlines the status of key security checks in an AWS account including Amazon S3 bucket permissions, MFA status for the root user, and security group configurations. Where can all this information be found in one location?",
      options: [
        { id: "A", text: "Amazon QuickSight dashboard" },
        { id: "B", text: "AWS CloudTrail trails" },
        { id: "C", text: "AWS Trusted Advisor report" },
        { id: "D", text: "IAM credential report" }
      ],
      correctAnswer: "C",
      explanation: "AWS Trusted Advisor provides recommendations across multiple categories including security status checks."
    },
    {
      id: 48,
      text: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
      options: [
        { id: "A", text: "Dedicated Hosts" },
        { id: "B", text: "On-Demand Instances" },
        { id: "C", text: "Spot Instances" },
        { id: "D", text: "Reserved Instances" }
      ],
      correctAnswer: "A",
      explanation: "EC2 Dedicated Hosts provide visibility of the underlying physical cores for software licensing purposes."
    },
    {
      id: 49,
      text: "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
      options: [
        { id: "A", text: "AWS Regions" },
        { id: "B", text: "Availability Zones" },
        { id: "C", text: "Edge locations" },
        { id: "D", text: "Data centers" }
      ],
      correctAnswer: "C",
      explanation: "Edge locations are used by services like CloudFront to cache content closer to end users for faster delivery."
    },
    {
      id: 50,
      text: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
      options: [
        { id: "A", text: "Security" },
        { id: "B", text: "Operational excellence" },
        { id: "C", text: "Performance efficiency" },
        { id: "D", text: "Cost optimization" }
      ],
      correctAnswer: "A",
      explanation: "Security is the pillar that focuses on protecting information and systems, including tracking configuration changes."
    }
  ]
};

export const awsCloudPractitionerQuiz3: Quiz = {
  id: "aws-ccp-3",
  title: "AWS Certified Cloud Practitioner - Practice Exam 3",
  description: "Practice Exam 3 - Comprehensive exam covering AWS services, security, and cloud concepts for the Cloud Practitioner certification.",
  timeLimit: 90,
  questions: [
    {
      id: 1,
      text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
      options: [
        { id: "A", text: "Amazon Rekognition" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "Amazon GuardDuty" },
        { id: "D", text: "Amazon CloudWatch" }
      ],
      correctAnswer: "C",
      explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads."
    },
    {
      id: 2,
      text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
      options: [
        { id: "A", text: "AWS Marketplace" },
        { id: "B", text: "AWS Partner Network (APN)" },
        { id: "C", text: "AWS Managed Services" },
        { id: "D", text: "AWS Service Catalog" }
      ],
      correctAnswer: "A",
      explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
      id: 3,
      text: "Which AWS service is a managed NoSQL database?",
      options: [
        { id: "A", text: "Amazon Redshift" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon Aurora" },
        { id: "D", text: "Amazon RDS for MariaDB" }
      ],
      correctAnswer: "B",
      explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable NoSQL database."
    },
    {
      id: 4,
      text: "Which AWS service should be used to create a billing alarm?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS CloudTrail" },
        { id: "C", text: "Amazon CloudWatch" },
        { id: "D", text: "Amazon QuickSight" }
      ],
      correctAnswer: "C",
      explanation: "Amazon CloudWatch can be used to create billing alarms that watch for estimated charges and send a notification when a specified threshold is exceeded."
    },
    {
      id: 5,
      text: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
      options: [
        { id: "A", text: "Scaling the web application and services developed with Docker" },
        { id: "B", text: "Provisioning or scheduling containers to run on clusters and maintain their availability" },
        { id: "C", text: "Performing hardware maintenance in the AWS facilities that run the AWS Cloud" },
        { id: "D", text: "Managing the guest operating system, including updates and security patches" }
      ],
      correctAnswer: "C",
      explanation: "Under the AWS shared responsibility model, AWS is responsible for the infrastructure that runs all of the services offered in the AWS Cloud, which includes hardware maintenance in AWS facilities."
    },
    {
      id: 6,
      text: "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
      options: [
        { id: "A", text: "Amazon CloudFront" },
        { id: "B", text: "AWS Direct Connect" },
        { id: "C", text: "Amazon EC2 Auto Scaling" },
        { id: "D", text: "AWS Transit Gateway" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudFront is a content delivery network service that speeds up distribution of your static and dynamic web content to end users by caching content at edge locations worldwide, resulting in reduced latency."
    },
    {
      id: 7,
      text: "Which actions represent best practices for using AWS IAM? (Choose two.)",
      options: [
        { id: "A", text: "Configure a strong password policy" },
        { id: "B", text: "Share the security credentials among users of AWS accounts who are in the same Region" },
        { id: "C", text: "Use access keys to log in to the AWS Management Console" },
        { id: "D", text: "Rotate access keys on a regular basis" },
        { id: "E", text: "Avoid using IAM roles to delegate permissions" }
      ],
      correctAnswer: "A,D",
      explanation: "Configuring a strong password policy (A) and rotating access keys regularly (D) are best practices for AWS IAM security."
    },
    {
      id: 8,
      text: "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
      options: [
        { id: "A", text: "AWS Config" },
        { id: "B", text: "VPC Flow Logs" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "AWS CloudTrail" }
      ],
      correctAnswer: "B",
      explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
    },
    {
      id: 9,
      text: "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
      options: [
        { id: "A", text: "Amazon Inspector" },
        { id: "B", text: "Amazon CloudWatch" },
        { id: "C", text: "AWS Global Accelerator" },
        { id: "D", text: "Amazon CloudFront" }
      ],
      correctAnswer: "C",
      explanation: "AWS Global Accelerator continuously monitors the health of your application endpoints and redirects traffic to healthy endpoints in less than 30 seconds."
    },
    {
      id: 10,
      text: "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
      options: [
        { id: "A", text: "Use AWS Config to generate an inventory of AWS resources" },
        { id: "B", text: "Use service limits to prevent users from creating or making changes to AWS resources" },
        { id: "C", text: "Use AWS CloudTrail to record AWS API calls into an auditable log file" },
        { id: "D", text: "Use AWS Certificate Manager to whitelist approved AWS resources and services" },
        { id: "E", text: "Use Amazon GuardDuty to validate configuration changes made to AWS resources" }
      ],
      correctAnswer: "A,C",
      explanation: "Using AWS Config to track resources (A) and AWS CloudTrail to record API calls (C) are key change management practices for reliability in the AWS Cloud."
    },
    {
      id: 11,
      text: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "AWS IAM" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch can be configured to monitor and send alerts for AWS account root user sign-in events."
    },
    {
      id: 12,
      text: "Which design principle should be considered when architecting in the AWS Cloud?",
      options: [
        { id: "A", text: "Think of servers as non-disposable resources" },
        { id: "B", text: "Use synchronous integration of services" },
        { id: "C", text: "Design loosely coupled components" },
        { id: "D", text: "Implement the least permissive rules for security groups" }
      ],
      correctAnswer: "C",
      explanation: "Designing loosely coupled components reduces interdependencies, making systems more resilient and easier to scale."
    },
    {
      id: 13,
      text: "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS Snowball" },
        { id: "B", text: "AWS Lambda" },
        { id: "C", text: "AWS ElastiCache" },
        { id: "D", text: "AWS Database Migration Service (AWS DMS)" },
        { id: "E", text: "Amazon API Gateway" }
      ],
      correctAnswer: "A,D",
      explanation: "AWS Snowball (A) is used for large-scale data transfers, while AWS DMS (D) helps migrate databases to AWS Cloud."
    },
    {
      id: 14,
      text: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
      options: [
        { id: "A", text: "Run the application on a bigger EC2 instance size." },
        { id: "B", text: "Switch to an EC2 instance family that better matches batch requirements." },
        { id: "C", text: "Distribute the application across multiple EC2 instances and run the workload in parallel." },
        { id: "D", text: "Run the application on a bare metal EC2 instance." }
      ],
      correctAnswer: "C",
      explanation: "Distributing the workload across multiple instances for parallel processing is the most effective way to handle consistently growing demand."
    },
    {
      id: 15,
      text: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
      options: [
        { id: "A", text: "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access." },
        { id: "B", text: "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join." },
        { id: "C", text: "Configure AWS Organizations in each of the existing accounts. Then link all accounts together." },
        { id: "D", text: "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts." }
      ],
      correctAnswer: "B",
      explanation: "AWS Organizations allows you to consolidate multiple AWS accounts into an organization that you can centrally manage."
    },
    {
      id: 16,
      text: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
      options: [
        { id: "A", text: "Economy of scale" },
        { id: "B", text: "Elasticity" },
        { id: "C", text: "High availability" },
        { id: "D", text: "Agility" }
      ],
      correctAnswer: "B",
      explanation: "Elasticity refers to the ability to scale resources up or down easily as demand changes."
    },
    {
      id: 17,
      text: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
      options: [
        { id: "A", text: "AWS CloudTrail" },
        { id: "B", text: "Amazon EC2 Auto Scaling" },
        { id: "C", text: "Amazon Forecast" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand."
    },
    {
      id: 18,
      text: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
      options: [
        { id: "A", text: "Amazon VPC peering" },
        { id: "B", text: "AWS Direct Connect" },
        { id: "C", text: "AWS VPN" },
        { id: "D", text: "Amazon Pinpoint" }
      ],
      correctAnswer: "C",
      explanation: "AWS VPN lets you establish a secure and private encrypted connection between your network and AWS over the public internet."
    },
    {
      id: 19,
      text: "Which tool is used to forecast AWS spending?",
      options: [
        { id: "A", text: "AWS Trusted Advisor" },
        { id: "B", text: "AWS Organizations" },
        { id: "C", text: "Cost Explorer" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "C",
      explanation: "Cost Explorer helps you visualize, understand, and manage your AWS costs and usage over time and provides forecasting capabilities."
    },
    {
      id: 20,
      text: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
      options: [
        { id: "A", text: "Amazon ElastiCache" },
        { id: "B", text: "Amazon CloudFront" },
        { id: "C", text: "Amazon Elastic File System (Amazon EFS)" },
        { id: "D", text: "Amazon Elastic Block Store (Amazon EBS)" }
      ],
      correctAnswer: "B",
      explanation: "Amazon CloudFront is a content delivery network that caches content at edge locations around the world to reduce latency."
    },
    {
      id: 21,
      text: "Which of the following is a component of the AWS Global Infrastructure?",
      options: [
        { id: "A", text: "Amazon Alexa" },
        { id: "B", text: "AWS Regions" },
        { id: "C", text: "Amazon Lightsail" },
        { id: "D", text: "AWS Organizations" }
      ],
      correctAnswer: "B",
      explanation: "AWS Regions are key components of the AWS Global Infrastructure, consisting of multiple Availability Zones."
    },
    {
      id: 22,
      text: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
      options: [
        { id: "A", text: "Amazon CloudWatch" },
        { id: "B", text: "AWS Config" },
        { id: "C", text: "AWS CloudTrail" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "A",
      explanation: "Amazon CloudWatch monitors resources and applications, providing metrics such as CPU utilization for EC2 instances."
    },
    {
      id: 23,
      text: "Why is it beneficial to use Elastic Load Balancers with applications?",
      options: [
        { id: "A", text: "They allow for the conversion from Application Load Balancers to Classic Load Balancers." },
        { id: "B", text: "They are capable of handling constant changes in network traffic patterns." },
        { id: "C", text: "They automatically adjust capacity." },
        { id: "D", text: "They are provided at no charge to users." }
      ],
      correctAnswer: "B",
      explanation: "Elastic Load Balancers distribute incoming application traffic across multiple targets to handle varying traffic patterns."
    },
    {
      id: 24,
      text: "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
      options: [
        { id: "A", text: "Infrastructure facilities access management" },
        { id: "B", text: "Cloud infrastructure hardware lifecycle management" },
        { id: "C", text: "Configuration management of user's applications" },
        { id: "D", text: "Networking infrastructure protection" },
        { id: "E", text: "Security groups configuration" }
      ],
      correctAnswer: "C,E",
      explanation: "Customers are responsible for security 'in' the cloud, including application configuration (C) and security group settings (E)."
    },
    {
      id: 25,
      text: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
      options: [
        { id: "A", text: "Scalability" },
        { id: "B", text: "Loose coupling" },
        { id: "C", text: "Automation" },
        { id: "D", text: "Automatic scaling" }
      ],
      correctAnswer: "B",
      explanation: "Loose coupling reduces interdependencies between components, enhancing resilience to failures."
    },
    {
      id: 26,
      text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
      options: [
        { id: "A", text: "AWS WAF" },
        { id: "B", text: "AWS Trusted Advisor" },
        { id: "C", text: "AWS Direct Connect" },
        { id: "D", text: "AWS Organizations" },
        { id: "E", text: "Network ACLs" }
      ],
      correctAnswer: "A,E",
      explanation: "AWS WAF (A) lets you monitor web requests and block specific IP ranges, while Network ACLs (E) act as firewalls at the subnet level."
    },
    {
      id: 27,
      text: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
      options: [
        { id: "A", text: "Amazon EBS" },
        { id: "B", text: "Amazon EFS" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "AWS Artifact" }
      ],
      correctAnswer: "B",
      explanation: "Amazon EFS provides scalable file storage that can be accessed concurrently by multiple EC2 instances."
    },
    {
      id: 28,
      text: "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
      options: [
        { id: "A", text: "Running a virus scan on EC2 instances" },
        { id: "B", text: "Protecting against IP spoofing and packet sniffing" },
        { id: "C", text: "Installing the latest security patches on the RDS instance" },
        { id: "D", text: "Encrypting communication between the EC2 instances and the Elastic Load Balancer" },
        { id: "E", text: "Configuring a security group and a network access control list (NACL) for EC2" }
      ],
      correctAnswer: "B,C",
      explanation: "AWS handles network security (B) and patching for managed services like RDS (C)."
    },
    {
      id: 29,
      text: "What is the benefit of elasticity in the AWS Cloud?",
      options: [
        { id: "A", text: "Ensure web traffic is automatically spread across multiple AWS Regions." },
        { id: "B", text: "Minimize storage costs by automatically archiving log data." },
        { id: "C", text: "Enable AWS to automatically select the most cost-effective services." },
        { id: "D", text: "Automatically adjust the required compute capacity to maintain consistent performance." }
      ],
      correctAnswer: "D",
      explanation: "Elasticity allows automatic adjustment of resources to maintain performance as demand changes."
    },
    {
      id: 30,
      text: "The continual reduction of AWS Cloud pricing is due to:",
      options: [
        { id: "A", text: "pay-as-you go pricing" },
        { id: "B", text: "the AWS global infrastructure" },
        { id: "C", text: "economies of scale" },
        { id: "D", text: "reserved storage pricing" }
      ],
      correctAnswer: "C",
      explanation: "AWS passes on savings from economies of scale to customers through lower prices as their customer base grows."
    },
    {
      id: 31,
      text: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
      options: [
        { id: "A", text: "Enable S3 Block Public Access from the AWS Management Console." },
        { id: "B", text: "Hold a team meeting to discuss the importance if only uploading private S3 objects." },
        { id: "C", text: "Require all S3 objects to be manually approved before uploading." },
        { id: "D", text: "Create a service to monitor all S3 uploads and remove any public uploads." }
      ],
      correctAnswer: "A",
      explanation: "S3 Block Public Access prevents public access to objects regardless of bucket policies or object permissions."
    },
    {
      id: 32,
      text: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
      options: [
        { id: "A", text: "Open a detailed case related to billing and submit it to AWS Support for help." },
        { id: "B", text: "Upload data describing the issue to a new object in a private Amazon S3 bucket." },
        { id: "C", text: "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information." },
        { id: "D", text: "Proceed with creating a new dashboard in Amazon QuickSight." }
      ],
      correctAnswer: "A",
      explanation: "AWS Support can help resolve billing issues when contacted through the support portal."
    },
    {
      id: 33,
      text: "What does the AWS Simple Monthly Calculator do?",
      options: [
        { id: "A", text: "Compares on-premises costs to colocation environments" },
        { id: "B", text: "Estimates monthly billing based on projected usage" },
        { id: "C", text: "Estimates power consumption at existing data centers" },
        { id: "D", text: "Estimates CPU utilization" }
      ],
      correctAnswer: "B",
      explanation: "The AWS Simple Monthly Calculator helps estimate monthly AWS costs based on projected service usage."
    },
    {
      id: 34,
      text: "Who is responsible for patching the guest operating system for Amazon RDS?",
      options: [
        { id: "A", text: "The AWS Product team" },
        { id: "B", text: "The customer Database Administrator" },
        { id: "C", text: "Managed partners" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "A",
      explanation: "For Amazon RDS, AWS handles operating system patching as part of the managed database service."
    },
    {
      id: 35,
      text: "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
      options: [
        { id: "A", text: "Amazon EC2" },
        { id: "B", text: "Amazon DynamoDB" },
        { id: "C", text: "Amazon S3" },
        { id: "D", text: "Amazon Route 53" },
        { id: "E", text: "Amazon Redshift" }
      ],
      correctAnswer: "A,B",
      explanation: "AWS Auto Scaling can adjust capacity for EC2 instances (A) and DynamoDB tables (B) based on demand."
    },
    {
      id: 36,
      text: "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
      options: [
        { id: "A", text: "Reduced cost to run services on AWS" },
        { id: "B", text: "Improved availability of applications deployed on AWS" },
        { id: "C", text: "Higher durability of data stored on AWS" },
        { id: "D", text: "Decreased latency to reach applications deployed on AWS" },
        { id: "E", text: "Higher security of data stored on AWS" }
      ],
      correctAnswer: "B,D",
      explanation: "AWS Global Accelerator improves application availability (B) and reduces latency (D) by routing traffic through the AWS global network."
    },
    {
      id: 37,
      text: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
      options: [
        { id: "A", text: "the AWS Support forum" },
        { id: "B", text: "AWS Abuse" },
        { id: "C", text: "an AWS Solutions Architect" },
        { id: "D", text: "AWS Support" }
      ],
      correctAnswer: "D",
      explanation: "AWS Support handles account and billing inquiries, including account reactivation."
    },
    {
      id: 38,
      text: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
      options: [
        { id: "A", text: "Provision capacity based on past usage and theoretical peaks" },
        { id: "B", text: "Dynamically and predictively scale to meet usage demands" },
        { id: "C", text: "Build the application and infrastructure in a data center that grants physical access" },
        { id: "D", text: "Break apart the application into loosely coupled components" }
      ],
      correctAnswer: "B",
      explanation: "Dynamically scaling resources based on demand leverages the cloud's elasticity to optimize performance and cost."
    },
    {
      id: 39,
      text: "Which method helps to optimize costs of users moving to the AWS Cloud?",
      options: [
        { id: "A", text: "Paying only for what is used" },
        { id: "B", text: "Purchasing hardware before it is needed" },
        { id: "C", text: "Manually provisioning cloud resources" },
        { id: "D", text: "Purchasing for the maximum possible load" }
      ],
      correctAnswer: "A",
      explanation: "The pay-as-you-go model allows customers to pay only for the resources they actually use, optimizing costs."
    },
    {
      id: 40,
      text: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
      options: [
        { id: "A", text: "Installing security patches for the Xen and KVM hypervisors" },
        { id: "B", text: "Installing operating system patches for Amazon DynamoDB" },
        { id: "C", text: "Installing operating system security patches for Amazon EC2 database instances" },
        { id: "D", text: "Installing operating system security patches for Amazon RDS database instances" }
      ],
      correctAnswer: "C",
      explanation: "Customers are responsible for patching the operating systems on EC2 instances, while AWS handles patching for managed services like RDS and DynamoDB."
    },
    {
      id: 41,
      text: "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
      options: [
        { id: "A", text: "Terminate all AWS resources automatically if budget thresholds are exceeded." },
        { id: "B", text: "Break down AWS costs by day, service, and linked AWS account." },
        { id: "C", text: "Create budgets and receive notifications if current of forecasted usage exceeds the budgets." },
        { id: "D", text: "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective." },
        { id: "E", text: "Move data stored in Amazon S3 to a more cost-effective storage class." }
      ],
      correctAnswer: "B,C",
      explanation: "AWS Cost Management tools let you analyze costs by various dimensions (B) and set up budgets with notifications (C)."
    },
    {
      id: 42,
      text: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
      options: [
        { id: "A", text: "AWS Support" },
        { id: "B", text: "the customer" },
        { id: "C", text: "AWS Systems Manager" },
        { id: "D", text: "AWS Config" }
      ],
      correctAnswer: "B",
      explanation: "Customers are responsible for security 'in' the cloud, including guest operating system patching."
    },
    {
      id: 43,
      text: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
      options: [
        { id: "A", text: "AWS Direct Connect" },
        { id: "B", text: "Amazon Connect" },
        { id: "C", text: "AWS Identity and Access Management (IAM)" },
        { id: "D", text: "AWS Firewall Manager" }
      ],
      correctAnswer: "C",
      explanation: "AWS IAM enables you to securely control access to AWS services and resources at no additional charge."
    },
    {
      id: 44,
      text: "Which AWS service provides on-demand of AWS security and compliance documentation?",
      options: [
        { id: "A", text: "AWS Directory Service" },
        { id: "B", text: "AWS Artifact" },
        { id: "C", text: "AWS Trusted Advisor" },
        { id: "D", text: "Amazon Inspector" }
      ],
      correctAnswer: "B",
      explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements."
    },
    {
      id: 45,
      text: "Which AWS service can be used to turn text into life-like speech?",
      options: [
        { id: "A", text: "Amazon Polly" },
        { id: "B", text: "Amazon Transcribe" },
        { id: "C", text: "Amazon Rekognition" },
        { id: "D", text: "Amazon Lex" }
      ],
      correctAnswer: "A",
      explanation: "Amazon Polly is a service that turns text into lifelike speech, allowing applications to talk naturally."
    },
    {
      id: 46,
      text: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
      options: [
        { id: "A", text: "Design using a serverless architecture" },
        { id: "B", text: "Assume that all components within an application can fail" },
        { id: "C", text: "Design AWS Auto Scaling into every application" },
        { id: "D", text: "Design all components using open-source code" }
      ],
      correctAnswer: "B",
      explanation: "Designing for failure by assuming all components can fail is a core principle of high availability in the cloud."
    },
    {
      id: 47,
      text: "A user needs to generate a report that outlines the status of key security checks in an AWS account including Amazon S3 bucket permissions, MFA status for the root user, and security group configurations. Where can all this information be found in one location?",
      options: [
        { id: "A", text: "Amazon QuickSight dashboard" },
        { id: "B", text: "AWS CloudTrail trails" },
        { id: "C", text: "AWS Trusted Advisor report" },
        { id: "D", text: "IAM credential report" }
      ],
      correctAnswer: "C",
      explanation: "AWS Trusted Advisor provides recommendations across multiple categories including security status checks."
    },
    {
      id: 48,
      text: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
      options: [
        { id: "A", text: "Dedicated Hosts" },
        { id: "B", text: "On-Demand Instances" },
        { id: "C", text: "Spot Instances" },
        { id: "D", text: "Reserved Instances" }
      ],
      correctAnswer: "A",
      explanation: "EC2 Dedicated Hosts provide visibility of the underlying physical cores for software licensing purposes."
    },
    {
      id: 49,
      text: "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
      options: [
        { id: "A", text: "AWS Regions" },
        { id: "B", text: "Availability Zones" },
        { id: "C", text: "Edge locations" },
        { id: "D", text: "Data centers" }
      ],
      correctAnswer: "C",
      explanation: "Edge locations are used by services like CloudFront to cache content closer to end users for faster delivery."
    },
    {
      id: 50,
      text: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
      options: [
        { id: "A", text: "Security" },
        { id: "B", text: "Operational excellence" },
        { id: "C", text: "Performance efficiency" },
        { id: "D", text: "Cost optimization" }
      ],
      correctAnswer: "A",
      explanation: "Security is the pillar that focuses on protecting information and systems, including tracking configuration changes."
    }
  ]
};

export const quizzes = [awsCloudPractitionerQuiz, awsCloudPractitionerQuiz2, awsCloudPractitionerQuiz3];

