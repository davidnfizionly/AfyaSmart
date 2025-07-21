# 🩺 AfyaSmart – AI Health Symptom Checker

AfyaSmart is an AI-powered health assistant that analyzes user-described symptoms and provides intelligent suggestions including possible conditions, severity level, and next steps. Fully serverless and optimized for AWS Free Tier.

---

🌐 **Live Demo**  
🧪 Launch the App *(after deploying to S3)*

---

📦 **Project Type**  
AI-Powered Static Web App – Serverless symptom analysis using OpenAI via AWS Lambda

---

🛠️ **Technologies Used**

- **React (Vite)** – Frontend interface for chat and diagnosis summary
- **AWS Lambda** – Backend logic to handle symptom input and interact with OpenAI
- **Amazon API Gateway** – Public REST API to connect UI and Lambda
- **Amazon S3** – Static hosting for the frontend
- **OpenAI API (GPT-4)** – Analyze symptoms and return health suggestions
- **CloudWatch** – Logs for Lambda execution
- **(Optional)**: DynamoDB – Store session history
- **(Planned)**: Cognito, SES – User login and email notifications

---

📸 **Key Features**

- Chat-based symptom input interface
- Diagnosis generated via GPT-4 based on symptoms
- Health recommendations and next steps
- Navigation to “Detailed Diagnosis” page
- Responsive, modern UI built with Vite
- Works entirely within AWS Free Tier

---

🧠 **Architecture Overview**

```
[ User Browser ]
       ↓
[ HTML/React UI (S3) ]
       ↓
[ API Gateway (REST) ]
       ↓
[ Lambda Function (analyzeSymptoms) ]
       ↓
[ OpenAI API (GPT-4) ]
       ↓
[ Response → Frontend ]
```

---

🚀 **Deployment Flow**

**Frontend (/afyasmart)**:
- Build with `npm run build`
- Upload `/dist` folder to an S3 bucket
- Enable static website hosting and public read access

**Backend (/backend/analyzeSymptoms)**:
- Zip code and dependencies
- Upload to Lambda function
- Expose via API Gateway

---

✅ **Steps Completed**

| Task                            | Status     |
|----------------------------------|------------|
| UI Design and Cleanup            | ✅ Done    |
| Lambda Function (analyzeSymptoms)| ✅ Done    |
| Connect to OpenAI API            | ✅ Done    |
| Setup API Gateway                | ✅ Done    |
| Deploy UI to S3                  | ✅ Done    |
| Test Full Workflow               | ✅ Done    |
| Document the Project             | ✅ Done    |
| Final Cleanup (Post-project)     | 🔄 In Progress |

---

🧹 **AWS Cleanup Guide**

To avoid Free Tier charges, you may delete:

- ✅ Lambda function `analyzeSymptoms`
- ✅ API Gateway endpoint
- ✅ S3 bucket (after backups)
- ✅ CloudWatch Log Groups
- ✅ IAM roles created during the project

---

🧪 **Troubleshooting Tips**

- ❗ *No response from Lambda?* Check API Gateway and CORS settings.
- ❗ *403 Error on S3?* Ensure bucket policy allows public read access.
- ❗ *GPT-4 not responding?* Verify your `OPENAI_API_KEY` in Lambda env variables.

---

🙌 **Acknowledgments**

Built by David Nfizi as part of an AWS Cloud Engineering portfolio.  
This project demonstrates real-world serverless AI integration using AWS + OpenAI.