# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

RUN apt-get update && apt-get install -y libpq-dev
# Copy the requirements file to the container
COPY requirements.txt /app/

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install pip
RUN djangorestframework-simplejwt

# Install allauth
RUN django-allauth = {extras = ["socialaccount"]
# Upgrage pip
RUN pip install --upgrade pip

# Copy the rest of the application files to the container
COPY . /app/

# Install pipenv and project dependencies
RUN pip install pipenv
RUN pipenv install --system --deploy
# Expose the port on which Django runs (default is 8000)
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
