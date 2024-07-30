# Flight-Status-and-Notifications-Hack-to-hire-2024-
 The Flight Status Tracker is a comprehensive web application designed to track and notify users about the status of their flights. The application leverages multiple technologies to provide real-time flight updates, user notifications via email and SMS, and an intuitive user interface for querying flight status. 
## Setup and Installation

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```
### Prerequisites

- Python 3.7 or above
- Node.js and npm
- RabbitMQ

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/flight-status-tracker.git
    cd flight-status-tracker
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On macOS/Linux
    .\venv\Scripts\activate  # On Windows
    ```

3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Setup RabbitMQ:
    - Download and install RabbitMQ from [here](https://www.rabbitmq.com/download.html).
    - Start RabbitMQ server:
        ```bash
        rabbitmq-server
        ```

5. Run the backend server:
    ```bash
    uvicorn main:app --reload
    ```

6. Run the notification service:
    ```bash
    python Notification_service.py
    ```

### Database/Google Sheets Setup

- Ensure your Google Sheets API credentials are correctly set up in `credentials.json`.
- Flight data is stored in the following Google Sheet: [Flight Data](https://docs.google.com/spreadsheets/d/1laHvbrccUX7sIO0ireJ83xcUX3otTzCyiRJyysQ5z1Q/edit?gid=1244431764#gid=1244431764).
- User data for notifications is stored in the following Google Sheet: [User Data](https://docs.google.com/spreadsheets/d/1RrdpN1s8xLxk65atchfg3NIhg5hgDzQw7EuJL9H0Q0g/edit?gid=0#gid=0).

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```
### Important Note

To send notifications and updates, make changes to the `status` field in the flight data Google Sheet. These changes will trigger the notification service to notify users automatically.

### Usage
- Open your browser and navigate to `http://localhost:3000`.
- Enter the flight ID to get the status and other details.
