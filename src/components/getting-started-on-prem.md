---
title: Getting Started with On-Prem
description: How to guide to On-Prem
---

Brisk provides an on-premises solution for teams who wish to host their own environment. This guide will walk you through the steps to get started with Brisk on-prem.

# Getting Started with On-Prem

## Prerequisites

Brisk is designed to work with AWS.

For best results, we recommend starting with an empty AWS VPC.

## Step one

### Create a new VPC

Create a new VPC in AWS. We recommend using the default VPC settings.

### Create permanent subnets

Create two permanent subnets in your VPC. Create one as a private subnet and one as a public subnet.

### Create a new RDS instance

Create a new RDS instance in AWS. We recommend using the default RDS settings. Place it in the same VPC as the one you created in the previous step, but in the private subnet.

### Register a domain name and create a hosted zone

Register a domain name and create a hosted zone in Route53. This will be the domain name that you will use to access Brisk. As part of the setup we will add additional entries to this zone.

### Create a keypair in AWS

Download the keypair that you created in AWS. You will need this to SSH into the EC2 instance that you will create in the next step should you need to troubleshoot.

### Install nomad locally

Install nomad locally. You can find the installation instructions [here](https://www.nomadproject.io/downloads).

## Step two

### Download the terraform configuration

Download the terraform configuration contact us at <support@brisktest.com> for access.

### Configure the terraform configuration

Open the terraform configuration in your favorite text editor. Configure the variables file with your AWS credentials and the domain name that you registered in the previous step. Also your RDS instance details and vpc CIDR.

### Run terraform

Run terraform init to initialize the terraform configuration.

### Run the altogether.sh script

Run the altogether.sh script. This will run nomad to install all of the brisk services.

## Step three

### Check The Setup

Once the setup is complete, you can check the setup by visiting the domain name that you registered in the previous step. You should see the Brisk login page.

### Create an admin user

Create an admin user by logging in to the console via the nomad UI.
Use the following command after exec'ing the api container.

```shellscript
rails c
```

and then in the rails console run the following command

```ruby
Use.find_by_email("youremail@email.com").first.update_attribute(:admin, true)
```

### Login to The Brisk Admin Console

Go to the domain name that you registered in the previous step and login to the Brisk admin console. Add the path /admin/analytics and you should be directed to the Brisk admin console.

## Step four

### Harden The Config

You can harden the setup by preventing access to the resources by anyone outside of you VPN. You can do this by adding a security group to the loadbalancer that only allows access from your VPN. In this way no one outside of your VPN will be able to access the resources.

Your developers will need access to the VPN for them to be able to access the resources and run their tests.
